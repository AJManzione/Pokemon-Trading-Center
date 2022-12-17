import cheerio from "cheerio";
import request from "request";

const spriteQuery = 'body >  figure > img'

let results = [];

request("https://play.pokemonshowdown.com/sprites/trainers/", function(error, response, html) {

  var $ = cheerio.load(html);

  $(spriteQuery).each(function(i, element) {

  var name = $(element)[0].attribs.src

  const imageLink = `https://play.pokemonshowdown.com/sprites/trainers/${name}`;



  results.push({
    trainer_sprite: imageLink
  })

  
  })

console.dir(results, {'maxArrayLength': null}); 

});



 



