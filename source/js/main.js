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
