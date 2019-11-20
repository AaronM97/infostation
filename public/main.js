////////////////////////////////////// for results.html //////////////////////////////////////

$(document).ready(function () {
    let query = $(".searchquery").text();
    console.log(query);
    let url1 = "https://www.googleapis.com/customsearch/v1?key=AIzaSyC6TBRbbpvRl5jUj6DhvqNq8eTC3a3NgoQ&cx=017052284145539921913:vwovdaiwm3d&q=" + query;
    fetch(url1).then(function (response) {
        return response.json();
    }).then(function (response) {
        for (var i = 0; i < response.items.length; i++) {
            var item = response.items[i];
            console.log(item);
            $("#searchresults").append(`<div class="result${[i]}"> <a href="${item.formattedUrl}"> ${item.title} </a> <br> ${item.htmlSnippet} </div>`);
        };
    });
});

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

console.log('something happens on main.js');


// testing section facility
// $(document).ready(function () {
// let query = $(".searchresults").text();
// console.log(query);
// })