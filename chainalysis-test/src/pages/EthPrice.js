import React, {useState} from 'react'
import axios from "axios"
import './EthPrice.css'

function EthPrice() {
    const [binPrice, setBinPrice] = useState(0)
    const [geckoPrice, setGeckoPrice] = useState(0)
    const [buyOpt, setBuyOpt] = useState('')
    const [sellOpt, setSellOpt] = useState('')

    const getEthPrice = ()=>{
        axios.get("http://localhost:3001/ethereum").then(res=>{
            setBinPrice(res.data.binance)
            setGeckoPrice(res.data.coinGecko)

            setBuyOpt(binPrice < geckoPrice ? "Binance" : "CoinGecko")
            setSellOpt(binPrice < geckoPrice ? "CoinGecko" : "Binance")
        }).catch(err => {
            console.log("There is an error reaching ethereum API backend: "+err)
        })
    }
    return (
        <div>
            <div className='eth-body'>
                Bin Price is {"$"+binPrice} <br/>
                Gecko Price is {"$"+geckoPrice}<br/>
                Recommendation: If you want to sell go to: {sellOpt}<br/>
                Recommendation: If you want to buy go to: {buyOpt}</div>
                <br/>
            <div className='eth-update'>
                <button onClick={getEthPrice}>{buyOpt==='' ? "Click To Get Ethereum Prices" : "Update Recommendation"} </button>
            </div>
        </div>
    )
}

export default EthPrice
