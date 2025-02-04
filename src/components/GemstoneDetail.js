import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import gemstones from "../data/gemstones";
import "./styles.css";

const GemstoneDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const gem = gemstones[id];

  if (!gem) return <h2>Gemstone not found!</h2>;

  return (
    <div className="gemstone-detail">
      <img src={gem.image} alt={gem.name} />
      <h1>{gem.name}</h1>
      <p><strong>Color:</strong> {gem.color}</p>
      <p><strong>Hardness:</strong> {gem.hardness}</p>
      <p><strong>Chakra:</strong> {gem.chakra}</p>
      <p>{gem.description}</p>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
};

export default GemstoneDetail;
