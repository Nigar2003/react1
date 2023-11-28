// UserCV.js
import "./UserCV.css";
import React from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
const UserCV = () => {
  return (
    <div className="UserCV">
      <PersonalInfo />
      <Experience />
      <Contacts />
    </div>
  );
};

export default UserCV;
