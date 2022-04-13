import React from 'react';

const Home = () => {
    return (
<body class = "home d-flex flex-column min-vh-100">
<div class="row">
  <div class="leftcolumn">
    <div class="cardl">
      <div class="fakeimg">
      </div>
      <img src ="gym.jpg" class="r" alt="Responsive image"></img> 
      <h2>Our Gym</h2>
      <p>MGC Fitness, located in the suburbs of Columbus, Ohio is a family owned and operated. Although we are not biologically related, the atmosphere is like a family. Established in 2022, we already have many customers who joined from larger gyms in an effort to feel more at home.  We offer many personalized training opportunities to include: cardo, weight, nutritionist. </p>
      <ul>
        <li>Frendly Staff</li>
        <li>24hr Gym Access</li>
        <li>Security</li>
        <li>RESULTS</li>
      </ul>
      <p>Every member of our staff is highly educated and award winning. This gym was created out of passion and pure joy. We love what we do and take great pride in seeing the transformations. We are here to help, not judge and look forward to being a part of your journey! </p>
      <p>No Judgement at MGC!</p>
    </div>
    <div class="cardr">
    <div class="fakeimgr"></div>
    <img class="l" src ="run.jpg" width="100" height="100"></img>
      <h2>Values</h2>
      <h5>Our Vision</h5>
      <p>Our mission is to bring results to every member of our gym. Our one of a kind, rockstar instructors guide you through an inspirational, meditative fitness experience that’s designed to benefit the body, mind, and soul. We do not take for granted the number of gym options available. We strive to be part of your daily routing for a healthier lifestyle. We are proud to call our patrons friends!</p>
      <p>We take exceptional pride in our family friendly, clean, and safe space to exercise. A healthier community is our ultimate goal. We pledge to provide the necessary tools, education, and skills to allow you to be a better version of yourself. </p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card3">
      <h2>Sign-Up</h2>
      <form>
                        <label for="name">Username:</label>
                        <input type="text" placeholder="Your Name" name="name" id="name" class="form-input"/>
                        <label for="email">Enter email address:</label>
                        <input type="email" placeholder="Email Address" name="email" id="email" class="form-input"/>
                        <label for="phone">Password:</label>
                        <input type="text" placeholder="Password" name="phone" id="phone" class="form-input"/>
                        <p>
                                Have you worked out with us before?
                            <span class="radio-wrapper">
                                <input type="radio" name="trainer-confirm" id="trainer-yes" />
                                <label for="trainer-yes">Yes</label>
                            </span>
                            <span class="radio-wrapper">
                                <input type="radio" name="trainer-confirm" id="trainer-no" />
                                <label for="trainer-no">No</label>
                            </span>
                        </p>
                        <button class="button" type="submit">
                            Submit
                        </button>
                    </form>
    </div>
    <div></div>
    <div class="card4">
        <h2>Services</h2>
      <p>Nutrition Education</p>
      <p>Cardo/Endurance Training</p>
      <p>Weight Training</p>
      <p>Custom training regiments</p>
    </div>
    <div class="card5">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h2>Follow Us</h2>
      <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-reddit"></a>
    </div>
  </div>
</div>
<div class="footer mt-auto fixed-bottom ">
<p>&#169; MGC Fitness, 2022</p>
</div>
</body>
    );
};
export default Home;