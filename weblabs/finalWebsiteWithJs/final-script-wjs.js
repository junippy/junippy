var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b',
      78: 'n',
      80: 'p'
    };

    var konamiCode = ['up','up','down','down','left','right','left','right','b','a'];
    var position = 0;

    document.addEventListener('keydown', function(e) {
      var key = allowedKeys[e.keyCode];
      var requiredKey = konamiCode[position];

      if (key === requiredKey) {
        position++;
        if (position === konamiCode.length) {
          localStorage.setItem('secret4', 'true');
          confetti();
          alert('Secret #4 found!');
          checkAllSecrets();
          position = 0;
        }
      } else {
        position = 0;
      }
    });

    // Hover secrets
    function revealSecret(key) {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, 'true');
        alert(`You found ${key === 'hover1' ? 'Secret #1' : 'Secret #2'}!`);
        confetti();
        checkAllSecrets();
      }
    }

    function revealSecret2(key) {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, 'true');
        alert(`You found ${key === 'hover2' ? 'Secret #2' : 'Secret #1'}!`);
        confetti();
        checkAllSecrets();
      }
    }

    // Password logic
    function checkPassword() {
      const input = document.getElementById('passwordInput').value.trim().toLowerCase();
      const correctPassword = 'gnihsifbew';

      if (input === correctPassword) {
        if (!localStorage.getItem('secret3')) {
          localStorage.setItem('secret3', 'true');
          alert('Correct! Secret #3 unlocked!');
          confetti();
          checkAllSecrets();
        }
      } else {
        alert('Wrong password!');
      }
    }

    // Check if all secrets are found
    function checkAllSecrets() {
      if (
        localStorage.getItem('hover1') === 'true' &&
        localStorage.getItem('hover2') === 'true' &&
        localStorage.getItem('secret3') === 'true' &&
        localStorage.getItem('secret4') === 'true'
      ) {
        document.getElementById('secretBtn').style.display = 'inline-block';
      }
    }

    // On load, check if they already found all
    window.onload = checkAllSecrets;

    // When you press the <a>, it resets the local storage and takes you back to the home page.
    function resetAndGoHome() {
    // Only remove secret-related keys
    ['hover1', 'hover2', 'secret3', 'secret4'].forEach(k => localStorage.removeItem(k));
    
    // Then redirect
    window.location.href = "/weblabs/finalWebsiteWithJs/final-index-wjs.html";
  }
