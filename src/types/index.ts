// Types for the mental health app

export type Mood = 'happy' | 'calm' | 'sad' | 'anxious' | 'angry' | 'neutral';

export interface MoodEntry {
  id: string;
  mood: Mood;
  notes: string;
  date: string;
  userId: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  points: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'relaxation' | 'focus' | 'distraction' | 'mood-boosting';
}

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  topic: string;
  participants: number;
  isVoice: boolean;
}

export interface TherapySession {
  id: string;
  date: string;
  time: string;
  therapistName: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}