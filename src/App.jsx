import React, { useState } from "react";
import doctorsData from "./data/Doctors";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import DoctorList from "./components/DoctorList";
import "./Styles/App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [sortBy, setSortBy] = useState("");

  const specialties = Array.from(
    new Set(doctorsData.flatMap((doc) => doc.specialties))
  );

  const handleSpecialtyChange = (spec) => {
    setSelectedSpecialties((prev) =>
      prev.includes(spec)
        ? prev.filter((s) => s !== spec)
        : [...prev, spec]
    );
  };

  const clearFilters = () => {
    setConsultationType("");
    setSelectedSpecialties([]);
    setSortBy("");
  };

  const filteredDoctors = doctorsData
    .filter((doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((doc) =>
      consultationType ? doc.consultationType === consultationType : true
    )
    .filter((doc) =>
      selectedSpecialties.length === 0
        ? true
        : selectedSpecialties.some((spec) =>
            doc.specialties.includes(spec)
          )
    )
    .sort((a, b) => {
      if (sortBy === "fees") return a.fees - b.fees;
      if (sortBy === "experience") return b.experience - a.experience;
      return 0;
    });

  const suggestionMatches = doctorsData.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar
        onSearch={(val) => setSearch(val)}
        suggestions={suggestionMatches}
      />
      <div className="main">
        <FilterPanel
          consultationType={consultationType}
          onConsultationChange={setConsultationType}
          specialties={specialties}
          selectedSpecialties={selectedSpecialties}
          onSpecialtyChange={handleSpecialtyChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onClearFilters={clearFilters}
        />
        <DoctorList doctors={filteredDoctors} />
      </div>
    </div>
  );
};

export default App;
