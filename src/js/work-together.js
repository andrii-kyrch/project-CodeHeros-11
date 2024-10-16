
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.feedback-form');
  const modal = document.querySelector('.backdrop');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const emailInput = document.querySelector('.input-email');
  const errorMessage = document.querySelector('.error-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const comment = formData.get('message');

      
      const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
      emailInput.classList.add('error'); 
      errorMessage.style.display = 'block'; 
      return;
    } else {
      emailInput.classList.remove('error'); 
      errorMessage.style.display = 'none'; 
    }
      
      
      
    const data = {
      email: email,
      comment: comment,
    };

    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Не вдалося надіслати заявку. Перевірте введені дані.');
      }

      form.reset();
      openModal();
    } catch (error) {
      alert(error.message);
    }
  });

  function openModal() {
    modal.classList.add('is-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
  }

  modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
