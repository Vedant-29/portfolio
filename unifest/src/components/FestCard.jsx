import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

function FestCard({ fest }) {
  return (
    <div className="shadow-custom-light hover:shadow-custom-dark transition-shadow duration-300 rounded-xl">
      <Link to={`/fest/${fest.id}`}>
        <Card className="border-0 rounded-xl">
          <Card.Img variant="top" src={fest.image} className="w-full p-0" />
          <Card.Body>
            <Card.Title className="line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Nullam maecenas
              consectetur. Nullam maecenas{" "}
            </Card.Title>
            <Row className="flex items-center font-normal mt-1">
              <Col xs="auto" className="pr-2">
                <BsCalendar2DateFill className="text-lg text-[#808080]" />{" "}
                {/* This is the date icon */}
              </Col>
              <Col className="p-0">
                <p className="text-sm">{fest.date}</p>{" "}
                {/* This is the fest.date from Firebase */}
              </Col>
            </Row>
            <Row className="flex items-center font-normal mt-1 mb-4">
              <Col xs="auto" className="pr-2">
                <IoLocationOutline className="text-lg text-[#808080]" />{" "}
                {/* This is the date icon */}
              </Col>
              <Col className="p-0">
                <p className="text-sm">{fest.location}</p>{" "}
                {/* This is the fest.date from Firebase */}
              </Col>
            </Row>
            <div className="cursor-pointer flex justify-between p-2.5 bg-[#EBE8FD] font-medium rounded-sm">
              <span>{fest.price}</span>
              <div className="flex items-center">
                <div className="border-l-2 border-[#808080] pl-2">
                  <span>Buy Now</span>
                </div>
              </div>
            </div>
          </Card.Body>  
        </Card>
      </Link>
    </div>
  );
}

export default FestCard;
