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



}
  );