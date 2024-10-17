// Імпорт бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Знаходимо елементи DOM
const loadMoreBtn = document.getElementById('loadMoreBtn');
const projectListItems = document.querySelectorAll('.my-projects-item');
let projectsLoaded = 0; // Кількість завантажених проектів
const projectsPerLoad = 3; // Скільки проектів завантажувати за один раз

// Функція для початкового приховування всіх проектів, крім перших 3
function initProjects() {
  console.log('Initializing projects...');
  
  projectListItems.forEach((item, index) => {
    if (index >= projectsPerLoad) {
      item.style.display = 'none'; // Ховаємо всі проекти, крім перших 3
    }
  });

  // Якщо є більше проектів для завантаження, показуємо кнопку
  if (projectListItems.length > projectsPerLoad) {
    loadMoreBtn.style.display = 'block';
    console.log('Load more button displayed');
  } else {
    loadMoreBtn.style.display = 'none';
  }
}

// Функція для завантаження наступних проектів при кліку на кнопку
function loadMoreProjects() {
  console.log('Load more clicked');
  
  const remainingProjects = projectListItems.length - projectsLoaded;
  const projectsToLoad = Math.min(remainingProjects, projectsPerLoad);

  // Показуємо наступні проекти
  for (let i = 0; i < projectsToLoad; i++) {
    const project = projectListItems[projectsLoaded + i];
    project.style.display = 'block'; 
  }

  // Плавний скрол до останнього завантаженого проекту
  const lastVisibleProject = projectListItems[projectsLoaded + projectsToLoad - 1];
  if (lastVisibleProject) {
    lastVisibleProject.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  // Оновлюємо кількість завантажених проектів
  projectsLoaded += projectsToLoad;
  console.log(`Projects loaded: ${projectsLoaded}`);

  // Якщо завантажені всі проекти
  if (projectsLoaded >= projectListItems.length) {
    loadMoreBtn.style.display = 'none'; 
    console.log('All projects loaded, hiding load more button');

    // Використовуємо iziToast для показу повідомлення
    iziToast.info({
      title: 'Info',
      message: 'There are no more projects to display.',
      position: 'topRight', 
      timeout: 3000, 
    });
  }
}

// Початкове налаштування проектів при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  initProjects();

  // Додаємо подію на кнопку для завантаження більше проектів
  loadMoreBtn.addEventListener('click', loadMoreProjects);
});
