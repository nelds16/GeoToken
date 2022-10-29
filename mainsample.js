var settings = {
  "async": true,
  "scrossDomain": true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd%2Cphp&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true",
  "method": "GET",
  "headers": {}
}


async function refreshCoinTableBodyUSD() {
  generateCoinTableBodyUSD(await getCoinDataUSD());
}

        /*Bitcoin Info Area*/
        /*Bitcoin USD*/
        var bit1 = document.getElementById('ubit');
        var bit2 = document.getElementById('bucap');
        var bit3 = document.getElementById('buvol');
        var bit4 = document.getElementById('buchg');

        /*Bitcoin PHP*/
        var bit5 = document.getElementById('pbit');
        var bit6 = document.getElementById('bpcap');
        var bit7 = document.getElementById('bpvol');
        var bit8 = document.getElementById('bpchg');

        var dog1 = document.getElementById('udog');
        var dog2 = document.getElementById('ducap');
        var dog3 = document.getElementById('duvol');
        var dog4 = document.getElementById('duchg');

        var dog5 = document.getElementById('pdog');
        var dog6 = document.getElementById('dpcap');
        var dog7 = document.getElementById('dpvol');
        var dog8 = document.getElementById('dpchg');

        var eth1 = document.getElementById('ueth');
        var eth2 = document.getElementById('eucap');
        var eth3 = document.getElementById('euvol');
        var eth4 = document.getElementById('euchg');

        var eth5 = document.getElementById('peth');
        var eth6 = document.getElementById('epcap');
        var eth7 = document.getElementById('epvol');
        var eth8 = document.getElementById('epchg');


        $.ajax(settings).done(function(response){

        bit1.innerHTML = response.bitcoin.usd;
        bit2.innerHTML = response.bitcoin.usd_market_cap;
        bit3.innerHTML = response.bitcoin.usd_24h_vol;
        bit4.innerHTML = response.bitcoin.usd_24h_change;

        bit5.innerHTML = response.bitcoin.php;
        bit6.innerHTML = response.bitcoin.php_market_cap;
        bit7.innerHTML = response.bitcoin.php_24h_vol;
        bit8.innerHTML = response.bitcoin.php_24h_change;

        dog1.innerHTML = response.dogecoin.usd;
        dog2.innerHTML = response.dogecoin.usd_market_cap;
        dog3.innerHTML = response.dogecoin.usd_24h_vol;
        dog4.innerHTML = response.dogecoin.usd_24h_change;

        dog5.innerHTML = response.dogecoin.php;
        dog6.innerHTML = response.dogecoin.php_market_cap;
        dog7.innerHTML = response.dogecoin.php_24h_vol;
        dog8.innerHTML = response.dogecoin.php_24h_change;

        eth1.innerHTML = response.ethereum.usd;
        eth2.innerHTML = response.ethereum.usd_market_cap;
        eth3.innerHTML = response.ethereum.usd_24h_vol;
        eth4.innerHTML = response.ethereum.usd_24h_change;

        eth5.innerHTML = response.dogecoin.php;
        eth6.innerHTML = response.dogecoin.php_market_cap;
        eth7.innerHTML = response.dogecoin.php_24h_vol;
        eth8.innerHTML = response.dogecoin.php_24h_change;

        });
