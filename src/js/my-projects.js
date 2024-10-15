import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loadMoreBtn = document.getElementById('loadMoreBtn');
const projectList = document.querySelector('.my-projects-list');
let projectsLoaded = 0;
const projectsPerLoad = 3;


async function fetchProjects() {
  try {
    const response = await axios.get('/api/projects'); 
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load projects. Please try again later.',
      position: 'topRight',
    });
    return [];
  }
}

// Список всіх проєктів 
const totalProjects = [
  {
    imgSrc: '/img/img-my-projects/wallet-webservice.jpg',
    altText: 'Wallet Webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Wallet Webservice',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/green-harvest-online-store.jpg',
    altText: 'Green harvest online store',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Green harvest online store',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/english-excellence-webservice.jpg',
    altText: 'English excellence webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'English excellence webservice',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/power-pulse-webservice.jpg',
    altText: 'Power pulse webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Power pulse webservice',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/mimino-website.jpg',
    altText: 'Mimino website',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Mimino website',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/vyshyvanka-vibes-landing-page.jpg',
    altText: 'Vyshyvanka vibes Landing Page',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Vyshyvanka vibes Landing Page',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/chego-jewelry-website.jpg',
    altText: 'Chego jewelry website',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Chego jewelry website',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/energy-flow-webservice.jpg',
    altText: 'Energy flow webservice',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Energy flow webservice',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/fruitbox-online-store.jpg',
    altText: 'Fruitbox online store',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Fruitbox online store',
    githubLink: 'https://github.com/project-repo'
  },
  {
    imgSrc: '/img/img-my-projects/starlight-studio-landing-page.jpg',
    altText: 'Starlight studio landing page',
    skills: 'React, JavaScript, Node JS, Git',
    name: 'Starlight studio landing page',
    githubLink: 'https://github.com/project-repo'
  }
];

// Функція для завантаження проєктів
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
          <a href="${project.githubLink}" target="_blank" class="button-link">
            Visit
            <svg class="link-icon" width="24" height="24">
              <use href="/img/sprite.svg#arrow"></use>
            </svg>
          </a>
        </div>
      `;
      projectList.appendChild(li);
      projectsLoaded++;
    }
  }

  // Якщо всі проекти завантажені, ховаємо кнопку "Load more"
  if (projectsLoaded >= totalProjects.length) {
    loadMoreBtn.style.display = 'none';  
    iziToast.info({
      title: 'Info',
      message: 'There are no more projects to display.',
      position: 'topRight',
    });
  }
}


loadMoreBtn.addEventListener('click', loadProjects);


document.addEventListener('DOMContentLoaded', () => {
  loadProjects();  

  
  if (projectsLoaded < totalProjects.length) {
    loadMoreBtn.style.display = 'block';  
  }
});

