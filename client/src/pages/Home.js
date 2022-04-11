import React from 'react';
import Navbar from '../components/Navbar';
// import LoginForm from '../components/LoginForm';
// import SignupForm from '../components/SignupForm';
// import {Link} from 'react-router-dom';


const Home = () => {
    
    return (
<div>
        {/* <div class="row"> */}
        <div className="container">
            <Navbar/>
        </div>
            <div class="column">
                <div class="card1" style="width: 18rem;">
                    <h2>
                        Membership
                    </h2>
                    <p class="card-text">
                        Checkout your membership information
                    </p>
                </div>
                <div class="card2" style="width: 18rem;">
                    <h2>
                        Settings
                    </h2>
                    <p class="card-text">
                        Take a look at your account options
                    </p>
                </div>
                <div class="card3" style="width: 18rem;">
                    <h2>
                        Trainer
                    </h2>
                    <p class="card-text">
                        Checkout all the information about you and your trainer
                    </p>
                </div>
            </div>
        {/* </div> */}
</div>
    );
};

export default Home;