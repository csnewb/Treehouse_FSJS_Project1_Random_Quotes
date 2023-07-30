/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela", citation: "Long Walk to Freedom", year: 1995 },
  { quote: "The way to get started is to quit talking and begin doing.", source: "Walt Disney", citation: "The Quotable Walt Disney", year: 2001 },
  { quote: "Your time is limited, don't waste it living someone else's life.", source: "Steve Jobs", citation: "Stanford Commencement Speech", year: 2005 },
  { quote: "If life were predictable it would cease to be life, and be without flavor.", source: "Eleanor Roosevelt", citation: "You Learn by Living", year: 1960 },
  { quote: "Life is what happens when you're busy making other plans.", source: "John Lennon", citation: "Double Fantasy", year: 1980 },
  { quote: "The purpose of our lives is to be happy.", source: "Dalai Lama", citation: "The Art of Happiness", year: 1998 },
  { quote: "Get busy living or get busy dying.", source: "Stephen King", citation: "Different Seasons", year: 1982 },
  { quote: "Don't count the days, make the days count.", source: "Muhammad Ali", citation: "Sports Illustrated Interview", year: 1978 },
  { quote: "It's not how much you have that makes people look up to you, it's who you are.", source: "Elvis Presley", citation: "Elvis by the Presleys", year: 2005 },
  { quote: "In the middle of difficulty lies opportunity.", source: "Albert Einstein", citation: "The World As I See It", year: 1934 }
];




function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  let rand_val = getRandomInt(1, quotes.length - 1)
  let quote = quotes[rand_val];
  return quote
}


/***
 * `printQuote` function
***/

function printQuote() {
  let random_quote = getRandomQuote(quotes);
  html_string = `
  <p class="quote"> ${random_quote.quote} </p>
  <p class="source">${random_quote.source}`

  if (random_quote.citation) {
    html_string += `, ${random_quote.citation}`
  }

  if (random_quote.year) {
    html_string += `, ${random_quote.year}`
  }

  html_string += '</p>'

  document.getElementById('quote-box').innerHTML = html_string
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);