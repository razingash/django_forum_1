// Карточка пользователя
document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.querySelector('.profile__card');
    const closeBtn = document.querySelector('.card__close');
    const profileExtension = document.querySelector('.profile__extension');

    closeBtn.addEventListener('click', function() {
        profileCard.style.display = 'none';
    });
    profileExtension.addEventListener('click', function() {
        if (profileCard.style.display === 'flex') {
            profileCard.style.display = 'none';
        } else {
            profileCard.style.display = 'flex';
        }
    });
});
// заголовок поиска в профиле
/*
document.addEventListener('DOMContentLoaded', function() {
    var items2 = document.querySelectorAll('.second-header__item');
    items2[0].classList.add('current__item');

    items2.forEach(function(item) {
        item.addEventListener('click', function() {

          items2.forEach(function(innerItem) {
            innerItem.classList.remove('current__item');
          });

          item.classList.add('current__item');
        });
    });
});*/