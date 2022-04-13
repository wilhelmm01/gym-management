import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

function Reviews() {
    return (
        // <Jumbotron>
            <body class = "reviews d-flex flex-column min-vh-100">
                <h1>What our clients say</h1>
        <div class="information">
            
            <div class = "review">
            <h4>"We have been a member of this gym for 15 years. We are huge fans of Ironman as he transferred my expanding gut to a 6-pack"</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
            <div class = "review">
            <h4>"Initially I was skeptical about joining a new gym. But Jamie has welcomed us with open arms and made our transition seamless. We are excited to go to the gym again!!!!!"</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
            <div class = "review">
            <h4>"Judgement is not tolerated at this gym. Good place to feel welcome"</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
            <div class = "review">
            <h4>"Really cool classes on the weekends.+</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
            <div class = "review">
            <h4>"All of the trainers are professional and understanding to your particular lifestyle. "</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
            <div class = "review">
            <h4>"Best in town"</h4>
            <p class = "from"> Anonymous, OH</p>
            </div>
        </div>
        <div class="footer mt-auto fixed-bottom ">
<p> MGC Fitness, 2022</p>
</div>
        </body>
        // </Jumbotron>
    )
}

export default Reviews;
