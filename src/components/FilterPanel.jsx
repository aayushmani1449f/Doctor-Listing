import React from "react";

const FilterPanel = ({
  consultationType,
  onConsultationChange,
  specialties,
  selectedSpecialties,
  onSpecialtyChange,
  sortBy,
  onSortChange,
  onClearFilters,
}) => {
  return (
    <div className="filters">
      <h2 className="filters-title">Filters</h2> {/* Title Added Here */}
      
      <div className="filter-specialty">
        <h3 className="filter-header-speciality">Specialty</h3>
        {specialties.length > 0 ? (
          specialties.map((spec) => (
            <label key={spec} className={`filter-specialty-${spec}`}>
              <input
                type="checkbox"
                value={spec}
                checked={selectedSpecialties.includes(spec)}
                onChange={(e) => onSpecialtyChange(e.target.value)}
              />
              {spec}
            </label>
          ))
        ) : (
          <p>No specialties available</p> // Add fallback text if no specialties
        )}
      </div>

      <div>
        <h3 className="filter-header-moc">Consultation Mode</h3>
        {["Video Consult", "In Clinic"].map((type) => (
          <label key={type} className={`filter-${type.toLowerCase().replace(" ", "-")}`}>
            <input
              type="radio"
              name="consultation"
              value={type}
              checked={consultationType === type}
              onChange={(e) => onConsultationChange(e.target.value)}
            />
            {type}
          </label>
        ))}
      </div>

      <div>
        <h3 className="filter-header-sort">Sort By</h3>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="fees" className="sort-fees">Fees (Low to High)</option>
          <option value="experience" className="sort-experience">Experience (High to Low)</option>
        </select>
      </div>

      <button className="clear-filters" onClick={onClearFilters}>Clear Filters</button>
    </div>
  );
};

export default FilterPanel;
