$(document).ready(()=>{
$(".js-analyze-button").click(function(event) {
  console.log('here^');
	var totalWordCount = 0;
  var uniqueWordCount = 0;
  var averageWordLength = 0;
  
  //get the text from the text box
  var rawText = $('#user-text').val();
  
  totalWordCount = wordCountFunction(rawText);
  uniqueWordCount = uniqueWordFunction(rawText);
  averageWordLength = averageWordFunction(rawText);
  console.log(averageWordLength);
  
  //put them in text-report
  //unhide text-report
  $(".js-text-report").removeClass("hidden");
  
  $("#word-count").text(totalWordCount);
  $("#unique-words").text(uniqueWordCount);
  $("#average-length").text(averageWordLength);
});
});

//this is for word count
function wordCountFunction(text) {
	var wordCount = 0;
  var allTheWords = text.split(' ');
  var arrayLength = allTheWords.length;
  wordCount = arrayLength;
	return wordCount;
};

//this is for unique word count
function uniqueWordFunction(text) {
	var uniqueWordCount = 0;
  var allTheWords = text.split(' '); 
  var uniqueWords = [];
  for(i = 0; i < allTheWords.length; i++) {
  	var theWord = allTheWords[i];
  	if(uniqueWords.indexOf(theWord) < 0) {
  		uniqueWords.push(theWord);
      }
  };
  
  return uniqueWords.length;
};

//this is for average word length
function averageWordFunction(text) {
	var averageWordLength = 0;
  var numberofLetters = 0;
  var numberOfWords = wordCountFunction(text);
  var allTheLetters = text.split("");
  var letterLength = allTheLetters.length;
  numberOfLetters = letterLength - (numberOfWords - 1);
  return numberOfLetters / numberOfWords;
};