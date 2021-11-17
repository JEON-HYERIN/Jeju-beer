'use strict';

// header include
$('.header-include').load('../include/header.html', function () {
  setCurrentNav();
  // 토글버튼 클릭시 드롭메뉴 활성화
  const toggleBtn = document.querySelector('.toggle-btn');
  const navEls = document.querySelectorAll('#header nav');
  toggleBtn.addEventListener('click', function () {
    navEls.forEach(function (navEl) {
      navEl.classList.toggle('open');
    });
    header.classList.toggle('white');
  });
  // now navigation
  function setCurrentNav() {
    var bodyClass = $('body').attr('class');
    var classArray = bodyClass.split(' ');
    if (classArray[0] === 'main') return false;
    $('#header nav .main-menu li').each(function () {
      if ($(this).attr('data-link') === classArray[0]) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  }
});

// footer include
$('.footer-include').load('../include/footer.html', function () {
  // 올해년도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
});

// modal include
$('.modal-include').load('../include/modal.html', function () {
  // 상단버튼(top-btn)
  const header = document.querySelector('#header');
  const headerHeight = header.getBoundingClientRect().height;
  const topBtn = document.querySelector('#floating-btns .top-btn a');

  window.addEventListener('scroll', _.throttle(function () {
    if(window.pageYOffset > headerHeight) {
      topBtn.parentElement.classList.remove('invisible');
    } else {
      topBtn.parentElement.classList.add('invisible');
    }
  }, 300));

  topBtn.addEventListener('click', function () {
    header.scrollIntoView({behavior: "smooth"});
  });
  // 링크버튼(link-btn)
  const shareEl = document.querySelector('#share-modal');
  const linkBtn = document.querySelector('#floating-btns .link-btn a');
  linkBtn.addEventListener('click', function () {
    shareEl.classList.remove('invisible');
    enable();
  });

  shareEl.addEventListener('click', function () {
    shareEl.classList.add('invisible');
    disable();
  });

  // url버튼 클릭시 alert 실행
  const urlBtn = shareEl.querySelector('.url-btn');
  urlBtn.addEventListener('click', function() {
    alert('URL이 복사 되었습니다. 원하시는 곳에 붙여넣기 해 주세요.');
  });

  // inquiry modal창 활성화
  const chatBtn = document.querySelector('#floating-btns .chat-btn a');
  const inquiryEl = document.querySelector('#inquiry-modal');
  const closeBtn = inquiryEl.querySelector('.btn.close');
  const fadeInEls = inquiryEl.querySelectorAll('.fade-in');
  const inquiryHours = inquiryEl.querySelector('.show-hours');
  const inquiryHoursOpen = inquiryEl.querySelector('.business-hours');

  chatBtn.addEventListener('click', function () {
    inquiryEl.classList.remove('invisible');
    header.scrollIntoView();
    fadeInEls.forEach(function(fadeInEl) {
      fadeInEl.classList.remove('fade-in');
    });
  });

  closeBtn.addEventListener('click', function () {
    inquiryEl.classList.add('invisible');
    inquiryHoursOpen.classList.remove('open');
    fadeInEls.forEach(function(fadeInEl) {
      fadeInEl.classList.add('fade-in');
    });
  });

  // inquiry 운영시간 보기
  inquiryHours.addEventListener('click', function () {
    inquiryHoursOpen.classList.toggle('open');
  });

  // inquiry url복사 버튼
  const messengerEl = inquiryEl.querySelector('.messenger');
  const copyBtn = document.querySelector('.messenger__links li:nth-child(2) button.btn');

  copyBtn.addEventListener('click', function () {
    alert('링크가 복사되었습니다!');
  });

  // 운영시간 체크(9 to 6)
  const hours = new Date().getHours();
  const day = new Date().getDay();
  const inquiryDescriptionEls = inquiryEl.querySelectorAll('.inquiry-modal__top .description div');

  if ((hours >= 9 && hours < 18) && (day >= 1 && day <= 5)) {
    inquiryDescriptionEls.forEach(function (el, index) {
      switch (index) {
        case 0:
          el.textContent = '응답시간 보통';
          el.classList.remove('night');
          break;
        case 1:
          el.textContent = '보통 수십 분 내에 응답합니다.';
          break;
      }
    });
  } else {
    inquiryDescriptionEls.forEach(function (el, index) {
      switch (index) {
        case 0:
          el.textContent = '운영시간 아님';
          el.classList.add('night');
          break;
        case 1:
          el.textContent = '오전 9시부터 상담이 운영됩니다.';
          break;
      }
    });
  }
});