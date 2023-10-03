import React, { useState } from "react";
import propertiesData from "../../data/data.json";
import Card from "../card/Card";
import { Link } from "react-router-dom";

const Home = () => {
  // console.log(propertiesData)
  const [activeTab, setActiveTab] = useState("New York");
  const [visibleProperties, setVisibleProperties] = useState(6);

  const handleTabChange = (tab) => {
    console.log("clicked", tab);
    setActiveTab(tab);
    setVisibleProperties(6);
  };
  const loadMoreProperties = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };

  return (
    <div className="p-5 bg-slate-200">
      <div className="w-2/5 p-2 m-auto mb-5 text-center border">
        <h3 className="text-3xl font-bold text-slate-800">
          Featured Listed Property
        </h3>
        <p className="font-medium text-slate-600">
          Real estate be bought,sold, leased, or rented, and can be a valuable
          investment opportunity. The value of real easte can be...
        </p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <button
          className={`${
            activeTab === "New York"
              ? "bg-blue-500 text-white "
              : "bg-gray-300 text-slate-700 "
          } px-4 py-2 rounded-full 
          font-semibold`}
          onClick={() => handleTabChange("New York")}
        >
          New York
        </button>
        <button
          className={`${
            activeTab === "Mumbai"
              ? "bg-blue-500 text-white "
              : "bg-gray-300 text-slate-700 "
          } px-4 py-2 rounded-full font-semibold`}
          onClick={() => handleTabChange("Mumbai")}
        >
          Mumbai
        </button>
        <button
          className={`${
            activeTab === "Paris"
              ? "bg-blue-500 text-white "
              : "bg-gray-300 text-slate-700 "
          } px-4 py-2 rounded-full font-semibold`}
          onClick={() => handleTabChange("Paris")}
        >
          Paris
        </button>
        <button
          className={`${
            activeTab === "London"
              ? "bg-blue-500 text-white "
              : "bg-gray-300 text-slate-700 "
          } px-4 py-2 rounded-full font-semibold`}
          onClick={() => handleTabChange("London")}
        >
          London
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {propertiesData
          .filter((property) => property.city === activeTab)
          .slice(0, visibleProperties)
          .map((property) => (
            <div key={property.id} >
            <Link to={`/property/${property.id}`}>
              <Card data={property} />
              </Link>
            </div>
          ))}
      </div>
      {visibleProperties < propertiesData.length && (
        <button
          className="flex items-center px-4 py-2 m-auto mt-4 font-semibold text-center text-white bg-blue-600 rounded-full"
          onClick={loadMoreProperties}
        >
          <span className="material-symbols-outlined">unfold_more_double</span>
          Show More
        </button>
      )}
    </div>
  );
};

export default Home;
