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


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// document는 html문서자체를 말하는 거라면 window는 브라우저의 하나의 탭(창)을 의미한다.
// 화면 자체를 스크롤 할 때의 로직
// 스크롤이 될때마다 함수가 실행되므로 이를 제어하기 위한 'lodash'라이브러리를 cdn으로 받는다.
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 요소를 숨긴다.
    // badgeEl.style.display = 'none';
    // gsap(요소, 지속시간, 옵션);
    // 지정한 요소가 0.6초동안 opacity값을 점점 0으로 만든다.
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0 // x축으로 얼마만큼 이동할것이지 지정
    });
  } else {
    // 배지 요소를 보인다.
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100 // x축으로 얼마만큼 이동할것이지 지정
    });
  }
}, 300)); // _.throttle(함수, 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 // scrollTo 플러그인이 있다면 scrollTo 옵션을 통해 원하는 지점으로 스크롤을 이동시킬 수 있다.
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 수 있는 슬라이드의 개수
  spaceBetween: 10, // 슬라이드 사이 여백 10px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000  // 5s
  },
  pagination: {
    el: '.promotion .swiper-pagination',  // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', 기본값으로 설정되어 있다.
  autoplay: true,
  loop: true,
  spaceBetween: 30, // 슬라이드 사이 여백 30px
  slidesPerView: 5,
  navigation: {
    preveEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-forward'
  }
}); 

// promotionToggleBtn을 클릭할시 promotionEl에 'hide'클래스를 추가해
// css 스타일을 적용해 보임 및 숨김 처리를 해주기 위해 실행한다.
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션(객체));
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // 위에서 20Px만큼 내려오는 애니메이션이 실행된다.
    repeat: -1,  // -1 : 무한반복
    yoyo: true,  // 한번 재생된 애니메이션을 다시 뒤로 돌린다.
    ease: Power1.easeInOut, // gsap easing을 검색해 다양한 애니메이션 효과들을 불러올 수 있다.
    delay: random(0, delay)  // 몇초뒤에 애니메이션이 실행될지 지연시간을 지정한다.
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8,  // 트리거 요소가 뷰포트의 어느 위치에서 걸리면 실행될지 지정
  })
  .setClassToggle(spyEl, 'show')  // 다룰 요소가 대상이 되었을때 'Show'클래스를 추가해준다.
  .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // textContent: 텍스트 값을 지정 (2023)