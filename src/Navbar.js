
import React from "react"
import {Link} from "react-router-dom"

export default function Navbar({open}){
    return(
    <nav>
        <img alt="" src="images/Meta_logo.png" className="logo"/>
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/placetostay">Place to stay</Link></li>
            <li>NFT</li>
            <li>Community</li>
        </ul>
        <button onClick={() => open(true)} className="walletBtn">Connect Wallet</button>
    </nav>   
    )
}