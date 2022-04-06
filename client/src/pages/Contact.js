import React from 'react';

function Contact() {

    return (
        <div> 
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Contact Form</h6>
                                <hr/>
                                <div className="form-group">
                                    <label className="mb-1">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name"/>
                                </div>
                                <div className="form-group">
                                    <label className="mb-1">Phone Number</label>
                                    <input type="text" className="form-control" placeholder="Phone Number"/>
                                    <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input type="text" className="form-control" placeholder="youremail@email.com"/>
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
                                <h5 className="main-heading">Address Information</h5>
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
    );
}

export default Contact;