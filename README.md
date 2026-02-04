# 📱 RetroSpace - Nostalgic Social Media

A complete social media application inspired by the golden age of the internet (2008-2012). Built with Next.js, TypeScript, and vanilla CSS featuring skeuomorphic design, retro aesthetics, and nostalgic vibes.

## ✨ Features

### 🎨 Nostalgic Design
- **Skeuomorphic UI** - Glossy buttons, beveled panels, and tactile elements
- **Retro Color Schemes** - 6 mood-based themes (Blue, Pink, Green, Purple, Orange, Teal)
- **Vintage Aesthetics** - Inspired by MySpace, old Facebook, MSN Messenger, and Tumblr
- **Smooth Animations** - Page transitions, hover effects, and micro-interactions

### 📔 Daily Pages System
- Post once per day with up to 3 photos
- Add text, music, and mood to each page
- Pages saved forever in your Memory Box
- Polaroid-style archive view

### 👥 Rooms (Not Followers)
- Small private groups (5-30 people)
- Chronological feeds (no algorithms!)
- Cozy group layouts

### 💬 Retro Messenger
- MSN-style chat interface
- Online/Away/Busy/Offline statuses
- Real-time messaging

### 🎭 Customizable Profiles
- Custom backgrounds and themes
- Sticker placement
- Guestbook wall (MySpace-style!)

### 📦 Memory Box
- Private scrapbook archive
- Calendar grid view
- Nostalgic presentation

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/login` | User login |
| `/register` | Multi-step registration |
| `/home` | Main feed (chronological) |
| `/daily-page` | Create daily page |
| `/rooms` | View all rooms |
| `/rooms/[id]` | Individual room |
| `/chat` | Messenger interface |
| `/profile/[username]` | User profile |
| `/memory-box` | Archive of daily pages |
| `/settings` | User settings |
| `/explore-moods` | Theme customization |

## 🎨 Design System

### Color Themes
- **Classic Blue** (#3b5998)
- **MySpace Pink** (#ff69b4)
- **Nature Green** (#5cb85c)
- **Dreamy Purple** (#9b59b6)
- **Warm Orange** (#ff8c42)
- **Retro Teal** (#17a2b8)

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (no Tailwind)
- **Data**: Mock data (easily replaceable with real backend)

---

**Built with 💖 and nostalgia for the golden age of the internet**
