import React from "react";

const Home = () => {
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
            <h1 className="text-danger">Lorem ipsum dolor sit amet.</h1>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              similique tempora corporis esse magnam architecto fuga porro
              veniam incidunt omnis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus itaque suscipit facilis possimus
              obcaecati nam sunt. Voluptates iure placeat repellendus eaque
              iusto? Nobis officia error harum autem deserunt labore quaerat
              totam voluptatum alias consequatur, ab expedita ducimus pariatur
              facere sint!
            </p>
            <div className="df-row users">
              <img src="../images/user1.png" alt="" />
              <img src="../images/user2.png" alt="" />
              <img src="../images/user3.png" alt="" />
              <img src="../images/user4.png" alt="" />
              <h3>4M+users</h3>
              <p style={{ color: "red", textDecoration: "underline", marginLeft: '8px' }}>
                Learn More
              </p>
            </div>
          </div>
          <div className="right-side">
            <img src="../images/iphone.png" alt="Iphone" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
