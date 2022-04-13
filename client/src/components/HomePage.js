import React from 'react';

const Home = () => {
    return (
<body class = "home">
<div class="row">
  <div class="leftcolumn">
    <div class="cardl">
      <div class="fakeimg">
      </div>
      <img src ="gym.jpg"width="100" height="100"></img>
      <h2>Our Gym</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. In nibh mauris cursus mattis molestie. Adipiscing elit pellentesque habitant morbi tristique senectus et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nulla malesuada pellentesque elit eget gravida. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Lectus urna duis convallis convallis tellus id interdum. Lectus quam id leo in vitae. Leo a diam sollicitudin tempor id eu.</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra justo nec ultrices dui sapien eget. In nibh mauris cursus mattis molestie. Adipiscing elit pellentesque habitant morbi tristique senectus et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Nulla malesuada pellentesque elit eget gravida. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Lectus urna duis convallis convallis tellus id interdum. Lectus quam id leo in vitae. Leo a diam sollicitudin tempor id eu.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
    <div class="cardr">
    <div class="fakeimgr"></div>
    <img class="l" src ="run.jpg" width="100" height="100"></img>
      <h2>Values</h2>
      <h5>Our Vision</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum at tempor. Morbi quis commodo odio aenean. Sed elementum tempus egestas sed sed risus pretium. Faucibus nisl tincidunt eget nullam non nisi est. Posuere ac ut consequat semper viverra nam libero justo. Risus nullam eget felis eget nunc lobortis. Aliquam etiam erat velit scelerisque in. Magna sit amet purus gravida. Dui sapien eget mi proin sed libero.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
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
<div class="footer">
<p>&#169; MGC Fitness, 2022</p>
</div>
</body>
    );
};
export default Home;