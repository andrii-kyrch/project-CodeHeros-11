# Team CodeHeros

Вітаю! Це наш груповий проект. Нижче ви знайдете інформацію для роботи з
проектом.

## Учасники проєкту

- Yura Danko - Секція Hero
- Елена Жувак - Секція Tech Skills
- Оксана Коваль - Секція My projects
- Jana Sternad - Секція Benefits
- Nelia Demenska - **Scrum Master** / Секція FAQ
- Мирошник Александра - Секція Reviews
- Roman Rymshyn - Секція About me
- Andrii Kyrch - **Team Lead** / Секція Header
- Kseniia Tretiakova - Секція Footer
- Vlad Nadbailov - Секція Work together

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Склонуйте проект на комп’ютер:
   - HTTP `git clone https://github.com/andrii-kyrch/project-CodeHeros-11.git`
   - SSH `git clone git@github.com:andrii-kyrch/project-CodeHeros-11.git`
3. Створіть гілку і перейдіть в неї:

   - `git checkout -B branch-name`

   _Назва гілки може бути будь-яка, але краще використовувати прив’язку до
   задачі в Trello_

> [!IMPORTANT] Не забувайте перевіряти назву гілки в якій ви працюєте!

4. Встанови базові залежності проекту в терміналі командою `npm install`.
5. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
6. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Команди Git для роботи

- `git status` - Подивитись актуальну гілку
- `git branch` - Подивитись список всіх гілок
- `git branch branch-name` - Створити нову гілку
- `git checkout branch-name` - Переключитись на гілку
- `git checkout -B branch-name` - Створити і одразу переключитись на гілку
- `git branch -D branch-name` - Видалити гілку
- `git pull` - Отримати оновлення в робочу гілку
- `git merge main` - Оновити робочу гілку з гілки main
