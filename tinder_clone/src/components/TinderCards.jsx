import React, { useEffect, useState } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import "../styles/TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get(`http://localhost:8080/tinder/Tindercard`);
      const Data = await res.data;
      setpeople(Data)
    }
   getdata();
  } , []);
  const Swiped = (direction, nameToDelete) => {
    console.log("You swiped: " + direction);
    //setLastDirection(direction);
  };

  const outOfFrame = (namee) => {
    console.log(namee + " left the screen");
  };
  return (
    <>
      <div className="tindercards">
        <div className="TinderCards_CardsContainer">
          {people.map((person) => {
            return (
              <TinderCard
                className="swipe"
                key={person._id}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => Swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
              >
                <div
                  className="card"
                  style={{
                    backgroundImage:`url(${person.imagee})`,
                  }}
                ></div>
                <h3>{person.name}</h3>
                
              </TinderCard>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TinderCards;
