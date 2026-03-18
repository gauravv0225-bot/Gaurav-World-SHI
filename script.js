/**
 * SHIKHA & GAURAV - OUR LOVE STORY
 * Simple and Working Version
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Hide loading screen immediately
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1000);
    
    // Hero typing animation
    typeText('typed-name', 'Hi Shikha 💖', 100, function() {
        setTimeout(function() {
            typeText('typed-subtitle', 'This is our story...', 80, function() {
                document.getElementById('hero-btn').style.opacity = '1';
            });
        }, 500);
    });
    
    // Hero button click
    document.getElementById('hero-btn').onclick = function() {
        document.getElementById('section-2').scrollIntoView({behavior: 'smooth'});
    };
    
    // Quiz answers
    setupQuiz();
    
    // Memory cards
    setupMemoryCards();
    
    // Envelope click
    document.getElementById('envelope').onclick = openEnvelope;
    
    // Surprise button
    document.getElementById('surprise-btn').onclick = activateSurprise;
    
    // Music button
    document.getElementById('music-btn').onclick = toggleMusic;
    
    // Fuljhari sound
    setupFuljhari();
    
    // Create background effects
    createStars();
    createFloatingHearts();
    
});

// Type text function
function typeText(elementId, text, delay, callback) {
    var element = document.getElementById(elementId);
    var i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            callback();
        }
    }
    type();
}

// Quiz setup
function setupQuiz() {
    var questions = document.querySelectorAll('.question-card');
    showQuestion(1);
    
    document.querySelectorAll('.option-btn').forEach(function(btn) {
        btn.onclick = function() {
            handleAnswer(this);
        };
    });
}

function showQuestion(num) {
    document.querySelectorAll('.question-card').forEach(function(q) {
        q.style.display = 'none';
    });
    var q = document.getElementById('question-' + num);
    if (q) {
        q.style.display = 'block';
    }
}

function handleAnswer(btn) {
    var question = btn.closest('.question-card');
    var questionNum = parseInt(question.id.replace('question-', ''));
    var isCorrect = btn.getAttribute('data-correct') === 'true';
    var allBtns = question.querySelectorAll('.option-btn');
    
    // Disable all buttons
    allBtns.forEach(function(b) {
        b.disabled = true;
    });
    
    if (isCorrect) {
        btn.classList.add('correct');
        
        var messages = {
            1: {emoji: '💕', message: 'Correct! ❤️', detail: 'That was the moment I first saw your beautiful smile.'},
            2: {emoji: '💖', message: 'Correct! ❤️', detail: "That's where our story began!"},
            3: {emoji: '💍', message: 'Correct! ❤️', detail: 'That night changed my life forever because you said YES ❤️'},
            4: {emoji: '❤️', message: 'Correct! ❤️', detail: 'Red suits you the best!'},
            5: {emoji: '🍱', message: 'Correct! ❤️', detail: 'Momos are the best! Just like you!'}
        };
        
        var msg = messages[questionNum];
        showFeedback(msg.emoji, msg.message, msg.detail);
        
        setTimeout(function() {
            hideFeedback();
            if (questionNum < 5) {
                question.style.display = 'none';
                showQuestion(questionNum + 1);
            } else {
                question.style.display = 'none';
                document.getElementById('quiz-complete').style.display = 'block';
                document.getElementById('quiz-complete').classList.add('show');
            }
        }, 2500);
        
    } else {
        btn.classList.add('wrong');
        allBtns.forEach(function(b) {
            if (b.getAttribute('data-correct') === 'true') {
                b.classList.add('correct');
            }
        });
        
        showFeedback('🌶️', 'Oops Mirchi wrong answer, try again ❤️', '');
        
        setTimeout(function() {
            hideFeedback();
            allBtns.forEach(function(b) {
                b.classList.remove('correct', 'wrong');
                b.disabled = false;
            });
        }, 2000);
    }
}

function showFeedback(emoji, message, detail) {
    document.getElementById('feedback-emoji').textContent = emoji;
    document.getElementById('feedback-message').textContent = message;
    var detailEl = document.getElementById('feedback-detail');
    detailEl.textContent = detail;
    detailEl.style.display = detail ? 'block' : 'none';
    document.getElementById('feedback-overlay').classList.add('show');
}

function hideFeedback() {
    document.getElementById('feedback-overlay').classList.remove('show');
}

// Memory cards
function setupMemoryCards() {
    var cards = document.querySelectorAll('.memory-card');
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-image');
    var modalCaption = document.getElementById('modal-caption');
    var currentIndex = 0;
    
    var captions = [
        "This day changed my life ❤️",
        "When I first saw your smile 😊",
        "Our first adventure 🌟",
        "The night we talked for hours 🌙",
        "You make every moment special 💫",
        "My favorite person ❤️"
    ];
    
    cards.forEach(function(card, index) {
        card.onclick = function() {
            currentIndex = index;
            var img = card.querySelector('img');
            modalImg.src = img.src;
            modalCaption.textContent = captions[index];
            modal.classList.add('active');
        };
    });
    
    document.getElementById('modal-close').onclick = function() {
        modal.classList.remove('active');
    };
    
    document.getElementById('modal-prev').onclick = function() {
        currentIndex--;
        if (currentIndex < 0) currentIndex = cards.length - 1;
        var img = cards[currentIndex].querySelector('img');
        modalImg.src = img.src;
        modalCaption.textContent = captions[currentIndex];
    };
    
    document.getElementById('modal-next').onclick = function() {
        currentIndex++;
        if (currentIndex >= cards.length) currentIndex = 0;
        var img = cards[currentIndex].querySelector('img');
        modalImg.src = img.src;
        modalCaption.textContent = captions[currentIndex];
    };
    
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    };
}

// Envelope
function openEnvelope() {
    var envelope = document.getElementById('envelope');
    if (envelope.classList.contains('opened')) return;
    
    envelope.classList.add('opened');
    
    setTimeout(function() {
        var letterText = `My Dearest Shikha,

Every moment with you feels like a beautiful dream that I never want to wake up from. You are the sunshine that brightens my days and the stars that light up my nights.

When I think about you, my heart fills with an ocean of love that words can barely contain. Your smile is my favorite thing in this world, and your laugh is the sweetest melody I've ever heard.

You have brought so much joy, love, and meaning into my life. Every day with you is a gift that I cherish deeply. You are my best friend, my soulmate, and my everything.

I love you more than words can ever express, now and forever.

With all my heart,
Gaurav 💕`;
        
        document.getElementById('letter-body').innerHTML = '';
        var paragraphs = letterText.split('\n\n');
        paragraphs.forEach(function(para, i) {
            var p = document.createElement('p');
            p.textContent = para;
            p.style.animationDelay = (i * 0.5) + 's';
            document.getElementById('letter-body').appendChild(p);
        });
    }, 600);
}

// Surprise
var surpriseActivated = false;
function activateSurprise() {
    if (surpriseActivated) return;
    surpriseActivated = true;
    
    document.getElementById('surprise-btn').style.display = 'none';
    
    // Heart explosion
    var heartExplosion = document.getElementById('heart-explosion');
    var hearts = ['💕', '💗', '💖', '💓', '💞', '💘', '❤️'];
    
    for (var i = 0; i < 40; i++) {
        setTimeout(function() {
            var heart = document.createElement('div');
            heart.className = 'explode-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            var angle = Math.random() * Math.PI * 2;
            var distance = Math.random() * 250 + 100;
            heart.style.setProperty('--x', Math.cos(angle) * distance + 'px');
            heart.style.setProperty('--y', Math.sin(angle) * distance + 'px');
            
            heartExplosion.appendChild(heart);
            setTimeout(function() { heart.remove(); }, 1500);
        }, i * 80);
    }
    
    // Confetti
    var confettiContainer = document.getElementById('confetti-container');
    var colors = ['#ff6b9d', '#c471ed', '#ff4757', '#ffd700', '#ff8fab'];
    
    for (var i = 0; i < 100; i++) {
        setTimeout(function() {
            var confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
            confettiContainer.appendChild(confetti);
            setTimeout(function() { confetti.remove(); }, 5000);
        }, i * 30);
    }
    
    // Increase music
    var bgMusic = document.getElementById('bg-music');
    if (!bgMusic.paused) {
        bgMusic.volume = 1;
    }
}

// Music
var musicPlaying = false;
function toggleMusic() {
    var bgMusic = document.getElementById('bg-music');
    var btn = document.getElementById('music-btn');
    var text = document.getElementById('music-text');
    
    musicPlaying = !musicPlaying;
    
    if (musicPlaying) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(function() {});
        btn.classList.add('playing');
        text.textContent = 'Playing our song 🎶';
    } else {
        bgMusic.pause();
        btn.classList.remove('playing');
        text.textContent = 'Paused ❤️';
    }
}

// Volume slider
document.getElementById('volume-slider').oninput = function() {
    document.getElementById('bg-music').volume = this.value / 100;
};

// Nickname sounds
function setupFuljhari() {
    var nameCards = document.querySelectorAll('.name-card');
    nameCards.forEach(function(card) {
        card.onclick = function(e) {
            e.stopPropagation();
            var soundName = card.getAttribute('data-sound');
            if (soundName) {
                var sound = document.getElementById('sound-' + soundName);
                if (sound) {
                    sound.currentTime = 0;
                    sound.play().catch(function() {});
                }
            }
        };
    });
}

// Background effects
function createStars() {
    var stars = document.getElementById('stars');
    for (var i = 0; i < 60; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 4 + 's';
        stars.appendChild(star);
    }
}

function createFloatingHearts() {
    var container = document.getElementById('floating-hearts-bg');
    var hearts = ['💕', '💗', '💖', '💓', '💞', '💘'];
    
    for (var i = 0; i < 20; i++) {
        var heart = document.createElement('div');
        heart.className = 'floating-heart-bg';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
    }
}
