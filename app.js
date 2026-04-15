const dropdown = document.querySelector('.dropdown');

function hamburg() {
  if (dropdown) {
    dropdown.style.transform = 'translateY(0px)';
  }
}

function cancel() {
  if (dropdown) {
    dropdown.style.transform = 'translateY(-500px)';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  AOS.init({ offset: 0 });

  const greetingText = "Hello, I’m Zobia Khan — Frontend Developer.";
  const typingTarget = document.querySelector('.typing-text');
  const typingCursor = document.querySelector('.typing-cursor');
  let charIndex = 0;

  function typeGreeting() {
    if (!typingTarget) return;
    if (charIndex < greetingText.length) {
      typingTarget.textContent += greetingText.charAt(charIndex);
      charIndex += 1;
      setTimeout(typeGreeting, 80);
    } else if (typingCursor) {
      typingCursor.classList.add('blink');
    }
  }

  typeGreeting();

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.querySelector('#contact-name')?.value.trim();
      const email = document.querySelector('#contact-email')?.value.trim();
      const message = document.querySelector('#contact-message')?.value.trim();
      const subject = encodeURIComponent(`Portfolio message from ${name || 'visitor'}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const replyTo = encodeURIComponent(email || '');
      const mailtoLink = `mailto:khanzobia279@gmail.com?subject=${subject}&body=${body}&reply-to=${replyTo}&from=${replyTo}`;

      window.location.href = mailtoLink;
      contactForm.reset();
    });
  }

  const navLinks = document.querySelectorAll('.dropdown .links a');
  navLinks.forEach((link) => {
    link.addEventListener('click', cancel);
  });
});
