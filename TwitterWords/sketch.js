var VIDEO_TIME_INTERVAL_MS = 15000;
var w = 1920;
var h = 1080;
var twitterData;
var pollutionData = [];
var WORD_WIDTH = 50;
var WORD_HEIGHT = 20;
var LEVEL_FACTOR = 1;
var lastDrawDate;
var currentDate;
var skyVideo;
var currentPollutionIndex=0;

function setup() {
  createCanvas(w, h);
  // Static data for proof-of-concept
  pollutionData = [236,221,236,193,250,261,273,274,332,298,231];
  twitterData = ["Light", "Air", "Water", "finding", "a", "healthy", "holiday", "in", "Copenhagen", "Copenhagen",
	"wintergreen", "tastes", "so", "good", "in", "cold", "weather", "Perfect", "weather", "at",
    "#Sluseholmen", "\#Copenhagen", "So", "desperate", "to", "visit", "Copenhagen", "in", "summer",
    "weather", "It", "was", "v", "beaut", "covered", "in", "snow", "but", "would", "be", "stunning",
    "in", "the", "sunshine", "Been", "chilling", "in", "the", "streets", "of", "Copenhagen", "all", "day",
    "-", "good", "to", "get", "out", "of", "the", "studio", "for", "some", "fresh", "air", "and", "views",
	"sometimes", "different", "sites", "in", "Copenhagen", "today￼", "summer", "is", "really", "beautiful",
	"here", "long", "bright", "days", "warm", "weather", "feels", "wonderful￼", "After", "weeks", "of",
	"hit-and-miss", "(mostly", "miss)", "weather", " Copenhagen", "has", "been", "beautiful", "the", "past",

	"week", "Everyone", "is", "out", "and", "about", "Lucked", "out", "with", "the", "weather", "today", "in",
	"\#Copenhagen", "Perfect", "day", "for", "street", "food", "along", "the", "Harbour…", "The", "Danes", "seem", 
	"intent", "on", "letting", "us", "know", "this", "weather", "is", "not", "normal", "Busy", "day", "in",
	"\#Copenhagen", "\#summer", "\#travel", "Chilling", "out", "under", "The", "Black", "diamond", "building",
	"Beautiful", "city", "beautiful", "weather", "Day", "2", "in", "Copenhagen", "The", "weather", "is", "awesome!",
	"\#Denmark", "\#RoadTrip2016", "\#wanderlust", "For", "the", "last", "2", "days", "we", "got", "sunner", "weather",

  	"here", "in", "Copenhagen", "with", "lots", "of", "sun", "no", "clouds", "very", "Little", "Wind", "heat", "It's",
	"Friday", "and", "we", "are", "having", "fun", "and", "drinking", "wine", "in", "the", "lovely", "weather", "in", 
	"Copenhagen", "I", "absolutely", "enjoyed", "Copenhagen", "more", "on", "my", "second", "visit", "Lovely", "people",

	"and", "lovely", "weather", "that", "sunny", "boat", "trip", "was", "my", "favourite", "The", "high", "temp", "and",
	"good", "weather", "is", "back", "in", "Copenhagen!", "perfect", "weather", "today", "in", "Copehagen", "-", "a",
	"beautiful", "city", "of", "canals"];

  // Set draw colour.
  fill(50,50,50);
  // A date in the past
  lastDrawDate = new Date("October 13, 2014 11:13:00");
}

function draw() {
  currentDate = new Date();
  if (( currentDate.getTime() - lastDrawDate.getTime()) > VIDEO_TIME_INTERVAL_MS) {
	// First draw or VIDEO_TIME_INTERVAL ms has passed.
    clear();
    lastDrawDate = new Date();
    drawPollutionLevel(pollutionData[currentPollutionIndex]);
    currentPollutionIndex += 1;
  } else {
    return;
  }
}

function drawPollutionLevel(level) {
  if (twitterData.length <= 0) {
    // No data yet.
    return;
  }
  // Draw random strings from the twitter set.
  var numCharacters=0;
  while (numCharacters <= level) {
    var wordIndex = Math.round(random(twitterData.length-1));
    console.log(twitterData.length);
    var word = twitterData[wordIndex];
    numCharacters += word.length;
    console.log(word);
    var xPos = random(width-WORD_WIDTH);
    var yPos = random(height-WORD_HEIGHT)+WORD_HEIGHT;
    drawWord(word,xPos,yPos);
  }
}

function drawWord(word,x,y) {
  fill(255,255,255);
  textSize(64);
  text(word,x,y);
}