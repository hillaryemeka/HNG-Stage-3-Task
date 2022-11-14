import React from "react";

export default function Modal({closeModal}){
    
    return(
        <div className="overlay">
            <div className="modal">
                <div className="modalHead">Connect Wallet<span className="closeModal" onClick={() => closeModal(false)}>X</span></div>
                <div className="modalLinks">
                    <div className="metawallet">
                        <p>Choose your preferred wallet:</p>
                        <div className="modalMetamask">
                            <img alt="" src="images/image_23.png" className="metamaskImg"/>
                            <span>Metamask</span><i class="arrowRight metamaskArrow"></i>
                        </div>  
                        <div className="walletConnect">
                            <img alt="" src="images/image_20.png" className="walletConnectImg"/>
                            <span>WalletConnect</span><i class="arrowRight"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}