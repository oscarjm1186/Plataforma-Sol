import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number; // depth layer: 1 (far), 2 (mid), 3 (near)
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
  hasFlare: boolean;
  flareRotation: number;
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
}

export const SpaceCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax & ambient glow
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initDust();
    };

    window.addEventListener('resize', handleResize);

    // Color palette for deep space stars
    const starColors = [
      '#ffffff', // Diamond White
      '#a6c8ff', // Ice Blue
      '#67e8f9', // Cyan
      '#fef08a', // Pale Amber
      '#c4b5fd', // Soft Violet
    ];

    let stars: Star[] = [];
    let dust: DustParticle[] = [];

    const initStars = () => {
      const starCount = Math.floor((width * height) / 4500); // responsive density
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const z = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
        const hasFlare = z === 3 && Math.random() < 0.15; // ~15% of closest stars have diffraction spikes
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const size = z === 1 ? Math.random() * 0.9 + 0.5 : z === 2 ? Math.random() * 1.3 + 0.8 : Math.random() * 1.8 + 1.2;
        const baseAlpha = Math.random() * 0.5 + 0.35;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          size,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          color,
          hasFlare,
          flareRotation: Math.random() * Math.PI,
        });
      }
    };

    const initDust = () => {
      dust = [];
      const dustCount = Math.floor((width * height) / 16000);
      for (let i = 0; i < dustCount; i++) {
        dust.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.18 + 0.05,
        });
      }
    };

    initStars();
    initDust();

    let frame = 0;

    // Render loop
    const render = () => {
      frame++;

      // Smooth mouse interpolation (damping)
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Parallax offsets
      const offsetX = (mouseX - width / 2) * 0.025;
      const offsetY = (mouseY - height / 2) * 0.025;

      // Base background color #050609
      ctx.fillStyle = '#050609';
      ctx.fillRect(0, 0, width, height);

      // 1. Soft Spiral Nebula Patches
      const neb1X = width * 0.25 + offsetX * 0.3;
      const neb1Y = height * 0.3 + offsetY * 0.3;
      const grad1 = ctx.createRadialGradient(neb1X, neb1Y, 10, neb1X, neb1Y, Math.min(width, height) * 0.45);
      grad1.addColorStop(0, 'rgba(6, 182, 212, 0.07)'); // Cyan core
      grad1.addColorStop(0.4, 'rgba(99, 102, 241, 0.04)'); // Indigo ring
      grad1.addColorStop(1, 'rgba(5, 6, 9, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const neb2X = width * 0.8 + offsetX * 0.4;
      const neb2Y = height * 0.65 + offsetY * 0.4;
      const grad2 = ctx.createRadialGradient(neb2X, neb2Y, 20, neb2X, neb2Y, Math.min(width, height) * 0.5);
      grad2.addColorStop(0, 'rgba(168, 85, 247, 0.06)'); // Soft violet
      grad2.addColorStop(0.5, 'rgba(14, 165, 233, 0.03)'); // Deep blue
      grad2.addColorStop(1, 'rgba(5, 6, 9, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Blueprint Architectural Grid with subtle parallax
      ctx.save();
      const gridSize = 64;
      const gridParallaxX = (offsetX * 0.15) % gridSize;
      const gridParallaxY = (offsetY * 0.15) % gridSize;

      ctx.strokeStyle = 'rgba(28, 45, 84, 0.18)'; // Subtle technical blueprint line
      ctx.lineWidth = 0.6;
      ctx.beginPath();

      for (let x = gridParallaxX; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = gridParallaxY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Precision technical tick crosshairs (+) at grid intersections every 4 modules
      const majorStep = gridSize * 3;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      const tickLen = 4;
      for (let x = (gridParallaxX % majorStep); x < width; x += majorStep) {
        for (let y = (gridParallaxY % majorStep); y < height; y += majorStep) {
          ctx.moveTo(x - tickLen, y);
          ctx.lineTo(x + tickLen, y);
          ctx.moveTo(x, y - tickLen);
          ctx.lineTo(x, y + tickLen);
        }
      }
      ctx.stroke();
      ctx.restore();

      // 3. Cosmic Dust Particles
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        ctx.fillStyle = `rgba(166, 185, 204, ${d.alpha})`;
        ctx.beginPath();
        ctx.arc(d.x + offsetX * 0.1, d.y + offsetY * 0.1, d.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Starfield with Twinkling & Parallax
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Twinkle oscillation
        s.alpha = s.baseAlpha + Math.sin(frame * s.twinkleSpeed + i) * 0.3;
        s.alpha = Math.max(0.1, Math.min(1, s.alpha));

        // Parallax depth factor
        const depthFactor = s.z === 1 ? 0.2 : s.z === 2 ? 0.6 : 1.1;
        const posX = (s.x + offsetX * depthFactor + width) % width;
        const posY = (s.y + offsetY * depthFactor + height) % height;

        // Draw star core
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(posX, posY, s.size, 0, Math.PI * 2);
        ctx.fill();

        // 5. Four-point diffraction spikes (Star Flares)
        if (s.hasFlare) {
          const flareLen = s.size * 9;
          const flareWidth = s.size * 0.55;

          ctx.save();
          ctx.translate(posX, posY);
          ctx.rotate(s.flareRotation);

          // Subtle halo behind flare
          const haloGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, flareLen * 0.7);
          haloGrad.addColorStop(0, 'rgba(103, 232, 249, 0.4)');
          haloGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.1)');
          haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = haloGrad;
          ctx.beginPath();
          ctx.arc(0, 0, flareLen * 0.7, 0, Math.PI * 2);
          ctx.fill();

          // 4-point cross spikes
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          
          // Horizontal spike
          ctx.beginPath();
          ctx.moveTo(-flareLen, 0);
          ctx.lineTo(0, -flareWidth);
          ctx.lineTo(flareLen, 0);
          ctx.lineTo(0, flareWidth);
          ctx.closePath();
          ctx.fill();

          // Vertical spike
          ctx.beginPath();
          ctx.moveTo(0, -flareLen);
          ctx.lineTo(-flareWidth, 0);
          ctx.lineTo(0, flareLen);
          ctx.lineTo(flareWidth, 0);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        }
      }
      ctx.globalAlpha = 1.0;

      // 6. Reactive Ambient Glow around Cursor
      const glowGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 280);
      glowGrad.addColorStop(0, 'rgba(14, 165, 233, 0.07)'); // Subtle sky-blue halo
      glowGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{ background: '#050609' }}
    />
  );
};
