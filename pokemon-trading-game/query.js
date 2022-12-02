const cheerio = require("cheerio");
const request = require("request");

request("https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number", function(error, response, html) {

  var $ = cheerio.load(html);

/* -------------------------------------------------------------------------- */
/*                         Pokemon Generation Queries                         */
/* -------------------------------------------------------------------------- */

  const genOneQuery = '#mw-content-text > div > table:nth-child(7) > tbody > tr'
  const genTwoQuery = '#mw-content-text > div > table:nth-child(9) > tbody > tr'
  const genThreeQuery = '#mw-content-text > div > table:nth-child(11) > tbody > tr'
  const genFourQuery = '#mw-content-text > div > table:nth-child(13) > tbody > tr'
  const genFiveQuery = '#mw-content-text > div > table:nth-child(15) > tbody > tr'
  const genSixQuery = '#mw-content-text > div > table:nth-child(17) > tbody > tr'
  const genSevenQuery = '#mw-content-text > div > table:nth-child(19) > tbody > tr'
  const genEightQuery = '#mw-content-text > div > table:nth-child(21) > tbody > tr'
  const genNineQuery = '#mw-content-text > div > table:nth-child(24) > tbody > tr'


  const results = [];

  $(`${genOneQuery}`).each(function(i, element) {

    let name = $(element).text();
    let nameDes = name.split("\n")
    let pokedexNum = nameDes[1]
    let pokemon = nameDes[3]
    let type = nameDes[4].concat(` ${nameDes[5]}`)

/* -------------------------------------------------------------------------------------------------- */
/*                       Deletes Any Uneccisarry Entries And Pushes the Good Ones                     */
/* -------------------------------------------------------------------------------------------------- */

    if (pokedexNum !== '' && pokedexNum !== 'Ndex') {
      results.push({
        id: pokedexNum,
        pokemon: pokemon,
        type: type
      }); 
    }
  });


/* -------------------------------------------------------------------------- */
/*                     Makes Sure We Get Back All Content                     */
/* -------------------------------------------------------------------------- */

  let genOne = console.dir(results, {'maxArrayLength': null})


  console.log(genOne)

});
