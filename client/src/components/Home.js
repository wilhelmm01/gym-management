import React from 'react';
import Navbar from '../components/Navbar';



const Login = () => {

    return (

        <body class="loginPage">
            <div>
                <div class="text-center">
                    <h1>MGC Fitness Account</h1>
                </div>
            </div>
            <div class="text-center">
            <div class="column">
                <div id="home-card1" class="card">
                    <h2>
                        Membership
                    </h2>
                    <p class="card-text">
                        Checkout your membership information
                    </p>
                </div>
                <div id="home-card2" class="card">
                    <h2>
                        Trainer
                    </h2>
                    <p class="card-text">
                        Checkout your trainer
                    </p>
                </div>
                <div id="home-card3" class="card">
                    <h2>
                        Settings
                    </h2>
                    <p class="card-text">
                        Checkout your account options
                    </p>
                </div>
            </div>
            </div>
            <div class="footer">
<p>&#169; MGC Fitness, 2022</p>
</div>
        </body>
    );
};

export default Login;