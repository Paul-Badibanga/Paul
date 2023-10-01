
let contact = document.getElementById("contact")
let bodyEl = document.getElementById("body")

console.log(contact.innerHTML)
contact.addEventListener('click', (e)=> {
    alert("We'll be happy to read your message !" )
    bodyEl.innerHTML = `
                <header>
                    <div class="logo">PAULTECH ULTRA</div>
                        <nav>
                            <ul>
                                <li><a href="index.html" class="home-btn">home</a></li>
                                <li><a href="services.html">services</a></li>
                                <li><a href="#footer-section" id="contact">contacts</a></li>
                                <li><a href="about-us.html">about us</a></li>
                                <li><a href="news.html">news</a></li>
                                <li><a href="faqs.html">faqs</a></li>
                            </ul>
                        </nav>
                    <div class="menu"><img src="IMAGES/menu.png" class="js-menu"></div>
                </header>
                <footer id="footer-section" id="footerStage">
                <h2 class="intouch">Get in touch with us:</h2>
                <div class="footer-container">
                    <div class="serviceList">
                        <h3>Our Services</h3>
                        <ul>
                            <li><a href="electricity.html">Electricity</a></li>
                            <li><a href="plumbing.html">Plumbing</a></li>
                            <li><a href="welding.html">Welding</a></li>
                            <li><a href="Maintenance.html">Computer & Smartphone maintenance</a></li>
                            <li><a href="informatics.html">Web developpement</a></li>
                            <li><a href="solarPrices.html">Solar Energy</a></li>
                        </ul>
                    </div>

                    <div class="Contacts">
                        <div class="network">
                            <h3>Contacts</h3>
                            <div>
                                <img src="IMAGES/telephone-logo.png">
                                <p>+27 xx xxx xx xx</p>
                            </div>
                            <div>
                                <img src="IMAGES/gmail.png">
                                <p>paultech@gmail.com</p>
                            </div>
                            <div>
                                <img src="IMAGES/youtube-g47b41e927_640.png">
                                <p>paultech@gmail.com</p>
                            </div>
                            <div>
                                <img src="IMAGES/linked-in .png">
                                <p>paultech@gmail.com</p>
                            </div>
                            <div>
                                <img src="IMAGES/twitter_640.png">
                                <p>paultech@gmail.com</p>
                            </div>
                            <div>
                                <img src="IMAGES/facebook.png">
                                <p>facebook</p>
                            </div>
                            <div>
                                <img src="IMAGES/whatsapp.png">
                                <p>whatsapp</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form">
                        <h3>Send us a message</h3>
                        <form method="post">
                            <input type="text" placeholder="Enter your Name" id="name" class="firstinput" autocomplete="off"><br>
                            <input type="text" placeholder="Phone Number" id="Number" autocomplete="off"><br>
                            <input type="text" placeholder="Enter your Email" id="Email" autocomplete="off"><br>
                            <textarea placeholder="Type Your Message" id="message" cols="30" rows="10"></textarea><br>
                            <button id="btn">Send</button>
                        </form>
                    </div>

                    <div class="adress">
                        <h3>We are available in :</h3>
                        <h4>South Africa</h4>
                        <li>Johanesburg</li>
                        <li>Pretoria</li>
                        <li>Cape Town</li>
                        <li>Durban</li>
                        <h4>D.R.Congo</h4>
                        <li>Kinshasa</li>
                        <li>Lubumbashi</li>
                        <li>Lualaba</li>
                        <li>Mbujimayi</li>
                        <li>Mwena-Ditu</li>
                        <li>Kisangani</li>
                        <li>Tanganyika etc.</li>
                    </div>

            
                </div>
            </footer>
            <div class="right"><p>©copyright reserved <span class="date" id="dateColor"></span>|PAULTECH-ULTRA|All rights reserved</p></div>
    `
})