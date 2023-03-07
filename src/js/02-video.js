
  const iframe = document.querySelector('iframe');
  const player = new Vimeo.Player(iframe);

  player.on('play', function() {
      console.log('played the video!');
  });

  player.getVideoTitle().then(function(title) {
      console.log('title:', title);
  });

  
  const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);



// При перезагрузке страницы воспользуйся методом setCurrentTime() 
// для того чтобы возобновить воспроизведение с сохраненной позиции.

player.play().then(function() {
    // the video was played
}).catch(function(error) {
    switch (error.name) {
        case 'PasswordError':
            // the video is password-protected and the viewer needs to enter the
            // password first
            break;

        case 'PrivacyError':
            // the video is private
            break;

        default:
            // some other error occurred
            break;
    }
});