import React from "react";
import Navbar from "./Navbar";
import SurveyComponent from "./SurveyComponent";
import AddSurveyComponent from "./AddSurveyComponent";

const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <AddSurveyComponent />
      <SurveyComponent />
    </div>
  );
};

export default AdminPage;
