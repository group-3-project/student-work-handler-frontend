import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const createdClasses = [
    {
      id: "67890",
      className: "MyClass1",
      ownership: "Teacher",
    },
    {
      id: "67892",
      className: "MyClass2",
      ownership: "Teacher",
    },
    {
      id: "67893",
      className: "MyClass3",
      ownership: "Teacher",
    },
];
export const joinedClasses = [
    {
      id: "67891",
      className: "Robotics1",
      ownership: "Student",
    },
    {
      id: "67894",
      className: "Robotics2",
      ownership: "Student",
    },
    {
      id: "67895",
      className: "Robotics3",
      ownership: "Student",
    },
];

const MainPage = ({ classData }) => {
  return (
    <li className="joined__list">
      <div className="joined__wrapper">
        <div className="joined__container">
          <div className="joined__imgWrapper" />
          <div className="joined__image" />
          <div className="joined__content">
            <Link className="joined__title" to={`/${classData.id}`}>
              <h2>{classData.className}</h2>
            </Link>
            <p className="joined__owner">{classData.ownership}</p>
          </div>
        </div>
        <div
          className="joined__avatar"
          src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg"
        ></div>
      </div>
      <div className="joined__bottom">
      <i class="bi bi-calendar-event"></i>
      <i class="bi bi-card-heading"></i>
      </div>
    </li>
  );
};

export default MainPage;