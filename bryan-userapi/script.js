$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    var name = data.results[0].name;
    var location = data.results[0].location;
    var pic = data.results[0].picture;
    $("body").append("<h2>" + capitalize(name.title) + ". " + capitalize(name.first) + " " + capitalize(name.last) + "</h2>");
    $("body").append("<p>" + location.street + "<br>" + location.city + ", " + location.state + " " + result[0].nat + location.postcode + "</p>");
    $("body").append("<img src='" + pic.large + "'></img>");
  }
});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}