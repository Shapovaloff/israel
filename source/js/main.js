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
  };

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
  };

  for (var i = 0; i < tabsButtons.length; i++) {
    activeTab(tabsButtons[i], i);
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
  var fieldName = orderPopup.querySelector('input[type="text"]');

  var openOrderPopup = function (evt) {
    evt.preventDefault();
    bodyElement.classList.add('no-scroll');
    orderPopup.classList.add('popup--active');
    fieldName.focus();
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

// Добавляет окрытие и закрытие вопроса в блоке "Частые воросы"

(function () {
  var questionsItem = document.querySelectorAll('.questions__item');
  var questionsButton = document.querySelectorAll('.questions__heading');

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


// Маска для телефона
(function () {
  var fieldPhone = document.querySelectorAll('input[type="tel"]');

  var validateTel = function (element) {
    window.imaskJS(element, {
      min: 110,
      mask: '+7 (000) 000 00 00'
    });
  };

  fieldPhone.forEach(function (input) {
    validateTel(input);
  });

})();

// Функция валидации формы

(function () {
  var TYPE_NAME = 'text';
  var TYPE_CHECKBOX = 'checkbox';
  var TYPE_TEL = 'tel';

  var validatesField = function (fieldsName, evt) {
    if (fieldsName.type === TYPE_NAME && fieldsName.value.length < 2) {
      evt.preventDefault();
      fieldsName.classList.add('input--invalid');
    } else if (fieldsName.type === TYPE_CHECKBOX && !fieldsName.checked) {
      evt.preventDefault();
      fieldsName.classList.add('input--invalid');
    } else if (fieldsName.type === TYPE_TEL && fieldsName.value.length < 18) {
      evt.preventDefault();
      fieldsName.classList.add('input--invalid');
    }
  };

  var requiredField = function (fieldsName) {
    fieldsName.addEventListener('input', function () {
      if (fieldsName.type === TYPE_NAME && fieldsName.value > 2) {
        fieldsName.classList.remove('input--invalid');
      } else if (fieldsName.type === TYPE_CHECKBOX && fieldsName.checked) {
        fieldsName.classList.remove('input--invalid');
      } else if (fieldsName.type === TYPE_TEL && fieldsName.value.length >= 18) {
        fieldsName.classList.remove('input--invalid');
      }
    });
  };

  window.validatesForm = function (fields, evt) {
    for (var i = 0; i < fields.length; i++) {
      validatesField(fields[i], evt);
      requiredField(fields[i]);
    }
  };
})();

// Функция реализации модального окна "Заявка отправлена"

(function () {
  var ESCAPE = 27;
  var bodyElement = document.querySelector('body');
  var popupSuccess = document.querySelector('.popup--success');
  var overlaySuccess = document.querySelector('.popup__overlay--success');
  var popupCloseSuccess = document.querySelector('.popup__close--success');
  var popupSuccessButton = document.querySelector('.popup__button--success');

  window.openSuccessPopup = function (evt) {
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

  popupSuccessButton.addEventListener('click', closeSuccessPopup);
  overlaySuccess.addEventListener('click', closeSuccessPopup);
  popupCloseSuccess.addEventListener('click', closeSuccessPopup);
})();

// Отправка форм на сайте

(function () {
  var popupForm = document.querySelector('.popup__form');
  var popupFields = popupForm.querySelectorAll('input');
  var popupName = popupForm.querySelector('input[type="text"]');
  var popupPhone = popupForm.querySelector('input[type="tel"]');
  var popupCheckbox = popupForm.querySelector('input[type="checkbox"]');

  var contactsForm = document.querySelector('.contacts__form');
  var contactsFields = contactsForm.querySelectorAll('input');
  var contactsName = contactsForm.querySelector('input[type="text"]');
  var contactsPhone = contactsForm.querySelector('input[type="tel"]');

  var feedbackForm = document.querySelector('.feedback__form');
  var feedbackFields = feedbackForm.querySelectorAll('input');
  var feedbackPhone = feedbackForm.querySelector('input[type="tel"]');


  popupForm.addEventListener('submit', function (evt) {
    if (popupName.value.length < 2 || popupPhone.value.length < 18 || !popupCheckbox.checked) {
      window.validatesForm(popupFields, evt);
    } else {
      window.closeOrderPopup(evt);
      window.openSuccessPopup(evt);
      popupName.value = '';
      popupPhone.value = '';
      popupCheckbox.checked = false;
    }
  });

  contactsForm.addEventListener('submit', function (evt) {
    if (contactsName.value.length < 2 || contactsPhone.value.length < 18) {
      window.validatesForm(contactsFields, evt);
    } else {
      window.openSuccessPopup(evt);
      contactsName.value = '';
      contactsPhone.value = '';
    }
  });

  feedbackForm.addEventListener('submit', function (evt) {
    if (feedbackPhone.value.length < 18) {
      window.validatesForm(feedbackFields, evt);
    } else {
      window.openSuccessPopup(evt);
      feedbackPhone.value = '';
    }
  });
})();

// Функция слайдер в блоке отзывы

(function () {
  var reviewsSlider = new Swiper('.reviews__wrapper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.reviews__pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });

})();

// Функция слайдер в блоке "Жизнь в Израиле"

(function () {
  var gallerySlider = document.querySelector('.swiper-container');

  var breakpoint = window.matchMedia('(min-width:768px)');
  var mySwiper;
  var breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };


  var enableSwiper = function () {
    if (gallerySlider) {
      mySwiper = new window.Swiper(gallerySlider, {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'gallery__dot',
          bulletActiveClass: 'gallery__dot--active',
        },
      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

// Функция реализации прокрутки табов

(function () {
  var programsTabs = document.querySelector('.programs__controls-block');

  var breakpoint = window.matchMedia('(min-width:768px)');
  var mySwiper;
  var breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
      return;
    } else if (breakpoint.matches === false) {
      enableSwiper();
    }
  };


  var enableSwiper = function () {
    if (programsTabs) {
      mySwiper = new window.Swiper(programsTabs, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 0,
        grabCursor: true,
        pagination: {
          clickable: true,
        },
      });
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
