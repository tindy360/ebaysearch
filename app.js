$(document).ready(function() {
    function getweather(zip) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + zip + "&units=imperial&APPID=dd1c4ad5a54ac84a9cb70dd8ace769fe",
            function(data) {
              console.log(data);
                var html = '<li class=temp>' + 'Current Temprature ' + data.main.temp + '</li>'
                +'<li class=temp>' + 'Current Pressure ' + data.main.pressure + ' millibars' + '</li>'
                +'<li class=temp>' + 'Current Hummidity ' + data.main.humidity + '%' + '</li>';

                $('#results').append(html);
            });
    }
$("#postalCode").on("submit", function(event) {
    event.preventDefault();
    var searchData = $(this).find('.query').val();
    getweather(searchData);
});
});
