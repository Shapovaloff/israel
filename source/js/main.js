'use strict';

(function () {
  var tabsButtons = document.querySelectorAll('.controls__item');
  var tabsElement = document.querySelectorAll('.tabs__item');

  var activeTabsButton = function (indexButtons) {
    tabsButtons.forEach(function (item) {
      item.classList.remove('controls__item--active');
      if (indexButtons === item) {
        item.classList.add('controls__item--active');
      }
    });
  };

  var activeTabsElement = function (indexElement) {
    tabsElement.forEach(function (item, index) {
      item.classList.remove('tabs__item--active');
      if (index === indexElement) {
        item.classList.add('tabs__item--active');
      }
    });
  };

  tabsButtons.forEach(function (item, index) {
    item.addEventListener('click', function () {
      activeTabsElement(index);
      activeTabsButton(item);
    });
  });
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
    orderPopup.classList.add('popup--active');
  };

  window.closeOrderPopup = function (evt) {
    evt.preventDefault();
    bodyElement.classList.remove('no-scroll');
    orderPopup.classList.remove('popup--active');
  };

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESCAPE) {
      if (orderPopup.classList.contains('popup--active')) {
        window.closeOrderPopup(evt);
      }
    }
  });

  orderButton.addEventListener('click', function (evt) {
    openOrderPopup(evt);
  });

  orderClose.addEventListener('click', function (evt) {
    window.closeOrderPopup(evt);
  });

  orderOverlay.addEventListener('click', function (evt) {
    window.closeOrderPopup(evt);
  });
})();

// Функция реализации модального окна "Заявка отправлена"

(function () {
  var ESCAPE = 27;
  var bodyElement = document.querySelector('body');
  var feedbackButton = document.querySelector('.feedback__button');
  var contactsButton = document.querySelector('.contacts__form-btn');
  var popupSuccess = document.querySelector('.popup--success');
  var overlaySuccess = document.querySelector('.popup__overlay--success');
  var popupCloseSuccess = document.querySelector('.popup__close--success');
  var popupOrderButton = document.querySelector('.popup__button--order');
  var popupSuccessButton = document.querySelector('.popup__button--success');

  var openSuccessPopup = function (evt) {
    evt.preventDefault();
    popupSuccess.classList.add('popup--active');
    bodyElement.classList.add('no-scroll');
  };

  var closeSuccessPopup = function () {
    popupSuccess.classList.remove('popup--active');
    bodyElement.classList.remove('no-scroll');
  };

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
  });
})();
