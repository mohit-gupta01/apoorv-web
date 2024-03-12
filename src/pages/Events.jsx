import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Events.css";

function Events() {
  const [items, setItems] = useState([
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
  ]);

  const handleNext = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.push(updatedItems.shift());
      return updatedItems;
    });
  };

  const handlePrev = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift(updatedItems.pop());
      return updatedItems;
    });
  };

  return (
    <section className="min-h-[100vh]">
      <div className="event_page">
        <ul className="slider">
          {items.map((event, index) => (
            <li
              key={index}
              className="item"
              style={{ backgroundImage: `url('${event.Image}')` }}
            >
              <div className="content">
                <h2 className="title xl:text-[48px]">{event.event_name}</h2>
                <p className="description xl:text-[16px]">
                  {event.description}
                </p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav flex flex-row gap-3">
          <Icon
            icon="solar:arrow-left-linear"
            className="btn prev"
            onClick={handlePrev}
          />
          <Icon
            className="btn next"
            icon="material-symbols-light:arrow-forward"
            onClick={handleNext}
          />
        </nav>
      </div>
    </section>
  );
}

export default Events;
