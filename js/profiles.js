import { projects } from './projects.js';

const tags = [
  { title: 'All', tag: 'all' },
  { title: 'HTML/CSS', tag: 'html/css' },
  { title: 'JavaScript', tag: 'javascript' },
  { title: 'React', tag: 'react' },
  { title: 'Node.js', tag: 'node.js' },
  { title: 'Python', tag: 'python' },
  { title: 'C#', tag: 'c#' },
];

const card = ({ name, title, description, tags, img }) =>
  `<li class="portfolio-item">
    <a class="portfolio-item-link link" href="">
        <div class="portfolio-item-img-wrapper">            
            <img
                class="portfolio-item-img"
                src="./images/portfolio/${name}/${img[0]}"
                alt= ${description}
                width="360"
                loading="lazy"
            />
            <p class="portfolio-item-overlay">
            ${description}
            </p>
        </div>

        <div class="portfolio-content-wraper">
            <h2 class="portfolio-item-title">${title}</h2>
            <p class="section-item-text">${tags.join(', ')}</p>
        </div>
    </a>
</li>`;

const portfolioMenu = document.querySelector('.portfolio-menu');

portfolioMenu.innerHTML = '';

const menu = tags
  .map(
    ({ title, tag }) => `
<li class="portfolio-menu-item">
    <button class="portfolio-menu-btn btn" type="button" data-tag="${tag}">${title}</button>
</li>
`
  )
  .join('');

portfolioMenu.innerHTML = menu;

const menuBtns = document.querySelectorAll('.portfolio-menu-btn');

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;

    if (tag === 'all') {
      portfolioList.innerHTML = projects.map(project => card(project)).join('');
      return;
    }

    const filteredProjects = projects.filter(project => project.tags.includes(tag));
    portfolioList.innerHTML = filteredProjects.map(project => card(project)).join('');
  });
});

portfolioMenu.addEventListener('click', event => {
  const target = event.target;
});

const portfolioList = document.querySelector('.portfolio-list');

portfolioList.innerHTML = projects.map(project => card(project)).join('');
