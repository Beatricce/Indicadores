// Create a request variable and assign a new XMLHttpRequest object to it.
//var request = new XMLHttpRequest();

//request.open('GET', 'https://api.wistia.com/v1/projects.json', true);

var url = 'https://api.wistia.com/v1/projects.json?api_password=70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
var token = '70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
$.ajax({
    url: url,
    beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer " + token)
    },

})
.done(function (data) {
        alert(data);
		data.forEach(proj => {
		  // Log each movie's title
		  console.log(proj.id);
		});
        $('body').append("hello");
})
.fail(function (jqXHR, textStatus) {
    alert("Error: " + textStatus);
})


//request.send();
// Open a new connection, using the GET request on the URL endpoint
//request.open('GET', 'https://api.wistia.com/v1/projects.json', true);

//request.onload = function () {
  // Begin accessing JSON data here

//}

// Send request
//request.send();