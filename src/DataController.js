var baseApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var apiKey = 'faeda89dccac41c0b4f024b6a956b909';
//var query = "";

// ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ea2962f859ad4ef4b1e89386e60a9b94&q=black+lives+matter

var controller = {
    searchNYT: function (query) {
        var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&sort=newest"; // + "&hl=true";

        //console.log(trackUri);


        return fetch(trackUri)
            .then(function (res) { return res.json() })
    },

    dateSearch: function (query, date) {
        var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin_date=" + date + "&sort=newest";

        console.log(trackUri);

        return fetch(trackUri)
            .then(function (res) { return res.json() })
    },

    pageControl: function (query, date, page) {

        console.log("query:" + query + " date:" + date + " page:" + page);

        if (date !== "") {
            var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin_date=" + date + "&sort=newest" + "&page=" + page;
        } else {
            var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&sort=newest" + "&page=" + page;
        }

        //console.log(trackUri);

        return fetch(trackUri)
            .then(function (res) { return res.json() })
    }
}

export default controller;







// var baseApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// var apiKey = 'ea2962f859ad4ef4b1e89386e60a9b94';
// //var query = "";

// // ex: https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ea2962f859ad4ef4b1e89386e60a9b94&q=black+lives+matter

// var controller = {
//     searchNYT: function(query) {
//         var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+");

//         //console.log(trackUri);

//         return fetch(trackUri)
//             .then(function (res) { return res.json() })
//     },

//     dateSearch: function(query, date) {
//         var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin_date=" + date;

//         console.log(trackUri);

//         return fetch(trackUri)
//             .then(function (res) { return res.json() })
//     }
// }

// export default controller;


// dateSearch: function(date) {
//         var trackUri = baseApiUrl + "?api-key=" + apiKey + "&q=" + query.split(" ").join("+") + "&begin-date=" + date;


//         return fetch(trackUri)
//             .then(function (res) { return res.json() })
//     }