// Mock Data for Nostalgic Social Media App

export interface User {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  status: 'online' | 'away' | 'busy' | 'offline';
  mood: 'blue' | 'pink' | 'green' | 'purple' | 'orange' | 'teal';
  bio: string;
  customBackground?: string;
  customFont?: string;
  joinedDate: string;
}

export interface DailyPage {
  id: string;
  userId: string;
  date: string;
  text: string;
  photos: string[];
  music?: {
    title: string;
    artist: string;
    url: string;
  };
  mood: string;
  moodColor: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  members: string[];
  createdBy: string;
  createdAt: string;
  avatar: string;
}

export interface Post {
  id: string;
  userId: string;
  roomId?: string;
  content: string;
  images?: string[];
  timestamp: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  fromUserId: string;
  toUserId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Mood {
  id: string;
  name: string;
  color: string;
  emoji: string;
  description: string;
}

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'sarah_2010',
    displayName: 'Sarah ✨',
    avatar: '/avatars/sarah.jpg',
    status: 'online',
    mood: 'pink',
    bio: '🌸 living my best life | music lover | coffee addict ☕',
    customBackground: 'linear-gradient(135deg, #ffd1dc 0%, #ffb6c1 100%)',
    joinedDate: '2010-03-15'
  },
  {
    id: '2',
    username: 'mike_rocks',
    displayName: 'Mike 🎸',
    avatar: '/avatars/mike.jpg',
    status: 'away',
    mood: 'blue',
    bio: 'Rock music enthusiast | Gamer | Night owl 🦉',
    joinedDate: '2009-11-20'
  },
  {
    id: '3',
    username: 'emma_sunshine',
    displayName: 'Emma ☀️',
    avatar: '/avatars/emma.jpg',
    status: 'online',
    mood: 'orange',
    bio: 'Spreading positivity ✌️ | Photography | Travel',
    customBackground: 'linear-gradient(135deg, #fff5e6 0%, #ffe0b3 100%)',
    joinedDate: '2010-01-08'
  },
  {
    id: '4',
    username: 'alex_gamer',
    displayName: 'Alex 🎮',
    avatar: '/avatars/alex.jpg',
    status: 'busy',
    mood: 'purple',
    bio: 'Pro gamer | Streamer | Pizza lover 🍕',
    joinedDate: '2009-08-12'
  },
  {
    id: '5',
    username: 'lily_artist',
    displayName: 'Lily 🎨',
    avatar: '/avatars/lily.jpg',
    status: 'online',
    mood: 'green',
    bio: 'Digital artist | Nature lover | Tea enthusiast 🍵',
    customBackground: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
    joinedDate: '2010-05-22'
  },
  {
    id: '6',
    username: 'jake_skater',
    displayName: 'Jake 🛹',
    avatar: '/avatars/jake.jpg',
    status: 'online',
    mood: 'teal',
    bio: 'Skater boy | Punk rock | Living on the edge',
    joinedDate: '2009-12-03'
  },
  {
    id: '7',
    username: 'mia_bookworm',
    displayName: 'Mia 📚',
    avatar: '/avatars/mia.jpg',
    status: 'offline',
    mood: 'purple',
    bio: 'Bookworm | Writer | Cat mom 🐱',
    joinedDate: '2010-02-14'
  },
  {
    id: '8',
    username: 'ryan_fitness',
    displayName: 'Ryan 💪',
    avatar: '/avatars/ryan.jpg',
    status: 'away',
    mood: 'orange',
    bio: 'Fitness coach | Healthy living | Early bird',
    joinedDate: '2009-09-30'
  }
];

// Mock Daily Pages
export const mockDailyPages: DailyPage[] = [
  {
    id: 'dp1',
    userId: '1',
    date: '2024-02-03',
    text: 'Had the most amazing day at the beach! The sunset was absolutely gorgeous 🌅',
    photos: ['/daily/beach1.jpg', '/daily/beach2.jpg'],
    music: {
      title: 'Ocean Eyes',
      artist: 'Billie Eilish',
      url: '#'
    },
    mood: 'Happy',
    moodColor: '#FFD700'
  },
  {
    id: 'dp2',
    userId: '2',
    date: '2024-02-03',
    text: 'New guitar day! Finally got my hands on that vintage Stratocaster 🎸',
    photos: ['/daily/guitar.jpg'],
    music: {
      title: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      url: '#'
    },
    mood: 'Excited',
    moodColor: '#FF6B6B'
  },
  {
    id: 'dp3',
    userId: '3',
    date: '2024-02-02',
    text: 'Coffee and photography - my two favorite things combined ☕📷',
    photos: ['/daily/coffee.jpg', '/daily/camera.jpg', '/daily/street.jpg'],
    mood: 'Inspired',
    moodColor: '#9B59B6'
  },
  {
    id: 'dp4',
    userId: '4',
    date: '2024-02-02',
    text: 'Just hit Diamond rank! All those late nights finally paid off 🎮',
    photos: ['/daily/gaming.jpg'],
    music: {
      title: 'Harder Better Faster Stronger',
      artist: 'Daft Punk',
      url: '#'
    },
    mood: 'Accomplished',
    moodColor: '#3498DB'
  },
  {
    id: 'dp5',
    userId: '5',
    date: '2024-02-01',
    text: 'Finished my latest digital painting! Nature always inspires me 🌿',
    photos: ['/daily/art1.jpg', '/daily/art2.jpg'],
    mood: 'Creative',
    moodColor: '#2ECC71'
  }
];

// Mock Rooms
export const mockRooms: Room[] = [
  {
    id: 'r1',
    name: '🎵 Music Lovers',
    description: 'Share your favorite songs and discover new music!',
    members: ['1', '2', '6'],
    createdBy: '2',
    createdAt: '2010-01-15',
    avatar: '/rooms/music.jpg'
  },
  {
    id: 'r2',
    name: '🎮 Gaming Squad',
    description: 'For all the gamers out there!',
    members: ['2', '4', '6', '8'],
    createdBy: '4',
    createdAt: '2009-11-20',
    avatar: '/rooms/gaming.jpg'
  },
  {
    id: 'r3',
    name: '🎨 Creative Corner',
    description: 'Artists, photographers, and creators unite!',
    members: ['1', '3', '5', '7'],
    createdBy: '5',
    createdAt: '2010-03-10',
    avatar: '/rooms/art.jpg'
  },
  {
    id: 'r4',
    name: '☕ Coffee Club',
    description: 'Coffee enthusiasts welcome!',
    members: ['1', '3', '7'],
    createdBy: '3',
    createdAt: '2010-02-05',
    avatar: '/rooms/coffee.jpg'
  },
  {
    id: 'r5',
    name: '🌍 Travel Buddies',
    description: 'Share your adventures and travel stories',
    members: ['1', '3', '5', '6', '8'],
    createdBy: '3',
    createdAt: '2009-12-12',
    avatar: '/rooms/travel.jpg'
  },
  {
    id: 'r6',
    name: '📚 Book Club',
    description: 'Discuss your favorite books and authors',
    members: ['1', '5', '7'],
    createdBy: '7',
    createdAt: '2010-04-01',
    avatar: '/rooms/books.jpg'
  }
];

// Mock Posts
export const mockPosts: Post[] = [
  {
    id: 'p1',
    userId: '1',
    roomId: 'r1',
    content: 'Just discovered this amazing indie band! Their sound is so nostalgic 🎵',
    timestamp: '2024-02-03T14:30:00Z',
    likes: 12,
    comments: [
      {
        id: 'c1',
        userId: '2',
        content: 'Ooh, what\'s the band name?',
        timestamp: '2024-02-03T14:35:00Z'
      },
      {
        id: 'c2',
        userId: '6',
        content: 'I love finding new music! Share the link!',
        timestamp: '2024-02-03T14:40:00Z'
      }
    ]
  },
  {
    id: 'p2',
    userId: '4',
    roomId: 'r2',
    content: 'Anyone up for a gaming session tonight? 🎮',
    images: ['/posts/gaming-setup.jpg'],
    timestamp: '2024-02-03T16:00:00Z',
    likes: 8,
    comments: [
      {
        id: 'c3',
        userId: '2',
        content: 'I\'m in! What time?',
        timestamp: '2024-02-03T16:05:00Z'
      }
    ]
  },
  {
    id: 'p3',
    userId: '5',
    roomId: 'r3',
    content: 'Working on a new digital painting series inspired by vintage postcards 🎨',
    images: ['/posts/art-wip.jpg'],
    timestamp: '2024-02-03T11:20:00Z',
    likes: 15,
    comments: []
  },
  {
    id: 'p4',
    userId: '3',
    roomId: 'r4',
    content: 'Found this cozy little café downtown. Best latte I\'ve had in ages! ☕',
    images: ['/posts/cafe.jpg', '/posts/latte.jpg'],
    timestamp: '2024-02-03T09:15:00Z',
    likes: 10,
    comments: [
      {
        id: 'c4',
        userId: '1',
        content: 'Omg we need to go there together!',
        timestamp: '2024-02-03T09:30:00Z'
      }
    ]
  },
  {
    id: 'p5',
    userId: '6',
    roomId: 'r1',
    content: 'Throwback to when pop-punk ruled the airwaves 🎸',
    timestamp: '2024-02-02T20:00:00Z',
    likes: 18,
    comments: []
  }
];

// Mock Chat Messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: 'msg1',
    fromUserId: '1',
    toUserId: '3',
    content: 'Hey! Are you free this weekend?',
    timestamp: '2024-02-03T15:30:00Z',
    read: true
  },
  {
    id: 'msg2',
    fromUserId: '3',
    toUserId: '1',
    content: 'Yeah! What did you have in mind?',
    timestamp: '2024-02-03T15:32:00Z',
    read: true
  },
  {
    id: 'msg3',
    fromUserId: '1',
    toUserId: '3',
    content: 'Want to check out that new café I posted about?',
    timestamp: '2024-02-03T15:33:00Z',
    read: true
  },
  {
    id: 'msg4',
    fromUserId: '2',
    toUserId: '4',
    content: 'Dude, ready for tonight\'s gaming session?',
    timestamp: '2024-02-03T16:30:00Z',
    read: false
  },
  {
    id: 'msg5',
    fromUserId: '5',
    toUserId: '1',
    content: 'Love your latest daily page! The beach photos are stunning 🌊',
    timestamp: '2024-02-03T13:00:00Z',
    read: true
  }
];

// Mock Moods
export const mockMoods: Mood[] = [
  {
    id: 'blue',
    name: 'Classic Blue',
    color: '#3b5998',
    emoji: '💙',
    description: 'The original social media vibe'
  },
  {
    id: 'pink',
    name: 'MySpace Pink',
    color: '#ff69b4',
    emoji: '💖',
    description: 'Sweet and nostalgic'
  },
  {
    id: 'green',
    name: 'Nature Green',
    color: '#5cb85c',
    emoji: '💚',
    description: 'Fresh and calming'
  },
  {
    id: 'purple',
    name: 'Dreamy Purple',
    color: '#9b59b6',
    emoji: '💜',
    description: 'Creative and mysterious'
  },
  {
    id: 'orange',
    name: 'Warm Orange',
    color: '#ff8c42',
    emoji: '🧡',
    description: 'Energetic and friendly'
  },
  {
    id: 'teal',
    name: 'Retro Teal',
    color: '#17a2b8',
    emoji: '💎',
    description: 'Cool and vintage'
  }
];

// Helper function to get user by ID
export const getUserById = (id: string): User | undefined => {
  return mockUsers.find(user => user.id === id);
};

// Helper function to get room by ID
export const getRoomById = (id: string): Room | undefined => {
  return mockRooms.find(room => room.id === id);
};

// Helper function to get posts by room ID
export const getPostsByRoomId = (roomId: string): Post[] => {
  return mockPosts.filter(post => post.roomId === roomId);
};

// Helper function to get daily pages by user ID
export const getDailyPagesByUserId = (userId: string): DailyPage[] => {
  return mockDailyPages.filter(page => page.userId === userId);
};

// Helper function to get chat messages between two users
export const getChatMessages = (userId1: string, userId2: string): ChatMessage[] => {
  return mockChatMessages.filter(
    msg => 
      (msg.fromUserId === userId1 && msg.toUserId === userId2) ||
      (msg.fromUserId === userId2 && msg.toUserId === userId1)
  ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
};

// Current user (for demo purposes)
export const currentUser: User = mockUsers[0];
