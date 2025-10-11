# The Friendly Games - Interactive Trivia Game

A web-based trivia game inspired by the "Saba7o Challenge" game show, developed as a course project. This interactive trivia game allows two teams to compete against each other in a Jeopardy-style format with multiple categories and difficulty levels.

## 🎮 Game Overview

The Friendly Games is a multiplayer trivia game where two teams compete to answer questions across four different categories:
- **Marvel** - Questions about Marvel Cinematic Universe
- **Math** - Mathematical problems and concepts  
- **Football** - Soccer/football knowledge
- **Science** - General science questions

Each category contains 4 questions with increasing difficulty levels (10, 20, 30, 40 points).

## ✨ Features

### Game Mechanics
- **Two-team competitive gameplay** with customizable team names
- **4x4 question grid** with 16 total questions
- **Progressive difficulty** (10, 20, 30, 40 points per question)
- **Double points question** - One randomly selected question worth double points
- **60-second timer** for each question
- **Wildcard system** with three special abilities per team

### Wildcard Abilities
Each team gets three wildcards to use throughout the game:
1. **Phone a Friend** 📞 - Call someone for help
2. **Multiple Choice** 🎯 - Get 4 answer choices instead of free-form answer
3. **Two Answers** ✌️ - Submit two different answers

### Game Flow
1. Teams enter their names
2. Select questions from the 4x4 grid
3. Answer within 60 seconds or use wildcards
4. Points are awarded based on correct answers
5. Game ends when all questions are answered or manually ended
6. Winner is determined by total points

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing!

### How to Play
1. **Start the Game**: Click on "Trivia!" from the home page
2. **Enter Team Names**: Input names for both teams (defaults to "Team 1" and "Team 2")
3. **Select Questions**: Click on any available question from the grid
4. **Answer Questions**: 
   - Type your answer or use wildcards
   - Use the "Show Answer" button to reveal the correct answer
   - Select which team answered correctly
5. **Track Progress**: Monitor scores and remaining questions
6. **End Game**: Click "End Game" when finished or all questions are answered
7. **View Results**: See the final winner and scores

## 📁 Project Structure

```
340_AMS_Project/
├── index.html              # Home page with game selection
├── trivia.html             # Main game grid interface
├── question.html           # Individual question display
├── winner.html             # Game results and winner display
├── about.html              # About page with game information
├── contact.html            # Contact form (dummy)
├── 404.html               # Custom 404 error page
├── JavaScript.js           # Core game logic and functionality
├── home.css               # Home page styling
├── trivia.css             # Game grid styling
├── questions.css          # Question page styling
├── about.css              # About page styling
└── Images/                # Game assets and images
    ├── 404_robot.png
    ├── ABC.png / ABC_g.png
    ├── connect_4.jpg
    ├── hand.png / hand_g.png
    ├── phone.png / phone_g.png
    ├── Trivia.jpeg
    ├── who_am_I.jpg
    ├── password_challeng.jpeg
    ├── X.png
    └── questions photos/
        ├── Messi.webp
        └── scene-Iron-Man.webp
```

## 🎯 Game Categories & Questions

### Marvel (MCU)
- Iron Man's real name
- Infinity stones
- Thor's hammer
- Character relationships

### Math
- Basic arithmetic
- Square roots
- Mathematical constants
- Problem solving

### Football
- Player identification (with images)
- Game rules and regulations
- Match duration
- Team composition

### Science
- Chemical formulas
- Atomic numbers
- Physical constants
- Planetary knowledge

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and responsive design
- **JavaScript (ES5)** - Game logic and interactivity
- **Session Storage** - Game state persistence

### Key Features
- **Session-based state management** - Game progress persists across page reloads
- **Responsive design** - Works on desktop and mobile devices
- **Image integration** - Visual questions with player photos
- **Timer functionality** - 60-second countdown for each question
- **Dynamic scoring** - Real-time point calculation and display

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🎨 Design Philosophy

The game features a clean, modern interface with:
- **Consistent color scheme** - Navy blue background with orange accents
- **Intuitive navigation** - Clear visual hierarchy
- **Accessible design** - High contrast colors and readable fonts
- **Game show aesthetics** - Inspired by popular trivia shows

## 🚧 Future Enhancements

The project includes placeholder pages for additional games:
- Connect 4
- Who Am I?
- Password Challenge

These features are currently under development and redirect to a 404 page.

## 👨‍💻 Developer

**Abdelrahman Elshabrawi**
- Course project for web development
- Inspired by "Saba7o Challenge" game show


## 📝 License

This project is developed as an educational course project. Feel free to use and modify for learning purposes.

## 🤝 Contributing

This is a course project, but suggestions and feedback are welcome, reach out on a.m.elshabrawi@gmail.com

## 🐛 Known Issues

- Contact form is non-functional (dummy implementation)
- Some placeholder games redirect to 404 page
- Mobile responsiveness could be improved

---

**Enjoy playing The Friendly Games! 🎉**
