(async () => {
  var baseUsername = prompt('Enter base username:');
  var password = prompt('Enter password:');
  var amount = prompt('Enter the number of accounts:');

  for (var i = 0; i < parseInt(amount); i++) {
    await fetch("https://www.nitrotype.com/api/register", {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
       },
      "body": "acceptPolicy=true&email=&password=" + password + "&receiveContact=&username=" + baseUsername + i,
      "method": "POST",
      "mode": "cors"
    });
  };
  
  alert('Generating ' + amount + ' accounts... Please wait a couple seconds before leaving the current page.');
})();
