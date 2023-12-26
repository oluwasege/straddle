import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact__us section__padding">
       <div className="contactus__details">
      <h1>
        Get in <span>Touch</span>
      </h1>
      <p>We’d love to talk about how we can work together</p>
      <div className="contactus__form">
        <form>
          <input  type="text" placeholder="Name"/>
          <input  type="text" placeholder="Email"/>
          <input  type="text" placeholder="Phone number"/>
          {/* <input  type="text" placeholder="What would you like to talk about (optional)"/>
           */}

           <textarea placeholder="What would you like to talk about (optional)" name="postContent" rows={7} cols={50} />
          <button>Send Request</button>
        </form>
      </div>
      </div>
      <div className="contactus__map">

      </div>
    </div>
  );
};

export default Contact;
