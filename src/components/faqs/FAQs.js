import './Faq.css'

function FAQs(props) {
    return (
        <section id="faqs" className="mb-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">FAQs</h1>
                    <div className="accordion accordion-flush" id="app-faqs-accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                    What is a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented Boii Mustache, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings. Now, the concept is solidified through our play-to-earn game, Mustachio Quest, where our Mustachio holders can fulfill quests in an open world NFT game as their 3D Mustachio avatar.</p>
                                    <p className="text-lg font-andes">There will be a total of 300 Mustachios that come with 2D Mustachio NFTs from our Genesis set and an additional 10,000 3D generative Mustachios known as 3D Playstachios.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                    How do I get a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <ol>
                                        <li className="text-lg font-andes">Visit <a href="/">mustachioverse.com</a>.</li>
                                        <li className="text-lg font-andes">Click MINT YOUR MUSTACHIO at the upper right corner.</li>
                                        <li className="text-lg font-andes">Connect your MetaMask wallet (Ethereum Network).</li>
                                        <li className="text-lg font-andes">Mint your Mustachio for 0.4 ETH + gas fee.</li>
                                        <li className="text-lg font-andes">Check your OpenSea or  <a className="text-lg font-andes" href="https://ownly.market/" target="_blank" rel="noreferrer">Ownly Market</a> account, and there you go! You now OWN a Mustachio.</li>
                                    </ol>
                                    <a className="text-lg font-andes" href="https://ownly.io/htmym" target="_blank" rel="noreferrer">Click here for a more detailed instruction.</a>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                                    Do I get to pick which Mustachio I can own?
                                </button>
                            </h2>
                            <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">To add the element of surprise, you will enter the portal to MustachioVerse as a <b>random</b> Mustachio, each with a unique tale to be unraveled.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                    Why is the gas fee so high?
                                </button>
                            </h2>
                            <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">A gas fee is required to execute transactions within the Ethereum network. If your gas fee is high, you can try to lower your gas fees in your transaction settings. The lower the gas fee, the longer it takes for the transactions to process.</p>
                                    <p className="text-lg font-andes">Here’s the Etherscan link to our previously minted Mustachios for your reference on our past transactions: <a href="https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5" target="_blank" rel="noreferrer">https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5</a></p>
                                    <p className="text-lg font-andes">You can also monitor gas prices daily as they fluctuate here: <a href="https://ethgasstation.info/index.php" target="_blank" rel="noreferrer">https://ethgasstation.info/index.php</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                    How do I contact the Mustachio team?
                                </button>
                            </h2>
                            <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                                    <p className="text-lg font-andes">Facebook: <a href="https://web.facebook.com/mustachioverse" target="_blank" rel="noreferrer">https://web.facebook.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Instagram: <a href="https://www.instagram.com/mustachioverse" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Twitter: <a href="https://twitter.com/mustachioverse" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Telegram: <a href="https://ownly.io/telegram" target="_blank" rel="noreferrer">https://ownly.io/telegram</a></p>
                                    <p className="text-lg font-andes">Discord: <a href="https://mustachioverse.com/discord" target="_blank" rel="noreferrer">https://mustachioverse.com/discord</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                                    What else can I do with my Mustachios?
                                </button>
                            </h2>
                            <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">There are so many possibilities on how you can make use of your Mustachio!</p>
                                    <p className="text-lg font-andes">For the Mustachio holders of our genesis set, they get a playable 3D avatar version of their 2D Mustachio. They also get a quarterly OWN token airdrop until our marketing and community airdrops wallet runs out.</p>
                                    <p className="text-lg font-andes">Aside from partaking in our play-to-earn NFT game, Mustachio Quest, you can also own 9 single-edition artifacts at <a href="https://ownly.market/?collection=the-sages-rant-collectibles" target="_blank" rel="noreferrer">The Sages Rant Collectibles</a>. The Sages Rant is our official NFT Tales with 10 chapters that reveal the stories behind the genesis set of Mustachios on their quest to find the 9 valuable artifacts that are collectively called the Grooming Kit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs