import React from "react";

const Contact = () => {
  return (
    <div id="container">
      <section>
        <div
          className="df-row"
          style={{ justifyContent: "space-between", margin: "10px 50px" }}
        >
          <div
            className="left-side"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <h1 className="text-danger">Contact Us</h1>
            <form
              action="#"
              className="df-col"
              style={{ alignItems: "flex-start" }}
            >
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter EmailID" />
              <textarea
                cols="40"
                rows="10"
                placeholder="Write a Message"
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
          <div className="right-side">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.244441945674!2d75.88649647422523!3d22.75630802621417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd53f8645383%3A0x4975c9392d3ed489!2sShiva%20Concept%20Solution%20Vijaynagar%20Java%2C%20Python%2C%20React%2C%20Software%20Testing%2C%20MERN%2C%20Salesforce%2C%20Devops%20Training%20in%20Indore!5e0!3m2!1sen!2sin!4v1687236318701!5m2!1sen!2sin"
              width="600"
              height="300"
              style={{ border: "none" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="address"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
