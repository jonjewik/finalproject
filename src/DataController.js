var baseApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = 'faeda89dccac41c0b4f024b6a956b909';


var controller = {
    searchNYT: function (query) {
        var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&sort=newest"; // + "&hl=true";

        return fetch(trackUri)
            .then(function (res) { return res.json() })
    },

    dateSearch: function (query, date) {
        var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin_date=" + date + "&sort=newest";
        return fetch(trackUri)
            .then(function (res) { return res.json() })
    },

    pageControl: function (query, date, page) {

        if (date !== "") {
            var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin_date=" + date + "&sort=newest" + "&page=" + page;
        } else {
            var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&sort=newest" + "&page=" + page;
        }

        return fetch(trackUri)
            .then(function (res) { return res.json() })
    }
}

export default controller;
