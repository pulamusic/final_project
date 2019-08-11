$(document).ready(function() {
  // set endpoint and your access key
  endpoint = 'live'
  access_key = 'CURRENCYLAYER_API_KEY';

  // get the most recent exchange rates via the "live" endpoint:
  $.ajax({
    url: 'https://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
    dataType: 'jsonp',
    success: function(json) {

      // exchange rata data is stored in json.quotes
      alert(json.quotes.USDGBP)

      // source currency is stored in json.source
      alert(json.source)

      // timestamp can be accessed in json.timestamp
      alert(json.timestamp)
    }
  })
})
