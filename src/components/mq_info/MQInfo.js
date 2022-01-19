import { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import mq_info from '../../images/mq_info.jpg'
import mq_info_tab from '../../images/mq_info_tab.jpg'

function MQInfo() {
    const [width, setWidth] = useState(0)

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
                <div className="row mb-4 align-items-center">
                    <div className="col-lg-5 col-12 offset-lg-1 mb-3">

                    </div>
                    <div className="col-lg-6 col-12">
                        <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Upcoming Play-To-Earn Game!</h1>
                        <p className="text-white text-lg font-andes">Put your power to the test with <HashLink smooth to="#mq" scroll={el => scrollWithOffset(el)} title="Mustachio Quest" className="font-andes-med">Mustachio Quest!</HashLink></p>
                        <p className="text-white text-lg font-andes">Inspired by the tales and adventures of the Mustachios in The Sages Rant, Mustachio Quest is Ownly’s first NFT Play-to-Earn Game created inside MustachioVerse where players can sport around using the 3D versions of their Mustachios.</p>
                        <p className="text-white text-lg mb-0 font-andes">Treasure awaits victors in a form of quest.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MQInfo