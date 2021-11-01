import React, {useState} from 'react'
import './BtcPrice.css'
import axios from "axios"

function BtcPrice() {
    const [binPrice, setBinPrice] = useState(0)
    const [geckoPrice, setGeckoPrice] = useState(0)
    const [buyOpt, setBuyOpt] = useState('')
    const [sellOpt, setSellOpt] = useState('')

    const getBtcPrice = ()=>{
        axios.get("http://localhost:3001/bitcoin").then(res=>{
            setBinPrice(res.data.binance)
            setGeckoPrice(res.data.coinGecko)

            setBuyOpt(binPrice < geckoPrice ? "Binance" : "CoinGecko")
            setSellOpt(binPrice < geckoPrice ? "CoinGecko" : "Binance")
        })
    }

    return (
        <div>
            <div className='btc-body'>
            Binance Price is ${binPrice}<br/>
            Coin Gecko Price is ${geckoPrice}<br/>
            <br/>
            Recommendation: If you want to sell go to: {sellOpt}<br/>
            Recommendation: If you want to buy go to: {buyOpt}</div>
            <br/>
            <div className='bit-update'>
                <button onClick={getBtcPrice}>{buyOpt==='' ? "Click To Get BTC Prices" : "Update Recommendation"}</button>
            </div>
        </div>
    )
}

export default BtcPrice
