import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <body id="contact-body" class="d-flex flex-column min-vh-100">
    <div>
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5 id="contact-form">Contact Form</h5>
                <hr />
                <div className="form-group">
                  <label className="mb-1">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter Full Name" />
                </div>
                <div className="form-group">
                  <label className="mb-1">Phone Number</label>
                  <input type="text" className="form-control" placeholder="Phone Number" />
                  <div className="form-group">
                    <label className="mb-1">Email Address</label>
                    <input type="text" className="form-control" placeholder="youremail@email.com" />
                  </div>
                  <div className="form-group">
                    <label className="mb-1">Send Us A Message</label>
                    {/* <input type="text"/>   */}
                    <textarea rows="3" className="form-control" placeholder="Your Message Here..."></textarea>
                  </div>
                  <div className="form-group">
                    <button type="button" className="btn btn-primary shadow">Send Message</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 border-start">
                <h5 id="address-info" className="main-heading">Address Information</h5>
                <div className="underline"></div>
                <p>
                  1111 North High Street Columbus, Ohio 22222
                </p>
                <p>
                  Phone: 614-111-1111
                </p>
                <p>
                  Email: MGCfitness@gmail.com
                </p>
              </div>
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
}

export default Contact;