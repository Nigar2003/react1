// Contacts.js
import "./Contacts.css";
import React from "react";
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Component.css';
const Contacts = () => {
  let email = "isayevanigar01@gmail.com";
  let telNumber = "051-984-53-73";

  return (
    <div className="Contact">
      <p className="contact">Contact</p>
      <p className="email">Email: {email}</p>
      <p className="number">Phone number: {telNumber}</p>
    </div>
  );
};

export default Contacts;
