const mediaQuery_767 = window.matchMedia('(max-width: 767px)')
const mediaQuery_1023 = window.matchMedia('(max-width: 1023px)')
const mediaQuery_1199 = window.matchMedia('(max-width: 1199px)')

window.onload = function () {
  let preloader = document.getElementById('preloader');
  preloader.classList.add('hide-preloader');
  setInterval(function () {
    preloader.classList.add('preloader-hidden');
  }, 990);
}



document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg');
  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});

(function () {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  };

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');

      //   $('.noWebpBg').each((i, el) => {
      //    $(el).css({
      //       "backgroundImage": `url(${$(el).data().srcwebp}`,
      //    })
      //   })
    } else {
      document.querySelector('body').classList.remove('webp');

      // $(el).css({
      //    "backgroundImage": `url(${$(el).data().src}`,
      // })
    }


  });
})();




$(document).on('focus', 'input[type="text"],input[type="tel"],textarea', function () {
  $(this).addClass('form__input_focus');
})
$(document).on('blur', 'input[type="text"],input[type="tel"],textarea', function () {
  if (!$(this).val()) {
    $(this).removeClass('form__input_focus');
  }
})



// mask 

$('input[type=tel]').mask('+ 7 (999) 000-00-00', {
  placeholder: "+ 7 (___) ___-__-__"
});

// mask end

// validate form 




$(".form_validate").find('form').each(function () {


  $(this).each(function () {


    $(this).validate({
      errorClass: "form__input_error",
      validClass: "form__input_success",

      errorPlacement: function (error, element) {
        if (element.attr("name") == "fname" || element.attr("name") == "lname") {


        } else {

        }
      },

    })


  })

})

// validate form end





// default slider 


var sliders = $('.slider')

sliderAll(sliders)





function sliderAll(elem) {

  let arr_next = $(elem).find('.slider__arrow_next')
  let arr_prev = $(elem).find('.slider__arrow_prev')


  let space
  let number
  let fade
  let auto
  let loop
  let initialSlide
  let free
  let fraction
  let centeredSlides

  $(elem).each(function (indx) {

    let $this = $(this)
    let slider = $this.find('.swiper')

    if ($this.hasClass('slider_space')) {
      space = false
      number = "fraction"
      fade = "fade"
      speed = 500
    } else {

      space = 0
      number = 'auto'
      fade = false

    }
    if ($this.hasClass('slider_loop')) {
      loop = true
      number = 'auto'
      initialSlide = 1
    } else {
      loop = false
      number = 'auto'
      initialSlide = 0
    }
    if ($this.hasClass('slider_center')) {
      centeredSlides = true
    } else {
      centeredSlides = false
    }

    if ($this.hasClass('slider_nofree')) {
      freeMode = false
    } else {
      freeMode = true
    }


    if ($this.hasClass('slider_auto')) {

      auto = {
        delay: 2500,
        disableOnInteraction: false,
      }

    } else {

      auto = false
    }



    slider.addClass('swiper' + indx)


    arr_next[indx].classList.add('slider__arrow_next' + indx);
    arr_prev[indx].classList.add('slider__arrow_prev' + indx);
    // scrollbar[indx].classList.add('swiper-scrollbar' + indx);

    slider = new Swiper('.swiper' + indx, {
      // Optional parameters
      // direction: 'vertical',
      // loop: true,
      // freeMode: true,
      // If we need pagination
      centeredSlides: centeredSlides,
      slidesPerView: number,
      spaceBetween: space,
      effect: fade,
      speed: 500,

      loop: loop,
      initialSlide: initialSlide,
      autoplay: auto,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },


      // Navigation arrows
      navigation: {
        nextEl: '.slider__arrow_next' + indx,
        prevEl: '.slider__arrow_prev' + indx,

      },

      freeMode: freeMode,





    });



  })

}

// default slider end






// faq 



// $('.faq__box').each(function () {
//   var $this = $(this)
//   var faq = $this.find('.faq')
//   var faqLenght = Math.ceil(faq.length / 2)


//   var first = $('.faq_active').find('.faq__content')
//   first.css('display', 'block')

//   faq.on('click', function () {

//     $(this).toggleClass('faq_active')
//     $this.find('.faq').not($(this)).removeClass('faq_active')

//     var title = $(this).find('.faq__title')

//     title.toggleClass('faq__title_active')
//     $this.find('.faq__title').not(title).removeClass('faq__title_active')

//     var content = $(this).find('.faq__content')

//     content.slideToggle()
//     $this.find('.faq__content').not(content).slideUp()
//   })





// })




// faq end



// nav 

$('.button_catalog').on('click', function (e) {
  e.preventDefault()
  var side = $(this).attr('href')



  if (side == '#category_side') {

    $(side).animate({
      right: 0
    }, 200)
    // When the modal is shown, we want a fixed body
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;


    console.log(scrollY);

    $('body').addClass('stop_scrolling');

    $('.stop_scrolling').css({
      'height': 'calc(100vh + ' + scrollY + ')'
    })



  } else if (side == '#filter_side') {
    $(side).animate({
      left: 0
    }, 200)



    // When the modal is shown, we want a fixed body
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;


    console.log(scrollY);

    $('body').addClass('stop_scrolling');

    $('.stop_scrolling').css({
      'height': 'calc(100vh + ' + scrollY + ')'
    })




  } else if (side == '#hide') {

    $('#category_side').animate({
      right: '-280px',
    }, 200)
    $('#filter_side').animate({
      left: '-280px',
    }, 200)
    $('body').removeClass('stop_scrolling');


    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

  }
})

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});



// nav end
