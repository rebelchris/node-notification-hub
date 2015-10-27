var azure = require('azure');
var express = require('express');
var app = express();
var users = {};
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/notification-hub', function(req,res) {
  var notificationHubService = azure.createNotificationHubService('nh-name','Endpoint=sb://name.servicebus.windows.net/;SharedAccessKeyName=key');
  notificationHubService.listRegistrations(function(err, registrations) {
    res.json(registrations);
  });
});
app.get('/', function(req, res) {
  res.render('notification-hub', {
    title: 'Node, Azure service bus explorer'
  })
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Node notification hub listening on: http://%s:%s', host, port);
});
