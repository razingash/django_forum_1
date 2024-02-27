//поиск в заголовке
document.addEventListener('DOMContentLoaded', function() {
    const crossButton = document.querySelector('.header__svg-cross');
    const crossButton2 = document.querySelector('.header__search');
    const searchContainer = document.querySelector('.search__container');
    const searchResults = document.querySelector('.search__results')

    var items = document.querySelectorAll('.subject__item');
    items[0].classList.add('active');

    crossButton.addEventListener('click', function() {
        searchContainer.classList.remove('active');
    });
    crossButton2.addEventListener('click', function() {
        searchContainer.classList.add('active');
    });

    items.forEach(function(item) {
        item.addEventListener('click', function() {

          items.forEach(function(innerItem) {
              innerItem.classList.remove('active');
          });
          searchResults.innerHTML = '';
          item.classList.add('active');
        });
    });
    const crossButtonQuestion = document.querySelector('.header__svg-cross');
    const crossButtonCross = document.querySelector('.header__search');
});