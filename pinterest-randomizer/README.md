# MuseGrid - Pinterest Drawing Inspiration Randomizer

A personal tool to help find drawing inspiration from Pinterest boards by randomly selecting images instead of manually scrolling through hundreds of pins.

## 🎯 Features

- **No Account Required**: Simply enter any Pinterest username to explore their public boards
- **Random Inspiration**: Get random images from selected boards for drawing inspiration
- **Clean Interface**: Simple, focused design without distractions
- **Privacy First**: No personal data collection, everything stays on your device

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nicoledicochea/pinterest-randomizer.git
   cd pinterest-randomizer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
pinterest-randomizer/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── index.css      # Tailwind CSS
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── tailwind.config.js # Tailwind configuration
│   └── postcss.config.js  # PostCSS configuration
├── server/                 # Node.js backend
│   └── index.ts           # Express server
├── package.json            # Project dependencies
└── README.md              # This file
```

## 🎨 Components

- **LandingPage**: Welcome screen explaining the app
- **UsernameInput**: Input form for Pinterest usernames
- **BoardSelection**: Display and select from user's boards
- **ImageDisplay**: Show random images with navigation
- **PrivacyPolicy**: Privacy policy page
- **Navigation**: Site-wide navigation header

## 🔧 Development

### Frontend (React + TypeScript + Vite)
- Modern React with TypeScript
- Tailwind CSS for styling
- Vite for fast development and building

### Backend (Node.js + Express)
- Express.js server
- CORS enabled for development
- Ready for Pinterest API integration

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pinterest API Integration

**Status**: Ready for implementation

The app is structured to integrate with Pinterest's API v5:
- Fetch public boards by username
- Get pins from selected boards
- Random image selection

**Required Scopes**: `boards:read` (for public boards)

## 🚀 Deployment

### Netlify (Frontend)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

### Backend
- Deploy to your preferred hosting service
- Set environment variables for Pinterest API
- Update CORS origins for production

## 🔒 Privacy & Security

- **No Personal Data**: We don't collect or store any personal information
- **Local Storage Only**: Any data stays on your device
- **Public Data Only**: Only accesses publicly available Pinterest content
- **No Tracking**: No cookies, analytics, or tracking technologies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/nicoledicochea/pinterest-randomizer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nicoledicochea/pinterest-randomizer/discussions)

---

**Built with ❤️ for the creative community**
