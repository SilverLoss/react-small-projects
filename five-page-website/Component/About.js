import React from "react";

const About = () => {
  return (
    <div>
        <div
          className="df-row"
          style={{ justifyContent: "space-between", margin: "10px 50px" }}
        >
          <div
            className="left-side"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <h1 className="text-danger">About Us</h1>
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
          </div>
          <div className="right-side">
            <img src="../images/iphone.png" alt="Iphone" />
          </div>
        </div>
    </div>
  );
};

export default About;
