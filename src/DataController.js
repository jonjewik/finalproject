var baseApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = 'ea2962f859ad4ef4b1e89386e60a9b94';

// ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ea2962f859ad4ef4b1e89386e60a9b94&q=black+lives+matter

var controller = {
    searchNYT: function(query) {
        var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+");

        console.log(trackUri);

        return fetch(trackUri)
            .then(function (res) { return res.json() })
    }
}

export default controller;