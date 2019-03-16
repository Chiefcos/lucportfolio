function main(){
  $('.gallery').hide();
  $('.gallery1').hide();

  $('.A').on('click', function(){
    $(this).toggleClass('active');
    $('.gallery1').toggle();
  })
  $('.B').on('click', function(){
    $(this).toggleClass('active');
    $('.gallery').toggle();
  })
}

$(document).ready(main);
