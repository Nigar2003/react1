// PersonalInfo.js
import "./PersonalInfo.css";
import React from "react";
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Component.css';

const PersonalInfo = () => {
  let name = " Isayeva Nigar";
  let age = "Age:" + 20;
  let location = "Location: Baki seheri; Xetai rayonu";
  return (
    <div className="Personal">
      <h1 className="name">{name} </h1>
      <p className="age"> {age} </p>
      <p className="location"> {location} </p>
      <h2>Telecomminication engineering</h2>
    </div>
  );
};

export default PersonalInfo;
