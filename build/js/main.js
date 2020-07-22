'use strict';

// Якорный скролл

(function () {
  var scrollButton = document.querySelector('.page-header__button');
  var aboutSection = document.querySelector('.about');

  scrollButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    aboutSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})();

// Реализация табов

(function () {
  var tabsButtons = document.querySelectorAll('.controls__item');
  var tabsElement = document.querySelectorAll('.tabs__item');

  var activeTabsButton = function (indexButtons) {
    for (var i = 0; i < tabsButtons.length; i++) {
      tabsButtons[i].classList.remove('controls__item--active');
      if (indexButtons === tabsButtons[i]) {
        tabsButtons[i].classList.add('controls__item--active');
      }
    }
  }

  var activeTabsElement = function (element) {
    for (var i = 0; i < tabsElement.length; i++) {
      tabsElement[i].classList.remove('tabs__item--active');
      if (i === element) {
        tabsElement[i].classList.add('tabs__item--active');
      }
    }
  };

  var activeTab = function (item, index) {
    item.addEventListener('click', function () {
      activeTabsElement(index);
      activeTabsButton(item);
    });
  }

  for (var i = 0; i < tabsButtons.length; i++) {
    activeTab(tabsButtons[i], i)
  }
})();

// Функция открытия и загрытия модального окна "Заказать звонок"

(function () {
  var ESCAPE = 27;
  var orderButton = document.querySelector('.page-header__order');
  var bodyElement = document.querySelector('body');
  var orderPopup = document.querySelector('.popup--order');
  var orderClose = orderPopup.querySelector('.popup__close--order');
  var orderOverlay = orderPopup.querySelector('.popup__overlay--order');

  var openOrderPopup = function (evt) {
    evt.preventDefault();
    bodyElement.classList.add('no-scroll');
    orderPopup.classList.add('popup--active')
  }

  window.closeOrderPopup = function (evt) {
    evt.preventDefault();
    bodyElement.classList.remove('no-scroll');
    orderPopup.classList.remove('popup--active')
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (orderPopup.classList.contains('popup--active')) {
        closeOrderPopup(evt);
      }
    }
  });

  orderButton.addEventListener('click', function (evt) {
    openOrderPopup(evt)
  });

  orderClose.addEventListener('click', function (evt) {
    window.closeOrderPopup(evt);
  });

  orderOverlay.addEventListener('click', function (evt) {
    window.closeOrderPopup(evt);
  })
})();

// Функция реализации модального окна "Заявка отправлена"

(function () {
  var ESCAPE = 27;
  var bodyElement = document.querySelector('body');
  var feedbackButton = document.querySelector('.feedback__button');
  var contactsButton = document.querySelector('.contacts__form-btn');
  var popupSuccess = document.querySelector('.popup--success');
  var overlaySuccess = document.querySelector('.popup__overlay--success');
  var popupCloseSuccess = document.querySelector('.popup__close--success')
  var popupOrderButton = document.querySelector('.popup__button--order');
  var popupSuccessButton = document.querySelector('.popup__button--success');

  var openSuccessPopup = function (evt) {
    evt.preventDefault();
    popupSuccess.classList.add('popup--active')
    bodyElement.classList.add('no-scroll');
  }

  var closeSuccessPopup = function () {
    popupSuccess.classList.remove('popup--active');
    bodyElement.classList.remove('no-scroll');
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (popupSuccess.classList.contains('popup--active')) {
        closeSuccessPopup(evt);
      }
    }
  });

  feedbackButton.addEventListener('click', function (evt) {
    openSuccessPopup(evt);
  });

  contactsButton.addEventListener('click', function (evt) {
    openSuccessPopup(evt);
  });

  popupSuccessButton.addEventListener('click', closeSuccessPopup);
  overlaySuccess.addEventListener('click', closeSuccessPopup);
  popupCloseSuccess.addEventListener('click', closeSuccessPopup);

  popupOrderButton.addEventListener('click', function (evt) {
    window.closeOrderPopup(evt);
    openSuccessPopup(evt);
  })
})();

// Добавляет окрытие и закрытие вопроса в блоке "Частые воросы"

(function () {
  var questionsItem = document.querySelectorAll('.questions__item');
  var questionsButton = document.querySelectorAll('.questions__heading')

  var activeItem = function (item, index) {
    item.addEventListener('click', function () {
      for (var i = 0; i < questionsItem.length; i++) {
        if (index === i) {
          questionsItem[i].classList.toggle('questions__item--active');
        }
      }
    });
  };

  for (var i = 0; i < questionsButton.length; i++) {
    activeItem(questionsButton[i], i);
  }
})();
