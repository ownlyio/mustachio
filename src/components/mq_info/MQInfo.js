import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './MQInfo.css'

import mq_info from '../../images/mq/mq_info.jpg'
import mq_info_tab from '../../images/mq/mq_info_tab.jpg'
import mq_poster from '../../images/mq/poster.png'
import mq_video from '../../videos/mq_vid.mp4'
import fp from '../../images/mq/FP.png'
import fp2 from '../../images/mq/FP2.png'
import fp3 from '../../images/mq/FP3.png'

function MQInfo() {
    const [width, setWidth] = useState(0)
    const [picture, setPicture] = useState()

    const [showPicture, setShowPicture] = useState(false);
    const handleClosePicture = () => setShowPicture(false);
    const handleShowPicture = () => setShowPicture(true);

    const showPictureHandler = pic => {
        setPicture(pic)
        handleShowPicture()
    }

    const getBG = devWidth => {
        if (devWidth > 991) return {"backgroundImage": `url('${mq_info}')`, "backgroundSize": "cover", "backgroundPosition": "center center"}
        return {"backgroundImage": `url('${mq_info_tab}')`, "backgroundSize": "cover", "backgroundPosition": "center center"}
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -100; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    useEffect(() => {
        setWidth(window.innerWidth)

        // for debug purposes
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWidth(window.innerWidth));
    },[])

    return (
        <section id="quest" className="mb-5 py-5" style={getBG(width)}>
            <div className="container">
                <div className="row mb-3 align-items-center">
                    <div className="col-lg-5 col-12 mb-3">
                        {/* <video autoplay loop controls controlsList="nodownload" class="w-100" poster={mq_poster} style={{"borderRadius": "10px", "border": "6px solid #ffffff"}}>
                            <source src={mq_video} type="video/mp4" />
                        </video> */}
                        <div className="d-flex justify-content-between mt-3 mb-4 mb-lg-0">
                            <div onClick={() => showPictureHandler(fp)} title="Click to enlarge" className="cursor-pointer" style={{"borderRadius": "10px", "border": "6px solid #ffffff", "marginRight": "10px"}}>
                                <img src={fp} className="w-100" alt="FP" />
                            </div>
                            <div onClick={() => showPictureHandler(fp2)} title="Click to enlarge" className="cursor-pointer" style={{"borderRadius": "10px", "border": "6px solid #ffffff", "marginRight": "10px"}}>
                                <img src={fp2} className="w-100" alt="FP" />
                            </div>
                            <div onClick={() => showPictureHandler(fp3)} title="Click to enlarge" className="cursor-pointer" style={{"borderRadius": "10px", "border": "6px solid #ffffff"}}>
                                <img src={fp3} className="w-100" alt="FP" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 offset-lg-1">
                        <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Upcoming Play-To-Earn Game!</h1>
                        <p className="text-white text-lg font-andes">Put your power to the test with <HashLink smooth to="#mq" scroll={el => scrollWithOffset(el)} title="Mustachio Quest" className="font-andes-med">Mustachio Quest!</HashLink></p>
                        <p className="text-white text-lg font-andes">Inspired by the tales and adventures of the Mustachios in The Sages Rant, Mustachio Quest is Ownly’s first NFT Play-to-Earn Game created inside MustachioVerse where players can sport around using the 3D versions of their Mustachios.</p>
                        <p className="text-white text-lg mb-0 font-andes">Treasure awaits victors in a form of quest.</p>
                    </div>
                </div>
            </div>

            <Modal show={showPicture} onHide={handleClosePicture} backdrop="static" keyboard={false} size="xl" centered>
                <Modal.Body className="p-0">
                    <img src={picture} className="w-100" alt="Mustachio Quest Picture" />
                    <div onClick={handleClosePicture} className="cursor-pointer mq-close">
                        <FontAwesomeIcon color="white" size="3x" icon={faTimesCircle} />
                    </div>
                </Modal.Body>
                {/* <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleClosePicture}>
                        CLOSE
                    </Button>
                </Modal.Footer> */}
            </Modal> 
        </section>
    )
}

export default MQInfo