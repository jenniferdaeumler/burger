//Devoured button, PUT route
$(function () {
  $("devoured").on("click", function (event) {
    const id = $(this).data("id");
    const newDev = $(this).data("newDev");

    var newDevState = {
      devoured: newDev,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState,
    }).then(function () {
      console.log("Changed devored to:", newDev);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //Create New Burger Form, POST route
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#bn").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
