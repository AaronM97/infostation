$(document).ready(function () {
    $("#search").click(function () {
        let query = $("input[name=bar]").val();
        // console.log(query);
        const authKey = "key=AIzaSyAP9tf1sdBxzqUHpiNNHFxGI19Fa8-pR70";
        let mainURL = "https://www.googleapis.com/customsearch/v1?";
        let numb = "start=0&num=10";
        let cx = "&cx=017052284145539921913:vwovdaiwm3d";
        let url = `${mainURL}${authKey}${cx}&q=${query}${numb}`;
        let url1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAP9tf1sdBxzqUHpiNNHFxGI19Fa8-pR70&cx=017052284145539921913:vwovdaiwm3d&q=audi";
        // console.log(`URL ${url}`)
        fetch(url1).then(function (response) {
            return response.json();
        }).then(function (response) {
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                // in production code, item.htmlTitle should have the HTML entities escaped.
                ("searchresults").innerHTML += "<br>" + item.htmlTitle;
            }
        });
    });
});