$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
      function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    var name = data.results[0].name;
    var location = data.results[0].location;
    var pic = data.results[0].picture;
    var country = data.results[0].nat;
    $("body").append("<h2>" + capitalize(name.title) + ". " + capitalize(name.first) + " " + capitalize(name.last) + "</h2>");
    $("body").append("<p>" + location.street + "<br>" + location.city + ", " + location.state + ", " + country + " " + location.postcode + "</p>");
    $("body").append("<img src='" + pic.large + "'></img>");


    $.ajax({
        url: "http://restcountries.eu/rest/v2/all",
        dataType: "json",
        success: function(data) {
            var i = 0;
            for (var i = 0; i < data.length; i++) {
                if (country == data[i].alpha2Code) {

                $("body").append("<h1>" + data[i].name + "</h1>");
                break;
                }
            }
        }
    })
  }
});






