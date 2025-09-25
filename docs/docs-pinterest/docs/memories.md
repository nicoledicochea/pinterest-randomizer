# Pinterest Randomizer - Project Memory & Progress Tracker

## Project Overview
**App Name**: MuseGrid (final choice from favorites: MuseGrid, Canvas Spark, Roam, Boardly)
**Purpose**: A personal tool to help find drawing inspiration from Pinterest boards by randomly selecting images instead of manually scrolling through hundreds of pins.

**Core MVP Functionality**:
- Landing page explaining the app
- User enters Pinterest username (no account connection needed)
- Display that user's public Pinterest boards
- Let user select a single board
- Randomly select and display one image from that board for drawing inspiration

## Technical Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Backend**: Node.js + Express.js
- **API**: Pinterest API v5 (OAuth 2.0)
- **Deployment**: Netlify (musegrid.netlify.app)

## User Flow & Implementation Plan

### **Refined User Experience:**
1. **Landing Page** → User learns about MuseGrid
2. **Username Input** → User enters any Pinterest username (no login required)
3. **Board Selection** → Display public boards for that username
4. **Image Randomization** → Select random image from chosen board
5. **Inspiration Ready** → Display image for drawing inspiration

### **Key Benefits of This Approach:**
- **No OAuth Required** → Simpler implementation, no user authentication
- **Public Data Only** → Access to any public Pinterest boards
- **Better UX** → Users can explore inspiration from any creator
- **Easier Approval** → Simpler API usage for Pinterest review

## Implementation Plan

### Phase 1: Project Setup & Pinterest API Access ✅ (Next Steps)
- [ ] Apply for Pinterest API "Trial Access" approval
- [ ] Read and understand Pinterest API Terms of Service and Developer Policy
- [ ] Create React + TypeScript project using Vite
- [ ] Install and configure Tailwind CSS
- [ ] Set up Node.js/Express server in `server` folder
- [ ] Configure environment variables for Pinterest API keys

### Phase 2: MVP Development

#### Backend (Node.js/Express)
- [ ] Create Express server entry point (`server/index.ts`)
- [ ] Create proxy endpoint for fetching public boards by username (`/users/{username}/boards`)
- [ ] Create proxy endpoint for fetching pins from selected board (`/boards/{board_id}/pins`)

#### Frontend (React + TypeScript)
- [ ] Create Username Input component (no OAuth needed)
- [ ] Build Board Selection component to display and select boards
- [ ] Develop Image Display component for random image
- [ ] Implement random image selection logic
- [ ] Add "Randomize" button functionality
- [ ] Implement caching strategy (local storage) to minimize API calls

#### Styling
- [ ] Style all components with Tailwind CSS
- [ ] Focus on clean, simple UI design

### Phase 3: Post-MVP Enhancements
- [ ] Display 5 random images at once instead of 1
- [ ] Support for multiple board selection
- [ ] Enhanced error handling and user-friendly messages
- [ ] Performance optimizations

## Key Pinterest API Endpoints
- **Get User's Public Boards**: `GET /v5/users/{username}/boards` - Lists public boards for a username
- **Get Board Pins**: `GET /v5/boards/{board_id}/pins` - Gets pins from specific board
- **Required Scopes**: `boards:read` (for public boards)

## Project Structure
```
pinterest-randomizer/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Main application pages
│   │   └── styles/        # CSS and Tailwind config
├── server/                 # Node.js backend
│   ├── routes/            # API route handlers
│   └── index.ts           # Server entry point
└── package.json            # Project dependencies
```

## Current Status
- [x] Project planning and documentation complete
- [x] Pinterest API research and endpoint mapping done
- [x] Technical architecture planned
- [x] Privacy policy content created
- [x] Basic app structure created with privacy policy page
- [x] Tailwind CSS configured and working
- [x] App builds successfully
- [ ] Ready to deploy to Netlify for Pinterest API application

## Next Immediate Actions
1. **Deploy basic app to Netlify** - Get the app URL for Pinterest application
2. **Apply for Pinterest API access** - Once app is live with privacy policy
3. **Implement Pinterest OAuth flow** - After API approval
4. **Create full project structure** following the folder structure plan
5. **Add Pinterest integration features** - Boards and pins functionality

## Notes & Decisions
- **App Name**: MuseGrid (creative and evocative, suggests inspiration and organization)
- **MVP Focus**: Single board, single random image to keep scope manageable
- **User Flow**: Username input → Board selection → Random image (no OAuth required)
- **API Approach**: Fetch public boards by username, no user authentication needed
- **Caching Strategy**: Browser local storage to reduce API calls
- **Error Handling**: User-friendly messages for API failures and invalid usernames

## Questions to Resolve
- Pinterest API approval timeline and requirements
- Can we fetch public boards by username without OAuth?
- Rate limiting considerations for Pinterest API
- Deployment strategy for both frontend and backend

---
*Last Updated: December 24, 2024*
*Project Phase: Basic App Complete - Ready for Netlify Deployment*
