// Docs at http://simpleweatherjs.com
$(document).ready(function()


var cheney = '99004';
var spokane = '99201';

 {
  $.simpleWeather({
    location: 'Austin, TX',
    woeid: '',
    unit: 'f',
    
    //If can ge weather
    success: function(weather) {
      
      $('.temp').text(weather.temp);
      $('current').text(weather.currently);
      $('.header').text(weather.city)
    

    //PUT DISPLAY
      $("#weather").html(html);
    },

    //if cannot get weather
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});