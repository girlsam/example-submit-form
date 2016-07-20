$(document).ready(function() {
  console.log('sanity check');
});
$('form').submit(function(event) {
  event.preventDefault();
  var formInfoArr = $(this).serializeArray();
  console.log(formInfoArr);
  $('.results').append('<img src=' + formInfoArr[1].value + '>');
});
