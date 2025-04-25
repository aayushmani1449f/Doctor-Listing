import React from "react";

// Function to get initials from the doctor's name
const getInitials = (fullName) => {
  const names = fullName.split(" ");
  // If the name has "Dr." as a prefix, we skip it while extracting initials
  const filteredNames = names.filter(name => name !== "Dr.");
  return filteredNames.map(name => name.charAt(0).toUpperCase()).join('');
};

const DoctorCard = ({ doctor, onBookAppointment }) => {
  const initials = getInitials(doctor.name); // Get initials from doctor's name

  return (
    <div className="doctor-card" key={doctor.id}>
      {/* Profile picture or initials on the left side */}
      <div className="doctor-photo-wrapper">
        {/* Display initials if no photo */}
        <div className="doctor-initials">
          {initials} {/* Display initials as profile picture */}
        </div>
      </div>

      {/* Doctor details on the right side */}
      <div className="doctor-info">
        <h2 className="doctor-name">{doctor.name}</h2>
        <p className="doctor-specialty">{doctor.specialties.join(", ")}</p>
        <p className="doctor-experience">{doctor.experience} years of experience</p>
        <p className="doctor-fee">Consultation Fee: ₹{doctor.fees}</p>

        {/* Book Appointment Button on the right */}
        <button className="book-appointment-btn" onClick={() => onBookAppointment(doctor.id)}>
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
