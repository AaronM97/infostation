$(document).ready(function () {
    $("#search").click(function () {
        let query = $("input[name=bar]").val();
        console.log(`Query: ${query}`);
        const authKey = "key=AIzaSyAP9tf1sdBxzqUHpiNNHFxGI19Fa8-pR70";
        let mainURL = "https://www.googleapis.com/customsearch/v1?";
        let numb = "start=0&num=10";
        let cx = "&cx=017052284145539921913:vwovdaiwm3d";
        let url1 = `${mainURL}${authKey}${cx}&q=${query}${numb}`;
        let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyAP9tf1sdBxzqUHpiNNHFxGI19Fa8-pR70&cx=017052284145539921913:vwovdaiwm3d&q=${query}`;
        console.log(`URL ${url}`);
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (response) {
            console.log('Response' + response.items)
            for (var i = 0; i < response.items.length; i++) {
                var item = response.items[i];
                console.log(`Items: ${item}`)
                // in production code, item.htmlTitle should have the HTML entities escaped.
                document.getElementById("searchresults").innerHTML = item;
                // document.getElementById("searchresults").innerHTML = item.htmlTitle;
            }
        });
    });
});