
import React from "react"

export default function Navbar({open}){
    return(
    <nav>
        <img alt="" src="images/Meta_logo.png" className="logo"/>
        <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/placeToStay">Place to stay</a></li>
            <li>NFT</li>
            <li>Community</li>
        </ul>
        <button onClick={() => open(true)} className="walletBtn">Connect Wallet</button>
    </nav>   
    )
}