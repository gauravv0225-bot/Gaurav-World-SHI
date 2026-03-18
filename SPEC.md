# Shikha & Gaurav - Our Love Story
## Specification Document

---

## 1. Project Overview

**Project Name:** Shikha & Gaurav – Our Love Story  
**Project Type:** Multi-page romantic interactive personal website  
**Core Functionality:** An emotional, cinematic love story website with quiz game, memories gallery, love letter, and final surprise  
**Target Users:** Shikha (the special someone) and Gaurav (the creator)

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Pages:**
1. **Welcome Screen** - Full-screen landing with typing animation
2. **Question Game** - Interactive love quiz (5-7 questions)
3. **Memories Gallery** - Photo grid with lightbox
4. **Love Letter** - Animated letter opening effect
5. **Final Surprise** - Heart animation + fireworks

**Navigation:**
- Single-page application with JS page transitions
- Progress indicator for quiz
- Smooth fade/slide transitions between pages

### 2.2 Visual Design

**Color Palette:**
| Role | Color | Hex |
|------|-------|-----|
| Primary Background | Deep romantic black | #0a0a0f |
| Gradient Start | Soft pink | #ff6b9d |
| Gradient Mid | Pastel purple | #c471ed |
| Gradient End | Deep purple | #8e44ad |
| Accent | Warm rose | #ff8fab |
| Text Primary | Soft white | #f8f8ff |
| Text Secondary | Muted pink | #ffcce0 |
| Heart Red | Vibrant love | #ff4757 |
| Gold Accent | Romantic gold | #ffd700 |
| Glass Background | Translucent white | rgba(255,255,255,0.08) |
| Glass Border | Soft pink | rgba(255,107,157,0.3) |

**Typography:**
- **Primary Font:** 'Playfair Display' (headings) - elegant serif
- **Secondary Font:** 'Quicksand' (body) - soft rounded sans
- **Accent Font:** 'Dancing Script' (special text) - romantic cursive
- **Heading Sizes:** H1: 4rem, H2: 2.5rem, H3: 1.8rem
- **Body Size:** 1.1rem
- **Line Height:** 1.7

**Spacing System:**
- Base unit: 8px
- Section padding: 60px (desktop), 30px (mobile)
- Card padding: 24px
- Element gaps: 16px / 24px

**Visual Effects:**
- Glassmorphism cards with backdrop-filter: blur(20px)
- Soft glow shadows: 0 8px 32px rgba(255,107,157,0.3)
- Gradient text fills for headings
- Particle/star background animation
- Floating hearts animation
- Cursor: heart emoji follower

### 2.3 Components

**Loading Screen:**
- Centered heart spinner
- Pulsing animation
- "Loading our love..." text

**Welcome Screen:**
- Full viewport height
- Animated gradient background (slow pan)
- Floating particles (stars)
- Typing effect for greeting text
- CTA button with hover glow

**Question Game:**
- Question card with glassmorphism
- 4 answer buttons (2x2 grid on mobile)
- Progress bar (hearts filling)
- Correct: heart burst animation + next question
- Wrong: gentle shake + retry message
- Questions stored in localStorage

**Memories Gallery:**
- CSS Grid: 3 columns desktop, 2 tablet, 1 mobile
- Image cards with hover scale + glow
- Click opens fullscreen lightbox
- Caption overlay on hover
- Navigation arrows in lightbox

**Love Letter:**
- Envelope design (closed initially)
- Click to open - CSS 3D transform animation
- Letter content with typing animation
- Decorative elements (roses, hearts)

**Final Surprise:**
- Large animated heart (CSS keyframes)
- Main message with gradient text
- Surprise button triggers:
  - Confetti/fireworks canvas
  - Falling hearts animation
  - Music intensity increase

**Interactive Elements:**
- Custom heart cursor
- "I miss you" floating text (random intervals)
- Double-click hidden message
- Countdown timer (optional)

---

## 3. Functionality Specification

### 3.1 Core Features

**Page Transitions:**
- Fade + slide animations
- Duration: 800ms ease-in-out
- Staggered element reveals

**Quiz System:**
- Questions array with:
  - question: string
  - options: array[4]
  - correct: number (index)
  - hint: string
- localStorage key: 'shikha_gaurav_quiz'
- Track current question index
- Track score (for encouragement)

**Questions List:**
1. "When did we first meet?" → 2017
2. "What's my nickname for you?" → Jaan / Sweetheart (customizable)
3. "What's your favorite memory with me?" → [personalized]
4. "Where was our first date?" → [personalized]
5. "What was the first gift I gave you?" → [personalized]
6. "What's the song that reminds me of you?" → [personalized]
7. "How much do I love you?" → Infinite / 100%

**Gallery System:**
- 6 placeholder images (use picsum or local)
- Lightbox with:
  - Full image
  - Caption
  - Close button
  - Arrow navigation

**Love Letter:**
- Predefined message (editable in code)
- Typing animation: 50ms per character
- Background music: soft instrumental

**Final Surprise:**
- Canvas-based fireworks
- CSS falling hearts
- Audio fade in

### 3.2 User Interactions

- **Button hover:** Scale 1.05 + glow increase
- **Card hover:** Lift + shadow intensify
- **Image click:** Open lightbox
- **Correct answer:** Confetti burst + proceed
- **Wrong answer:** Shake + gentle message
- **Cursor:** Follows with heart emoji

### 3.3 Data Handling

- **localStorage:**
  - quiz_progress: { currentQuestion: 0, answered: [] }
  - visited_pages: []
- **Audio:** Auto-play with muted fallback
- **Images:** Lazy loading for performance

### 3.4 Edge Cases

- Audio blocked: Show unmute button
- localStorage unavailable: Fallback to session
- Mobile: Touch-friendly button sizes (min 44px)
- Slow connection: Loading screen

---

## 4. Acceptance Criteria

### Visual Checkpoints:
- [ ] Gradient background animates smoothly
- [ ] Floating hearts visible and organic
- [ ] Glassmorphism cards have blur effect
- [ ] Typing animation is smooth
- [ ] Page transitions are fluid (no jank)
- [ ] Heart cursor follows mouse smoothly
- [ ] Mobile layout is fully responsive

### Functional Checkpoints:
- [ ] Welcome screen shows typing animation
- [ ] "Start Journey" button advances to quiz
- [ ] Quiz questions display correctly
- [ ] Wrong answer shows retry message
- [ ] Correct answer advances to next
- [ ] All 5-7 questions work
- [ ] Gallery images open in lightbox
- [ ] Love letter opens with animation
- [ ] Letter text types out
- [ ] Final surprise triggers fireworks
- [ ] Hearts fall on final page
- [ ] Background music plays
- [ ] localStorage saves progress
- [ ] Double-click shows hidden message

### Technical Checkpoints:
- [ ] No console errors
- [ ] All images load (or graceful fallback)
- [ ] Audio plays (or graceful fallback)
- [ ] Works on Chrome, Firefox, Safari
- [ ] Responsive at 320px, 768px, 1024px+
- [ ] Clean semantic HTML
- [ ] Organized CSS with variables
- [ ] Modular JS functions

---

## 5. File Structure

```
/project-folder
├── index.html          # Main HTML structure
├── style.css           # All styles
├── script.js           # All functionality
├── SPEC.md            # This specification
├── /images            # Photo gallery (placeholder)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── /music             # Background music
    └── love-song.mp3
```

---

## 6. Customization Points

**Editable in script.js:**
- Questions array (add personalized questions)
- Love letter message text
- Final surprise message
- Quiz answers

**Editable in style.css:**
- Color variables
- Animation timings
- Font choices

---

*Specification complete. Implementation ready.*
