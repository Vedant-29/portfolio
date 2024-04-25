import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FestCard from "../components/FestCard";
import Footer from "../components/Footer";
import { db } from "../console-firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../console-firebase"; // Assuming you export auth from console-firebase



function HomePage() {
  const [festivals, setFestivals] = useState([]);
  const [activeButton, setActiveButton] = useState("All");

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const festCollectionRef = collection(db, "fests"); // Create collection reference
        const festCollectionSnapshot = await getDocs(festCollectionRef); // Fetch collection

        const festivals = festCollectionSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setFestivals(festivals);
      } catch (e) {
        console.log(e);
      }
    };
    fetchFestivals();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in');
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        {/* <Slider /> */}
      </div>
      <div className="container-lg px-20 py-10 min-h-screen">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              
              className={`mr-1 rounded-full text-black font-medium text-sm px-3 py-2 border-1 ${
                activeButton === "All"
                  ? "bg-[#FFD9D9] border-0 hover:bg-[#FFD9D9] hover:border-0"
                  : "border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner"
              }`}
              onClick={() => setActiveButton("All")}
            >
              All
            </div>
            <div
              
              className={`m-1 rounded-full text-black font-medium text-sm px-3 py-2 border-1 ${
                activeButton === "Today"
                  ? "bg-[#FFD9D9] border-0 hover:bg-[#FFD9D9] hover:border-0"
                  : "border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent"
              }`}
              onClick={() => setActiveButton("Today")}
            >
              Today 
            </div>
            <div
              
              className={`m-1 rounded-full text-black font-medium text-sm px-3 py-2 border-1 ${
                activeButton === "Tomorrow"
                  ? "bg-[#FFD9D9] border-0 hover:bg-[#FFD9D9] hover:border-0"
                  : "border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent"
              }`}
              onClick={() => setActiveButton("Tomorrow")}
            >
              Tomorrow
            </div>
            <div
              
              className={`m-1 rounded-full text-black font-medium text-sm px-3 py-2 border-1 ${
                activeButton === "This Weekend"
                  ? "bg-[#FFD9D9] border-0 hover:bg-[#FFD9D9] hover:border-0"
                  : "border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent"
              }`}
              onClick={() => setActiveButton("This Weekend")}
            >
              This Weekend
            </div>  
          </div>
          <div className="flex items-center">
            <Button variant="outline-secondary" className="m-1">
              Filter
            </Button>
            <DropdownButton
              id="dropdown-basic-button"
              title="Sort"
              variant="outline-secondary"
              className="ml-1"
            >
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {festivals.map((fest) => (
            <FestCard key={fest.id} fest={fest} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
