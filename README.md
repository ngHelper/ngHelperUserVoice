# ngHelperUserVoice

This angularjs extension is a simple wrapper around the UserVoice API. To install the component in your existing angular app follow these steps:

### Install ng-helper-busy 
```
bower install ng-helper-user-voice --save
```

### Include the angular module
```javascript
angular.module('appApp', [
    'ngHelperUserVoice'
]);
```

### Configure the module
As preparation the module requires an non secure API token form user voice. Visit the admin portal in the settings under integrations and create a *non trusted* api client.

```javascript
.config(function ($uservoiceProvider) {
  $uservoiceProvider.setSubDomain("<<YOUR SUBDOMAIN>>");
  $uservoiceProvider.setApiKey("<<YOUR API TOKEN>>");
```

### Use the service to open a ticket
```javascript
$uservoice.openTicket("YOUR NAME", "YOUR EMAIL", "YOUR SUBJECT", "YOUR MESSAGE").then(function(ticketId) {
      alert("Ticket with id: " + ticketId + " created"); 
    }).catch(function(error) {
      alert("Error: " + error);
    });
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :)

## License

[MIT License](https://github.com/ngHelper/ngHelperUserVoice/LICENSE)
