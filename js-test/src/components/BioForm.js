import React, { useState } from "react";

const BioForm = ({ name, setName, info, setInfo, handleSubmitBio }) => {
  return (
    <form onSubmit={handleSubmitBio} className="bio-form">
      <input
        className="name-input"
        type="text"
        placeholder="What is your name?"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="info-label">About me</label>
      <input
        className="info-input"
        type="text"
        placeholder="Write something about yourself"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <button type="submit" className="bio-btn">
        Submit
      </button>
    </form>
  );
};

export default BioForm;
