import { ExamAttemptRecord, Flashcard, VideoLesson } from '../types';
import { getDefaultDriveLinksMap, GHOST_YOUTUBE_PLAYLISTS } from '../data/driveLinksData';

const STORAGE_KEYS = {
  DRIVE_LINKS: 'sol_study_drive_links',
  YOUTUBE_PLAYLISTS: 'sol_study_youtube_playlists',
  CUSTOM_VIDEOS: 'sol_study_custom_videos',
  COMPLETED_TOPICS: 'sol_study_completed_topics',
  FLASHCARDS_MASTERED: 'sol_study_flashcards_mastered',
  CUSTOM_FLASHCARDS: 'sol_study_custom_flashcards',
  EXAM_ATTEMPTS: 'sol_study_exam_attempts',
  NOTES: 'sol_study_subject_notes',
  STUDENT_NAME: 'sol_study_student_name'
};

export const DEFAULT_STUDENT_NAME = 'Sol Mariana';

export function getStudentName(): string {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STUDENT_NAME);
    if (raw && raw.trim()) {
      return raw.trim();
    }
    return DEFAULT_STUDENT_NAME;
  } catch {
    return DEFAULT_STUDENT_NAME;
  }
}

export function saveStudentName(name: string): void {
  try {
    const trimmed = name.trim();
    if (trimmed && trimmed.toLowerCase() !== DEFAULT_STUDENT_NAME.toLowerCase()) {
      localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, trimmed);
    } else {
      localStorage.removeItem(STORAGE_KEYS.STUDENT_NAME);
    }
  } catch {
    // Ignore storage errors
  }
}

export function getDriveLinks(): { [subjectId: string]: string } {
  const defaults = getDefaultDriveLinksMap();
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DRIVE_LINKS);
    if (raw) {
      const parsed = JSON.parse(raw);
      const merged: { [subjectId: string]: string } = { ...defaults };
      for (const [k, v] of Object.entries(parsed)) {
        if (typeof v === 'string' && v.trim() && !v.includes('1-SOL-') && !v.includes('ejemplo-')) {
          merged[k] = v;
        }
      }
      return merged;
    }
    return defaults;
  } catch {
    return defaults;
  }
}

export function saveDriveLink(subjectId: string, url: string): void {
  const current = getDriveLinks();
  current[subjectId] = url;
  localStorage.setItem(STORAGE_KEYS.DRIVE_LINKS, JSON.stringify(current));
}

export function getYoutubePlaylists(): { [subjectId: string]: string } {
  try {
    // Clear any previous custom playlists or overrides to protect the official lists
    localStorage.removeItem(STORAGE_KEYS.YOUTUBE_PLAYLISTS);
    return { ...GHOST_YOUTUBE_PLAYLISTS };
  } catch {
    return { ...GHOST_YOUTUBE_PLAYLISTS };
  }
}

export function saveYoutubePlaylist(_subjectId: string, _url: string): void {
  // Playlists are protected and immutable per requirements
}

export function getCustomVideos(): VideoLesson[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_VIDEOS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomVideo(video: VideoLesson): void {
  const current = getCustomVideos();
  const filtered = current.filter(v => v.id !== video.id);
  filtered.push(video);
  localStorage.setItem(STORAGE_KEYS.CUSTOM_VIDEOS, JSON.stringify(filtered));
}

export function getCompletedTopics(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleTopicCompletion(topicId: string): boolean {
  const list = getCompletedTopics();
  const exists = list.includes(topicId);
  const updated = exists ? list.filter(id => id !== topicId) : [...list, topicId];
  localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(updated));
  return !exists;
}

export function getMasteredFlashcards(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FLASHCARDS_MASTERED);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function setFlashcardMastered(cardId: string, mastered: boolean): void {
  const list = getMasteredFlashcards();
  const exists = list.includes(cardId);
  let updated: string[];
  if (mastered && !exists) {
    updated = [...list, cardId];
  } else if (!mastered && exists) {
    updated = list.filter(id => id !== cardId);
  } else {
    updated = list;
  }
  localStorage.setItem(STORAGE_KEYS.FLASHCARDS_MASTERED, JSON.stringify(updated));
}

export function getExamAttempts(subjectId?: string): ExamAttemptRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAM_ATTEMPTS);
    const all: ExamAttemptRecord[] = raw ? JSON.parse(raw) : [];
    if (subjectId) {
      return all.filter(a => a.subjectId === subjectId);
    }
    return all;
  } catch {
    return [];
  }
}

export function saveExamAttempt(attempt: ExamAttemptRecord): void {
  const all = getExamAttempts();
  all.unshift(attempt); // newest first
  localStorage.setItem(STORAGE_KEYS.EXAM_ATTEMPTS, JSON.stringify(all));
}

export function getSubjectNotes(subjectId: string): string {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.NOTES}_${subjectId}`);
    return raw || '';
  } catch {
    return '';
  }
}

export function saveSubjectNotes(subjectId: string, notes: string): void {
  localStorage.setItem(`${STORAGE_KEYS.NOTES}_${subjectId}`, notes);
}

export function exportAllData(): string {
  const backup = {
    driveLinks: getDriveLinks(),
    playlists: getYoutubePlaylists(),
    customVideos: getCustomVideos(),
    completedTopics: getCompletedTopics(),
    masteredCards: getMasteredFlashcards(),
    examAttempts: getExamAttempts(),
    exportDate: new Date().toISOString()
  };
  return JSON.stringify(backup, null, 2);
}

export function importAllData(jsonString: string): boolean {
  try {
    const data = JSON.parse(jsonString);
    if (data.driveLinks) localStorage.setItem(STORAGE_KEYS.DRIVE_LINKS, JSON.stringify(data.driveLinks));
    if (data.playlists) localStorage.setItem(STORAGE_KEYS.YOUTUBE_PLAYLISTS, JSON.stringify(data.playlists));
    if (data.customVideos) localStorage.setItem(STORAGE_KEYS.CUSTOM_VIDEOS, JSON.stringify(data.customVideos));
    if (data.completedTopics) localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(data.completedTopics));
    if (data.masteredCards) localStorage.setItem(STORAGE_KEYS.FLASHCARDS_MASTERED, JSON.stringify(data.masteredCards));
    if (data.examAttempts) localStorage.setItem(STORAGE_KEYS.EXAM_ATTEMPTS, JSON.stringify(data.examAttempts));
    return true;
  } catch (e) {
    console.error('Failed to import backup data', e);
    return false;
  }
}
