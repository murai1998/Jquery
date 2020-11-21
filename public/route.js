var but = 0;
$(document).ready(function() {
  $("#next").click(function() {
    $("#first").addClass("hide");
    $(".container").removeClass("hide");
  });
  $("#submit").click(function() {
    $(".container").addClass("hide");
    $("#third").removeClass("hide");
  });
  $("#customerForm").submit(function(e) {
    e.preventDefault();
    console.log("text");
    postData();
  });
  console.log("tjhtujy");

  function postData() {
    var data = {
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val(),
      date: new Date(0),
      review: $("#area").val(),
      mark: but
    };
    console.log("data", data);
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/customers/save",
      data: JSON.stringify(data),
      dataType: "json",
      success: function(customer) {
        $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "</p>");
      },
      error: function(e) {
        alert("Error!");
        console.log("ERROR: ", e);
      }
    });
    resetForm();
  }

  $("#allCustomers").click(function(event) {
    event.preventDefault();
    ajaxGet();
  });

  // DO GET
  function ajaxGet() {
    $.ajax({
      type: "GET",
      url: window.location + "api/customers/all",
      success: function(result) {
        $("#getResultDiv ul").empty();
        var custList = "";
        $.each(result, function(i, customer) {
          $("#getResultDiv .list-group").append(
            customer.firstname + " " + customer.lastname + "<br>"
          );
        });
        console.log("Success: ", result);
      },
      error: function(e) {
        $("#getResultDiv").html("<strong>Error</strong>");
        console.log("ERROR: ", e);
      }
    });
  }

  //   $("#mark1").click(function() {
  //     let but = $(this).text();
  //     console.log("button", but);
  //   });
  function resetForm() {
    $("#firstname").val(""), $("#lastname").val("");
  }

  for (let i = 1; i <= 10; i++) {
    $(`#mark${i}`).click(function() {
      but = Number($(this).text());
      console.log("but", but);
      $(this)
        .parent()
        .addClass("hide");
    });
  }
  console.log("but", but);
  console.log("but", but);
});
