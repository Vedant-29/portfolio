import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AddToCartPage() {
  const [activeButton, setActiveButton] = useState("All");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="max-w-4xl px-10 py-7 bg-transparent w-full flex flex-col justify-center items-center">
            <div className="w-full px-5 py-5 flex flex-col justify-center items-center bg-transparent">
              <h1 className="text-3xl font-normal text-limited-width text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At et,
                alias temporibus
              </h1>
              <div className="mt-3">
                <Row className="flex items-center font-normal">
                  <Col xs="auto" className="pr-4">
                    <BsCalendar2DateFill className="text-xl text-[#808080]" />{" "}
                    {/* This is the date icon */}
                  </Col>
                  <Col className="p-0">
                    <p className="text-lg font-light">
                      March 21 | 7:30PM onwards
                    </p>{" "}
                    {/* This is the fest.date from Firebase */}
                  </Col>
                </Row>
              </div>
              <div className="mt-1">
                <Row className="flex items-center font-normal">
                  <Col xs="auto" className="pr-4">
                    <IoLocationOutline className="text-xl text-[#808080]" />{" "}
                    {/* This is the date icon */}
                  </Col>
                  <Col className="p-0">
                    <p className="text-lg font-light">
                      Rajiv Gandhi International Airport
                    </p>{" "}
                    {/* This is the fest.date from Firebase */}
                  </Col>
                </Row>
              </div>
            </div>
            <div className="w-full px-1 py-1 flex flex-col bg-transparent items-center">
              <div className="flex justify-between items-center w-full">
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
                <div className="flex items-center ">
                  <Button variant="outline-secondary" className="m-1">
                    Proceed to checkout
                  </Button>
                </div>
              </div>
              <div className="flex items-center mt-3 w-full">
                <div className="w-full px-3 py-2 border-1 rounded border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner flex items-center w-full">
                  <div className="w-full px-1 flex-col items-center">
                    <div className="w-full flex items-center">
                      <h1 className="text-lg grow">Hello World</h1>
                      <div className="focus:outline-none bg-[#EBE8FD] font-medium px-3 text-sm py-1 text-center rounded-sm mr-2">
                        $30000 cashprize
                      </div>
                      <div className="focus:outline-none bg-[#E75A5A] px-3 py-1 text-white text-sm rounded-sm cursor-pointer font-medium">
                        <Link to="/checkout" onClick={(e) => e.stopPropagation()}>
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddToCartPage;
