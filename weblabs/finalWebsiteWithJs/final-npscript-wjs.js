
  let npSequence = '';
  
  document.addEventListener('keydown', function(e) {
    const key = e.key.toLowerCase(); // capture the pressed key in lowercase

    npSequence += key;

    // Keep the last 2 characters only
    if (npSequence.length > 2) {
      npSequence = npSequence.slice(-2);
    }

    if (npSequence === 'np') {
      alert("You're welcome!");
      
      // Optional: reset sequence so it doesn’t trigger again accidentally
      npSequence = '';
    }
  });