import { Mood, MoodEntry, User, Badge, Game, ChatRoom, TherapySession } from '../types';

// Mock current user
export const currentUser: User = {
  id: '1',
  name: 'Alex',
  avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
  points: 125,
  badges: [
    {
      id: '1',
      name: 'Calm Champ',
      description: 'Completed 5 relaxation activities',
      image: '🧘‍♂️'
    },
    {
      id: '2',
      name: 'Social Butterfly',
      description: 'Joined 3 chat rooms',
      image: '🦋'
    }
  ]
};

// Mock mood entries
export const moodEntries: MoodEntry[] = [
  {
    id: '1',
    mood: 'happy',
    notes: 'Had a great day today. Went for a walk and met a friend.',
    date: '2025-06-01',
    userId: '1'
  },
  {
    id: '2',
    mood: 'calm',
    notes: 'Meditation session really helped me focus today.',
    date: '2025-05-31',
    userId: '1'
  },
  {
    id: '3',
    mood: 'anxious',
    notes: 'Feeling a bit overwhelmed with work deadlines.',
    date: '2025-05-30',
    userId: '1'
  },
  {
    id: '4',
    mood: 'neutral',
    notes: 'Just an ordinary day, nothing special.',
    date: '2025-05-29',
    userId: '1'
  },
  {
    id: '5',
    mood: 'sad',
    notes: 'Missing my friends today.',
    date: '2025-05-28',
    userId: '1'
  }
];

// Mock games
export const games: Game[] = [
  {
    id: '1',
    title: 'Breathing Space',
    description: 'A guided breathing exercise to help you relax and refocus.',
    imageUrl: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'relaxation'
  },
  {
    id: '2',
    title: 'Memory Match',
    description: 'Test your memory while taking your mind off anxiety.',
    imageUrl: 'https://images.pexels.com/photos/3662845/pexels-photo-3662845.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'distraction'
  },
  {
    id: '3',
    title: 'Gratitude Journal',
    description: 'Interactive journaling to focus on positive aspects of your day.',
    imageUrl: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'mood-boosting'
  },
  {
    id: '4',
    title: 'Zen Garden',
    description: 'Create a virtual zen garden to promote mindfulness.',
    imageUrl: 'https://images.pexels.com/photos/6792082/pexels-photo-6792082.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'relaxation'
  },
  {
    id: '5',
    title: 'Thought Bubbles',
    description: 'Pop negative thought bubbles to practice letting go.',
    imageUrl: 'https://images.pexels.com/photos/5546927/pexels-photo-5546927.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'focus'
  },
  {
    id: '6',
    title: 'Color Therapy',
    description: 'Express your emotions through a digital coloring book.',
    imageUrl: 'https://images.pexels.com/photos/6679523/pexels-photo-6679523.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'mood-boosting'
  }
];

// Mock chat rooms
export const chatRooms: ChatRoom[] = [
  {
    id: '1',
    name: 'Anxiety Support',
    description: 'A safe space to share anxiety experiences and coping strategies.',
    topic: 'anxiety',
    participants: 24,
    isVoice: false
  },
  {
    id: '2',
    name: 'Late Night Talks',
    description: 'Can\'t sleep? Join others for calming late-night conversations.',
    topic: 'insomnia',
    participants: 12,
    isVoice: true
  },
  {
    id: '3',
    name: 'Mindfulness Practice',
    description: 'Group mindfulness exercises and discussions.',
    topic: 'mindfulness',
    participants: 18,
    isVoice: false
  },
  {
    id: '4',
    name: 'Gaming Therapy',
    description: 'Find gaming buddies to play together and relieve stress.',
    topic: 'gaming',
    participants: 31,
    isVoice: true
  }
];

// Mock therapy sessions
export const therapySessions: TherapySession[] = [
  {
    id: '1',
    date: '2025-06-05',
    time: '10:00 AM',
    therapistName: 'Dr. Sarah Johnson',
    status: 'scheduled'
  },
  {
    id: '2',
    date: '2025-05-29',
    time: '2:30 PM',
    therapistName: 'Dr. Michael Chen',
    status: 'completed'
  }
];