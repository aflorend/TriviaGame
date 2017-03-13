var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "9a1138d984b0421bb1c6d516fa62194d",
  'q': "obama",
  'begin_date': "20070101",
  'end_date': "20081231"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});