import "./Events.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Cards } from "../data/data";

const Events = () => {
  const [eventtype, setEventtype] = useState("technical");

  function changeeventtype(event, variable) {
    setEventtype(variable);
  }

  

  return (
    <div className="events-conntainer p-10 mt-10 md:mt-2">
      <h1 className="events-h1">Events</h1>
      <ul className="flex flex-row gap-[2vw] py-8 text-[16px] md:text-[18px]">
        <li>
          <button
            className="events-btn"
            style={{
              backgroundColor:
                eventtype === "technical" ? "#023047" : "#e9d5a6",
              color: eventtype === "technical" ? "#FFFFFF" : "#023047",
            }}
            onClick={(e) => changeeventtype(e, "technical")}
          >
            Technical
          </button>
        </li>
        <li>
          <button
            className="events-btn"
            style={{
              backgroundColor: eventtype === "cultural" ? "#023047" : "#e9d5a6",
              color: eventtype === "cultural" ? "#FFFFFF" : "#023047",
            }}
            onClick={(e) => changeeventtype(e, "cultural")}
          >
            Cultural
          </button>
        </li>
        <li>
          <button
            className="events-btn"
            style={{
              backgroundColor: eventtype === "others" ? "#023047" : "#e9d5a6",
              color: eventtype === "others" ? "#FFFFFF" : "#023047",
            }}
            onClick={(e) => changeeventtype(e, "others")}
          >
            Others
          </button>
        </li>
      </ul>
      <main className="page-content">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: 'no-repeat',
              backgroundColor: card.color
            }}
          >
            <div className="content">
              <h2 className="title">{card.event_name}</h2>
              <p className="copy">{card.description.slice(0, 200)}...</p>
              <Link to={`/events/${index}`} className="btn rounded-md">
                View Event
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

// Render the PageContent component
export default Events;
