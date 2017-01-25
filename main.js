//console.log('hello');

/*guess the correct answer*/

$(document).ready(function(){
  $('.correct').click(function(){
    $(this).removeClass('guess');
    $(this).addClass('chosen-correct')

  })
});

/*guess the incorrect answer*/
