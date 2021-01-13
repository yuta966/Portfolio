$(document).ready(function(){
    $(".hamburger").click(function(){
        if($('.hamburger_list').hasClass('open')) {
            $('.hamburger_list').removeClass('open');
            $('.hamburger_list').addClass('hide');
            $('.hamburger_list').hide(300);
            $(".hamburger").text("reorder");
        } else if($('.hamburger_list').hasClass('hide')) {
            $('.hamburger_list').removeClass('hide');
            $('.hamburger_list').addClass('open');
            $('.hamburger_list').show(300);
            $(".hamburger").text("clear");
        }
   });

   $(".scroll-btn").click(function(){
       var id = $(this).attr('href');
       var position = $(id).offset().top - 60;
       $('html, body').animate({'scrollTop':position},500);
       if($('.hamburger_list').hasClass('open')) {
            $('.hamburger_list').removeClass('open');
            $('.hamburger_list').addClass('hide');
            $('.hamburger_list').hide(300);
            $(".hamburger").text("reorder");
        }
   });

   $(".icon").hover(function(){
        $(this).find('img').animate({
            'opacity':'0.6'
        },300);
    },function(){
        $(this).find('img').animate({
            'opacity':'1'
        },300);
    }
   );

   $(".portfolio_content").hover(function(){
    $(this).animate({
        'opacity': '0.8'
    },300);
},function(){
    $(this).animate({
        'opacity': '0'
    },300);
}
);


   $('.top_slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
   });

   $(".gallery_slider").slick({
    dots: true, // ドットインジケーターの表示
    infinite: true, // スライドのループを有効にするか
    slidesToShow: 3, // 表示するスライド数を設定
    slidesToScroll: 3 // スクロールするスライド数を設定
  });
});