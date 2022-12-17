// npm packages required for the web scrape
import cheerio from "cheerio";
import request from "request";


// saving different html selector paths into their retrospective variable names.
const genOneQuery = '#mw-content-text > div > table:nth-child(7) > tbody > tr'
const genTwoQuery = '#mw-content-text > div > table:nth-child(9) > tbody > tr'
const genThreeQuery = '#mw-content-text > div > table:nth-child(11) > tbody > tr'
const genFourQuery = '#mw-content-text > div > table:nth-child(13) > tbody > tr'
const genFiveQuery = '#mw-content-text > div > table:nth-child(15) > tbody > tr'
const genSixQuery = '#mw-content-text > div > table:nth-child(17) > tbody > tr'
const genSevenQuery = '#mw-content-text > div > table:nth-child(19) > tbody > tr'
const genEightQuery = '#mw-content-text > div > table:nth-child(21) > tbody > tr'
const genNineQuery = '#mw-content-text > div > table:nth-child(24) > tbody > tr'


// defining the end point url for cheerio to be able to parse through
request("https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number", function(error, response, html) {

// loading cheerio up
  var $ = cheerio.load(html);

// iterating through each element on the page that falls under the specific path we gave it (every tr, within tbody, within etc...)
  $(genOneQuery).each(function(i, element) {

// an empty array to hold future data after we parse through it
  let results =[];

// customizing and parsing through the data we recieve ($(element.text) in this case) splitting the data and rejoining it where necissarry. reformatting to our needs.
  let name = $(element).text();
  let nameDes = name.split("\n");
  let noDash = nameDes[3].split("-")
  let join = noDash.join("")

  let pokedexNum = nameDes[1];
  let pokemon = join;
  let type = nameDes[4].concat(` ${nameDes[5]}`);
  let sprite = `https://play.pokemonshowdown.com/sprites/ani/${join.toLowerCase()}.gif`

// not allowing useless rows to be pushed into our array, this was specific to the data retrieved from this specific site. as all web scrapes are, there is no one way to do it.
if (pokedexNum !== '' && pokedexNum !== 'Ndex') {
  results.push({
    entry: pokedexNum,
    name: pokemon,
    type: type,
    sprite: sprite
  }); 
}

});

for(let i = 0; i < results.length; i ++) {
  let j = 1 + i;
    results[i].entry = `${j}`;

};

// console logging every element in the array
console.dir(results, {'maxArrayLength': null}); 
  
  });



 



