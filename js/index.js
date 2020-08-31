// Away Begin --------------------------------

setBannerInit();

function setBannerInit() {
   var index = 0;
   var $item = $('#Banner .adv-img');
   var len = $item.length;
   var duration = 3;

   setInterval(function () {
      if (index < len - 1) {
         index++;
      } else {
         index = 0;
      }
      $item.eq(index)
         .fadeIn()
         .siblings().fadeOut();
   }, duration * 1000);

}

// Away End --------------------------------

var index = 0;
var piclnterval;
var $news = $('.content__news');
var $newsItems = $('.news__ls');
var newsItemsWidth = $('.news__item').width() + 120;
var duration = 2000;
var $pagination = $('#Pagination');
var $paginationItems = $pagination.find('.pagination__item');
$paginationItems.eq(index).addClass('js-pagination__item');

piclnterval = setInterval(doCalc, duration);

$news.hover(function () {
   clearInterval(piclnterval);
}, function () {
   piclnterval = setInterval(doCalc, duration);
});

$paginationItems.click(function () {
   index = $(this).index();
   setSlide();
});


function doCalc() {
   if (index < 5) {
      index++;
   }
   else {
      index = 0;
   }
   setSlide();
}

function setSlide() {
   $newsItems.css({ left: -index * newsItemsWidth });
   $paginationItems.eq(index).addClass('js-pagination__item')
      .siblings().removeClass('js-pagination__item');
}