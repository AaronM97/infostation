////////////////////////////////////// for index.html //////////////////////////////////////

// Typewritter text
var i = 0;
var txt = 'What would you like to search';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("txt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Background image
let imageUrl1 = "https://source.unsplash.com/random/1600x900"
async function backgroundImage() {
    res1 = await fetch(imageUrl1);
    let link1 = res1.url;
    setPhotos(link1);
};
function setPhotos(image1) {
    $('body').css('background-image', `url(${image1})`).css('background-size', '100%');
}
backgroundImage();

// Add logic to make sure there is a search term.
$(document).ready(function () {
    $("#search").click(function (ev) {
        // Reload logic. 
        // ev.preventDefault();
        let query = $("input[name=bar]").val();
        console.log(query);
        console.log("query");
        if (query.length === 0) {
            alert("Insert search term!");
        };
        if (query.length > 0) {
            $("form").attr("action", "results").attr("method", "POST");
        };
    });
    $("#luckybutton").click(function (ev) {
        // Reload logic. 
        // ev.preventDefault();
        let query = $("input[name=bar]").val();
        console.log(query);
        console.log("query");
        if (query.length === 0) {
            alert("Insert search term!");
        };
        if (query.length > 0) {
            $("form").attr("action", "lucky").attr("method", "POST");
        };
    });
});


console.log('something happens on index.js');