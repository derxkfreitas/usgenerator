$(document).ready(function() {
  function generate() {
      fetch("https://randomuser.me/api/?nat=us")
          .then(response => response.json())
          .then((data) => {
              var gender = data.results[0]['gender'];
              document.getElementById("gender").value = gender.charAt(0).toUpperCase() + gender.slice(1);
              document.getElementById("title").value = data.results[0]['name']['title'];
              document.getElementById("firstname").value = data.results[0]['name']['first'];
              document.getElementById("lastname").value = data.results[0]['name']['last'];
              document.getElementById("streetname").value = data.results[0]['location']['street']['number'] + ' ' + data.results[0]['location']['street']['name'];
              document.getElementById("city").value = data.results[0]['location']['city'];
              document.getElementById("state").value = data.results[0]['location']['state'];
              document.getElementById("zipcode").value = data.results[0]['location']['postcode'];
              document.getElementById("phone").value = data.results[0]['phone'];
              document.getElementById("cell").value = data.results[0]['cell'];
              document.getElementById("ssn").value = data.results[0]['id']['value'];
              document.getElementById("email").value = data.results[0]['email'];
              document.getElementById("username").value = data.results[0]['login']['username'];
              document.getElementById("password").value = data.results[0]['login']['password'] + Math.floor(Math.random() * 9999) + '!';
          })
          .catch(function(error) {
              console.log(error);
          });
  }

  $("#generate").on("click", function() {
      generate();
  });
});