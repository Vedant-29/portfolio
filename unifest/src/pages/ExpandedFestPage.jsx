import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom"; // Import for accessing URL parameters
import { db } from "../console-firebase"; // Assuming you have Firebase initialized and db reference created
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import "./ExpandedFestPage.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaChrome } from "react-icons/fa6";
import Footer from "../components/Footer";

function ExpandedFestPage() {
  const [festDetails, setFestDetails] = useState(null);
  const { festId } = useParams(); // Get the festId from URL params
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeTab, setActiveTab] = useState("schedule");
  const [isExpanded, setIsExpanded] = useState();



  console.log(festId); 

  useEffect(() => {
    const fetchFestDetails = async () => {
      try {
        const festDocRef = doc(db, "fests", festId); // Create document reference
        const festDocSnapshot = await getDoc(festDocRef);
        if (festDocSnapshot.exists) {
          setFestDetails(festDocSnapshot.data());
          // Set initial selected day to the first available day
          if (
            festDocSnapshot.data().schedule &&
            festDocSnapshot.data().schedule.length > 0
          ) {
            setSelectedDay(festDocSnapshot.data().schedule[0].day);
          }
        }
      } catch (error) {
        console.error("Error fetching fest details:", error);
      }
    };

    if (festId) {
      // Fetch only if festId exists in URL parameter
      fetchFestDetails();
    }
  }, [festId]);

  const handleDayTabClick = (day) => {
    setSelectedDay(day);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  if (!festDetails) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container-lg px-20 py-16 min-h-screen">
        <div className="row">
          {/*This is the left side of the expanded fest page */}
          <div className="col-md-8">
            <div className="rounded-lg">
              <img
                src={festDetails.image}
                alt="Fest"
                className="object-fill rounded-lg"
              />
            </div>
            <div className="rounded-lg bg-transparent mt-4">
              <div>
                <h1 className="text-3xl ">Description</h1>
                <p className="pt-2">{festDetails.description}</p>
              </div>
            </div>
            <div className="mt-1">
              {/* Render tabs for schedule, stalls, and reviews */}
              <div className="flex space-x-4 w-full">
                <div
                  className={`pr-1.5 py-1.5 cursor-pointer ${
                    activeTab === "schedule"
                      ? "text-red-500 hover:text-red-500 border-solid border-b-2 border-red-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("schedule")}
                >
                  Schedule
                </div>
                <div
                  className={`px-1.5 py-1.5 cursor-pointer ${
                    activeTab === "stalls"
                      ? "text-red-500 hover:text-red-500 border-solid border-b-2 border-red-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("stalls")}
                >
                  Stalls
                </div>
                <div
                  className={`px-1.5 py-1.5  cursor-pointer ${
                    activeTab === "reviews"
                      ? "text-red-500 hover:text-red-500 border-solid border-b-2 border-red-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("reviews")}
                >
                  Reviews
                </div>
              </div>

              {/* Render day tabs dynamically based on fest schedule */}
              {activeTab === "schedule" && (
                <div className="flex mt-4">
                  {festDetails &&
                    festDetails.schedule &&
                    festDetails.schedule.map((day) => (
                      <>
                        <div
                          key={day.day}
                          className={`cursor-pointer mr-1 ${
                            selectedDay === day.day
                              ? "px-3 py-2 rounded bg-[#FADEDE]"
                              : "px-3 py-2"
                          }`}
                          onClick={() => handleDayTabClick(day.day)}
                        >
                          {day.day}
                        </div>
                      </>
                    ))}
                </div>
              )}

              {activeTab === "schedule" && (
                <div className="rounded-lg bg-transparent mt-4">
                  <div>
                    <h1 className="text-2xl ">Events</h1>
                    <p className="pt-2">{festDetails.description}</p>
                  </div>
                  <div className="mt-3">
                    {festDetails &&
                      festDetails.schedule &&
                      festDetails.schedule
                        .filter((day) => day.day === selectedDay)
                        .map((day) =>
                          day.events.map((event) => (
                            <div
                              key={event.id}
                              className="w-full px-3 py-2 border-1 rounded border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner flex items-center"
                            >
                              <div
                                className="w-full px-1 flex-col items-center"
                                onClick={() => setIsExpanded(!isExpanded)}
                              >
                                <div className="w-full flex items-center">
                                  <h1 className="text-lg grow">
                                    {event.title}
                                  </h1>
                                  <div className="focus:outline-none bg-transparent font-normal px-3 text-sm py-1 text-center rounded mr-2">
                                    G-202 | 7:30PM onwards
                                  </div>
                                  <div className="focus:outline-none bg-[#EBE8FD] font-medium px-3 text-sm py-1 text-center rounded-sm mr-2">
                                    $1500 onwards
                                  </div>
                                  <div className="focus:outline-none bg-[#E75A5A] px-3 py-1 text-white text-sm rounded-sm cursor-pointer font-medium">
                                    <Link
                                      to={`/addtocart/${festId}`}
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      Buy Now
                                    </Link>
                                  </div>
                                </div>
                                {isExpanded && (
                                  <div className="w-full flex items-center text-sm pt-1">
                                    <p>
                                      Lorem ipsum dolor sit amet consectetur.
                                      Faucibus risus dignissim urna metus vitae
                                      amet feugiat ipsum amet. Elementum neque
                                      nibh augue ipsum lacinia consequat egestas
                                      ultrices molestie.
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))
                        )}
                  </div>
                </div>
              )}

              {/* Render events for the selected day */}
            </div>
          </div>

          {/*This is the right side of the expanded fest page */}
          <div className="col-md-4">
            {/*This is the card for expanded - 1st box */}
            <div className="shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 rounded-xl">
              <Card className="border-0 rounded-xl">
                <Card.Body>
                  <Card.Title className="line-clamp-3 mr-28">
                    Lorem ipsum dolor sit amet consectetur. Nullam maecenas
                    consectetur. Nullam maecenas{" "}
                  </Card.Title>
                  <Row className="flex items-center font-normal mt-1">
                    <Col xs="auto" className="pr-2">
                      <BsCalendar2DateFill className="text-lg text-[#808080]" />{" "}
                      {/* This is the date icon */}
                    </Col>
                    <Col className="p-0">
                      <p className="text-sm">Sample Date</p>{" "}
                      {/* This is the fest.date from Firebase */}
                    </Col>
                  </Row>
                  <Row className="flex items-center font-normal mt-1 mb-4">
                    <Col xs="auto" className="pr-2">
                      <IoLocationOutline className="text-lg text-[#808080]" />{" "}
                      {/* This is the date icon */}
                    </Col>
                    <Col className="p-0">
                      <p className="text-sm">Sample Location</p>{" "}
                      {/* This is the fest.date from Firebase */}
                    </Col>
                  </Row>
                  <div className="flex items-center w-full">
                    <div className="focus:outline-none bg-[#EBE8FD] font-medium grow mr-2 py-2.5 text-center rounded-sm">
                      $1500 onwards
                    </div>
                    <div className="focus:outline-none bg-[#E75A5A] px-11 py-2.5 text-white rounded-sm cursor-pointer font-medium">
                      <Link to="/cart">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/*This is the card for expanded - 2nd box */}
            <div className="shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 rounded-xl mt-4">
              <Card className="border-0 rounded-xl">
                <Card.Body>
                  <Card.Title className="line-clamp-1 mr-28">
                    Additional Details
                  </Card.Title>
                  <Row className="flex items-center font-normal mt-1">
                    <Col xs="auto" className="pr-2">
                      <FaPhoneAlt className="text-lg text-[#808080]" />{" "}
                      {/* This is the date icon */}
                    </Col>
                    <Col className="p-0">
                      <p className="text-sm">Sample Phone Number</p>{" "}
                      {/* This is the fest.date from Firebase */}
                    </Col>
                  </Row>
                  <Row className="flex items-center font-normal mt-1 mb-4">
                    <Col xs="auto" className="pr-2">
                      <MdEmail className="text-lg text-[#808080]" />{" "}
                      {/* This is the date icon */}
                    </Col>
                    <Col className="p-0">
                      <p className="text-sm">wassup@unifest.in</p>{" "}
                      {/* This is the fest.date from Firebase */}
                    </Col>
                  </Row>
                  <div className="flex items-center w-full">
                    <div className="focus:outline-none bg-[#FADEDE] font-medium flex justify-center items-center grow mr-2 py-2.5 text-center rounded-sm cursor-pointer">
                      <p>Download Event Brochure</p>
                      <MdOutlineFileDownload className=" text-xl ml-4" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/*This is the card for expanded - 3rd box */}
            <div className="shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 rounded-xl mt-4">
              <Card className="border-0 rounded-xl">
                <Card.Body>
                  <Card.Title className="line-clamp-1 mr-28">
                    Additional Details
                  </Card.Title>
                  <Row className="flex items-center font-normal mt-1">
                    <Col xs="auto" className="pr-2">
                      <FaChrome className="text-lg text-[#808080]" />{" "}
                      {/* This is the date icon */}
                    </Col>
                    <Col className="p-0">
                      <p className="text-sm">Sample Website</p>{" "}
                      {/* This is the fest.date from Firebase */}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ExpandedFestPage;
