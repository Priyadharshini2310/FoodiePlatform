import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Select Your Favorites with Ease",
      text: "Browse our curated menu and choose the meals that best satisfy your cravings.",
    },
    {
      image: ChooseMeals,
      title: "Your Meal, Your Schedule",
      text: "Decide how often you want your favorite dishes delivered and enjoy a perfectly timed dining experience",
    },
    {
      image: DeliveryMeals,
      title: "Swift Deliveries, Savory Meals",
      text: "Experience fast deliveries that bring your meals right to your door, hot and ready to enjoy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading-center">Your Gateway to Gourmet Made Easy</h1>
        <p className="primary-text">
        Uncover how our process transforms your dining preferences into exceptional culinary experiences.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>);
};
export default Work
