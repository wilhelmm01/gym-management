import React from 'react';


function Membership() {
  
    
    return (
        <body id="membership" class= "d-flex flex-column min-vh-100 ">
        <div>
            <div className="box-container">
            <div class="text-center">
                <div class="box">
                    <div id="member-title" class="content">
                        <h1  >
                            MGC Membership
                        </h1>
                    </div>
                </div>
                <div id="member-card1" class="card" >
                    <h2>
                        Plan One
                    </h2>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
                        </br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo
                    </p>
                </div>
                <div id="member-card2" class="card" >
                    <h2>
                        Plan Two
                    </h2>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
                        </br>tempor incididunt ut labore et dolore magna aliqua. Viverra justo
                    </p>
                </div>
                <div>
                    <div id="member-card3" class="card" >
                        <h2>
                            Plan Three
                        </h2>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
                            </br>tempor incididunt ut labore et dolore magna aliqua. Viverra justo
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="footer mt-auto fixed-bottom">
<p>&#169; MGC Fitness, 2022</p>
</div>
        </body>
    );
};



export default Membership;