var random_result;
var lost = 0;
var won = 0;
var previous = 0;
//must define start numbe "0"

var resetandStart = function () {

    $(".crystals").empty();

    var images = ["https://www.crystallight.co.nz/images/library/tuxpi.com.1474844554.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgauaajcPDpWoddWoh__PZ2PI0rJiQEgUT55K8qmx8TwPs4wPzpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGTpvCH1PO8ezuPX1vnqiuGHwNzHGCkWox8S3WapFjzypnIYgSA"
        , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDPLYy50tnjUBBVLNgcFSVsRSt-sNpG92GR12KDrHgKQuQFl6"
    ];

    random_result = Math.floor(Math.random() * 101) + 19;
    //Hoisting

    $("#result").html("Random Number: " + random_result);
    // My box that tells the random number

    $(".crystals").empty();

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1; //hoisting because dont want to start from 0
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data-random": random

        });
        crystal.css({
           "background-image":"url('" + images[i] + "')",
            "backgorund-size":"cover"

        });
        $(".crystals").append(crystal);
    }
    $("#previous").html("Total score: " + previous);
}

resetandStart();


$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total score: ", + previous);

    console.log(previous);

    if (previous > random_result) {
        lost++;

        $("#lost").html("You lost !! " + lost);

        previous = 0;

        resetandStart();


    }
    else if (previous === random_result) {

        win++

        $("#win").html("You lost !! " + win);

        previous = 0;

        resetandStart();


    }

});