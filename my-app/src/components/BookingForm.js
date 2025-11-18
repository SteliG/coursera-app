import React, { useState } from 'react'

const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  
  const [errors, setErrors] = useState({
    date: '',
    times: '',
    guests: '',
    occasion: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      date: '',
      times: '',
      guests: '',
      occasion: ''
    };

    // Date validation
    if (!date) {
      newErrors.date = 'Please select a date';
      isValid = false;
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
        isValid = false;
      }
    }

    // Time validation
    if (!times) {
      newErrors.times = 'Please select a time';
      isValid = false;
    }

    // Guests validation
    if (!guests) {
      newErrors.guests = 'Please enter number of guests';
      isValid = false;
    } else if (guests < 1) {
      newErrors.guests = 'Minimum 1 guest required';
      isValid = false;
    } else if (guests > 10) {
      newErrors.guests = 'Maximum 10 guests allowed';
      isValid = false;
    }

    // Occasion validation
    if (!occasion) {
      newErrors.occasion = 'Please select an occasion';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      props.submitForm(e);
    }
  }

  const handleDateChange = (e) => {
    setDate(e);
    props.dispatch(e)
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

  return (
    <section className='booking-form'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          {/* Book Date */}
          <div>
            <label htmlFor="book-date">Choose Date:</label>
            <input 
              id='book-date' 
              type="date" 
              value={date} 
              onChange={e => handleDateChange(e.target.value)} 
              className={errors.date ? 'error' : ''}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>
          {/* Book Time */}
          <div>
            <label htmlFor="book-time">Choose Time:</label>
            <select 
              name="" 
              id="book-time" 
              value={times} 
              onChange={e => setTimes(e.target.value)}
              className={errors.times ? 'error' : ''}
            >
              <option value="">Select a Time</option>
              {
                availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
              }
            </select>
            {errors.times && <span className="error-message">{errors.times}</span>}
          </div>
          {/* Number of Guests */}
          <div>
            <label htmlFor="book-guests">Number of Guests:</label>
            <input 
              type="number" 
              id='book-guests' 
              min={1} 
              max={10} 
              placeholder="1" 
              value={guests}
              onChange={e => setGuests(e.target.value)}
              className={errors.guests ? 'error' : ''}
            />
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>
          {/* Occasion */}
          <div>
            <label htmlFor="book-occasion">Occasion:</label>
            <select 
              name="" 
              id="book-occasion" 
              value={occasion}
              onChange={e => setOccasion(e.target.value)}
              className={errors.occasion ? 'error' : ''}
            >
              <option value="">Select an Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            {errors.occasion && <span className="error-message">{errors.occasion}</span>}
          </div>
          {/* Reservation Button */}
          <div className='reservation-button'>
            <button type="submit">Make Your Reservation</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default BookingForm