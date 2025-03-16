const enlightenData = {
  // User data
  user: {
    name: "Student",
    email: "student@example.com",
    completedLessons: 0,
    completedTests: 0,
    avgScore: 0,
    streakDays: 3,
    lastLogin: new Date()
  },
  
  // Course data
  courses: [
    {
      id: "math101",
      title: "Mathematics Fundamentals",
      subject: "math",
      description: "Master the core concepts of mathematics including algebra, geometry, and basic calculus.",
      thumbnail: "math",
      icon: "ph-function",
      level: "beginner",
      lessons: 14,
      duration: "10 hours",
      progress: 65,
      currentLesson: 9,
      lessons: []
    },
    {
      id: "science201",
      title: "Introduction to Biology",
      subject: "science",
      description: "Explore the fundamentals of biology, from cellular structures to complex ecosystems and the diversity of life.",
      thumbnail: "science",
      icon: "ph-test-tube",
      level: "beginner",
      lessons: 12,
      duration: "8 hours",
      progress: 25,
      currentLesson: 3,
      lessons: []
    },
    {
      id: "history101",
      title: "World History: Ancient Civilizations",
      subject: "history",
      description: "Journey through the early civilizations that shaped our world, from Mesopotamia to Ancient Rome.",
      thumbnail: "history",
      icon: "ph-scroll",
      level: "intermediate",
      lessons: 10,
      duration: "12 hours",
      progress: 10,
      currentLesson: 1,
      lessons: []
    },
    {
      id: "language101",
      title: "Introduction to Creative Writing",
      subject: "language",
      description: "Develop creative writing skills through storytelling techniques, character development, and narrative structures.",
      thumbnail: "language",
      icon: "ph-pen-nib",
      level: "beginner",
      lessons: 8,
      duration: "6 hours",
      progress: 0,
      currentLesson: 0,
      lessons: []
    },
    {
      id: "computer101",
      title: "Introduction to Programming",
      subject: "computer",
      description: "Learn the fundamentals of programming, algorithms, and problem-solving using Python.",
      thumbnail: "computer",
      icon: "ph-code",
      level: "beginner",
      lessons: 15,
      duration: "20 hours",
      progress: 40,
      currentLesson: 6,
      lessons: []
    },
    {
      id: "science301",
      title: "Physics: Forces and Motion",
      subject: "science",
      description: "Understand the physics behind forces, motion, and energy through practical examples and experiments.",
      thumbnail: "science",
      icon: "ph-atom",
      level: "intermediate",
      lessons: 12,
      duration: "15 hours",
      progress: 0,
      currentLesson: 0,
      lessons: []
    },
    {
      id: "math201",
      title: "Statistics and Probability",
      subject: "math",
      description: "Master statistical concepts and probability theory for data analysis and interpretation.",
      thumbnail: "math",
      icon: "ph-chart-bar",
      level: "intermediate",
      lessons: 10,
      duration: "12 hours",
      progress: 0,
      currentLesson: 0,
      lessons: []
    },
    {
      id: "history201",
      title: "Modern World History",
      subject: "history",
      description: "Explore the major events, movements, and figures that shaped our world from the Renaissance to the present day.",
      thumbnail: "history",
      icon: "ph-globe",
      level: "advanced",
      lessons: 14,
      duration: "18 hours",
      progress: 0,
      currentLesson: 0,
      lessons: []
    }
  ],
  
  // Test data
  tests: [
    {
      id: "math-quiz1",
      title: "Algebra Fundamentals Quiz",
      subject: "math",
      type: "quiz",
      description: "Test your understanding of basic algebraic concepts including variables, expressions, and linear equations.",
      questionCount: 10,
      timeLimit: "15 minutes",
      passingScore: "70%",
      completed: true,
      score: 85,
      questions: [
        {
          question: "Solve for x: 3x + 5 = 20",
          options: ["x = 5", "x = 15", "x = 7", "x = 5/3"],
          correctAnswer: 0
        },
        {
          question: "Which of the following is a quadratic equation?",
          options: ["y = 2x + 3", "y = x² + 2x - 1", "y = 3/x", "y = √x"],
          correctAnswer: 1
        },
        {
          question: "Simplify: 2(x + 3) - 4",
          options: ["2x + 6 - 4", "2x + 2", "2x + 6", "2x"],
          correctAnswer: 1
        }
        // More questions would be added for a real implementation
      ]
    },
    {
      id: "science-exam1",
      title: "Biology Midterm Exam",
      subject: "science",
      type: "exam",
      description: "Comprehensive examination covering cell biology, genetics, and basic physiology concepts.",
      questionCount: 25,
      timeLimit: "45 minutes",
      passingScore: "65%",
      completed: false,
      questions: [
        {
          question: "Which organelle is known as the 'powerhouse of the cell'?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
          correctAnswer: 1
        },
        {
          question: "DNA replication occurs during which phase of the cell cycle?",
          options: ["G1 phase", "S phase", "G2 phase", "M phase"],
          correctAnswer: 1,
          image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGluZWFyJTIwZXF1YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80"
        },
        {
          question: "Which of the following is NOT a nucleotide found in DNA?",
          options: ["Adenine", "Thymine", "Uracil", "Guanine"],
          correctAnswer: 2
        }
        // More questions would be added for a real implementation
      ]
    },
    {
      id: "history-practice1",
      title: "Ancient Civilizations Practice Test",
      subject: "history",
      type: "practice",
      description: "Practice test covering Mesopotamia, Ancient Egypt, Greece, and Rome to prepare for your final exam.",
      questionCount: 15,
      timeLimit: "30 minutes",
      passingScore: "None (Practice)",
      completed: false,
      questions: [
        {
          question: "Which ancient civilization developed along the Nile River?",
          options: ["Mesopotamia", "Egypt", "Greece", "Rome"],
          correctAnswer: 1
        },
        {
          question: "The Code of Hammurabi was developed in which civilization?",
          options: ["Egypt", "Mesopotamia", "Greece", "China"],
          correctAnswer: 1
        },
        {
          question: "Which of the following was NOT one of the ancient Greek city-states?",
          options: ["Athens", "Sparta", "Carthage", "Corinth"],
          correctAnswer: 2
        }
        // More questions would be added for a real implementation
      ]
    },
    {
      id: "computer-quiz1",
      title: "Python Basics Quiz",
      subject: "computer",
      type: "quiz",
      description: "Test your understanding of Python syntax, data types, and basic programming concepts.",
      questionCount: 12,
      timeLimit: "20 minutes",
      passingScore: "75%",
      completed: true,
      score: 92,
      questions: [
        {
          question: "What is the correct syntax to output 'Hello World' in Python?",
          options: ["echo('Hello World')", "console.log('Hello World')", "print('Hello World')", "system.out.println('Hello World')"],
          correctAnswer: 2
        },
        {
          question: "Which of the following is a mutable data type in Python?",
          options: ["String", "Tuple", "Integer", "List"],
          correctAnswer: 3
        },
        {
          question: "How do you create a variable with the numeric value 5?",
          options: ["x = 5", "int x = 5", "x = int(5)", "var x = 5"],
          correctAnswer: 0
        }
        // More questions would be added for a real implementation
      ]
    }
  ],
  
  // Achievements data
  achievements: [
    {
      id: "first-lesson",
      title: "First Steps",
      description: "Completed your first lesson",
      icon: "ph-play",
      date: "2023-09-15"
    },
    {
      id: "perfect-score",
      title: "Perfect Score",
      description: "Achieved 100% on a quiz",
      icon: "ph-trophy",
      date: "2023-09-20"
    },
    {
      id: "streak-7",
      title: "Week Warrior",
      description: "Logged in for 7 days in a row",
      icon: "ph-calendar-check",
      date: "2023-09-25"
    }
  ],
  
  // Test history
  testHistory: [
    {
      id: "test-history-1",
      testId: "math-quiz1",
      title: "Algebra Fundamentals Quiz",
      score: 85,
      date: "2023-09-10",
      timeSpent: "12:35"
    },
    {
      id: "test-history-2",
      testId: "computer-quiz1",
      title: "Python Basics Quiz",
      score: 92,
      date: "2023-09-22",
      timeSpent: "15:20"
    }
  ],
  
  updateMediaSection(mediaType = 'video') {
    const mediaContainer = document.getElementById('mediaContainer');
    if (!mediaContainer) return;
    
    // Clear current content
    mediaContainer.innerHTML = '';
    
    // Define available media content
    const mediaContent = {
      videos: [
        {
          id: 'math-video-1',
          title: 'Understanding Algebra Fundamentals',
          subject: 'math',
          thumbnail: 'algebra',
          duration: '15:24',
          url: 'https://www.youtube.com/embed/LwCRRUa8yTU',
          description: 'Learn the core concepts of algebra with clear examples and practice problems.'
        },
        {
          id: 'science-video-1',
          title: 'Cell Biology Explained',
          subject: 'science',
          thumbnail: 'cells',
          duration: '18:36',
          url: 'https://www.youtube.com/embed/URUJD5NEXC8',
          description: 'Dive into the world of cells, their structures, and functions in this comprehensive guide.'
        },
        {
          id: 'history-video-1',
          title: 'Ancient Civilizations: Mesopotamia',
          subject: 'history',
          thumbnail: 'mesopotamia',
          duration: '22:15',
          url: 'https://www.youtube.com/embed/C2RxY02wr8Y',
          description: 'Explore the cradle of civilization and discover how ancient Mesopotamia shaped human history.'
        },
        {
          id: 'language-video-1',
          title: 'Creative Writing Techniques',
          subject: 'language',
          thumbnail: 'writing',
          duration: '13:42',
          url: 'https://www.youtube.com/embed/R4FQ8jEbGEw',
          description: 'Learn powerful creative writing techniques to enhance your storytelling abilities.'
        },
        {
          id: 'computer-video-1',
          title: 'Introduction to Python Programming',
          subject: 'computer',
          thumbnail: 'python',
          duration: '26:18',
          url: 'https://www.youtube.com/embed/kqtD5dpn9C8',
          description: 'Start your programming journey with this beginner-friendly Python tutorial.'
        },
        {
          id: 'math-video-2',
          title: 'Mastering Calculus: Derivatives',
          subject: 'math',
          thumbnail: 'calculus',
          duration: '20:10',
          url: 'https://www.youtube.com/embed/EKvHQc3QEow',
          description: 'A comprehensive guide to understanding and working with derivatives in calculus.'
        },
        {
          id: 'science-video-2',
          title: 'The Periodic Table Explained',
          subject: 'science',
          thumbnail: 'chemistry',
          duration: '17:45',
          url: 'https://www.youtube.com/embed/rz4Dd1I_fX0',
          description: 'Learn about the elements and structure of the periodic table in this fascinating video.'
        },
        {
          id: 'computer-video-2',
          title: 'Web Development Fundamentals',
          subject: 'computer',
          thumbnail: 'webdev',
          duration: '28:52',
          url: 'https://www.youtube.com/embed/qz0aGYrrlhU',
          description: 'Build a solid foundation in HTML, CSS, and JavaScript for web development.'
        }
      ]
    };
    
    // Select content based on media type (now only videos)
    const content = mediaContent.videos;
    
    // Create media cards
    content.forEach(item => {
      const mediaCard = document.createElement('div');
      mediaCard.className = 'media-card';
      mediaCard.dataset.mediaId = item.id;
      
      const subjectLabel = getSubjectName(item.subject);
      
      mediaCard.innerHTML = `
        <div class="media-thumbnail">
          <i class="${item.subject === 'math' ? 'ph-function' : 
                       item.subject === 'science' ? 'ph-atom' : 
                       item.subject === 'history' ? 'ph-scroll' :
                       item.subject === 'language' ? 'ph-pen-nib' : 'ph-code'}"></i>
          <span class="media-duration">${item.duration}</span>
        </div>
        <div class="media-content">
          <span class="media-subject">${subjectLabel}</span>
          <h3 class="media-title">${item.title}</h3>
          <p class="media-description">${item.description}</p>
          <button class="watch-btn">
            <i class="ph ph-play"></i> Watch Now
          </button>
        </div>
      `;
      
      mediaContainer.appendChild(mediaCard);
      
      // Add click event
      mediaCard.querySelector('.watch-btn').addEventListener('click', () => {
        this.openMedia(item);
      });
    });
  },
  
  openMedia(media) {
    const mediaModal = document.getElementById('mediaModal');
    const mediaTitle = document.getElementById('mediaTitle');
    const customVideoPlayer = document.getElementById('customVideoPlayer');
    const mediaPlayer = document.getElementById('mediaPlayer');
    
    if (mediaModal && mediaTitle) {
      mediaTitle.textContent = media.title;
      mediaModal.style.display = 'flex';
      
      // Add loading indicator
      const modalBody = mediaModal.querySelector('.modal-body');
      const loadingIndicator = document.createElement('div');
      loadingIndicator.className = 'media-loading-indicator';
      loadingIndicator.innerHTML = `
        <div class="loading-animation">
          <div class="loading-spinner"></div>
        </div>
        <div class="loading-text">
          <h3>Loading ${media.title}...</h3>
          <p>Your educational content is being prepared</p>
        </div>
      `;
      modalBody.appendChild(loadingIndicator);
      
      // All content is now treated as videos, not movies
      mediaPlayer.style.display = 'none';
      customVideoPlayer.style.display = 'block';
      customVideoPlayer.innerHTML = `
        <div class="custom-video-container">
          <video id="mainVideo" controls>
            <source src="${media.url}" type="video/mp4">
            Your browser does not support HTML5 video.
          </video>
          <div class="custom-video-controls">
            <button class="custom-play-btn"><i class="ph ph-play"></i></button>
            <div class="custom-progress">
              <div class="custom-progress-bar"></div>
            </div>
            <div class="custom-time">00:00 / ${media.duration}</div>
            <button class="custom-volume-btn"><i class="ph ph-speaker-high"></i></button>
            <button class="custom-fullscreen-btn"><i class="ph ph-arrows-out"></i></button>
          </div>
        </div>
      `;
      
      // Setup custom video controls
      setupCustomVideoPlayer();
      
      // Update loading indicator removal
      const video = document.getElementById('mainVideo');
      if (video) {
        video.addEventListener('loadeddata', () => {
          const indicator = document.querySelector('.media-loading-indicator');
          if (indicator) {
            indicator.classList.add('fade-out');
            setTimeout(() => indicator.remove(), 500);
          }
        });
      }
    }

    // Share with friends functionality
    document.getElementById('shareMediaBtn').addEventListener('click', function() {
      // Create share dialog
      const shareDialog = document.createElement('div');
      shareDialog.className = 'share-dialog';
      shareDialog.innerHTML = `
        <div class="share-dialog-content">
          <h3>Share with Friends</h3>
          <p>Share this educational content with your friends and classmates!</p>
          <div class="share-options">
            <button class="share-option email"><i class="ph ph-envelope"></i> Email</button>
            <button class="share-option twitter"><i class="ph ph-twitter-logo"></i> Twitter</button>
            <button class="share-option facebook"><i class="ph ph-facebook-logo"></i> Facebook</button>
            <button class="share-option copy"><i class="ph ph-link"></i> Copy Link</button>
          </div>
          <input type="text" readonly value="${window.location.origin}/media/${media.id}" class="share-link">
          <button class="share-close-btn">Close</button>
        </div>
      `;
      
      document.body.appendChild(shareDialog);
      
      // Add functionality to share buttons
      shareDialog.querySelector('.share-option.email').addEventListener('click', () => {
        window.location.href = `mailto:?subject=Check out this educational video: ${media.title}&body=I thought you might enjoy this educational content: ${window.location.origin}/media/${media.id}`;
      });
      
      shareDialog.querySelector('.share-option.copy').addEventListener('click', () => {
        const linkInput = shareDialog.querySelector('.share-link');
        linkInput.select();
        document.execCommand('copy');
        showNotification('Link Copied', 'The share link has been copied to your clipboard!', 'success');
      });
      
      shareDialog.querySelector('.share-close-btn').addEventListener('click', () => {
        shareDialog.remove();
      });
      
      // Trigger achievement for sharing
      if (window.achievements) {
        document.dispatchEvent(new CustomEvent('gameShared'));
      }
    });
  },
  
  initializeAchievements() {
    // If achievements don't exist in localStorage, initialize them
    if (!localStorage.getItem('enlightenAchievements')) {
      localStorage.setItem('enlightenAchievements', JSON.stringify(this.achievements));
    } else {
      // Update with any new achievements
      const savedAchievements = JSON.parse(localStorage.getItem('enlightenAchievements'));
      
      // Check for new achievements to add
      this.achievements.forEach(achievement => {
        if (!savedAchievements.some(saved => saved.id === achievement.id)) {
          savedAchievements.push(achievement);
        }
      });
      
      localStorage.setItem('enlightenAchievements', JSON.stringify(savedAchievements));
      this.achievements = savedAchievements;
    }
  },
  
  awardAchievement(achievementId) {
    const achievements = JSON.parse(localStorage.getItem('enlightenAchievements') || '[]');
    const achievement = achievements.find(a => a.id === achievementId);
    
    if (achievement && !achievement.awarded) {
      achievement.awarded = true;
      achievement.date = new Date().toISOString().split('T')[0];
      localStorage.setItem('enlightenAchievements', JSON.stringify(achievements));
      
      // Show notification
      showNotification('Achievement Unlocked!', achievement.title, 'success');
      
      // Update UI
      loadProgress();
    }
  },
  
  setupAchievementListeners() {
    // For test completion
    document.addEventListener('testCompleted', (e) => {
      const score = e.detail.score;
      
      if (score >= 90) {
        this.awardAchievement('perfect-score');
      }
      
      this.awardAchievement('first-test');
    });
    
    // For lesson completion
    document.addEventListener('lessonCompleted', () => {
      this.awardAchievement('first-lesson');
    });
    
    // For login streak
    document.addEventListener('loginStreakUpdated', (e) => {
      const streak = e.detail.streak;
      
      if (streak >= 7) {
        this.awardAchievement('streak-7');
      }
    });
    
    // For subject mastery
    document.addEventListener('subjectPerformanceUpdated', (e) => {
      const subject = e.detail.subject;
      const score = e.detail.score;
      
      if (score >= 85) {
        this.awardAchievement(`${subject}-mastery`);
      }
    });
  }
};

// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
  // Initialize the app
  initApp();
  
  // Add event listeners
  addEventListeners();
  
  // Load initial data
  loadUserDashboard();
  loadCourses();
  loadTests();
  loadProgress();
});

// Initialize the application
function initApp() {
  // Set theme and color preferences from localStorage or defaults
  const theme = localStorage.getItem('theme') || 'system';
  const color = localStorage.getItem('accentColor') || 'blue';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-color', color);
  
  // Check if there are saved user data
  const savedUserData = localStorage.getItem('enlightenUserData');
  if (savedUserData) {
    enlightenData.user = JSON.parse(savedUserData);
  }
  
  // Check login streak
  checkLoginStreak();
  
  // Initialize achievements
  enlightenData.initializeAchievements();
  enlightenData.setupAchievementListeners();
}

// Check login streak
function checkLoginStreak() {
  const lastLogin = new Date(enlightenData.user.lastLogin);
  const today = new Date();
  
  // Reset last login to today
  enlightenData.user.lastLogin = today.toISOString();
  
  // Check if last login was yesterday
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (lastLogin.toDateString() === yesterday.toDateString()) {
    // Increment streak
    enlightenData.user.streakDays++;
    // Show a notification
    showNotification('Login Streak', `You've logged in for ${enlightenData.user.streakDays} days in a row!`, 'success');
  } else if (lastLogin.toDateString() !== today.toDateString() && 
             lastLogin.getTime() < yesterday.getTime()) {
    // Streak broken
    enlightenData.user.streakDays = 1;
  }
  
  // Save updated user data
  saveUserData();
}

// Save user data to localStorage
function saveUserData() {
  localStorage.setItem('enlightenUserData', JSON.stringify(enlightenData.user));
}

// Add event listeners
function addEventListeners() {
  // Navigation tabs (desktop)
  document.getElementById('coursesBtn').addEventListener('click', function() {
    showSection('courses');
    this.classList.add('active');
    document.getElementById('testsBtn').classList.remove('active');
    document.getElementById('progressBtn').classList.remove('active');
  });
  
  document.getElementById('testsBtn').addEventListener('click', function() {
    showSection('tests');
    this.classList.add('active');
    document.getElementById('coursesBtn').classList.remove('active');
    document.getElementById('progressBtn').classList.remove('active');
  });
  
  document.getElementById('progressBtn').addEventListener('click', function() {
    showSection('progress');
    this.classList.add('active');
    document.getElementById('coursesBtn').classList.remove('active');
    document.getElementById('testsBtn').classList.remove('active');
  });
  
  // Mobile navigation
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      
      // Add active class to current nav item
      document.querySelectorAll('.mobile-nav-item').forEach(navItem => {
        navItem.classList.remove('active');
      });
      this.classList.add('active');
      
      // Handle different sections
      if (section === 'courses' || section === 'tests' || section === 'progress') {
        showSection(section);
      } else if (section === 'profile') {
        // Open settings modal
        document.getElementById('settingsModal').style.display = 'flex';
      }
    });
  });
  
  // Settings button
  document.getElementById('settingsBtn').addEventListener('click', function() {
    document.getElementById('settingsModal').style.display = 'flex';
  });
  
  // Close buttons for modals
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Find the parent modal
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
  
  // Subject filter chips
  document.querySelectorAll('.filter-chip[data-subject]').forEach(chip => {
    chip.addEventListener('click', function() {
      // Remove active class from all chips
      document.querySelectorAll('.filter-chip[data-subject]').forEach(c => {
        c.classList.remove('active');
      });
      
      // Add active class to clicked chip
      this.classList.add('active');
      
      // Filter courses
      const subject = this.getAttribute('data-subject');
      filterCourses(subject);
    });
  });
  
  // Test type filter chips
  document.querySelectorAll('.filter-chip[data-test-type]').forEach(chip => {
    chip.addEventListener('click', function() {
      // Remove active class from all chips
      document.querySelectorAll('.filter-chip[data-test-type]').forEach(c => {
        c.classList.remove('active');
      });
      
      // Add active class to clicked chip
      this.classList.add('active');
      
      // Filter tests
      const testType = this.getAttribute('data-test-type');
      filterTests(testType);
    });
  });
  
  // Settings tabs
  document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs and content
      document.querySelectorAll('.settings-tab').forEach(t => {
        t.classList.remove('active');
      });
      
      document.querySelectorAll('.settings-tab-content').forEach(c => {
        c.classList.remove('active');
      });
      
      // Add active class to clicked tab and its content
      this.classList.add('active');
      document.querySelector(`.settings-tab-content[data-tab-content="${tabId}"]`).classList.add('active');
    });
  });
  
  // Theme options
  document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', function() {
      const theme = this.getAttribute('data-theme');
      
      // Remove active class from all theme options
      document.querySelectorAll('.theme-option').forEach(o => {
        o.classList.remove('active');
      });
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Apply theme
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    });
  });
  
  // Color options
  document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
      const color = this.getAttribute('data-color');
      
      // Remove active class from all color options
      document.querySelectorAll('.color-option').forEach(o => {
        o.classList.remove('active');
      });
      
      // Add active class to clicked option
      this.classList.add('active');
      
      // Apply color
      document.documentElement.setAttribute('data-color', color);
      localStorage.setItem('accentColor', color);
    });
  });
  
  // Font size slider
  const fontSizeSlider = document.getElementById('fontSize');
  const fontSizeValue = document.getElementById('fontSizeValue');
  
  if (fontSizeSlider && fontSizeValue) {
    fontSizeSlider.addEventListener('input', function() {
      const value = this.value;
      fontSizeValue.textContent = `${value}%`;
      document.documentElement.style.fontSize = `${value}%`;
      localStorage.setItem('fontSize', value);
    });
  }
  
  // Update profile button
  const updateProfileBtn = document.getElementById('updateProfileBtn');
  if (updateProfileBtn) {
    updateProfileBtn.addEventListener('click', function() {
      const displayName = document.getElementById('displayName').value;
      const email = document.getElementById('emailAddress').value;
      
      // Update user data
      enlightenData.user.name = displayName;
      enlightenData.user.email = email;
      
      // Save user data
      saveUserData();
      
      // Update greeting
      document.getElementById('userGreeting').textContent = displayName;
      
      // Show success notification
      showNotification('Profile Updated', 'Your profile information has been updated successfully.', 'success');
    });
  }
  
  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to sign out?')) {
        // In a real app, this would sign out the user
        showNotification('Signed Out', 'You have been signed out successfully.', 'info');
        
        // Refresh the page after a short delay
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    });
  }
  
  // Export data button
  const exportDataBtn = document.getElementById('exportDataBtn');
  if (exportDataBtn) {
    exportDataBtn.addEventListener('click', function() {
      // Create a JSON blob
      const data = {
        user: enlightenData.user,
        testHistory: enlightenData.testHistory,
        achievements: enlightenData.achievements
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      
      // Create a download link
      const a = document.createElement('a');
      a.href = url;
      a.download = `enlighten_data_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      
      // Cleanup
      URL.revokeObjectURL(url);
      
      // Show notification
      showNotification('Data Exported', 'Your learning data has been exported successfully.', 'success');
    });
  }
  
  // Add media tab listeners
  document.getElementById('videosBtn').addEventListener('click', function() {
    showSection('media');
    this.classList.add('active');
    
    // Update media container with videos
    enlightenData.updateMediaSection('video');
  });
  
  // Mobile navigation for media
  document.querySelector('.mobile-nav-item[data-section="media"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    showSection('media');
    
    // Add active class to current nav item
    document.querySelectorAll('.mobile-nav-item').forEach(navItem => {
      navItem.classList.remove('active');
    });
    this.classList.add('active');
    
    // Always use videos now
    enlightenData.updateMediaSection('video');
  });
}

// Load user dashboard data
function loadUserDashboard() {
  // Update greeting
  document.getElementById('userGreeting').textContent = enlightenData.user.name;
  
  // Update stats
  document.getElementById('completedLessons').textContent = enlightenData.user.completedLessons;
  document.getElementById('completedTests').textContent = enlightenData.user.completedTests;
  document.getElementById('avgScore').textContent = `${enlightenData.user.avgScore}%`;
  document.getElementById('streakDays').textContent = enlightenData.user.streakDays;
  
  // Update profile settings
  document.getElementById('displayName').value = enlightenData.user.name;
  document.getElementById('emailAddress').value = enlightenData.user.email;
}

// Load courses
function loadCourses() {
  // Load all courses into the course grid
  loadAllCourses();
}

// Load all courses into the course grid
function loadAllCourses() {
  const courseGrid = document.getElementById('courseGrid');
  let html = '';
  
  enlightenData.courses.forEach(course => {
    html += `
      <div class="course-card" data-course-id="${course.id}">
        <div class="course-thumbnail">
          <i class="${course.icon}"></i>
        </div>
        <div class="course-content">
          <span class="course-subject">${getSubjectName(course.subject)}</span>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${course.description}</p>
          <div class="course-meta">
            <div class="course-meta-item">
              <i class="ph ph-book-open"></i>
              <span>${course.lessons.length} lessons</span>
            </div>
            <div class="course-meta-item">
              <i class="ph ph-clock"></i>
              <span>${course.duration}</span>
            </div>
            <span class="course-level level-${course.level}">${capitalizeFirstLetter(course.level)}</span>
          </div>
        </div>
      </div>
    `;
  });
  
  courseGrid.innerHTML = html;
  
  // Add click event for course cards
  courseGrid.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', function() {
      const courseId = this.getAttribute('data-course-id');
      const course = enlightenData.courses.find(c => c.id === courseId);
      
      if (course) {
        // If course has progress, open the current lesson
        if (course.progress > 0) {
          openLesson(courseId, `${courseId}-${course.currentLesson}`);
        } else {
          // Otherwise, open the first lesson
          openLesson(courseId, `${courseId}-1`);
        }
      }
    });
  });
}

// Filter courses by subject
function filterCourses(subject) {
  const courseGrid = document.getElementById('courseGrid');
  const courseCards = courseGrid.querySelectorAll('.course-card');
  
  courseCards.forEach(card => {
    const courseId = card.getAttribute('data-course-id');
    const course = enlightenData.courses.find(c => c.id === courseId);
    
    if (subject === 'all' || (course && course.subject === subject)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Load tests
function loadTests() {
  const testsGrid = document.getElementById('testsGrid');
  let html = '';
  
  enlightenData.tests.forEach(test => {
    // Determine status text and class
    let statusText = test.completed ? `Score: ${test.score}%` : 'Not started';
    let statusClass = test.completed ? 'status-completed' : 'status-not-started';
    
    html += `
      <div class="test-card" data-test-id="${test.id}">
        <div class="test-card-header">
          <div>
            <h3 class="test-card-title">${test.title}</h3>
            <p class="test-card-subject">${getSubjectName(test.subject)}</p>
          </div>
          <span class="test-card-badge badge-${test.type}">${capitalizeFirstLetter(test.type)}</span>
        </div>
        <div class="test-card-details">
          <div class="test-card-detail">
            <i class="ph ph-question"></i>
            <span>${test.questionCount} Questions</span>
          </div>
          <div class="test-card-detail">
            <i class="ph ph-timer"></i>
            <span>${test.timeLimit}</span>
          </div>
          <div class="test-card-detail">
            <i class="ph ph-trophy"></i>
            <span>Passing Score: ${test.passingScore}</span>
          </div>
        </div>
        <div class="test-card-actions">
          <span class="test-card-status ${statusClass}">${statusText}</span>
          <button class="test-btn">${test.completed ? 'Review' : 'Start'} Test</button>
        </div>
      </div>
    `;
  });
  
  testsGrid.innerHTML = html;
  
  // Add click event for test cards
  testsGrid.querySelectorAll('.test-card').forEach(card => {
    card.addEventListener('click', function() {
      // Only trigger if the click wasn't on the button
      if (!this.contains(event.target)) {
        const testId = this.getAttribute('data-test-id');
        openTest(testId);
      }
    });
  });
  
  // Add click event for test buttons
  testsGrid.querySelectorAll('.test-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent card click
      const testId = this.closest('.test-card').getAttribute('data-test-id');
      openTest(testId);
    });
  });
}

// Filter tests by type
function filterTests(type) {
  const testsGrid = document.getElementById('testsGrid');
  const testCards = testsGrid.querySelectorAll('.test-card');
  
  testCards.forEach(card => {
    const testId = card.getAttribute('data-test-id');
    const test = enlightenData.tests.find(t => t.id === testId);
    
    if (type === 'all' || (test && test.type === type)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Load progress data
function loadProgress() {
  // Load activity chart
  const activityChart = document.getElementById('activityChart');
  if (activityChart) {
    new Chart(activityChart, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Learning Activity (minutes)',
          data: [45, 60, 30, 90, 60, 75, 40],
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  // Load performance chart
  const performanceChart = document.getElementById('performanceChart');
  if (performanceChart) {
    new Chart(performanceChart, {
      type: 'radar',
      data: {
        labels: ['Mathematics', 'Science', 'History', 'Language Arts', 'Computer Science'],
        datasets: [{
          label: 'Performance',
          data: [85, 70, 60, 90, 75],
          fill: true,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: 'rgba(59, 130, 246, 1)',
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    });
  }
  
  // Load achievements
  const achievementsList = document.getElementById('achievementsList');
  if (achievementsList) {
    let html = '';
    
    enlightenData.achievements.forEach(achievement => {
      html += `
        <div class="achievement-item">
          <div class="achievement-icon">
            <i class="${achievement.icon}"></i>
          </div>
          <div class="achievement-info">
            <h4>${achievement.title}</h4>
            <p>${achievement.description}</p>
          </div>
          <span class="achievement-date">${formatDate(achievement.date)}</span>
        </div>
      `;
    });
    
    achievementsList.innerHTML = html;
  }
  
  // Load test history
  const testHistoryList = document.getElementById('testHistoryList');
  if (testHistoryList) {
    let html = '';
    
    enlightenData.testHistory.forEach(history => {
      // Determine score class
      let scoreClass = '';
      if (history.score >= 90) {
        scoreClass = 'score-high';
      } else if (history.score >= 70) {
        scoreClass = 'score-medium';
      } else {
        scoreClass = 'score-low';
      }
      
      html += `
        <div class="test-history-item">
          <div class="test-history-score ${scoreClass}">
            ${history.score}%
          </div>
          <div class="test-history-info">
            <h4>${history.title}</h4>
            <p>Time spent: ${history.timeSpent}</p>
          </div>
          <span class="test-history-date">${formatDate(history.date)}</span>
        </div>
      `;
    });
    
    testHistoryList.innerHTML = html;
  }
  
  updatePerformanceChart();
}

// Update performance tracking
function updatePerformanceChart() {
  const performanceChart = document.getElementById('performanceChart');
  if (!performanceChart) return;
  
  // Calculate performance for each subject
  const subjectPerformance = {
    'Mathematics': calculateSubjectPerformance('math'),
    'Science': calculateSubjectPerformance('science'),
    'History': calculateSubjectPerformance('history'),
    'Language Arts': calculateSubjectPerformance('language'),
    'Computer Science': calculateSubjectPerformance('computer')
  };

  new Chart(performanceChart, {
    type: 'radar',
    data: {
      labels: Object.keys(subjectPerformance),
      datasets: [{
        label: 'Subject Performance',
        data: Object.values(subjectPerformance),
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { display: true },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}

function calculateSubjectPerformance(subject) {
  // Find all tests for this subject
  const subjectTests = enlightenData.tests.filter(test => test.subject === subject);
  
  // If no tests, return 0
  if (subjectTests.length === 0) return 0;

  // Calculate average performance across tests
  const totalScore = subjectTests.reduce((sum, test) => {
    return sum + (test.score || 0);
  }, 0);

  return Math.round(totalScore / subjectTests.length);
}

// Open a lesson
function openLesson(courseId, lessonId) {
  const course = enlightenData.courses.find(c => c.id === courseId);
  
  if (!course) {
    showNotification('Error', 'Course not found.', 'error');
    return;
  }
  
  // Parse lesson number
  const lessonNumber = lessonId.includes('-') 
    ? parseInt(lessonId.split('-')[1]) 
    : parseInt(lessonId);
  
  const lesson = course.lessons[lessonNumber - 1];
  
  if (!lesson) {
    showNotification('Error', `Lesson ${lessonNumber} not found in ${course.title}.`, 'error');
    return;
  }
  
  // Update modal title and content
  document.getElementById('lessonTitle').textContent = lesson.title;
  document.getElementById('lessonContent').innerHTML = lesson.content;
  
  // Setup quiz for the lesson
  const quizContainer = document.getElementById('quizQuestions');
  const lessonQuiz = document.getElementById('lessonQuiz');
  const submitQuizBtn = document.getElementById('submitQuizBtn');
  
  if (lesson.quiz && lesson.quiz.length > 0) {
    let currentQuestionIndex = 0;
    let userAnswers = new Array(lesson.quiz.length).fill(null);

    function showQuestion(index) {
      if (index < 0 || index >= lesson.quiz.length) return;
      
      currentQuestionIndex = index;
      let question = lesson.quiz[index];
      
      let quizHtml = `
        <div class="quiz-question" data-question-index="${index}">
          <h4 class="question-text">${index + 1}. ${question.question}</h4>
          <div class="answer-options">
            ${question.options.map((option, optIndex) => `
              <label class="answer-option ${userAnswers[index] === optIndex ? 'selected' : ''}">
                <input type="radio" name="question_${index}" value="${optIndex}" ${userAnswers[index] === optIndex ? 'checked' : ''}>
                ${option}
              </label>
            `).join('')}
          </div>
        </div>
        <div class="question-navigation-controls">
          <button class="nav-btn" id="prevQuestionBtn" ${index === 0 ? 'disabled' : ''}>
            <i class="ph ph-arrow-left"></i> Previous Question
          </button>
          <span class="question-counter">${index + 1} / ${lesson.quiz.length}</span>
          <button class="nav-btn" id="nextQuestionBtn" ${index === lesson.quiz.length - 1 ? 'disabled' : ''}>
            Next Question <i class="ph ph-arrow-right"></i>
          </button>
        </div>
      `;
      
      quizContainer.innerHTML = quizHtml;

      // Navigation event listeners
      document.getElementById('prevQuestionBtn')?.addEventListener('click', () => {
        saveCurrentAnswer();
        showQuestion(currentQuestionIndex - 1);
      });

      document.getElementById('nextQuestionBtn')?.addEventListener('click', () => {
        saveCurrentAnswer();
        showQuestion(currentQuestionIndex + 1);
      });

      // Answer selection listeners
      quizContainer.querySelectorAll('.answer-option').forEach(option => {
        option.addEventListener('click', function() {
          const questionIndex = parseInt(this.closest('.quiz-question').getAttribute('data-question-index'));
          
          // Remove selected class from all options
          quizContainer.querySelectorAll(`.quiz-question[data-question-index="${questionIndex}"] .answer-option`).forEach(opt => {
            opt.classList.remove('selected');
          });
          
          // Add selected class to this option
          this.classList.add('selected');
          this.querySelector('input[type="radio"]').checked = true;
          
          // Save this answer
          userAnswers[questionIndex] = parseInt(this.querySelector('input').value);
        });
      });
    }

    function saveCurrentAnswer() {
      const selectedOption = document.querySelector(`input[name="question_${currentQuestionIndex}"]:checked`);
      if (selectedOption) {
        userAnswers[currentQuestionIndex] = parseInt(selectedOption.value);
      }
    }

    // Show first question initially
    showQuestion(0);
    lessonQuiz.style.display = 'block';

    // Submit quiz button
    submitQuizBtn.onclick = function() {
      // Save current question's answer
      saveCurrentAnswer();
      
      // Check if all questions are answered
      if (userAnswers.includes(null)) {
        showNotification('Incomplete Quiz', 'Please answer all questions before submitting.', 'warning');
        return;
      }
      
      submitLessonQuiz(lesson.quiz, userAnswers);
    };
  } else {
    lessonQuiz.style.display = 'none';
  }

  // Hide result section initially
  document.getElementById('lessonResult').style.display = 'none';
  
  // Show the modal
  document.getElementById('courseModal').style.display = 'flex';
}

// Open a test
function openTest(testId) {
  const test = enlightenData.tests.find(t => t.id === testId);
  
  if (!test) {
    showNotification('Error', 'Test not found.', 'error');
    return;
  }
  
  // Update modal title
  document.getElementById('testTitle').textContent = test.title;
  
  // Update test info
  document.getElementById('questionCount').textContent = `${test.questionCount} questions`;
  document.getElementById('timeLimit').textContent = test.timeLimit;
  document.getElementById('passingScore').textContent = test.passingScore;
  document.getElementById('testDescription').innerHTML = `<p>${test.description}</p>`;
  
  // Show intro, hide questions and results
  document.getElementById('testIntro').style.display = 'block';
  document.getElementById('testQuestions').style.display = 'none';
  document.getElementById('testResult').style.display = 'none';
  
  // Setup start button
  document.getElementById('startTestBtn').onclick = function() {
    startTest(test);
  };
  
  // If test is already completed, setup review button
  if (test.completed) {
    document.getElementById('startTestBtn').textContent = 'Review Test';
  } else {
    document.getElementById('startTestBtn').textContent = 'Begin Test';
  }
  
  // Show the modal
  document.getElementById('testModal').style.display = 'flex';
}

// Start a test
function startTest(test) {
  // Ensure test has at least 10 questions
  if (!test.questions || test.questions.length < 10) {
    const additionalQuestions = [];
    
    // Initialize or ensure questions array
    test.questions = test.questions || [];
    
    // Add enough questions to reach at least 10
    for (let i = 0; i < additionalQuestions.length && test.questions.length < 10; i++) {
      test.questions.push(additionalQuestions[i]);
    }
  }
  
  // Hide intro, show questions
  document.getElementById('testIntro').style.display = 'none';
  document.getElementById('testQuestions').style.display = 'block';
  
  // Setup question indicators
  const questionIndicators = document.getElementById('questionIndicators');
  let indicatorsHtml = '';
  
  for (let i = 0; i < test.questions.length; i++) {
    indicatorsHtml += `
      <div class="question-indicator ${i === 0 ? 'current' : ''}" data-question-index="${i}">
        ${i + 1}
      </div>
    `;
  }
  
  questionIndicators.innerHTML = indicatorsHtml;
  
  // Add click event for indicators
  questionIndicators.querySelectorAll('.question-indicator').forEach(indicator => {
    indicator.addEventListener('click', function() {
      const questionIndex = parseInt(this.getAttribute('data-question-index'));
      showTestQuestion(test, questionIndex);
    });
  });
  
  // Initialize current question
  let currentQuestionIndex = 0;
  
  // Show first question
  showTestQuestion(test, currentQuestionIndex);
  
  // Setup navigation buttons
  const prevQuestionBtn = document.getElementById('prevQuestionBtn');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  const finishTestBtn = document.getElementById('finishTestBtn');
  
  prevQuestionBtn.onclick = function() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showTestQuestion(test, currentQuestionIndex);
    }
  };
  
  nextQuestionBtn.onclick = function() {
    if (currentQuestionIndex < test.questions.length - 1) {
      currentQuestionIndex++;
      showTestQuestion(test, currentQuestionIndex);
    }
  };
  
  finishTestBtn.onclick = function() {
    if (confirm('Are you sure you want to finish the test?')) {
      finishTest(test);
    }
  };
  
  // Start timer if it's a new test
  if (!test.completed) {
    startTestTimer(test);
  }
}

// Show a specific test question
function showTestQuestion(test, questionIndex) {
  const questionContainer = document.getElementById('questionContainer');
  const question = test.questions[questionIndex];
  
  // Update question content
  let questionHtml = `
    <div class="quiz-question">
      <h4 class="question-text">${questionIndex + 1}. ${question.question}</h4>
      <div class="answer-options">
        ${question.options.map((option, optIndex) => `
          <label class="answer-option">
            <input type="radio" name="test_question_${questionIndex}" value="${optIndex}" ${test.completed && optIndex === question.correctAnswer ? 'checked' : ''}>
            ${option}
          </label>
        `).join('')}
      </div>
    </div>
    <div class="question-navigation-controls">
      <button class="nav-btn" id="prevQuestionBtn" ${questionIndex === 0 ? 'disabled' : ''}>
        <i class="ph ph-arrow-left"></i> Previous Question
      </button>
      <span class="question-counter">${questionIndex + 1} / ${test.questions.length}</span>
      <button class="nav-btn" id="nextQuestionBtn" ${questionIndex === test.questions.length - 1 ? 'disabled' : ''}>
        Next Question <i class="ph ph-arrow-right"></i>
      </button>
    </div>
  `;
  
  questionContainer.innerHTML = questionHtml;
  
  // Update indicators
  document.querySelectorAll('.question-indicator').forEach((indicator, index) => {
    indicator.classList.toggle('current', index === questionIndex);
  });
  
  // Update navigation buttons
  const prevQuestionBtn = document.getElementById('prevQuestionBtn');
  const nextQuestionBtn = document.getElementById('nextQuestionBtn');
  const finishTestBtn = document.getElementById('finishTestBtn');
  
  prevQuestionBtn.disabled = questionIndex === 0;
  nextQuestionBtn.disabled = questionIndex === test.questions.length - 1;
  
  // Show finish button on last question
  if (questionIndex === test.questions.length - 1) {
    nextQuestionBtn.style.display = 'none';
    finishTestBtn.style.display = 'block';
  } else {
    nextQuestionBtn.style.display = 'block';
    finishTestBtn.style.display = 'none';
  }
  
  // Add click event for answer options
  questionContainer.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', function() {
      if (test.completed) return; // Don't allow changes if test is completed
      
      // Remove selected class from all options
      questionContainer.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Add selected class to this option
      this.classList.add('selected');
      
      // Update indicator to show question has been answered
      document.querySelector(`.question-indicator[data-question-index="${questionIndex}"]`).classList.add('answered');
    });
  });
  
  // If test is completed, show correct answers
  if (test.completed) {
    questionContainer.querySelectorAll('.answer-option').forEach((option, index) => {
      if (index === question.correctAnswer) {
        option.classList.add('correct');
      }
    });
  }
}

// Start the test timer
function startTestTimer(test) {
  const timerDisplay = document.getElementById('timerDisplay');
  const timeLimit = parseInt(test.timeLimit);
  
  // Convert time limit to seconds
  let timeRemaining = timeLimit * 60;
  
  // Update timer display
  function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      finishTest(test);
    }
    
    timeRemaining--;
  }
  
  // Initial update
  updateTimer();
  
  // Start interval
  const timerInterval = setInterval(updateTimer, 1000);
  
  // Store interval ID to clear it later
  document.getElementById('testModal').setAttribute('data-timer-id', timerInterval);
}

// Finish the test
function finishTest(test) {
  // Clear timer interval
  const timerId = document.getElementById('testModal').getAttribute('data-timer-id');
  if (timerId) {
    clearInterval(parseInt(timerId));
  }
  
  // Calculate score
  const score = calculateTestScore(test);
  
  // Update test result UI
  document.getElementById('testScore').textContent = `${score}%`;
  document.getElementById('correctAnswers').textContent = `${Math.round(score * test.questions.length / 100)}/${test.questions.length}`;
  document.getElementById('timeTaken').textContent = document.getElementById('timerDisplay').textContent;
  
  // Set result icon and title
  const resultIcon = document.getElementById('resultIcon');
  const resultTitle = document.getElementById('resultTitle');
  const testFeedback = document.getElementById('testFeedback');
  
  if (score >= parseInt(test.passingScore)) {
    resultIcon.innerHTML = '<i class="ph ph-check-circle" style="color: var(--success); font-size: 3rem;"></i>';
    resultTitle.textContent = 'Test Passed!';
    testFeedback.textContent = 'Great job! You have successfully passed this test.';
  } else {
    resultIcon.innerHTML = '<i class="ph ph-x-circle" style="color: var(--error); font-size: 3rem;"></i>';
    resultTitle.textContent = 'Test Failed';
    testFeedback.textContent = 'Keep practicing! You can retake this test to improve your score.';
  }
  
  // Hide questions, show result
  document.getElementById('testQuestions').style.display = 'none';
  document.getElementById('testResult').style.display = 'block';
  
  // Setup result buttons
  document.getElementById('reviewTestBtn').onclick = function() {
    document.getElementById('testResult').style.display = 'none';
    startTest(test);
  };
  
  document.getElementById('retakeTestBtn').onclick = function() {
    if (confirm('Are you sure you want to retake this test?')) {
      test.completed = false;
      document.getElementById('testModal').style.display = 'none';
      setTimeout(() => {
        openTest(test.id);
      }, 300);
    }
  };
  
  document.getElementById('backToTestsBtn').onclick = function() {
    document.getElementById('testModal').style.display = 'none';
  };
  
  // Update test status
  test.completed = true;
  test.score = score;
  
  // Update user stats
  enlightenData.user.completedTests++;
  enlightenData.user.avgScore = Math.round((enlightenData.user.avgScore * (enlightenData.user.completedTests - 1) + score) / enlightenData.user.completedTests);
  
  // Add to test history
  enlightenData.testHistory.unshift({
    id: `test-history-${Date.now()}`,
    testId: test.id,
    title: test.title,
    score: score,
    date: new Date().toISOString().split('T')[0],
    timeSpent: document.getElementById('timerDisplay').textContent
  });
  
  // Save user data
  saveUserData();
  
  // Update dashboard stats
  document.getElementById('completedTests').textContent = enlightenData.user.completedTests;
  document.getElementById('avgScore').textContent = `${enlightenData.user.avgScore}%`;
  
  // Show notification
  showNotification('Test Completed', `You scored ${score}% on this test.`, score >= parseInt(test.passingScore) ? 'success' : 'warning');
}

// Calculate test score
function calculateTestScore(test) {
  let correctAnswers = 0;
  
  test.questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="test_question_${index}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === question.correctAnswer) {
      correctAnswers++;
    }
  });
  
  return Math.round((correctAnswers / test.questions.length) * 100);
}

// Submit a lesson quiz
function submitLessonQuiz(quizQuestions, answers) {
  let correctAnswers = 0;
  let answeredQuestions = 0;
  
  // Check each question
  quizQuestions.forEach((question, index) => {
    const selectedOption = answers[index];
    
    if (selectedOption !== null) {
      answeredQuestions++;
      if (selectedOption === question.correctAnswer) {
        correctAnswers++;
      }
    }
  });
  
  // Check if all questions are answered
  if (answeredQuestions < quizQuestions.length) {
    showNotification('Please Answer All Questions', 'You need to answer all questions before submitting.', 'warning');
    return;
  }
  
  // Calculate score
  const score = Math.round((correctAnswers / quizQuestions.length) * 100);
  
  // Update result UI
  document.getElementById('quizScore').textContent = `${score}%`;
  
  // Set result feedback
  const resultFeedback = document.getElementById('resultFeedback');
  
  if (score >= 80) {
    resultFeedback.textContent = 'Excellent! You have mastered this lesson.';
  } else if (score >= 60) {
    resultFeedback.textContent = 'Good job! You understand most of the concepts.';
  } else {
    resultFeedback.textContent = 'You may need to review this lesson for better understanding.';
  }
  
  // Hide quiz, show result
  document.getElementById('lessonQuiz').style.display = 'none';
  document.getElementById('lessonResult').style.display = 'block';
  
  // Setup result buttons
  document.getElementById('retryQuizBtn').onclick = function() {
    document.getElementById('lessonResult').style.display = 'none';
    document.getElementById('lessonQuiz').style.display = 'block';
    
    // Reset all answers
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.checked = false;
    });
    
    document.querySelectorAll('.answer-option').forEach(option => {
      option.classList.remove('selected');
    });
  };
  
  document.getElementById('nextLessonBtnResult').onclick = function() {
    const nextBtn = document.getElementById('nextLessonBtn');
    if (!nextBtn.disabled) {
      nextBtn.click();
    } else {
      document.getElementById('courseModal').style.display = 'none';
    }
  };
  
  // Update user stats
  enlightenData.user.completedLessons++;
  
  // Save user data
  saveUserData();
  
  // Update dashboard stats
  document.getElementById('completedLessons').textContent = enlightenData.user.completedLessons;
  
  // Show notification
  showNotification('Quiz Completed', `You scored ${score}% on this quiz.`, score >= 60 ? 'success' : 'warning');
}

// Show a notification
function showNotification(title, message, type = 'info') {
  const container = document.getElementById('notificationContainer') || createNotificationContainer();
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  // Set icon based on type
  let icon = 'ph-info';
  if (type === 'success') icon = 'ph-check-circle';
  if (type === 'error') icon = 'ph-x-circle';
  if (type === 'warning') icon = 'ph-warning';
  
  notification.innerHTML = `
    <div class="notification-icon">
      <i class="${icon}"></i>
    </div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <div class="notification-close">
      <i class="ph ph-x"></i>
    </div>
  `;
  
  // Add to container
  container.appendChild(notification);
  
  // Add close event
  notification.querySelector('.notification-close').addEventListener('click', function() {
    notification.remove();
  });
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  function createNotificationContainer() {
    const container = document.createElement('div');
    container.id = 'notificationContainer';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    container.style.maxWidth = '350px';
    document.body.appendChild(container);
    return container;
  }
}

// Helper Functions

// Get subject name
function getSubjectName(subject) {
  const subjects = {
    math: 'Mathematics',
    science: 'Science',
    history: 'History',
    language: 'Language Arts',
    computer: 'Computer Science'
  };
  
  return subjects[subject] || subject;
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Setup custom video player controls
function setupCustomVideoPlayer() {
  const video = document.getElementById('mainVideo');
  const playBtn = document.querySelector('.custom-play-btn');
  const progressBar = document.querySelector('.custom-progress-bar');
  const timeDisplay = document.querySelector('.custom-time');
  const volumeBtn = document.querySelector('.custom-volume-btn');
  const fullscreenBtn = document.querySelector('.custom-fullscreen-btn');
  
  if (!video || !playBtn || !progressBar) return;
  
  // Play/pause functionality
  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playBtn.innerHTML = '<i class="ph ph-pause"></i>';
    } else {
      video.pause();
      playBtn.innerHTML = '<i class="ph ph-play"></i>';
    }
  });
  
  // Update progress bar
  video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percent}%`;
    
    // Update time display
    const currentMinutes = Math.floor(video.currentTime / 60);
    const currentSeconds = Math.floor(video.currentTime % 60);
    const totalMinutes = Math.floor(video.duration / 60);
    const totalSeconds = Math.floor(video.duration % 60);
    
    timeDisplay.textContent = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')} / ${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
  });
  
  // Click on progress bar to seek
  document.querySelector('.custom-progress').addEventListener('click', (e) => {
    const progressWidth = document.querySelector('.custom-progress').offsetWidth;
    const clickPosition = e.offsetX;
    const seekTime = (clickPosition / progressWidth) * video.duration;
    video.currentTime = seekTime;
  });
  
  // Volume button
  let isMuted = false;
  volumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    video.muted = isMuted;
    volumeBtn.innerHTML = isMuted ? 
      '<i class="ph ph-speaker-none"></i>' : 
      '<i class="ph ph-speaker-high"></i>';
  });
  
  // Fullscreen button
  fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  });
}

// Update course lessons to remove video and focus on questions
enlightenData.courses.forEach(course => {
  course.lessons = course.lessons.map((lesson, lessonIndex) => ({
    id: `${course.id}-${lessonIndex + 1}`,
    title: `Lesson ${lessonIndex + 1}: ${lesson.title || 'Untitled'}`,
    content: `
      <h3>${lesson.title || 'Lesson Content'}</h3>
      <p>Key concepts for ${course.title}</p>
    `,
    quiz: {
      math: [
        {
          question: "What is the derivative of x²?",
          options: ["2x", "x", "x³", "2"],
          correctAnswer: 0
        },
        {
          question: "Solve the equation: 3x + 7 = 22",
          options: ["x = 5", "x = 6", "x = 4", "x = 3"],
          correctAnswer: 0
        },
        {
          question: "What is the area of a circle with radius 5?",
          options: ["25π", "10π", "50π", "15π"],
          correctAnswer: 0
        },
        {
          question: "Simplify: 2(x + 3) - 4",
          options: ["2x + 2", "2x + 6", "2x + 1", "2x + 5"],
          correctAnswer: 1
        },
        {
          question: "What is the square root of 64?",
          options: ["6", "8", "7", "9"],
          correctAnswer: 1
        },
        {
          question: "Find the slope of the line passing through points (2,3) and (5,9)",
          options: ["2", "3", "4", "6"],
          correctAnswer: 1
        },
        {
          question: "What is 15% of 200?",
          options: ["20", "30", "40", "50"],
          correctAnswer: 1
        },
        {
          question: "What is the next number in the sequence: 2, 4, 8, 16, ___?",
          options: ["24", "32", "64", "128"],
          correctAnswer: 1
        },
        {
          question: "Solve for x: x² = 25",
          options: ["x = ±5", "x = 5", "x = 25", "x = ±25"],
          correctAnswer: 0
        },
        {
          question: "What is the volume of a cube with side length 4?",
          options: ["16", "32", "64", "128"],
          correctAnswer: 2
        }
      ],
      science: [
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correctAnswer: 1
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Venus", "Jupiter", "Mars", "Saturn"],
          correctAnswer: 2
        },
        {
          question: "What is the chemical symbol for water?",
          options: ["Wa", "H2O", "O2", "H2"],
          correctAnswer: 1
        },
        {
          question: "What is the process by which plants make their own food?",
          options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
          correctAnswer: 1
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Platinum"],
          correctAnswer: 2
        },
        {
          question: "Which of these is NOT a state of matter?",
          options: ["Solid", "Liquid", "Gas", "Plasma"],
          correctAnswer: 3
        },
        {
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Brain", "Liver", "Skin"],
          correctAnswer: 3
        },
        {
          question: "What is the primary gas in Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          correctAnswer: 2
        },
        {
          question: "Which type of radiation has the longest wavelength?",
          options: ["Gamma rays", "X-rays", "Ultraviolet", "Radio waves"],
          correctAnswer: 3
        },
        {
          question: "What is the process of a liquid turning into a gas called?",
          options: ["Melting", "Freezing", "Evaporation", "Condensation"],
          correctAnswer: 2
        }
      ],
      history: [
        {
          question: "In what year did World War II end?",
          options: ["1943", "1945", "1947", "1950"],
          correctAnswer: 1
        }
      ],
      language: [
        {
          question: "What is a metaphor?",
          options: [
            "A comparison using 'like' or 'as'",
            "A direct comparison",
            "A figure of speech that describes something by stating it is something else",
            "A type of verb"
          ],
          correctAnswer: 2
        }
      ],
      computer: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
          ],
          correctAnswer: 0
        }
      ]
    }[course.subject] || []
  }));
});

// Show section function
function showSection(sectionName) {
  // Hide all content sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Hide all mobile nav items
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.classList.remove('active');
  });

  // Show the selected section
  const selectedSection = document.getElementById(`${sectionName}Section`);
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  // Update active state for desktop navigation buttons
  const buttons = {
    'courses': document.getElementById('coursesBtn'),
    'tests': document.getElementById('testsBtn'),
    'progress': document.getElementById('progressBtn'),
    'media': document.getElementById('videosBtn')
  };

  // Reset all buttons
  Object.values(buttons).forEach(btn => {
    if (btn) btn.classList.remove('active');
  });

  // Activate corresponding button
  if (buttons[sectionName]) {
    buttons[sectionName].classList.add('active');
  }

  // Update mobile nav item
  const mobileNavItem = document.querySelector(`.mobile-nav-item[data-section="${sectionName}"]`);
  if (mobileNavItem) {
    mobileNavItem.classList.add('active');
  }

  // Special handling for media section
  if (sectionName === 'media') {
    enlightenData.updateMediaSection('video');
  }
}