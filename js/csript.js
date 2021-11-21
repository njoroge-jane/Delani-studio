$(document).ready(function(){
$('.design-img').on('click', function(){
  $('.design-paragraph').show();
  $(this).hide();
});
$('.design-paragraph').on('click',function(){
  $(this).hide();
  $('.design-img').show();
});


$('.dev-img').on('click', function(){
  $('.dev-paragraph').show();
  $(this).hide();
});
$('.dev-paragraph').on('click',function(){
  $(this).hide();
  $('.dev-img').show();
});


$('.product-img').on('click', function(){
  $('.product-paragraph').show();
  $(this).hide();
});
$('.product-paragraph').on('click',function(){
  $(this).hide();
  $('.product-img').show();
});


$("#work1").hover(
  function() {
    $(".work1").show("");
  },
  function() {
    $(".work1").hide("");
  }
);


$("#work2").hover(
  function() {
    $(".work2").show("");
  },
  function() {
    $(".work2").hide("");
  }
);


$("#work3").hover(
  function() {
    $(".work3").show("");
  },
  function() {
    $(".work3").hide("");
  }
);


$("#work4").hover(
  function() {
    $(".work4").show("");
  },
  function() {
    $(".work4").hide("");
  }
);


$("#work5").hover(
  function() {
    $(".work5").show("");
  },
  function() {
    $(".work5").hide("");
  }
);


$("#work6").hover(
  function() {
    $(".work6").show("");
  },
  function() {
    $(".work6").hide("");
  }
);


$("#work7").hover(
  function() {
    $(".work7").show("");
  },
  function() {
    $(".work7").hide("");
  }
);


$("#work8").hover(
  function() {
    $(".work8").show("");
  },
  function() {
    $(".work8").hide("");
  }
);




}
 );