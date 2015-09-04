$(document).ready(function(){

  var tweetControls =$('#tweet-controls'); 
  var tweetTextBox = $('.tweet-compose');
  var charCount = $("#char-count");
  var tweetSubmitButton = $('#tweet-submit');
  var tweetList = $('#stream');

  var fullName = $('#profile-summary p').text(); 
  var userName = fullName.replace(/\s/g,"");
  var userImg = $('#profile-summary img').attr('src');
  tweetTextBox.on('click', function(){
    //console.log("Here");
    if (tweetControls.css('display') === 'none'){
      tweetControls.css('display','block');
      tweetTextBox.css('height','5em');
    }
  })

  var blankTweet = $('.tweet:first');
  blankTweet.css('background-color', 'mintcream');
 
  tweetTextBox.on('input', function(){
  
    var tweetLength = tweetTextBox.val().length;
    //console.log("Here");
    charCount.text(Math.max(140-tweetLength,0));
    if(tweetLength>140){
      charCount.addClass('danger');
      tweetSubmitButton.attr('disabled', true);
    }
    else if (tweetLength>=130){
      charCount.addClass('danger');
      tweetSubmitButton.attr('disabled', false);
    }else{
      charCount.removeClass('danger');
      tweetSubmitButton.attr('disabled', false);
    }

  });

  tweetSubmitButton.on('click', function(e){
    createNewTweet(tweetTextBox.val().trim(), fullName, userName, userImg);
  })

  $('.tweet').on('click', function(){
    console.log("Clicked on Tweet");
    var tweetBox = $(this);
    console.log($('.reply', tweetBox));


    $('.reply', tweetBox).animate({height:'2.5em'},400);
  })


function createNewTweet(tweeterText, tweeterFullName, tweeterUserName, tweeterImg){

  var tweet = $('<div class = "tweet"></div>');
  var content = $("<div class = 'content'></div>");
  tweet.append(content);
  var avatar = $('<img class="avatar" src="'+tweeterImg+'" />');
  content.append(avatar);
  var fullName = $('<strong class="fullname">'+tweeterFullName+'</strong>');
  content.append(fullName);
  var userName = $('<span class="username">@'+tweeterUserName+'</span>');
  content.append(userName);
  var tweetText = $('<p class = "tweet-text">'+tweeterText+'</p>')
  content.append(tweetText);
  var twtActions = $('<div class="tweet-actions"> <ul> <li><span class="icon action-reply"></span> Reply</li> <li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">0</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">0</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to "'+tweeterUserName+'/></textarea> </div>');
  content.append(twtActions);
  tweetList.prepend(tweet);
  console.log("Test")
}

});
