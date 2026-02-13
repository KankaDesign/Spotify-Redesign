const panel = document.getElementById('panel');
const expandBtn = document.getElementById('expandBtn');

let expanded = false;
let collapseTimeout = null;

expandBtn.addEventListener('click', () => {
  expanded = true;
  panel.classList.add('expanded');

  panel.addEventListener('mouseleave', () => {
    if (collapseTimeout) clearTimeout(collapseTimeout);
    collapseTimeout = setTimeout(() => {
      panel.classList.remove('expanded');
      expanded = false;
    }, 300); 
  });

  panel.addEventListener('mouseenter', () => {
    if (collapseTimeout) clearTimeout(collapseTimeout);
  });
});

const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
    });
    
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'images/icons/sun.png';
    } else {
        themeIcon.src = 'images/icons/moon.png';
    }
});