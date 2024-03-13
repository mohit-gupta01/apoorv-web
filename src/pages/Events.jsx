import "./Events.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Events = () => {
  const [eventtype, setEventtype] = useState("technical");

  function changeeventtype(event, variable) {
    setEventtype(variable);
  }

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Pulse and Beats",
      description:
        "All aboard the groove train! Are you and your squad ready to put on a show? Flood your energy through the stage and the audience, Apoorv's Pulse And Beat awaits your presence! A perfect opportunity for your team to express themselves with any form of dance you all bring to the table; share with us your talent and joy! Let the beat replace your thoughts, come here and get a move on!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Ultimate Dance Showdown",
      description:
        "Get ready to break a leg - and the dance floor on Apoorv's The Ultimate Dance Showdown! Round up five of your friends and show off your best moves on stage. It's time to make rhythm, style and skill blend together in the coolest way possible. This is a battle you do NOT want to miss out on. Are you in?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Frames of Fiction",
      description:
        "Polish your lenses and get your tear sticks ready, Apoorv's very own short film contest is here. Challenge the bounds of creativity and cinematography with your captivating script and mesmerising camera work. Put your masterpiece on display for the world to see, gather your team and unleash your ingenuity, we can't wait to see your magic!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Comedy Combat",
      description:
        "You have heard of laughter being a medicine, but do you know laughter can be your weapon as well? Prepare for the hilarious showdown, side-splitting stories will clash with sharper-than-a-samurai-sword punchlines, leaving you stitched-sided and begging for mercy (from the laughter, of course!). Witness comedic gladiators battle for ultimate laugh mastery in a night of unforgettable entertainment that will tickle your funny bone and leave your cheeks aching from laughter. Get ready to lose your breath at Comedy Combat!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Blizzart",
      description:
        "Step into the vibrant world of Blizzart, where every stroke tells a story and every hue evokes emotion! From delicate sketches to vibrant paintings, we welcome all forms of artistic expression. Pick up your choice of tool and head over to Apoorv 2024, for we have set up the perfect canvas for your creativity! Unleash your inner artist and paint your story with us!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Face off",
      description:
        "Are you ready to paint the town, or at least, some faces? Apoorv's Face-Off is where brush meets beast (or butterfly, unicorn, superhero... you get the idea!). Transform faces into living art and compete in the face painting competition to be the campus canvas champion! Witness incredible transformations, unleash your artistic spirit, and be a part of the most vibrant event of Apoorv 2024!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Beyond the Harmony",
      description:
        "Calling all vocalists and instrumentalists! 'Beyond The Harmony' awaits you - don't shy away, your mellifluous voice deserves to be adored. Open to students in IIITK and outside, this event promises to unlike any you've witnessed before. Prepare yourself to wow everyone with every note!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Strings and Keys",
      description:
        "Hit the perfect note to win the top spot! Embark on a musical odyssey at Strings and Keys, our instrumental extravaganza where you step onto the stage and let your melodies soar. Apoorv 2024 is bringing to you the perfect opportunity to show-off your inner Maestro. Ready to write your name in the annals of greatness? Grab your instrument and let's make history!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Game Show",
      description: "",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Runaway Renegades",
      description:
        "Fashion enthusiasts and pioneers, are you ready to command the runway with your style? Apoorv is back and this time, we want your flair to grace the stage! We invite you to embrace your love for haute couture and showcase your unique style in clothing. Flaunt your inner diva and leave your mark on the world. Gather the inspiration and leave the audience awestruck with your killer designs!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Synapse",
      description:
        "Capture the moment and seize the spotlight! Send in your best shots to us through Synapse, Apoorv's one and only photography contest, and -bless- everyone's insta feeds! Everyone's got a camera, but only a few possess the ability to make art with it. Participate now and establish your name as a photography pro! After all, pictures do speak louder than words :D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Chromus",
      description:
        "To all the visual storytellers out there, ready to illuminate the world with your visions? This is an adventure where creativity clashes with pixels to create something mesmerizing for the eyes. Forge your path by choosing a category, from crafting captivating title sequences to igniting change with socially impactful edits. Whether you wield the latest NLE or craft your magic with simpler tools, Chromus welcomes your artistry. Join us at Apoorv for an unforgettable experience where imagination reign supreme. Don't just watch stories - create them!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Verse Voyage",
      description:
        "Amidst Apoorv's bustling parade of events, blooms a poetic odyssey to unveil the secrets and stories of your heart. Take my hand, let's explore the undiscovered; in Apoorv's Verse Voyage, where words meet art. Think you could conjure up something better than this? Join Apoorv's Verse Voyage now!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Writers Rumble",
      description:
        "Once upon a time, there was a writer who weaved stories that moved people, stories that could change the world - even if the world just meant one person. But they never shared them. Doesn't sound like a very good story now, does it? You could change this - and share your own ones - through Apoorv's 'Writer's Rumble'! Here's your opportunity to pen the stories hidden within your notes app - and give them life.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "MUN",
      description:
        "Ever wonder what it takes to be a world leader? We'll give you the chance to find out and dive into the world of diplomacy and debate! Apoorv 2024 presents the Model United Nations (MUN), your chance to step into the shoes of a world leader and tackle pressing international issues. Join us as we delve into thought-provoking debates, forge diplomatic alliances, and craft innovative solutions for a brighter future. Don't miss this opportunity to shape the world, one resolution at a time!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Alpha Trading",
      description:
        "Embark on an exhilarating journey into the captivating universe of Alpha Trading! Whether you're a seasoned campus trader or a curious newcomer, prepare to be swept away by the dynamic realm of virtual trading. 📈 This isn't just any trading event—it's a chance to showcase your skills, compete for enticing cash prizes, and leave an indelible mark on our fest! Here, it's not just about making tradesit's about the adrenaline rush, and the opportunity to emerge victorious! So, don your trading hat, sharpen your instincts, and seize the oppurtunity to make waves and memories.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Anime Got Talent",
      description:
        "Hey anime aficionados! It's decision time: Luffy or Naruto? Goku or Saitama? Light or L?Take your pick and let your inner otaku run wild at Apoorv! This is where the boundaries of creativity vanish faster than Minato's jutsu. Show off your spot-on cosplays, mind-bending fan art, or flip the script with your fan fictions. Whether you're belting out your favorite opening or plotting the ultimate crossover, there's a spot for every anime fanatic at Apoorv! Get ready for an unforgettable journey through anime culture!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Hackoona Matata",
      description:
        "Hakuna Matata? More like Hackoona Matata! One of the most celebrated of the lot, this 72-hour open hackathon is your chance to say goodbye to worries and hello to code at Apoorv 2024. We bring to you the perfect opportunity to push past boundaries, collaborate with fellow code warriors, and build groundbreaking solutions. So, grab your laptop, fuel up on caffeine, and get ready to make your mark!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Valorant",
      description:
        "Step into the unknown with a Ba ba Bam ACE or embrace the chaos of teammate flashes. No worries, secure your spot in the upcoming Apoorv 2.0 event. Unleash your skills and share those hilarious moments with your teammates. Register now for an unforgettable Valorant experience!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "E-Football",
      description:
        "It's time to dive into the ultimate eSports showdown at Apoorv's E-Football event! Join the ranks of gaming glory as we kick off qualifiers to narrow down to the top 32 contenders. From there, it's a battle through group stages, with the top 2 from each group securing their spot in the intense Ro16 draw. Calling all college gamers, this is your chance to shine on the digital field and claim victory. Ready to be part of the eSports revolution? Sign up now!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "BGMI",
      description:
        "Get ready to bring your BGMI-game on! Apoorv brings you ultimate inter-college BGMI contest! Flex your gaming skills alongside your teammates and emerge triumphant. Victory awaits - are you in the race?",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Capture the Flag",
      description:
        "Attention, cyber security geeks! Apoorv's 'Capture the Flag' event is here! Join us in an thrilling journey where you'll decode, defend, and dominate the digital battlefield! Register now and get a chance to hoist your victory!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "3 days Long Challenge",
      description:
        "Ready, set, code! Three days of endless possibilities await you at Apoorv 2024. Embrace the chaos of creativity, where bugs are merely stepping stones to innovation. Whether you're a coding prodigy or a curious beginner, this event promises an immersive journey into the heart of tech innovation. Prepare to code your way to glory!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Innovis-Ideathon",
      description:
        "Imagine, Ideate, Innovate! Join InnoVis, the ultimate ideathon where problems meet possibilities. Get a question and let your creativity soar to come up with an idea for a solution. No limits, just big ideas. Let's redefine possibilities together, one inventive vision at a time!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Turing's Feathered Fiasco",
      description:
        "Attention: Gamebot initiating icy terrain traversal!!! Inviting all passionate game developers and AI enthusiasts! Brace yourselves for the ultimate test of skill and strategy. Traverse the icy terrain, where every move counts. Maneuver through perilous ice pillars, carefully navigating tiny holes while keeping your sights set on the ultimate prize. But wait, there's more! As you progress, brace yourself for increased frame rates and intensified challenges that will push your limits like never before. Get ready to embark on this epic quest and conquer the icy obstacles that lie ahead.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "GameVita 2.0",
      description:
        "It's time to level up! We bring to you Apoorv's exciting GameVita2.0 - don't stay AFK for 72 hours to create the coolest little distraction you could. Round up your fellow game lovers and game connoisseurs! The theme will be announced the moment we begin the challenge. Any engine, any framework - the choices are yours, the results will speak for themselves. May the 4x be with you - explore, expand, exploit, exterminate!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      event_name: "Tech quiz",
      description:
        "Tech genuises, COMMIT! This is your chance to prove that you’re not just a participant, but a prodigy in the tech world. Get ready to showcase your nerdiness at our mind-boggling tech quiz.  Grab your thinking caps and gear up for a rumble as this is a battleground where the best minds clash, challenge, and conquer! So, are you ready to decode the complex, solve the unsolvable, and rise above the ordinary? Will you be the one to wear the tech crown and bask in the glory of victory? Join us, flaunt your tech prowess, and let the world witness the power of your intellect.",
    },
  ];

  return (
    <div className="events-conntainer">
      <br></br>
      <h1 className="events-h1">Events</h1>
      <ul className="flex flex-row gap-[0.5vw]">
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
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <div className="content">
              <h2 className="title">{card.event_name}</h2>
              <p className="copy">{card.description.slice(0, 200)}...</p>
              <Link to='/event' className="btn rounded-md">
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
