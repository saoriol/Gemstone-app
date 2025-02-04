import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import gemstones from "../data/gemstones";
import "./styles.css";

const GemstoneList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter gemstones based on search input
  const filteredGemstones = gemstones.filter((gem) =>
    gem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="gemstone-list">
      <h1>Gemstones</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search gemstones..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="grid">
        {filteredGemstones.length > 0 ? (
          filteredGemstones.map((gem) => (
            <div 
              key={gem.name} 
              className="card" 
              onClick={() => navigate(`/gem/${gemstones.indexOf(gem)}`)} // Get correct index
              role="button"
            >
              <img src={gem.image} alt={gem.name} />
              <h2>{gem.name}</h2>
            </div>
          ))
        ) : (
          <p className="no-results">No gemstones found.</p>
        )}
      </div>
    </div>
  );
};

export default GemstoneList;
