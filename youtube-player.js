class YouTubeCustomPlayer {
  constructor(videoId, container, options = {}) {
    this.videoId = videoId;
    this.container = container;
    this.options = {
      autoplay: options.autoplay || false,
      title: options.title || 'Video Player',
      apiKey: options.apiKey || 'AiZaSyDFko_ouqtmkabLfElMHTU_LAjD35EavUY'
    };
    
    this.player = null;
    this.playerState = -1;
    this.videoLoaded = false;
    this.duration = 0;
    
    this.init();
  }
  
  init() {
    // Create player container
    this.playerContainer = document.createElement('div');
    this.playerContainer.className = 'custom-youtube-player';
    this.playerContainer.style.aspectRatio = '16/9';
    
    // Create YouTube iframe
    this.iframe = document.createElement('iframe');
    this.iframe.id = 'youtube-iframe';
    this.iframe.width = '100%';
    this.iframe.height = '100%';
    this.iframe.style.border = 'none';
    this.iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    this.iframe.allowFullscreen = true;
    
    // Parameters for the YouTube iframe API
    const params = new URLSearchParams({
      enablejsapi: 1,
      origin: window.location.origin,
      rel: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      autoplay: this.options.autoplay ? 1 : 0
    });
    
    this.iframe.src = `https://www.youtube.com/embed/${this.videoId}?${params.toString()}`;
    
    // Add iframe to container
    this.playerContainer.appendChild(this.iframe);
    
    // Create custom controls overlay
    this.createControls();
    
    // Add title overlay
    this.titleOverlay = document.createElement('div');
    this.titleOverlay.className = 'video-title-overlay';
    this.titleOverlay.textContent = this.options.title;
    this.playerContainer.appendChild(this.titleOverlay);
    
    // Add player to container
    this.container.appendChild(this.playerContainer);
    
    // Initialize YouTube API
    this.loadYouTubeAPI();
  }
  
  loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      this.setupPlayer();
      return;
    }
    
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    window.onYouTubeIframeAPIReady = () => {
      this.setupPlayer();
    };
  }
  
  setupPlayer() {
    this.player = new YT.Player('youtube-iframe', {
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this)
      }
    });
  }
  
  onPlayerReady(event) {
    this.videoLoaded = true;
    this.duration = this.player.getDuration();
    this.updateDurationDisplay();
    
    // Start progress tracking
    this.progressInterval = setInterval(() => {
      this.updateProgressBar();
    }, 500);
  }
  
  onPlayerStateChange(event) {
    this.playerState = event.data;
    
    // Update play/pause button
    if (this.playerState === YT.PlayerState.PLAYING) {
      this.playButton.innerHTML = '<i class="ph ph-pause"></i>';
    } else {
      this.playButton.innerHTML = '<i class="ph ph-play"></i>';
    }
  }
  
  onPlayerError(event) {
    console.error('YouTube player error:', event.data);
    
    // Show error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `
      <i class="ph ph-warning"></i>
      <p>An error occurred. Please try again later.</p>
    `;
    this.playerContainer.appendChild(errorMessage);
  }
  
  createControls() {
    // Controls overlay
    this.controlsOverlay = document.createElement('div');
    this.controlsOverlay.className = 'custom-controls-overlay';
    
    // Play/Pause button
    this.playButton = document.createElement('button');
    this.playButton.className = 'custom-play-btn';
    this.playButton.innerHTML = '<i class="ph ph-play"></i>';
    this.playButton.addEventListener('click', this.togglePlay.bind(this));
    
    // Progress bar
    this.progressContainer = document.createElement('div');
    this.progressContainer.className = 'custom-progress';
    this.progressContainer.addEventListener('click', this.seekTo.bind(this));
    
    this.bufferBar = document.createElement('div');
    this.bufferBar.className = 'custom-buffer-bar';
    this.progressContainer.appendChild(this.bufferBar);
    
    this.progressBar = document.createElement('div');
    this.progressBar.className = 'custom-progress-bar';
    this.progressContainer.appendChild(this.progressBar);
    
    // Time display
    this.timeDisplay = document.createElement('div');
    this.timeDisplay.className = 'custom-time';
    this.timeDisplay.textContent = '00:00 / 00:00';
    
    // Volume button
    this.volumeButton = document.createElement('button');
    this.volumeButton.className = 'custom-volume-btn';
    this.volumeButton.innerHTML = '<i class="ph ph-speaker-high"></i>';
    this.volumeButton.addEventListener('click', this.toggleMute.bind(this));
    
    // Fullscreen button
    this.fullscreenButton = document.createElement('button');
    this.fullscreenButton.className = 'custom-fullscreen-btn';
    this.fullscreenButton.innerHTML = '<i class="ph ph-corners-out"></i>';
    this.fullscreenButton.addEventListener('click', this.toggleFullscreen.bind(this));
    
    // Add all elements to controls
    this.controlsOverlay.appendChild(this.playButton);
    this.controlsOverlay.appendChild(this.progressContainer);
    this.controlsOverlay.appendChild(this.timeDisplay);
    this.controlsOverlay.appendChild(this.volumeButton);
    this.controlsOverlay.appendChild(this.fullscreenButton);
    
    // Add controls to player
    this.playerContainer.appendChild(this.controlsOverlay);
    
    // Add overlay div that will catch click events for play/pause
    this.overlay = document.createElement('div');
    this.overlay.className = 'youtube-overlay';
    this.overlay.addEventListener('click', this.togglePlay.bind(this));
    this.playerContainer.appendChild(this.overlay);
  }
  
  togglePlay() {
    if (!this.videoLoaded) return;
    
    if (this.playerState === YT.PlayerState.PLAYING) {
      this.player.pauseVideo();
    } else {
      this.player.playVideo();
    }
  }
  
  toggleMute() {
    if (!this.videoLoaded) return;
    
    if (this.player.isMuted()) {
      this.player.unMute();
      this.volumeButton.innerHTML = '<i class="ph ph-speaker-high"></i>';
    } else {
      this.player.mute();
      this.volumeButton.innerHTML = '<i class="ph ph-speaker-x"></i>';
    }
  }
  
  toggleFullscreen() {
    if (this.playerContainer.requestFullscreen) {
      this.playerContainer.requestFullscreen();
    } else if (this.playerContainer.webkitRequestFullscreen) {
      this.playerContainer.webkitRequestFullscreen();
    } else if (this.playerContainer.msRequestFullscreen) {
      this.playerContainer.msRequestFullscreen();
    }
  }
  
  seekTo(event) {
    if (!this.videoLoaded) return;
    
    const rect = this.progressContainer.getBoundingClientRect();
    const pos = (event.clientX - rect.left) / rect.width;
    const seekToTime = pos * this.duration;
    
    this.player.seekTo(seekToTime, true);
  }
  
  updateProgressBar() {
    if (!this.videoLoaded) return;
    
    // Get current time
    const currentTime = this.player.getCurrentTime() || 0;
    
    // Update progress bar width
    const progress = (currentTime / this.duration) * 100;
    this.progressBar.style.width = `${progress}%`;
    
    // Update buffer bar
    const bufferProgress = this.player.getVideoLoadedFraction() * 100;
    this.bufferBar.style.width = `${bufferProgress}%`;
    
    // Update time display
    this.updateTimeDisplay(currentTime);
  }
  
  updateTimeDisplay(currentTime) {
    const current = this.formatTime(currentTime);
    const total = this.formatTime(this.duration);
    this.timeDisplay.textContent = `${current} / ${total}`;
  }
  
  updateDurationDisplay() {
    const total = this.formatTime(this.duration);
    this.timeDisplay.textContent = `00:00 / ${total}`;
  }
  
  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  destroy() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
    }
    
    if (this.player) {
      this.player.destroy();
    }
    
    this.container.innerHTML = '';
  }
}

// Example usage
function openMedia(media) {
  const mediaModal = document.getElementById('mediaModal');
  const mediaTitle = document.getElementById('mediaTitle');
  const mediaPlayer = document.getElementById('mediaPlayer');
  const customVideoPlayerContainer = document.getElementById('customVideoPlayer');
  
  if (mediaModal && mediaTitle) {
    mediaTitle.textContent = media.title;
    mediaModal.style.display = 'flex';
    
    // Hide both players initially
    if (mediaPlayer) mediaPlayer.style.display = 'none';
    if (customVideoPlayerContainer) customVideoPlayerContainer.innerHTML = '';
    
    // Create custom YouTube player
    if (media.youtubeId) {
      // Create and initialize custom player
      customVideoPlayerContainer.style.display = 'block';
      
      // Clear previous player if exists
      if (this.customPlayer) {
        this.customPlayer.destroy();
      }
      
      // Create new player with autoplay set to true
      this.customPlayer = new YouTubeCustomPlayer(
        media.youtubeId,
        customVideoPlayerContainer,
        {
          title: media.title,
          autoplay: true,
          apiKey: 'AiZaSyDFko_ouqtmkabLfElMHTU_LAjD35EavUY'
        }
      );
    }
  }
}