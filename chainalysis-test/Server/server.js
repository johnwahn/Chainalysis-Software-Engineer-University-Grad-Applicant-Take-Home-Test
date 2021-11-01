const express = require('express') 
const app = express()
const cors = require('cors')
const axios = require('axios')
app.use(cors())

const bitBinanceUrl = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
const bitCoinGeckoUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
app.get('/bitcoin', async (req, res)  =>{
    let binPrice;
    let geckoPrice;
    const getBinance =  await axios.get(bitBinanceUrl)
    const getGecko =  await axios.get(bitCoinGeckoUrl)
    
    let response = await axios.all([getBinance, getGecko])
    binPrice = response[0].data.price
    geckoPrice = response[1].data.bitcoin["usd"]

    let jsonResponse = {
        "binance": parseFloat(binPrice),
        "coinGecko": parseFloat(geckoPrice)
    }
    res.send(jsonResponse)
})

const ethBinanceUrl = "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
const ethCoinGeckoUrl = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
app.get('/ethereum', async (req, res)  =>{
    let binPrice;
    let geckoPrice;
    const getBinance =  await axios.get(ethBinanceUrl).catch(err =>{
        console.log("There is an error getting Binance Price: "+err)
    })
    const getGecko =  await axios.get(ethCoinGeckoUrl).catch(err =>{
        console.log("There is an error getting Gecko price: "+err)
    })
    
    let response = await axios.all([getBinance, getGecko])
    
    binPrice = response[0].data.price
    geckoPrice = response[1].data.ethereum["usd"]


    let jsonResponse = {
        "binance": parseFloat(binPrice),
        "coinGecko": parseFloat(geckoPrice)
    }
    res.send(jsonResponse)
})

const port= process.env.PORT || 3001
app.listen(port, ()=> console.log(`listening on port ${port}`))