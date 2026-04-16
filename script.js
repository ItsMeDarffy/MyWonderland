let currentTimeout = null;

// ======================
//  CHANGE TEXT HERE
// ======================

// DARFFY.bin - Main welcome message
const darffyMessage = `oh hello! welcome to my little corner on the internet <3

If you're reading this... it means my art actually touched your heart, and that makes me super happy!

Your prescribed task is to check my socials and follow me everywhere!

I'd appreciate your support so much.

Thank you very much, my dear follower :)`;

// README.txt message
const readmeMessage = `hellooo~

This page was made with lots of love <3

I hope you like it! It was inspired by the Project Moon prescript device ;>

Feel free to explore and say hi whenever you want!`;

// ABOUTME.txt - Polished version
const aboutmeMessage = `You can call me Darffy, a 3D artist from Colombia <3

I speak Spanish as my native language, but I also know English, so feel free to chat with me in whichever language you prefer :)

I love making low poly characters and silly animations! 
I'm still trying to find an art style that truly fits me.

I’m a huge Project Moon fan! Did you know I played all three games? 
Lobotomy Corporation, Library of Ruina, and Limbus Company ;>

I also love Souls-like games and tactical shooters!

So if you want to be friends, I’ll happily play whatever you want with you :)
Or if you want to exchange art or just talk, I’m always available!

Don’t be shy haha, I’ll be waiting for your reply :D`;

// Clean typing function
function startTyping(elementId, message) {
  const element = document.getElementById(elementId);
  
  if (currentTimeout) clearTimeout(currentTimeout);
  
  element.textContent = '';
  
  let i = 0;

  function type() {
    if (i < message.length) {
      element.textContent += message.charAt(i);
      i++;
      currentTimeout = setTimeout(type, 42);
    } else {
      currentTimeout = null;
    }
  }
  
  type();
}

// Initial load
startTyping('prescript-text', darffyMessage);

// Sidebar switching
document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    document.querySelectorAll('.content-page').forEach(page => page.classList.remove('active'));

    const target = this.getAttribute('data-target');
    document.getElementById(target + '-content').classList.add('active');

    // Restart typing with correct message
    if (target === 'darffy') {
      startTyping('prescript-text', darffyMessage);
    } else if (target === 'readme') {
      startTyping('readme-text', readmeMessage);
    } else if (target === 'aboutme') {
      startTyping('aboutme-text', aboutmeMessage);
    }
  });
});

// Link click with _CLEAR.
document.querySelectorAll('.link-item').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const url = this.getAttribute('data-url');

    const clearOverlay = document.getElementById('clear-overlay');
    const clearText = document.getElementById('clear-text');
    clearText.textContent = '';
    clearOverlay.classList.add('show');

    let j = 0;
    const clearMsg = "_CLEAR.";

    function typeClear() {
      if (j < clearMsg.length) {
        clearText.textContent += clearMsg.charAt(j);
        j++;
        setTimeout(typeClear, 70);
      } else {
        setTimeout(() => {
          window.open(url, '_blank');
          clearOverlay.classList.remove('show');
        }, 800);
      }
    }
    typeClear();
  });
});