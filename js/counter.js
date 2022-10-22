$('.counting').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 3000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});


$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    mouseDrag: false,
    loop: true,
    margin: 2,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });

  $('.owl-prev').click(function () {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('next');
    if ($active.is('.first')) {
      $('.owl-item .last').addClass('show');
      $('.first').addClass('next');
      $('.owl-item .last').parent().prev().children('.item').addClass('prev');
    }
    else {
      $active.parent().prev().children('.item').addClass('show');
      if ($active.parent().prev().children('.item').is('.first')) {
        $('.owl-item .last').addClass('prev');
      }
      else {
        $('.owl-item .show').parent().prev().children('.item').addClass('prev');
      }
    }
  });

  $('.owl-next').click(function () {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('prev');
    if ($active.is('.last')) {
      $('.owl-item .first').addClass('show');
      $('.owl-item .first').parent().next().children('.item').addClass('prev');
    }
    else {
      $active.parent().next().children('.item').addClass('show');
      if ($active.parent().next().children('.item').is('.last')) {
        $('.owl-item .first').addClass('next');
      }
      else {
        $('.owl-item .show').parent().next().children('.item').addClass('next');
      }
    }
  });

});