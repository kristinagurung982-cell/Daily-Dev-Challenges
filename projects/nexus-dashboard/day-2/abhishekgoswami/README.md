# 🌤️ Nexus Day 2: Phase 2 - Real-time Weather Widget

A modern React-based real-time weather widget that fetches current weather data based on user location using the OpenWeatherMap API.

## 📋 Project Overview

This project is part of the **NEXUS DASHBOARD** challenge - Level up your State Management and API integration skills.

### Objectives
✅ Integrate OpenWeatherMap API to fetch real-time weather data  
✅ Fetch weather data based on user's geolocation  
✅ Handle loading states with skeleton loaders  
✅ Gracefully handle API errors and edge cases  
✅ Follow modern React best practices with Context API  

## 🏗️ Project Architecture

```
src/
 ├── api/              # API integration & utilities
 │   └── weather.js    # OpenWeatherMap API wrapper
 ├── context/          # React Context for state management
 │   └── WeatherContext.jsx
 ├── components/
 │   ├── widgets/      # Widget components
 │   │   ├── WeatherWidget.jsx
 │   │   └── WeatherWidget.css
 │   └── common/       # Reusable components
 │       ├── LoadingSkeleton.jsx
 │       └── LoadingSkeleton.css
 ├── utils/            # Utility functions
 │   └── formatters.js # Data formatting helpers
 ├── App.jsx
 ├── App.css
 └── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- A free OpenWeatherMap API key (get one [here](https://openweathermap.org/api))

### Installation

1. **Clone the repository** (if needed)
```bash
cd projects/nexus-dashboard/day-2/abhishekgoswami
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local and add your OpenWeatherMap API key
VITE_WEATHER_API_KEY=your_api_key_here
```

Get your free API key from: https://openweathermap.org/api

4. **Start the development server**
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173`

## 📱 Features

### Real-time Weather Display
- 🌡️ Current temperature (in Celsius)
- 🌤️ Weather condition with icon
- 💧 Humidity percentage
- 💨 Wind speed (in km/h)
- 🌥️ Cloud coverage
- 🌅 Sunrise and Sunset times
- 📊 Atmospheric pressure

### Smart Loading & Error Handling
- ⚙️ Loading skeletons while fetching data
- ⚠️ Graceful error messages with helpful hints
- 🔄 Automatic location detection using Geolocation API
- 📍 User's city display

### Responsive Design
- 📱 Mobile-first approach
- 💻 Responsive on all screen sizes
- 🎨 Beautiful gradient background
- ✨ Smooth animations and transitions

## 🔌 API Integration

The app uses the **OpenWeatherMap API** (Current Weather Data endpoint):

```javascript
// Example API request
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid={API_KEY}
```

### API Features Used
- ✅ Real-time weather data
- ✅ Geolocation-based queries
- ✅ Metric units (Celsius, m/s)
- ✅ Comprehensive weather details

## 🎯 Key Implementation Details

### WeatherContext (State Management)
- Manages weather data globally
- Handles loading and error states
- Fetches data on component mount
- Uses Geolocation API for auto-location detection

### WeatherWidget (Display Component)
- Renders weather information
- Shows loading skeleton during fetch
- Displays error messages gracefully
- Formats all data for readability

### LoadingSkeleton (UX Component)
- Beautiful shimmer animation
- Matches final layout
- Prevents layout shift

### Utility Functions
- Temperature formatting
- Wind speed conversion (m/s → km/h)
- Time formatting
- Weather emoji mapping

## 📊 Data Format

```javascript
{
  "main": {
    "temp": 22.5,
    "feels_like": 21.8,
    "humidity": 65,
    "pressure": 1013
  },
  "weather": [
    {
      "main": "Partly Cloudy",
      "icon": "02d"
    }
  ],
  "wind": {
    "speed": 3.5
  },
  "clouds": {
    "all": 40
  },
  "sys": {
    "sunrise": 1618830000,
    "sunset": 1618876200
  },
  "name": "London"
}
```

## 🛠️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📝 Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

## ⚡ Performance Optimizations

- React Context for state management (no prop drilling)
- Skeleton loaders prevent layout shift
- Efficient re-renders with proper dependency arrays
- Responsive images via native browser support

## 🔒 Security

- API key stored in environment variables
- No sensitive data in version control
- Fetch error handling prevents app crashes

## 🐛 Troubleshooting

### Weather data not loading
- ✅ Check if geolocation is enabled in browser
- ✅ Verify API key is correct in `.env.local`
- ✅ Check OpenWeatherMap API quota
- ✅ Open browser console for detailed error messages

### "Unable to Load Weather" error
- ✅ Allow location access when prompted
- ✅ Check internet connection
- ✅ Verify API key in environment variables

### API 401 Error
- ✅ Your API key is invalid or missing
- ✅ Generate a new key from OpenWeatherMap dashboard

## 📚 Technologies Used

- **React 18.2** - UI library
- **Vite 4.3** - Build tool & dev server
- **Context API** - State management
- **Fetch API** - HTTP requests
- **CSS3** - Styling with gradients and animations
- **Geolocation API** - User location detection

## 🎓 Learning Points

This project demonstrates:
1. ✅ API integration with error handling
2. ✅ React Context for state management
3. ✅ Geolocation API usage
4. ✅ Loading states and skeleton screens
5. ✅ Responsive design patterns
6. ✅ CSS animations and gradients
7. ✅ Error boundary and graceful degradation

## 📄 License

This project is part of Daily Dev Challenges.

## 🤝 Contributing

Feel free to fork, modify, and improve!

## 📞 Support

For issues or questions, please refer to:
- OpenWeatherMap API Docs: https://openweathermap.org/api
- React Documentation: https://react.dev
- Vite Documentation: https://vitejs.dev

---

**Happy Coding! 🚀**
