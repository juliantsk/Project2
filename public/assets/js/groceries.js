// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $("#create-item").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newItem = {
          name: $("#item").val().trim(),
          qty: $("#qty").val().trim(),
          unit: $("#unit").val().trim(),
          description: $("#desription").val().trim(),         
        };
    
        // Send the POST request.
        //WTF should the route in this ajax call be??
         $.ajax("", {

          type: "POST",
          data: newItem
        }).then(
          function() {
            console.log("created new item for list");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".glyphicon-remove").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/cats/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted cat", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});