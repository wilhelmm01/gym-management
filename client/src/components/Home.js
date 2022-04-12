import React from 'react';
import Navbar from '../components/Navbar';



const Login = () => {
    
    return (

    

<body>
<div>
        {/* <div class="row"> */}
        <div className="container">
            {/* <Navbar/> */}
        </div>
            <div class="column">
                <div class="card1" >
                    <h2>
                        Membership
                    </h2>
                    <p class="card-text">
                        Checkout your membership information
                    </p>
                </div>
                <div class="card2" >
                    <h2>
                        Settings
                    </h2>
                    <p class="card-text">
                        Take a look at your account options
                    </p>
                </div>
                <div class="card3" >
                    <h2>
                        Trainer
                    </h2>
                    <p class="card-text">
                        Checkout all the information about you and your trainer
                    </p>
                </div>
            </div>
        </div>

</body>
    );
};

export default Login;