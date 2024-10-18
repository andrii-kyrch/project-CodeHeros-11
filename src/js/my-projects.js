import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import pathIcons from '../img/icons.svg';
import pathImg1 from '../img/my-projects/wallet-webservice.webp';
import pathImg2 from '../img/my-projects/green-harvest-online-store.webp';
import pathImg3 from '../img/my-projects/english-excellence-webservice.webp';
import pathImg4 from '../img/my-projects/power-pulse-webservice.webp';
import pathImg5 from '../img/my-projects/mimino-website.webp';
import pathImg6 from '../img/my-projects/vyshyvanka-vibes-landing-page.webp';
import pathImg7 from '../img/my-projects/chego-jewelry-website.webp';
import pathImg8 from '../img/my-projects/energy-flow-webservice.webp';
import pathImg9 from '../img/my-projects/fruitbox-online-store.webp';
import pathImg10 from '../img/my-projects/starlight-studio-landing-page.webp';

const loadMoreBtn = document.getElementById('loadMoreBtn');
const projectList = document.querySelector('.my-projects-list');
let projectsLoaded = 0;
const projectsPerLoad = 3;

function loadProjects() {
  for (let i = 0; i < projectsPerLoad; i++) {
    if (projectsLoaded < totalProjects.length) {
      const project = totalProjects[projectsLoaded];

      const li = document.createElement('li');
      li.classList.add('my-projects-item');
      li.innerHTML = `
        <img class="project-img" src="${project.imgSrc}" alt="${project.altText}" />
        <p class="hard-skills">${project.skills}</p>
        <div class="project-item-box">
          <h3 class="project-name">${project.name}</h3>
        <a href="https://github.com/andrii-kyrch/project-CodeHeros-11/blob/main/src/js/my-projects.js" target="_blank" class="button-link">
            Visit
            <svg class="link-icon" width="24" height="24">
              <use href="${pathIcons}#arrow"></use>
            </svg>
          </a>
        </div>
      `;
      projectList.appendChild(li);
      projectsLoaded++;
    }
  }

  if (projectsLoaded >= totalProjects.length) {
    loadMoreBtn.style.display = 'none';
    iziToast.info({
      title: 'Info',
      message: 'There are no more projects to display.',
      position: 'topRight',
    });
  }
}

const totalProjects = [
  {
    imgSrc: pathImg1,
    altText: 'Wallet Webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Wallet Webservice',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg2,
    altText: 'Green harvest online store',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Green harvest online store',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg3,
    altText: 'English excellence webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg4,
    altText: 'Power pulse webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Power pulse webservice',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg5,
    altText: 'Mimino website',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Mimino website',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg6,
    altText: 'Vyshyvanka vibes Landing Page',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Vyshyvanka vibes Landing Page',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg7,
    altText: 'Chego jewelry website',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Chego jewelry website',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg8,
    altText: 'Energy flow webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Energy flow webservice',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg9,
    altText: 'Fruitbox online store',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Fruitbox online store',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
  {
    imgSrc: pathImg10,
    altText: 'Starlight studio landing page',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Starlight studio landing page',
    githubLink: 'https://github.com/andrii-kyrch/project-CodeHeros-11',
  },
];

loadMoreBtn.addEventListener('click', loadProjects);

document.addEventListener('DOMContentLoaded', () => {
  loadProjects();

  if (projectsLoaded < totalProjects.length) {
    loadMoreBtn.style.display = 'block';
  }
});
