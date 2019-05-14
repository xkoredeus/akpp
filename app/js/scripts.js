$(function() {
  $('.banner__slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: true,
      navText: ["<img src='img/icon__arrow-prev.svg'>", "<img src='img/icon__arrow-next.svg'>"]
	});
  $('.brands__slider').owlCarousel({
      nav: true,
      loop: false,
      dots: true,
      navText: ["<img src='img/icon__arrow-prev.svg'>", "<img src='img/icon__arrow-next.svg'>"],
      responsive : {
        0   : {
            items: 1
        },
        480 : {
            items: 2
        },
        768 : {
            items: 4
        },
        1040 : {
            items: 5
        }
      }
  });
  $('.repair__slider').owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      items: 1,
      navText: ["<img src='img/icon__arrow-prev.svg'>", "<img src='img/icon__arrow-next.svg'>"],
  });
	// tabs 
  $(document).ready(function () {
    $(".tabs-content__item:not(:first-child)").hide();
    $(".tabs__container div.tabs__content-item.active-tab").show();
    $('ul.tabs__list > li').click(function () {
      if (!($(this).hasClass('active'))) {
        var thisLi = $(this);
        var numLi = thisLi.index();
        thisLi.addClass('active').siblings().removeClass('active');
        thisLi.parent().next().children('div').hide().eq(numLi).fadeIn('slow');
      }
    });
  });
  //Закрываем AjaxForm popup после успешной отправки
  // $(document).on('af_complete', function(event,res) {
  //   if(res.success) parent.$.fancybox.close();
  // });
  // Анимация на блоке tech
  var postion = $('.tech').offset().top,
      height = $('.tech').height();
  $(document).on('scroll', function (){
    var scroll = $(document).scrollTop();
    if(scroll  > postion && scroll < (postion + height + 300) ) {
       $('.tech__item').addClass('active')
       }else {
          // $('.tech__item').removeClass('active')
       }
  });
});