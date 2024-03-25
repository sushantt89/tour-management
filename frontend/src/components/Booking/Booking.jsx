import React from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const handleChange = (e) => {};
  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          Rs. {price} <span>/ person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center">
          <i className="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/*============== booking form start ================*/}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/*============== booking form end ================*/}
      {/*============== booking bottom  ================*/}
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              Rs. {price} <i class="ri-close-line"></i> 1 person{" "}
            </h5>
            <span>Rs. {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 service">
            <h5>Service charge </h5>
            <span>Rs.1000</span>
          </ListGroupItem>
          <hr />
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>Rs. 91000 </span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary_btn w-100 mt-4"> 
            Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
