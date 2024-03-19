import "./Events.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Cards } from "../data/data";

const Events = () => {
  const [category, setCategory] = useState("Technical");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeCategory = (item) => {
    setCategory(item);
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
                category === "Technical" ? "#023047" : "#e9d5a6",
              color: category === "Technical" ? "#FFFFFF" : "#023047",
            }}
            onClick={() => handleChangeCategory("Technical")}
          >
            Technical
          </button>
        </li>
        <li>
          <button
            className="events-btn"
            style={{
              backgroundColor: category === "Cultural" ? "#023047" : "#e9d5a6",
              color: category === "Cultural" ? "#FFFFFF" : "#023047",
            }}
            onClick={() => handleChangeCategory("Cultural")}
          >
            Cultural
          </button>
        </li>
        <li>
          <button
            className="events-btn"
            style={{
              backgroundColor: category === "Others" ? "#023047" : "#e9d5a6",
              color: category === "Others" ? "#FFFFFF" : "#023047",
            }}
            onClick={() => handleChangeCategory("Others")}
          >
            Others
          </button>
        </li>
      </ul>
      <main className="page-content">
        {Cards.filter((item) => item.category === category).map((card, index) => (
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
              <Link to={`/events/${category}/${index}`} className="btn rounded-md">
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
