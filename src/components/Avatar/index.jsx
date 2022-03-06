import React from "react";
import MalePortrait from "./img/face1.png";
import FemalePortrait from "./img/face2.png";
import "./styles.css";
import { GENDER } from "../constants";

const Avatar = ({ name, gender }) => {
  return (
    <div className="avatar p-2">
      <img
        alt="portrait"
        src={gender === GENDER.MALE ? MalePortrait : FemalePortrait}
      />
      <div>{name}</div>
    </div>
  );
};

export default Avatar;
