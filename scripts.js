// Create a request variable and assign a new XMLHttpRequest object to it.


//var request = new XMLHttpRequest();

//request.open('GET', 'https://api.wistia.com/v1/projects.json', true);

/*var url = 'https://api.wistia.com/v1/stats/events.json?api_password=70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5&amp;per_page=1000'
var token = '70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
$.ajax({
    url: url,
    beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer " + token)
    },

})
.done(function (data) {
        alert(data);
		data.forEach(event => {
		  // Log each movie's title
		  console.log(event.received_at);
          console.log(event.percent_viewed);
          console.log(event.media_url);
		});
        $('body').append("hello");
})
.fail(function (jqXHR, textStatus) {
    alert("Error: " + textStatus);
})*/
/*var GetChartData = function () {
var rewatchs = [];
var tot_plays = [];
var labels_v = [];

var url = 'https://api.wistia.com/v1/medias.json?api_password=70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
var token = '70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
$.ajax({
    url: url,
    beforeSend: function(request) {
        request.setRequestHeader("Authorization", "Bearer " + token)
    },

})
.done(function (data) {
        //alert(data);
        data.forEach(media => {
          // Log each movie's title
            var url = 'https://api.wistia.com/v1/medias/'+ media.hashed_id + '/stats.json?api_password=70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
            var token = '70a67afd8bade37fc2b502c4443d000a440ccf78f967c48f26c65c1d98184fa5'
            $.ajax({
                url: url,
                beforeSend: function(request) {
                    request.setRequestHeader("Authorization", "Bearer " + token)
                },

            })
            .done(function (video_data) {
                    console.log(video_data);
                    var plays_by_visitor = video_data.stats.visitors*video_data.stats.percentOfVisitorsClickingPlay/100;
                    var plays = video_data.stats.plays;
                    tot_plays.push(plays);
                    var replays = plays - plays_by_visitor;
                    rewatchs.push(replays);
                    labels_v.push('Blue');
                    //$('body').append("hello");

            })
            .fail(function (jqXHR, textStatus) {
                alert("Error: " + textStatus);
            })
        });

        //$('body').append("hello");
})
.fail(function (jqXHR, textStatus) {
    alert("Error: " + textStatus);
})


};*/