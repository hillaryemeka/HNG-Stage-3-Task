
import React, {useState} from "react"
import "./index.css"
import Modal from "./Modal.js"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Bnb(){
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            {openModal && <Modal closeModal={setOpenModal} />}
            <div className="parent">            
                <div className="upperHalf">
                    <Navbar open={setOpenModal}/>            
                    <div className="headingDiv">
                        <div className="heading"> 
                        <div className="headingh2p">
                            <h2 className="headingH2">Rent a <span className="colored-text"> Place</span> away from 
                            <span className="colored-text"> Home </span>in the <span className="colored-text">Metaverse</span></h2>
                            <p className="headingP">we provide you access to luxury and affordable houses in the metaverse, get a 
                            chance to turn your imagination to reality at your comfort zone</p>
                        </div>
                        <div>
                            <form className="searchForm">
                                <input placeholder="Search for location" className="searchText" type="text"/>
                                <button className="searchBtn">Search</button>
                            </form>
                        </div>
                        </div>
                        <div className="headingImgs">
                        <div className="Imgs1">
                            <img alt="" id="imgs" src="images/image_03.png"/>
                            <img alt="" id="imgs" src="images/image_05.png"/>
                        </div>
                        <div className="imgs2">
                            <img alt="" id="imgs" src="images/image_01.png"/>
                            <img alt="" id="imgs" src="images/image_04.png"/>
                        </div>
                        </div>
                    </div>
                </div>
            <div className="linksContainer">
                <div className="linksDiv">
                    <div className="mbtoken"><img src="images/image_15.png" alt=""/>MBToken</div>
                    <div className="metamask"><img src="images/image_16.png" alt=""/><img alt="" src="images/image_17.png"/></div>
                    <div className="opensea"><img alt="" src="images/image_18.png"/>OpenSea </div>
                </div>
            </div>
            <div id="container2">
                <div id="header2_text">Inspiration for your next adventure </div>
                <div id="images_desert">
                    <div id="desert1_con">
                        <img src="images/image_06.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>            
                    <div id="desert2_con">
                        <img src="images/image_07.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>  
                    <div id="desert3_con">
                        <img src="images/image_08.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>  
                    <div id="desert4_con">
                        <img src="images/image_09.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>  
                    <div id="desert5_con">
                        <img src="images/image_10.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>  
                    <div id="desert6_con">
                        <img src="images/image_11.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>
                    <div id="desert6_con">
                        <img src="images/image_12.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>
                    <div id="desert6_con">
                        <img src="images/image_13.png" alt="" id="desert_img"></img>
                        <div id="desert-img_details">
                            <div id="d1">
                                <div id="d1_king">Desert King</div>
                                <div id="d1_night">1MBT per night</div>
                            </div>
                            <div id="d2">
                                <div id="d2_km">2345km away</div>
                                <div id="d2_availabilty">available for two weeks</div>
                            </div>
                            <div id="d3"><img src="images/image_19.png" alt=""></img></div>
                        </div>
                    </div>                        
                </div>        
            </div>
            <div id="container3">
                <div id="conatiner3_main">
                    <div id="container3_main1">
                        <h3>Metabnb NFTs</h3>
                        <div id="main1_note">Discover our NFT gift cards collection. Loyal customers gets
                        amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </div>
                        <div id="main1_learn">Learn more</div>
                    </div> 
                    <div id="conatiner3_main2">
                        <img src="images/image_14.png" id="nft_logo" alt=""></img>
                    </div>               
                </div>
            </div>
            <Footer /> 
        </div>
      </div>
    )
}