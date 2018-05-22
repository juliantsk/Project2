// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $("#register").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newAccount = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };
        console.log(newAccount);

        // Send the POST request.
        //WTF should the route in this ajax call be??
        $.ajax("/signup", {
            type: "POST",
            data: newAccount
        }).then(
            function() {
                console.log("created new account");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#logIn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var logIn = {
            em: $("#em").val().trim(),
            userPassword: $("#userPassword").val().trim(),
        };

        // Send the POST request.
        //WTF should the route in this ajax call be??
        $.ajax("/login", {
            type: "POST",
            data: logIn
        }).then(
            function() {
                console.log("created new account");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#create-item").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newItem = {
            name: $("#itemName").val().trim(),
            quantity: $("#qty").val().trim(),
            unit: $("#unit").val().trim(),
            description: $("#description").val().trim(),
        };
console.log(newItem);
        // Send the POST request.
      
        $.post("/api/items", newItem)
        //  {

        //     type: "POST",
        //     data: newItem
        // }
        .then(
            function(response) {
                console.log(response)
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


    $("#done-shopping").on("click", function(event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/delete/item", {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted item", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});