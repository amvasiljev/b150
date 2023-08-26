const mediaQuery_767 = window.matchMedia('(max-width: 767px)')
const mediaQuery_1023 = window.matchMedia('(max-width: 1023px)')
const mediaQuery_1199 = window.matchMedia('(max-width: 1199px)')
const mediaQuery_1200 = window.matchMedia('(max-width: 1200px)')

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

$('select').on('click', function () {
  $(this).toggleClass('select')
})
$('select').on('blur', function () {
  $(this).removeClass('select')
})




// search mobile 

$('.search_mobile').on('click', function () {
  $(this).toggleClass('search_mobile_active')
  $('.search_main').fadeToggle(100)
})

// search mobile end









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





// filter 


$(".slider-range_container").slider({
  range: true,
  min: 0,
  max: 30000,
  values: [0, 20000],
  slide: function (event, ui) {
    $("#amount").val("₽" + ui.values[0] + ui.values[1]);
  }
});
$("#amount").val("$" + $("#slider-range").slider("values", 0) + $("#slider-range").slider("values", 1));



var customInput = $('.filter__range').find('input')

customInput.each(function () {

  var $this = $(this)
  var buffer = $this.next('.filter__buffer')

  buffer.text($this.attr('value'));
  setTimeout(function () {
    $this.width(buffer.width());
  }, 4)


  $this.on('change', function () {
    buffer.text($this.val());
    $this.width(buffer.width());

  });




  $this.on('keypress keyup blur', function (event) {
    keyCode = (event.which) ? event.which : event.keyCode;
    buffer.text($this.val());
    $this.width(buffer.width());
    // console.log($this.width());
    // console.log('change');
    return !(keyCode > 31 && (keyCode < 48 || keyCode > 57));
  });


})


$('.filter__label_check input').on('change', function () {

  $(this).parent('.filter__label_check').toggleClass('filter__label_check_active')
})

$('.filter__title').each(function () {
  var $this = $(this)
  var box = $this.next('.filter__box')
  $this.on('click', function () {
    $this.toggleClass('filter__title_hide')
    box.toggleClass('filter__box_hide')

    box.slideToggle(300)
  })
})

// filter end


// custom select 

$('.select').each(function () {

  var $this = $(this)
  var icon = $this.find('.select__icon')
  var box = $this.find('.select__box')
  var item = $this.find('.select__item')
  icon.on('click', function () {
    icon.toggleClass('select__icon_active')
    box.toggleClass('select__box_active')

  })

  item.on('click', function () {

    if (!$(this).hasClass('select__item_active')) {
      $(this).css('order', '0').addClass('select__item_active')
      item.not($(this)).css('order', '1').removeClass('select__item_active')
      // console.log('click');

      setTimeout(function () {

        box.addClass('select__box_active')
        icon.addClass('select__icon_active')
      }, 200)

    } else {
      box.toggleClass('select__box_active')
      icon.toggleClass('select__icon_active')
    }




  })


})

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
      right: '-300px',
    }, 200)
    $('#filter_side').animate({
      left: '-300px',
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

// nav mobile 


setTimeout(function () {
  $('.nav > ul').clone().appendTo('.nav-mobile_filter')
  
  navMobile('.nav-mobile_filter')

  $('.nav-mobile_filter > ul > li').each(function(){
    console.log($(this));
    
    if($(this).find('ul').length == 0){
      $(this).remove()
    }

  })
}, 4)





// nav mobile end



function mobileMove2(e) {
  if (e.matches) {

    $('.nav > ul').clone().appendTo('.nav-mobile_side')

    navMobile('.nav-mobile_side')


    



  } else {

    $('.nav-mobile_side').find('ul').remove()

  }
}


function navMobile(elem) {
  $(elem).find('li').each(function () {

    var $this = $(this)
    // var next = $this.find('ul').eq(0)
    var link = $this.find('a')

    if (link.next('svg').length > 0) {
      link.addClass('nav-mobile__parent')


    } else {
      link.addClass('nav-mobile__single')
      
    }

  })

  $(elem).find('.nav-mobile__parent').next('svg').on('click', function () {
    var $this = $(this)
    var ul = $this.next('ul')

    $this.toggleClass('nav-mobile__svg_active')

    ul.slideToggle()
  })

 
}



mediaQuery_1200.addListener(mobileMove2)
mobileMove2(mediaQuery_1200)