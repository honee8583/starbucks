const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// .search 영역을 클릭할경우 input요소가 포커스된다
searchEl.addEventListener('click', function() {
  searchInputEl.focus();  // 포커스를 강제적용한다.
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // textContent: 텍스트 값을 지정 (2023)