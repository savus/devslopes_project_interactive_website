const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const root = document.documentElement;

/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

const setTheme = (val) => {
   if (val === dark) {
      root.setAttribute(dataTheme, dark);
      localStorage.setItem(theme, dark);
   } else {
      root.setAttribute(dataTheme, light);
      localStorage.setItem(theme, light);
   }
};

toggleTheme.addEventListener('click', function() {
   const tab = this.parentElement.parentElement;
   if (!tab.className.includes(open)) {
      tab.classList.add(open);
   } else {
      tab.classList.remove(open);
   }
});

for (const elm of switcher) {
   elm.addEventListener('click', function() {
      const toggle = this.dataset.toggle;
      //set active state
      setActive(elm, switcherBtn);
      setTheme(toggle);
   });
}


/* Modal */ 
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


// Full site modal 'open buttons'
for (const elm of openModal) {
   elm.addEventListener('click', function() {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
   });
}

for (const elm of closeModal) {
   elm.addEventListener('click', function() {
      this.parentElement.parentElement.classList.remove(isVisible);
   });
}  
