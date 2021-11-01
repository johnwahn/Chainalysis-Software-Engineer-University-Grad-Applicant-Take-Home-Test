import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className>
            <div className='home-header'>
                <h3>Welcome! Get the best deal between two crptocurrency exchanges:</h3>
            </div>
            <div className='home-content'> 
                <h4>Binance and Coin Gecko</h4>
            </div>
            <div className="compare-btn">
                <form className="bit-btn" action='/compare-btc'>
                    <input type="submit" value="Compare BitCoin Prices"></input>
                </form>
                <form className="eth-btn" action='/compare-eth'>
                    <input type="submit" value="Compare Ethereum Prices"></input>
                </form>
            </div>
            
        </div>
    )
}

export default Home
