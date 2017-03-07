
    $(document).ready(function(){
      var dateTime = new Date();
      console.log(dateTime);

      var index = true;
      var bernieOn = false;
      var hillaryOn = false;
      var trumpOn = false;
      var cruzOn = false;

      var bernieWords = ["<em><strong>Most common words in <br>tweets tagged <span style=\"color:red\">#bernie2016</span>:</strong></em><br><span style=\"color:yellow\">----------------------------------------</span><br>"];
      var hillaryWords = ["<em><strong>Most common words in <br>tweets tagged <span style=\"color:red\">#hillary2016</span>:</strong></em><br><span style=\"color:yellow\">----------------------------------------</span><br>"];
      var trumpWords = ["<em><strong>Most common words in <br>tweets tagged <span style=\"color:red\">#trump2016</span>:</strong></em><br><span style=\"color:yellow\">----------------------------------------</span><br>"];
      var cruzWords = ["<em><strong>Most common words in <br>tweets tagged <span style=\"color:red\">#cruz2016</span>:</strong></em><br><span style=\"color:yellow\">----------------------------------------</span><br>"];

      $(".info").hover(function(){
        $(".info").html("This site pulls the profile pictures from twitter users who have most recently tweeted about each of the top polling candidates for the U.S. Presidency, and calculates the words that appear most frequently in those tweets");
        $(".info").css({"width": "225px", "height": "auto", "font-size": "12px", "text-align": "justify"});
      }, function (){
        $(".info").html("<strong>?</strong>");
        $(".info").css({"width": "20", "height": "20", "font-size": "21px", "text-align": "center"});
      })
      $(".word_counter").hover(function(){
        if(bernieOn === true){
          $(".word_counter").html(bernieWords);
        } else if(hillaryOn === true){
          $(".word_counter").html(hillaryWords);
        } else if (trumpOn === true){
          $(".word_counter").html(trumpWords);
        } else if (cruzOn === true){
          $(".word_counter").html(cruzWords);
        }
        if(index === false){
        $(".word_counter").css({"width": "160px", "height": "auto", "font-size": "12px", "text-align": "justify"});
      }
      }, function (){
        $(".word_counter").html("<strong>#</strong>");
        $(".word_counter").css({"width": "20", "height": "20", "font-size": "21px", "text-align": "center"});
      })

      $("#bernie").click(function(){
        //window.location = "bernie.html";
        $(".button").css({"color": "white", "border": "1px solid white", "box-shadow": "0px 3px 0px white"});
        $(this).css({"color": "yellow", "border": "1px solid yellow", "box-shadow": "0px 3px 0px yellow"});
        $(".container_hillary").css("left", "170vw");
        $(".container_trump").css("top", "200vh");
        $(".container_cruz").css("top", "-1800px");
        $(".container_bernie").css("left", "0");
        $("#bernie_words").css("top", "0");
        index = false;
        hillaryOn = false;
        cruzOn = false;
        trumpOff = false;
        bernieOn = true;
      });

      $("#hillary").click(function(){
        $(".button").css({"color": "white", "border": "1px solid white", "box-shadow": "0px 3px 0px white"});
        $(this).css({"color": "yellow", "border": "1px solid yellow", "box-shadow": "0px 3px 0px yellow"});
        $(".container_bernie").css("left", "-170vw");
        $(".container_trump").css("top", "200vh");
        $(".container_cruz").css("top", "-1800px");
        $(".container_hillary").css("left", "0");
        $(".button").css("background-color", "transparent");
        index = false;
        bernieOn = false;
        cruzOn = false;
        trumpOn = false;
        hillaryOn = true;
      });

      $("#trump").click(function(){
        $(".button").css({"color": "white", "border": "1px solid white", "box-shadow": "0px 3px 0px white"});
        $(this).css({"color": "yellow", "border": "1px solid yellow", "box-shadow": "0px 3px 0px yellow"});
        $(".container_bernie").css("left", "-170vw");
        $(".container_hillary").css("left", "170vw");
        $(".container_cruz").css("top", "-1800px");
        $(".container_trump").css("top", "0");
        $(".button").css("background-color", "transparent");
        index = false;
        bernieOn = false;
        cruzOn = false;
        hillaryOn = false;
        trumpOn = true;
      });

      $("#cruz").click(function(){
        $(".button").css({"color": "white", "border": "1px solid white", "box-shadow": "0px 3px 0px white"});
        $(this).css({"color": "yellow", "border": "1px solid yellow", "box-shadow": "0px 3px 0px yellow"});
        $(".container_bernie").css("left", "-170vw");
        $(".container_hillary").css("left", "170vw");
        $(".container_trump").css("top", "170vh");
        $(".container_cruz").css("top", "0");
        $(".button").css("background-color", "transparent");
        index = false;
        bernieOn = false;
        trumpOn = false;
        hillaryOn = false;
        cruzOn = true;
      });

      $(".button").hover(function(){
        $(this).css({"box-shadow": "0px 6px 0px", "background-color": "#2d2d86"});

    }, function(){
      $(this).css("box-shadow", "0px 3px 0px");
      if(index === false){
        $(this).css("background-color", "transparent");
      }
      //$(this).css("background-color", "transparent");
      })
//////BERNIE API CALL///////////////////////////
      var apiBernie ={};

      apiBernie.key = "";

      apiBernie.conditions = "http://cooper-union-search-proxy.herokuapp.com/twitter/search/bernie2016?count=100";

      console.log(apiBernie)

      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: apiBernie.conditions,
        success: function(response){
          console.log(response);

          var bernieStatuses = "";
          var bernieArr = [];
          var bernieWordCheckerArr = [];
          var bernieWordCount = [];
          var currentBerniePosition = 0;
          //var bernieWords = [];

        for(var i = 0; i < response.statuses.length; i++){
          $(".container_bernie").append("<div class='profile_pic' style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
          bernieStatuses += response.statuses[i].text;
        }

        bernieStatuses = bernieStatuses.toLowerCase();
        bernieStatuses = bernieStatuses.replace(/#|\.|,|:|@|"|\?|!/gi, "");
        bernieArr = bernieStatuses.split(" ");

        for(var j = 0; j < bernieArr.length; j++){
          if((bernieWordCheckerArr.indexOf(bernieArr[j])) < 0){
            bernieWordCheckerArr.push(bernieArr[j]);
            //bernieObject.items.push({"word":bernieArr[j], "frequency":1});
            bernieWordCount.push(1);
          } else {
            //bernieWordCount += 2;
            currentBerniePosition = bernieWordCheckerArr.indexOf(bernieArr[j]);
            bernieWordCount[currentBerniePosition] += 1;
            //console.log(currentBerniePosition);
        }
      }
        var bernieWordCountSorted = bernieWordCount.slice(0);
        bernieWordCountSorted.sort(function(a, b){return b-a});

        console.log(bernieWordCount);
        console.log(bernieWordCountSorted);
        console.log(bernieWordCheckerArr);



        for(var k = 0; bernieWords.length < 11; k++){
          var current = bernieWordCount.indexOf(bernieWordCountSorted[k]);
          var currentWord = bernieWordCheckerArr[current];
          if(currentWord.length > 5 && currentWord.length < 11 && currentWord !== "bernie2016" && currentWord !== "bernie" && currentWord !== "sanders" && currentWord !== "there's" && (currentWord.indexOf("http")< 0)){
            bernieWords.push((bernieWords.length) + ". " + currentWord + "<br>");
            bernieWordCount[current] = 0;
          }
        }

        console.log(bernieWordCountSorted);

        console.log(bernieWords);

        }
      })
//////HILLARY API CALL////////////////////////
      var apiHillary ={};

      apiHillary.key = "";

      apiHillary.conditions = "http://cooper-union-search-proxy.herokuapp.com/twitter/search/hillary2016?count=100";

      console.log(apiHillary)

      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: apiHillary.conditions,
        success: function(response){
          console.log(response);

          var hillaryStatuses = "";
          var hillaryArr = [];
          var hillaryWordCheckerArr = [];
          var hillaryWordCount = [];
          var currentHillaryPosition = 0;

        for(var i = 0; i < response.statuses.length; i++){
          $(".container_hillary").append("<div class='profile_pic' style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
          hillaryStatuses += response.statuses[i].text;
        }

        hillaryStatuses = hillaryStatuses.toLowerCase();
        hillaryStatuses = hillaryStatuses.replace(/#|\.|,|:|@|"|\?|!/gi, "");
        hillaryArr = hillaryStatuses.split(" ");

        for(var j = 0; j < hillaryArr.length; j++){
          if((hillaryWordCheckerArr.indexOf(hillaryArr[j])) < 0){
            hillaryWordCheckerArr.push(hillaryArr[j]);
            hillaryWordCount.push(1);
          } else {
            currentHillaryPosition = hillaryWordCheckerArr.indexOf(hillaryArr[j]);
            hillaryWordCount[currentHillaryPosition] += 1;
        }
        }
        var hillaryWordCountSorted = hillaryWordCount.slice(0);
        hillaryWordCountSorted.sort(function(a, b){return b-a});

        for(var k = 0; hillaryWords.length < 11; k++){
          var current = hillaryWordCount.indexOf(hillaryWordCountSorted[k]);
          var currentWord = hillaryWordCheckerArr[current];
          if(currentWord.length > 5 && currentWord.length < 11 && currentWord !== "hillary2016" && currentWord !== "hillary" && currentWord !== "hillary" && currentWord !== "there's" && (currentWord.indexOf("http")< 0)){
            hillaryWords.push((hillaryWords.length) + ". " + currentWord + "<br>");
            hillaryWordCount[current] = 0;
          }
        }
        }
      })
//////TRUMP API CALL///////////////////////
      var apiTrump ={};

      apiTrump.key = "";

      apiTrump.conditions = "http://cooper-union-search-proxy.herokuapp.com/twitter/search/trump2016?count=100";

      console.log(apiTrump)

      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: apiTrump.conditions,
        success: function(response){
          console.log(response);

          var trumpStatuses = "";
          var trumpArr = [];
          var trumpWordCheckerArr = [];
          var trumpWordCount = [];
          var currentTrumpPosition = 0;

        for(var i = 0; i < response.statuses.length; i++){
          $(".container_trump").append("<div class='profile_pic' style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
          trumpStatuses += response.statuses[i].text;
        }

        trumpStatuses = trumpStatuses.toLowerCase();
        trumpStatuses = trumpStatuses.replace(/#|\.|,|:|@|"|\?|!/gi, "");
        trumpArr = trumpStatuses.split(" ");

        for(var j = 0; j < trumpArr.length; j++){
          if((trumpWordCheckerArr.indexOf(trumpArr[j])) < 0){
            trumpWordCheckerArr.push(trumpArr[j]);
            trumpWordCount.push(1);
          } else {
            currentTrumpPosition = trumpWordCheckerArr.indexOf(trumpArr[j]);
            trumpWordCount[currentTrumpPosition] += 1;
        }
        }
        var trumpWordCountSorted = trumpWordCount.slice(0);
        trumpWordCountSorted.sort(function(a, b){return b-a});

        for(var k = 0; trumpWords.length < 11; k++){
          var current = trumpWordCount.indexOf(trumpWordCountSorted[k]);
          var currentWord = trumpWordCheckerArr[current];
          if(currentWord.length > 5 && currentWord.length < 11 && currentWord !== "trump2016" && currentWord !== "trump" && currentWord !== "trump" && currentWord !== "there's" && (currentWord.indexOf("http")< 0)){
            trumpWords.push((trumpWords.length) + ". " + currentWord + "<br>");
            trumpWordCount[current] = 0;
          }
        }
        }
      })
//////CRUZ API CALL////////////////////
var apiCruz ={};

apiCruz.key = "";

apiCruz.conditions = "http://cooper-union-search-proxy.herokuapp.com/twitter/search/cruz2016?count=100";

console.log(apiCruz)

$.ajax({
  type: 'GET',
  dataType: 'json',
  url: apiCruz.conditions,
  success: function(response){
    console.log(response);

    var cruzStatuses = "";
    var cruzArr = [];
    var cruzWordCheckerArr = [];
    var cruzWordCount = [];
    var currentCruzPosition = 0;

  for(var i = 0; i < response.statuses.length; i++){
    $(".container_cruz").append("<div class='profile_pic' style='background-image: url(" + response.statuses[i].user.profile_image_url + ")'></div>");
    cruzStatuses += response.statuses[i].text;
  }

  cruzStatuses = cruzStatuses.toLowerCase();
  cruzStatuses = cruzStatuses.replace(/#|\.|,|:|@|"|\?|!/gi, "");
  cruzArr = cruzStatuses.split(" ");

  for(var j = 0; j < cruzArr.length; j++){
    if((cruzWordCheckerArr.indexOf(cruzArr[j])) < 0){
      cruzWordCheckerArr.push(cruzArr[j]);
      cruzWordCount.push(1);
    } else {
      currentCruzPosition = cruzWordCheckerArr.indexOf(cruzArr[j]);
      cruzWordCount[currentCruzPosition] += 1;
  }
  }
  var cruzWordCountSorted = cruzWordCount.slice(0);
  cruzWordCountSorted.sort(function(a, b){return b-a});

  for(var k = 0; cruzWords.length < 11; k++){
    var current = cruzWordCount.indexOf(cruzWordCountSorted[k]);
    var currentWord = cruzWordCheckerArr[current];
    if(currentWord.length > 5 && currentWord.length < 11 && currentWord !== "cruz2016" && currentWord !== "cruz" && currentWord !== "hillary" && currentWord !== "there's" && (currentWord.indexOf("http")< 0)){
      cruzWords.push((cruzWords.length) + ". " + currentWord + "<br>");
      cruzWordCount[current] = 0;
    }
  }
  }
})
///////////END APIS//////

    });
