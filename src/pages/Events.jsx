import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Events.css";

function Events() {
  const [items, setItems] = useState([
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Pulse and Beats",
      description:
        "All aboard the groove train! Are you and your squad ready to put on a show? Flood your energy through the stage and the audience, Apoorv's Pulse And Beat awaits your presence! A perfect opportunity for your team to express themselves with any form of dance you all bring to the table; share with us your talent and joy! Let the beat replace your thoughts, come here and get a move on!",
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Ultimate Dance Showdown",
      description: "Get ready to break a leg - and the dance floor on Apoorv's The Ultimate Dance Showdown! Round up five of your friends and show off your best moves on stage. It's time to make rhythm, style and skill blend together in the coolest way possible. This is a battle you do NOT want to miss out on. Are you in?",
    },
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Frames of Fiction",
      description: "Polish your lenses and get your tear sticks ready, Apoorv's very own short film contest is here. Challenge the bounds of creativity and cinematography with your captivating script and mesmerising camera work. Put your masterpiece on display for the world to see, gather your team and unleash your ingenuity, we can't wait to see your magic!"
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Comedy Combat",
      description:
        "You have heard of laughter being a medicine, but do you know laughter can be your weapon as well? Prepare for the  hilarious showdown, side-splitting stories will clash with sharper-than-a-samurai-sword punchlines, leaving you stitched-sided and begging for mercy (from the laughter, of course!). Witness comedic gladiators battle for ultimate laugh mastery in a night of unforgettable entertainment that will tickle your funny bone and leave your cheeks aching from laughter. Get ready to lose your breath at Comedy Combat!",
    },
    {
      Image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      event_name: "Blizzart",
      description:
        "Step into the vibrant world of Blizzart, where every stroke tells a story and every hue evokes emotion! From delicate sketches to vibrant paintings, we welcome all forms of artistic expression. Pick up your choice of tool and head over to Apoorv 2024, for we have set up the perfect canvas for your creativity! Unleash your inner artist and paint your story with us!",
    },
    {
      Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
      event_name: "Face off",
      description:
        "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Beyond the Harmony",
    //   description:
    //     "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Strings and Keys",
    //   description:
    //     "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Runaway Renegades",
    //   description:
    //     "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Synapse",
    //   description:
    //     "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Chromus",
    //   description:
    //     "To all the visual storytellers out there, ready to illuminate the world with your visions? This is an adventure where creativity clashes with pixels to create something mesmerizing for the eyes. Forge your path by choosing a category, from crafting captivating title sequences to igniting change with socially impactful edits. Whether you wield the latest NLE or craft your magic with simpler tools, Chromus welcomes your artistry. Join us at Apoorv for an unforgettable experience where imagination reign supreme. Don't just watch stories - create them!",
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Verse Voyage",
    //   description:"Amidst Apoorv's bustling parade of events, blooms a poetic odyssey to unveil the secrets and stories of your heart. Take my hand, let's explore the undiscovered; in Apoorv's Verse Voyage, where words meet art. Think you could conjure up something better than this? Join Apoorv's Verse Voyage now!"
    // },
    // {
    //   Image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    //   event_name: "Writers Rumble",
    //   description:"Once upon a time, there was a writer who weaved stories that moved people, stories that could change the world - even if the world just meant one person. But they never shared them. Doesn't sound like a very good story now, does it? You could change this - and share your own ones - through Apoorv's 'Writer's Rumble'! Here's your opportunity to pen the stories hidden within your notes app - and give them life."
    // },
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
                <button>Register</button>
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
