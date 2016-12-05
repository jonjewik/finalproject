var baseApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = 'ea2962f859ad4ef4b1e89386e60a9b94';

var controller = {
    searchTracks: function (query) {
        var trackUri = baseApiUrl + "?q=" + query.split(" ").join("+") + "&api-key" + apiKey;
        return fetch(trackUri)
            .then(function (res) { return res.json() })
    }
}

export default controller;