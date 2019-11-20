// for results.html

$(document).ready(function () {
    let query = $(".searchquery").text();
    $("#search").click(function () {
            if (query.length === 0) {
                alert("no")
            }
            if (query.length > 0) {
                console.log(query);

                let url1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAP9tf1sdBxzqUHpiNNHFxGI19Fa8-pR70&cx=005791462147845370082:pja7h40zjsg&q=" + query;
                fetch(url1).then(function (response) {
                    return response.json();
                }).then(function (response) {
                    for (var i = 0; i < response.items.length; i++) {
                        var item = response.items[i];
                        console.log(item);
                        // var linking = item.link;
                        // console.log(linking);
                        // document.getElementById("searchresults").append("<div> item.htmlTitle <br> + item.formattedUrl </div>");
                        $("#searchresults").append(`<div class="result${[i]}"> <a href="${item.formattedUrl}"> ${item.title} </a> <br> ${item.htmlSnippet} </div>`);
                    }
                });
            }
        
    })});


// Background image
let imageUrl1 = "https://source.unsplash.com/random/1600x900"
async function backgroundImage() {
    res1 = await fetch(imageUrl1);
    let link1 = res1.url;
    setPhotos(link1);
}

function setPhotos(image1) {
    $('body').css('background-image', `url(${image1})`).css('background-size', '100%');
}
backgroundImage();

console.log('something happens');


// testing section facility
// $(document).ready(function () {
// let query = $(".searchresults").text();
// console.log(query);
// })