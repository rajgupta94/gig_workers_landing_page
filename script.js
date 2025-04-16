const form = document.getElementById('signupForm');
    const thankYou = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const skill = document.getElementById('skill').value;
      const portfolio = document.getElementById('portfolio').value.trim();

      if (!name || !email || !skill || !portfolio) {
        alert('Please fill out all fields correctly.');
        return;
      }

      form.style.display = 'none';
      thankYou.style.display = 'block';
    });