
var config = {
  apiKey: "AIzaSyCUBJczlRwsIBVS14yCIpoB-mNg4KyEBLI",
  authDomain: "twitter-politics.firebaseapp.com",
  databaseURL: "https://twitter-politics.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};

var d, dAvg, dPlayers;

// var avg = firebase.database().ref("data");
//
// avg.update({
//    "avg": 10
// });

    $(document).ready(function() {

      var bernie = {
        name: "bernie",
        pics: []
      };
      var trump = {
        name: "trump",
        pics: []
      };
      var cruz = {
        name: "cruz",
        pics: []
      };
      var hillary = {
        name: "hillary",
        pics: []
      };

      var settings = {
        gameRunning : false,
        selected : null,
        score: 0
      };

      //randomize starting selected on game start
      var ranStart = function() {
        var arr = [];
        var p = 0;
        var t= 200;
        $(".button__active").each(function(){
          arr.push($(this).attr('id'));
        });

        for(var j = 0; j < 11; j++){
          setTimeout(function(){
            $(".pointer").removeClass("selected");
            if(p < arr.length - 1) {p++;} else {p = 0;}
            var cur = document.getElementById(arr[p]);
            $(cur).children(".pointer").addClass("selected");
            settings.selected = arr[p];
          }, 300 + t);
          t = t * 1.25;
        }

      };

      //selects selected
      var selectable = function() {
        $("body").on("click", ".button__active", function() {
          $(".pointer").removeClass("selected");
          $(this).children(".pointer").addClass("selected");
          settings.selected = $(this).attr("id");
        });
      };

      $("body").on("click", ".start-button", function(){
        $(".intro").addClass("hide");
        $(".title, .instructions, .button-container, .info").removeClass("hide");
      });

      $("body").on("click", ".pic-s", function(){
        if(settings.gameRunning === true) {
          var curId = $(this).attr("id");
          curId = curId.slice(0, curId.length - 2);

          if(settings.selected == curId){
            $(this).append("<div class='right answer'>✓ " + curId + "</div>");
            settings.score ++;
            $(".score-target").html(settings.score);
          } else {
            $(this).append("<div class='wrong answer'>✘ " + curId + "</div>");
            //settings.score --;
            //$(".score-target").html(settings.score);
          }
          $(this).removeClass("pic-s");
        }

        if($(".pic-s").length < 1){

          firebase.initializeApp(config);

          var ref = firebase.database().ref();

          ref.on("value", function(snapshot) {
             d = snapshot.val();
          }, function (error) {
             console.log("Error: " + error.code);
          });

          setTimeout(function(){

            dAvg = d.data.avg;
            dPlayers = d.data.players;

            dAvg = (dPlayers * dAvg + settings.score) / (dPlayers + 1);

            dPlayers ++;

            var writeRef = firebase.database().ref("data");

            writeRef.update({
              "avg" : dAvg,
              "players" : dPlayers
            });

            $(".final-score-overlay").fadeIn();
            $(".score-bar-right").css("width" , ((settings.score / 30) * 100) + "%");
            $(".avg-score-bar").css("width" , ((dAvg / 30) * 100) + "80%");
            $("#avg").html(dPlayers);

          }, 500);

        }

      });

      var gameStart = function() {
        ranStart();
        selectable();
        settings.gameRunning = true;

        $(".instructions-2, .spinner").fadeIn(1000);
       //$(".pic").
      };

      var combined = [];

      //randomize combined array
      function shuffle(array) {
        var currentIndex = array.length,
          temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }

      var noDuplicates = function(){
        var arrCopy =[];

        $.each(combined, function(i, el){
            if($.inArray(el, arrCopy) === -1) {arrCopy.push(el);}
        });

        combined = arrCopy;

      };

      var buttonClick = function() {
        $(".button").click(function() {
          $(this).toggleClass("button__active");
        });
      };

      buttonClick();

      $(".info, .x").click(function() {
        $(".info__text, .info, .button-container, .instructions, .pic-container, #reset").toggleClass("hide");
      });

     $("body").on("click", ".start", function() {
        if ($(".button__active").length >= 2) {

          $(".button-container").removeClass("button-container-start");
          $(".button").not('.button__active').addClass("button__inactive");
          $(".instructions, .start").remove();
          $(".score").removeClass("hide");
          $(".button").off();

          $(".button__active").each(function(index, value) {
            var name = $(this).attr('id');
            callApi(name);
          });

          gameStart();

        }
      });

      var callApi = function(ref) {

        var named = eval(ref);

        var api = {};
        api.key = "";
        api.conditions = "http://cooper-union-search-proxy.herokuapp.com/twitter/search/" + named.name + "2016?count=100";

        $.ajax({
          type: 'GET',
          dataType: 'json',
          url: api.conditions,
          success: function(response) {
            for (var i = 0; i < response.statuses.length; i++) {
              named.pics.push("<div class='pic pic-s' style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
              combined.push("<div class='pic pic-s' id='" + named.name + "-c'style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
            }

            $(".pic-container").empty();

            combined = shuffle(combined);
            combined = shuffle(combined);

            noDuplicates();

            var shortened = combined.slice(0, 30);

            $(".pic-container").append(shortened);

          }
        });

      };

      $("#reset, .play-again").click(function(){
        settings.score = 0;
        settings.gameRunning = false;
        settings.selected = null;
        $(".pic-container").html("");
        $(".button-container").addClass("button-container-start");
        $(".instructions-2, .spinner, .final-score-overlay").fadeOut();
        $(".avg-score-bar, .score-bar-right").css("width" , "0%");
        $("body").append("<p class='instructions'>Select at least two and up to four candidates</p>");
        $(".button-container").append("<div class='start'>Start</div>");
        $(".pic-container").empty().append('<div class="spinner hide"><i class="fa fa-spinner fa-spin" aria-hidden="true"></i></div>');
        $(".score").addClass("hide");
        $(".button").removeClass("button__active").removeClass("button__inactive");
        buttonClick();
        combined = [];
      });

    });
