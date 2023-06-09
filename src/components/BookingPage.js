import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookingPage.css';

function BookingPage() {

  {/* Store data */}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    service: "",
    professional: "",
    date: "",
    time: ""
  });

  const [showModal, setShowModal] = useState(false);
  const [missingField, setMissingField] = useState("");

  {/* Takes input in boxes */}
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  {/* Check to see if all boxes are filled out*/}
  const handleBooking = () => {
    const { name, email, phoneNumber, address, service, professional, date, time } = formData;

    if (!name) {
      setMissingField("Name");
    } else if (!email) {
      setMissingField("Email");
    } else if (!phoneNumber) {
      setMissingField("Phone Number");
    } else if (!address) {
      setMissingField("Address");
    } else if (!service) {
      setMissingField("Service");
    } else if (!professional) {
      setMissingField("Professional");
    } else if (!date) {
      setMissingField("Date");
    } else if (!time) {
      setMissingField("Time");
    } else {
      setShowModal(true);
      setMissingField("");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="container mt-5" style={{ fontFamily: 'Jacques Francois, serif' }}>
      <div className="row">
        
        {/* Contact Information */}
        <div className="col-md-6">
          <h3>Contact Information</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" onChange={handleInputChange} required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" onChange={handleInputChange} required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="text" className="form-control" name="phoneNumber" onChange={handleInputChange} required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" name="address" onChange={handleInputChange} required/>
            </div>
          </form>
        </div>

        {/* Booking Information */}
        <div className="col-md-6">
          <h3>Booking Information</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Select Service</label>
              <select className="form-select" name="service" onChange={handleInputChange} required>
                <option selected disabled>Select...</option>
                <option value="teeth-cleaning-and-check-up">Teeth Cleaning and Check-Up</option>
                <option value="restorative-dentistry">Restorative Dentistry</option>
                <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="oral-surjery">Oral Surjery</option>
                <option value="periodontal-(gum)-treatment">Periodontal (Gum) Treatment</option>
                <option value="pediatric-dentistry">Pediatric Dentistry</option>
                <option value="endodontics">Endodontics</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Select Professional</label>
              <select className="form-select" name="professional" onChange={handleInputChange} required>
                <option selected disabled>Select...</option>
                <option value="dr-yassine">Dr. Yassine, Mostafa</option>
                <option value="dr-colasante">Dr. Colasante, Jonathan</option>
                <option value="dr-yeung">Dr. Yeung, Nicholas</option>
                <option value="dr-bhandari">Dr. Bhandari, Vivek</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <input type="date" className="form-control" name="date" onChange={handleInputChange} required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Select Time</label>
              <input type="time" className="form-control" name="time" onChange={handleInputChange} required/>
            </div>
          </form>
        </div>
      </div>
      
      {/* Book Now Button */}
      <div className="text-center mt-3">
        <button className="btn btn-lg" type="button" onClick={handleBooking} style={{backgroundColor: "#183EA0", color: "white"}}>Book Now</button>
      </div>

      {/* Confirmation and Error Pop-Ups */}
      {showModal && (
        <div className="modal show d-block" tabindex="-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <div className="modal-dialog modal-dialog-centered animated zoomIn">
            <div className="modal-content">
              {missingField ? (
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">Missing Field</h5>
                  </div>
                  <div className="modal-body">
                    <p>Please fill out the {missingField} field.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="modal-header">
                    <h5 className="modal-title">Booking Confirmed</h5>
                  </div>
                  <div className="modal-body">
                    <p>Your booking has been confirmed!</p>
                    <p>An email has been sent to {formData.email} with the following details:</p>
                    <ul>
                      <li>Name: {formData.name}</li>
                      <li>Phone Number: {formData.phoneNumber}</li>
                      <li>Address: {formData.address}</li>
                      <li>Service: {formData.service}</li>
                      <li>Professional: {formData.professional}</li>
                      <li>Date: {formData.date}</li>
                      <li>Time: {formData.time}</li>
                    </ul>
                  </div>
                </>
              )}
              <div className="modal-footer" style={{ justifyContent: 'center' }}>
                <button type="button" className="btn" onClick={() => setShowModal(false)} style={{ backgroundColor: "#183EA0", color: "white" }}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pop-Up Backdrop */}
      {showModal && <div className="modal-backdrop show"></div>}
    </div>
  );
}

export default BookingPage;
