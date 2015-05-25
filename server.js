var $ = require('./node_modules/jquerygo/lib/jquery.go.js');
$.visit('https://www.google.com', function(){
  $.waitForPage(function(){
    $.capture(__dirname + '/screenshot.png');
    $.close();
  });
});
