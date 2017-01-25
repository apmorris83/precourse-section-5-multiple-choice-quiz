//console.log('hello');

var questionsRight = 0;

document.getElementById("playerScore").innerHTML = questionsRight;

/*guess the correct answer*/

$(document).ready(function(){
  $('.correct').click(function(){
    $(this).removeClass('guess');
    $(this).addClass('chosen-correct');

    $(this).siblings().removeClass('guess');
    $(this).siblings().removeClass('incorrect');

    $(this).siblings().addClass('notChosen');

    $(this).unbind();
    $(this).siblings().unbind();

    questionsRight += 1;
    document.getElementById("playerScore").innerHTML = questionsRight;

  })
});

/*guess the incorrect answer*/

$(document).ready(function(){
  $('.incorrect').click(function(){
    $(this).removeClass('guess');
    $(this).addClass('chosen-incorrect');

    $(this).siblings().removeClass('guess');
    $(this).siblings().removeClass('incorrect');

    $(this).siblings().addClass('notChosen');

    $(this).unbind();
    $(this).siblings().unbind();

  })
});
