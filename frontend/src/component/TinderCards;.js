import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "jonathan pascal",
      url: "https://static1.purepeople.com/articles/4/86/40/4/@/687935-steve-jobs-a-san-francisco-le-9-624x600-3.jpg", // Line breaking issue exist here before
    },
    {
      name: "bahavu atosha",
      url: "",
    },
  ]);
  return (
    <div>
      <h1>Muhimu cards</h1>
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})`,
            }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}
export default TinderCards;
