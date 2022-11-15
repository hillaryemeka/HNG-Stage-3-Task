import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Modal from "./Modal"

const PlaceToStay = () => {
    const [openModal, setOpenModal] = React.useState(false)
    return(
        <div>
            {openModal && <Modal closeModal={setOpenModal} />}
            <div className="parent">
            <Navbar open={setOpenModal}/>
            <div id="header4_text">
                <ul id="ul_items4">
                    <li>Restaurant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>fantastic city</li>
                    <li>beach</li>
                    <li>Cabins</li>
                    <li>Off-grid</li>
                    <li>farms</li>
                </ul>
                <div id="header_location">Location
                    <img src="images/image_24.PNG" alt="" id="settings"></img>
                </div>
            </div>
            <div id="container2">
                <div id="images_desert">
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
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
                    <div id="desert_con">
                        <img src="images/image_25.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_26.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_27.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_28.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_29.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_30.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_31.png" alt="" id="desert_img"></img>
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
                    <div id="desert_con">
                        <img src="images/image_32.png" alt="" id="desert_img"></img>
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
            <Footer />
        </div>
        </div>
    )
}
export default PlaceToStay