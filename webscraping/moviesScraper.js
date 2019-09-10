const request = require("request");
const cheerio = require("cheerio");
let today = new Date();
let todaysDate =
  today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
console.log("Todays Date: " + todaysDate);
request(
  "https://www.cineplex.com/Showtimes/any-movie/cinema-cineplex-laval?Date=" +
    todaysDate,
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const theaterAddress = $(".theatre-address");

      console.log(theaterAddress.text());
    }
  }
);
