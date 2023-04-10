import React, { useState, useRef, useEffect } from "react"; // Add useRef
import { useOnScreen } from "./useOnScreen"; // Import the useOnScreen hook

import Axios from "axios";
import "./home.css";

import Donation from "../assets/donation.jpg";
import GroupVolunteer from "../assets/groupVolunteer.jpg";
import Helping from "../assets/helping.jpg";
import Organization from "../assets/organization.jpg";
import VolunteerNeeded from "../assets/volunteerNeeded.jpg";

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [
    Donation,
    GroupVolunteer,
    Helping,
    Organization,
    VolunteerNeeded,
  ];

  const headerRef = useRef();
  const isHeaderVisible = useOnScreen(headerRef);

  const box1Ref = useRef();
  const isBox1Visible = useOnScreen(box1Ref);

  const box2Ref = useRef();
  const isBox2Visible = useOnScreen(box2Ref);

  const box3Ref = useRef();
  const isBox3Visible = useOnScreen(box3Ref);

  const thirdHalfRef = useRef();
  const isThirdHalfVisible = useOnScreen(thirdHalfRef);

  const secondHalfRef = useRef();
  const isSecondHalfVisible = useOnScreen(secondHalfRef);

  const slideshowBoxRef = useRef();
  const isSlideshowBoxVisible = useOnScreen(slideshowBoxRef);

  const handleNext = () => {
    setSlideIndex((slideIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlideIndex((slideIndex - 1 + images.length) % images.length);
  };

  const [volunteerList, setVolunteerList] = useState([]);

  /*Get request for data inside mongoDB */
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setVolunteerList(response.data);
    });
  }, []);

  /* volunteerName & volunteerDate const created to test database*/
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerDate, setVolunteerDate] = useState("");
  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      volunteerName: volunteerName,
      volunteerDate: volunteerDate,
    });
  };
  return (
    <div>
      <div className="header_container-box">
        <div
          className={`header_content fade-in ${
            isHeaderVisible ? "fade-in" : ""
          }`}
        >
          <h1>Volunteer G2</h1>
          <h3>Dedicated, Grateful, Compassionate.</h3>
          <p>
            Volunteering is the ultimate exercise in democracy. You vote in
            elections once a year, but when you volunteer, you vote every day
            about the kind of community you want to live in.
          </p>
          <button class="btn" type="button">
            More Info
          </button>
        </div>
      </div>

      <div ref={box1Ref} class={`box-main ${isBox1Visible ? "fade-in" : ""}`}>
        <h1 className="text-big">Why you should be a Volunteer!!!!</h1>
        <p class="text-small">
          “People should be volunteers to make a positive impact on their
          community and the world” <br></br>
          Volunteering is a great way to connect with others and make a
          difference in people&#8217;s lives. By working with a team of
          dedicated individuals, you can help to create a more connected and
          supportive community, and contribute to a more positive and inclusive
          world.
        </p>
        <img
          alt="volunteer in action"
          src="https://images.pexels.com/photos/6348129/pexels-photo-6348129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div ref={box1Ref} class={`box-main ${isBox1Visible ? "fade-in" : ""}`}>
        <h1 className="text-big">Community Service</h1>
        <p class="text-small">
          <li>Cleaning up parks, streets, and public spaces</li>
          <li>
            Providing assistance to those in need, such as elderly, homeless,
            and low-income families
          </li>
          <li>Supporting local school and education programs</li>
          <li>Organize community events and festivals</li>
          <li>
            Providing support to local non-profit organizations and charities
          </li>
        </p>

        <img
          alt="volunteer in action"
          src="https://images.pexels.com/photos/6348129/pexels-photo-6348129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div ref={box1Ref} class={`box-main ${isBox1Visible ? "fade-in" : ""}`}>
        <h1 className="text-big">Food Charity Service</h1>
        <p class="text-small">
          Be the one who donates the time and skills to support other food
          charity organizations, staff, and mission. Food charity organizations
          work to address hunger and food insecurity by providing meals, food
          assistance, and other related services to these in need.
        </p>

        <img
          alt="volunteer in action"
          src="https://images.pexels.com/photos/6348129/pexels-photo-6348129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>

      {/*thirdHalf section is to test the database */}

      <div
        ref={thirdHalfRef}
        class={`thirdHalf ${isThirdHalfVisible ? "fade-in" : ""}`}
      >
        <h1>Add volunteer data to database</h1>

        <label>Volunteer Group Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setVolunteerName(event.target.value);
          }}
        />
        <label>Volunteer Date:</label>
        <input
          type="date"
          onChange={(event) => {
            setVolunteerDate(event.target.value);
          }}
        />
        <button onClick={addToList}>Add Volunteer Event</button>
      </div>
      <div className="volunteer-list">
        <h1>Volunteer List</h1>
      </div>

      {volunteerList.map((val, key) => {
        return (
          <div key={key}>
            {" "}
            <h1> {val.volunteerName}</h1> <h1> {val.volunteerDate}</h1>{" "}
          </div>
        );
      })}

      <div>
        <div
          ref={secondHalfRef}
          class={`secondHalf ${isSecondHalfVisible ? "fade-in" : ""}`}
        >
          <p class="text-quote" p style={{ color: "blue" }}>
            <em>
              “Life’s most persistent and urgent question is, what are you doing
              for others?”
            </em>
            <br></br> – Martin Luther King, Jr.
          </p>
        </div>
      </div>
      {/*...*/}
      <div
        ref={slideshowBoxRef}
        class={`slideshow-box ${isSlideshowBoxVisible ? "fade-in" : ""}`}
      >
        <div className="slideshow-container">
          <img src={images[slideIndex]} alt="Slide" className="slide-image" />
          <button className="slide-button prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="slide-button next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
      {/*...*/}
    </div>
  );
};
