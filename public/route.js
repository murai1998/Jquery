$(document).ready(function() {
  $("#customerForm").submit(function(e) {
    e.preventDefault();
    console.log("text");
    postData();
  });
  console.log("tjhtujy");
  function postData() {
    var data = {
      firstname: $("#firstname").val(),
      lastname: $("#lastname").val()
    };
    console.log("data", data);
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/customers/save",
      data: JSON.stringify(data),
      dataType: "json",
      success: function(customer) {
        $("#postResultDiv").html(
          "<p>" +
            "Post Successfully! <br>" +
            "--->" +
            JSON.stringify(customer) +
            "</p>"
        );
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

  function resetForm() {
    $("#firstname").val(""), $("#lastname").val("");
  }
});
