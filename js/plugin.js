/*global $, jQuery, console, alert, prompt */

$(document).ready(function () {
    "use strict";
    
    // Nice Scroll
    $("html").niceScroll();
    
    // Carousel Slide
    $('.carousel').carousel({
        interval: 5000
    });
    // Show Color Option Div When Click On The Gear
    $('.gear-check').click(function () {
        $('.option-color').toggle(1000);
    });
    
    // Change Theme Color On Click
    var colorLi = $('.option-color ul li'),
        scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#e500ff").end()
        .eq(2).css("backgroundColor", "#00a9ff").end()
        .eq(3).css("backgroundColor", "#ffd800");
     
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
    });
    
    // Scroll Top
     var scrollbottom = $(".scroll-top");
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollbottom.show();
        } else {
            scrollbottom.hide();
        }
    });
    
    $(".scroll-top").click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });
    
    // Task First Child In Learn 52 => Bootstrap
    $('.faq-questions .panel-heading').click(function () {
        $('.faq-questions span').css("display", "none");
    });
});
$(".portfolio  ul li ").click(function(){
   var myID =$(this).attr("class"); 
    $(this).addClass("active").siblings().removeClass("active");
    $(".content img").hide();   
    $("."+myID+"-content").show();
});

//Loading Scressn
$(window).load(function () {
    "use strict";
    $('.loading-overlay .spinner').fadeOut(1000, function () {
        $('body').css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
    //
    
       $('.content-store ul li').click(function () {
           var myID =$(this).attr("class");
        $(".content-store ul li i").html('<i class="fa fa-plus "></i>');
        $(this).toggleClass("selected");
        $(".boxcont").hide();
          
        if($(this).hasClass('selected')){
        $('.test').remove();
        $("."+myID+" i").html('<i class="fa fa-minus "></i>');
        $("."+myID+"-content").toggle();   
            
           }else{
        $("."+myID+" i").html('<i class="fa fa-plus "></i>');
              
           }
           
           
    

    });
    //
});
      // Range Slider
      var slider = new Slider("#range", {
        min: 0,
        max: 100,
        value: [50, 80],
        range: true,
        tooltip: 'always'
      });