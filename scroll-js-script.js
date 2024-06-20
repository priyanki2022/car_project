$(function(){
    $('.responsive').slick({
  lazyLoad: 'ondemand',
  dots:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
   speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
      {
      breakpoint: 998,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
          fade:true,
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          fade:true,
           arrows:false,
        
      }
    }
      
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
$(function(){
    $('.responsive1').slick({
  lazyLoad: 'ondemand',
  dots:true,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 2000,
   speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
      {
      breakpoint: 998,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          autoplay: false,
      }
    },
    {
      breakpoint: 740,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows:false,
      fade:true,
      }
    },
    {
      breakpoint: 510,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      fade:true,
      arrows:false,
        
      }
    }
      
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});