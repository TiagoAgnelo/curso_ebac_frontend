$(document).ready(function () {
  $("#taskForm").submit(function (event) {
    event.preventDefault();
    var taskName = $("#taskName").val();
    if (taskName.trim() !== "") {
      $("#taskList").append("<li>" + taskName + "</li>");
      $("#taskName").val("");
    }
  });
  $("#taskList").on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
