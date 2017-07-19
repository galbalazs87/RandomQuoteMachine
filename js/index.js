function randomQuote() {
  $.ajax({
      url: "http://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $(".quote-text").html("<p id='text'>" +
          response.quoteText);
        $(".quote-author").html("<p class='quote-author' id='author'>" + response.quoteAuthor);
        $("#tweet-quote").attr("href", "http://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});