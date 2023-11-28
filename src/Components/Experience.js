// Experience.js
import "./Experience.css";
import React from "react";
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Component.css';

const Experience = () => {
  let experience = "FronEnd Developer 2023-2024";
  return (
    <div className="Experience">
      <p className="heading"> Experience</p>
      <p className="experience"> {experience} </p>
    </div>
  );
};

export default Experience;
