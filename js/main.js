"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Смена темы сайта
  var app = document.getElementById('app');
  var eneble_dark_theme = document.getElementById('eneble-dark-theme');
  var eneble_light_theme = document.getElementById('enable-light-theme');
  eneble_dark_theme.addEventListener('click', function () {
    app.classList.add('dark-theme');
  });
  eneble_light_theme.addEventListener('click', function () {
    app.classList.remove('dark-theme');
  });
  var eneble_dark_theme_mob = document.getElementById('eneble-dark-theme-mob');
  var eneble_light_theme_mob = document.getElementById('enable-light-theme-mob');
  eneble_dark_theme_mob.addEventListener('click', function () {
    app.classList.add('dark-theme');
  });
  eneble_light_theme_mob.addEventListener('click', function () {
    app.classList.remove('dark-theme');
  }); // Фиксация шапки

  var header = document.getElementById('header');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      header.classList.add('fix');
    } else {
      header.classList.remove('fix');
    }
  }); // бургер

  var burger = document.getElementById('burger');
  var burger__menu = document.getElementById('burger__menu');
  burger.addEventListener('click', function () {
    burger__menu.classList.toggle('active');
  }); // Селекты

  var inner_select = document.querySelectorAll('.inner-select');

  if (inner_select) {
    inner_select.forEach(function (select) {
      var choices = new Choices(select, {
        searchEnabled: false
      });
    });
  }

  var selects = document.querySelectorAll('.select');

  if (selects) {
    selects.forEach(function (select) {
      var choices = new Choices(select, {
        searchEnabled: false
      });
    });
  }

  if (document.getElementById('choices-width-img')) {
    var choices_width_img = new Choices(document.getElementById('choices-width-img'), {
      searchEnabled: false,
      callbackOnCreateTemplates: function callbackOnCreateTemplates(strToEl) {
        var classNames = this.config.classNames;
        var itemSelectText = this.config.itemSelectText;
        return {
          item: function item(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '"\
                    data-item\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.active ? 'aria-selected="true"' : '') + '\
                    ' + String(data.disabled ? 'aria-disabled="true"' : '') + '\
                    >\
                    <span style="margin-right:10px;"><img src="./img/bb.png"></span> ' + String(data.label) + '\
                  </div>\
                ');
          },
          choice: function choice(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(classNames.itemChoice) + ' ' + String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '"\
                    data-select-text="' + String(itemSelectText) + '"\
                    data-choice \
                    ' + String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\
                    >\
                    <span style="margin-right:10px;"><img src="./img/bb.png"></span> ' + String(data.label) + '\
                  </div>\
                ');
          }
        };
      }
    });
  }

  if (document.getElementById('choices-width-right-text')) {
    var choices_width_img = new Choices(document.getElementById('choices-width-right-text'), {
      searchEnabled: false,
      callbackOnCreateTemplates: function callbackOnCreateTemplates(strToEl) {
        var classNames = this.config.classNames;
        var itemSelectText = this.config.itemSelectText;
        return {
          item: function item(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '"\
                    data-item\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.active ? 'aria-selected="true"' : '') + '\
                    ' + String(data.disabled ? 'aria-disabled="true"' : '') + '\
                    >\
                    <span class="choose-left-text">' + String(data.label) + '</span><span class="choose-right-text">500$</span>' + '\
                  </div>\
                ');
          },
          choice: function choice(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(classNames.itemChoice) + ' ' + String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '"\
                    data-select-text="' + String(itemSelectText) + '"\
                    data-choice \
                    ' + String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\
                    >\
                    <span class="choose-left-text">' + String(data.label) + '</span> - <span class="choose-right-text">500$</span>' + '\
                  </div>\
                ');
          }
        };
      }
    });
  }

  if (document.getElementById('choices-order-img')) {
    var choices_width_img = new Choices(document.getElementById('choices-order-img'), {
      searchEnabled: false,
      callbackOnCreateTemplates: function callbackOnCreateTemplates(strToEl) {
        var classNames = this.config.classNames;
        var itemSelectText = this.config.itemSelectText;
        return {
          item: function item(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '"\
                    data-item\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.active ? 'aria-selected="true"' : '') + '\
                    ' + String(data.disabled ? 'aria-disabled="true"' : '') + '\
                    >\
                    <span style="margin-right:10px;"><i class="icon-apple"></i></span> ' + String(data.label) + '\
                  </div>\
                ');
          },
          choice: function choice(classNames, data) {
            return strToEl('\
                  <div\
                    class="' + String(classNames.item) + ' ' + String(classNames.itemChoice) + ' ' + String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '"\
                    data-select-text="' + String(itemSelectText) + '"\
                    data-choice \
                    ' + String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\
                    data-id="' + String(data.id) + '"\
                    data-value="' + String(data.value) + '"\
                    ' + String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\
                    >\
                    <span style="margin-right:10px;"><i class="icon-apple"></i></span> ' + String(data.label) + '\
                  </div>\
                ');
          }
        };
      }
    });
  } // Перетаскиваем поиск на плашете


  var inner__sale = document.getElementById('inner__sale');
  var inner__top = document.getElementById('inner__top');
  var inner__search = document.getElementById('inner__search');

  if (inner__search) {
    var relocationSerch = function relocationSerch() {
      if (window.innerWidth < 992 && window.innerWidth > 575) {
        inner__sale.prepend(inner__search);
      } else {
        inner__top.append(inner__search);
      }
    };

    window.addEventListener('resize', function () {
      relocationSerch();
    });
    relocationSerch();
  } // фильтр на мобильном


  var inner__bot = document.getElementById('inner__bot');
  var inner__bot__toggle = document.getElementById('inner__bot__toggle');

  if (inner__bot__toggle) {
    inner__bot__toggle.addEventListener('click', function () {
      slideToggle(inner__bot, 300);
    });
  } // кастомный скролл


  if (document.getElementById('enner__list__body')) {
    new SimpleBar(document.getElementById('enner__list__body'));
  }

  var dropArea = document.getElementById('drag-and-drop');

  if (dropArea) {
    var handleDrop = function handleDrop(e) {
      var input = e.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var img = document.getElementById('drop-zone-img');

        reader.onload = function (e) {
          img.setAttribute('src', e.target.result);
          dropArea.closest('.dropzone').classList.add('upload');
          fadeIn(img, 200);
        };

        reader.readAsDataURL(input.files[0]);
      }
    };

    dropArea.addEventListener("drop", handleDrop, false);
    dropArea.addEventListener("change", handleDrop, false);
  }

  if (document.getElementById('mess__wrap')) {
    var swiperInit = function swiperInit() {
      if (!init) {
        swiper = new Swiper('#mess__wrap', {
          slidesPerView: 1,
          spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            // when window width is >= 320px
            575: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          },
          on: {
            init: function init() {
              messSwiper.classList.add('swiper-init');
            }
          }
        });
        init = true;
      }
    };

    var swiperMode = function swiperMode() {
      if (window.innerWidth > 991) {
        if (init) {
          swiper.destroy();
          init = false;
        }
      } else {
        swiperInit();
      }
    };

    var messSwiper = document.getElementById('mess__wrap');
    var swiper;
    var init = false;
    swiperMode();
    window.addEventListener('resize', function () {
      swiperMode();
    });
  } // chat


  var chat_full = document.getElementById('chat-full');
  var chat = document.getElementById('chat');

  if (chat_full) {
    chat_full.addEventListener('click', function () {
      chat.classList.toggle('fixed');
    });
  }
});
//# sourceMappingURL=main.js.map
