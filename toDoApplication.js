// Check off to-do by clicking
$("ul").on("click", "li", function () { 
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) { 
   $(this).parent().fadeOut(500, function () {
      $(this).remove();
   });
   e.stopPropagation();
});

$("input[type='text']").keypress(function (e) { 
   if (e.which === 13) {
      var todoText = $(this).val()
      $(this).val("");
      // create new LI and ADD to list
      $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
   };
});

// If I click on the plus sign, I need to hide the do list

$("h1").click(function () { 
   $("input").slideToggle();
});

