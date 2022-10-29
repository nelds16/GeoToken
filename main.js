
        /*Title Page Top Crypto*/
var btc = document.getElementById('bitcoin');
var eth = document.getElementById('ethereum');
var doge = document.getElementById('dogecoin');

        /*Default Settings*/
var settings = {
  "async": true,
  "scrossDomain": true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function(response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});


let coinsPerPageUSD = 100;
let currentPageUSD = 1;
let BASE_URL_USD = `https://api.coingecko.com/api/v3`;


/*ASC DESC Control Site*/
let COIN_DATA_ENDPOINT_USD =`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true`;
let coinUrlUSD = BASE_URL_USD + COIN_DATA_ENDPOINT_USD;
let sortOrderUSD = { column: 'market_cap', order: 'desc' };



$(document).ready( () => {
  refreshCoinTableBodyUSD();
});

function generateCoinTableBodyUSD(data) {
          /*Language Format*/
  let number = Intl.NumberFormat("en-US");
  for (let key in data) {

     $('#coinTableBody').append(
      $('<tr class="content-row"></tr>').append(
        $('<td class="text-center"></td>').text(data[key].market_cap_rank),
        $('<td id="specific" class="text-left"></td>').append(
          $('<div></div>').append(
                            /*Fetch API's & Formats*/
            `<img src="${data[key].image}" width="25">${data[key].name}</a>`)),
                            /*Self Inserted Table*/
        $('<td class="text-right "></td>').text("$" + number.format(data[key].current_price.toFixed(2))),
        $('<td class="text-right"></td>').text("$" + number.format(data[key].market_cap)),
        $('<td class="text-right"></td>').text("$" + number.format(data[key].total_volume)),

                                /*Price Changes*/
        $(`<td class='${data[key].price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}
        text-right'></td>`).text(Number(data[key].price_change_percentage_24h).toFixed(2) + "%"),


                                /*Graph*/
        $(`<img class="text-center" src="https://www.coingecko.com/coins/${data[key].market_cap_rank}/sparkline" srcset="https://www.coingecko.com/coins/${data[key].market_cap_rank}/sparkline 1x">`)
      )
    );
  };
}

 /*Main Value*/
function getCoinDataUSD() {
  return fetch(coinUrlUSD)
    .then(res => {
      return res.json();
    }).then(data => {
        return data;
      }).catch(err => {
      console.log(err);
        });
};

async function refreshCoinTableBodyUSD() {
  generateCoinTableBodyUSD(await getCoinDataUSD());
}
