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

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';


const root = document.documentElement;

// const portFolioInfo = [
//    { 
//       dataItem : 'web',
//       imgSrc : './assets/images/portfolio-1.jpg',
//       divText : 'Web Development',
//       headerText : 'Food Website',
//    },
//    { 
//       dataItem : 'web',
//       imgSrc : './assets/images/portfolio-2.jpg',
//       divText : 'Web Development',
//       headerText : 'Skate Website',
//    },
//    { 
//       dataItem : 'web',
//       imgSrc : './assets/images/portfolio-3.jpg',
//       divText : 'Web Development',
//       headerText : 'Eating Website',
//    },
//    { 
//       dataItem : 'ui',
//       imgSrc : './assets/images/portfolio-4.jpg',
//       divText : 'UI Design',
//       headerText : 'Cool Design',
//    },
//    { 
//       dataItem : 'app',
//       imgSrc : './assets/images/portfolio-5.jpg',
//       divText : 'App Development',
//       headerText : 'Game App',
//    },
//    { 
//       dataItem : 'app',
//       imgSrc : './assets/images/portfolio-6.jpg',
//       divText : 'App Development',
//       headerText : 'Gambling App',
//    },
//    { 
//       dataItem : 'app',
//       imgSrc : './assets/images/portfolio-7.jpg',
//       divText : 'App Development',
//       headerText : 'Money Website',
//    },
//    { 
//       dataItem : 'ui',
//       imgSrc : './assets/images/portfolio-8.jpg',
//       divText : 'UI Design',
//       headerText : 'Fantastic Design',
//    },
// ];

// for (const card of portFolioInfo) {
//    const portfolioCard = document.createElement('div');
   
//    portfolioCard.className = 'portfolio-card';
//    portfolioCard.setAttribute('data-item', card.dataItem);
   
//    const cardBody = document.createElement('div');
//    cardBody.className = 'card-body';
   
//    const image = document.createElement('img');
//    image.setAttribute('src', card.imgSrc);
//    image.setAttribute('alt', 'portfolio-icon');
//    cardBody.appendChild(image);
   
//    const link = document.createElement('a');
//    link.setAttribute('href', '#');
//    link.className = 'card-popup-box';
   
//    const linkDiv = document.createElement('div');
//    linkDiv.innerHTML = card.divText;
//    link.appendChild(linkDiv);
   
//    const linkHeader = document.createElement('h3');
//    linkHeader.innerHTML = card.headerText;
//    link.appendChild(linkHeader);
   
//    cardBody.appendChild(link);
   
//    portfolioCard.appendChild(cardBody);
   
//    document.querySelector('.portfolio-grid').appendChild(portfolioCard);
// }


/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

const setTheme = (val) => {
   if (val === dark) {
      root.setAttribute(dataTheme, dark);
      localStorage.setItem(theme, dark);
   } else {
      root.setAttribute(dataTheme, light);
      localStorage.setItem(theme, light);
   }
};

if (currentTheme) {
   root.setAttribute(dataTheme, currentTheme);
   switcher.forEach((btn) => {
      btn.classList.remove(active);
   });
}

if (currentTheme === dark) {
   switcher[1].classList.add(active);
} else {
   switcher[0].classList.add(active);
}

const setActive = (elm, selector) => {
   if (document.querySelector(`${selector}.${active}`) !== null) {
      document.querySelector(`${selector}.${active}`).classList.remove(active);
   } 
   elm.classList.add(active);
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

searchBox.addEventListener('keyup', (e) => {
   const searchInput = e.target.value.toLowerCase().trim();
   portfolioItems.forEach((card) => {
      if (card.dataset.item.includes(searchInput)) {
         card.style.display = 'block';
      } else {
         card.style.display = 'none';
      }
   });
});

for (const link of filterLink) {
   link.addEventListener('click', function(){
      setActive(link, '.filter-link');
      const filter = this.dataset.filter;
      portfolioItems.forEach((card) => {
         if (filter === 'all') {
            card.style.display = 'block';
         } else if (card.dataset.item === filter) {
            card.style.display = 'block';
         } else {
            card.style.display = 'none';
         }
      });
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

