import React from "react";

const Service = () => {
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
            <h1 className="text-danger">Our Services</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ut
              consequuntur natus consectetur veniam voluptas dolor? Voluptate
              consequatur, quos, cumque recusandae, dolorem molestias libero
              dolorum mollitia cupiditate aut neque. Illo vitae provident
              voluptas accusantium ab nemo veritatis ad ullam libero
              repudiandae, necessitatibus molestias assumenda accusamus sequi
              aspernatur adipisci asperiores iure dolorum culpa quibusdam,
              laboriosam atque quo architecto maiores! At sed molestiae aliquid
              in ullam earum consequatur accusantium autem consectetur, aut
              harum. Sit voluptate quidem dicta accusantium optio id laudantium
              numquam! Nulla similique delectus quibusdam reiciendis dolore quam
              quia cupiditate, sint molestiae ex maxime fuga eius minima soluta
              tempora repellat dolores!
            </p>
            <div
              className="df-row services"
              style={{ justifyContent: "space-around" }}
            >
              <div style={{ margin: "10px 0px" }}>
                <div className="df-row" style={{ gap: "0.5rem" }}>
                  <img src="../images/voice.png" alt="Voice Services" />
                  <span>Voice Services</span>
                </div>
                <div className="df-row" style={{ gap: "0.5rem" }}>
                  <img src="../images/wifi1.png" alt="Wifi Services" />
                  <span>Wifi Services</span>
                </div>
              </div>
              <div style={{ margin: "10px 0px" }}>
                <div className="df-row" style={{ gap: "0.5rem" }}>
                  <img src="../images/cloud.png" alt="Cloud Services" />
                  <span>Cloud based Services</span>
                </div>
                <div
                  className="df-row"
                  style={{ gap: "0.5rem", justifyContent: "space-between" }}
                >
                  <img src="../images/media.png" alt="Digital Services" />
                  <span style={{ marginRight: "2rem" }}>Digital Services</span>
                </div>
              </div>
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

export default Service;
