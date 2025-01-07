import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CampaignDetails,
  CreateCampaign,
  Home,
  Logout,
  Profile,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#efeffc] dark:bg-gray-800 min-h-screen flex flex-flex-row">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 justify-between">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/disconnect" element={<Logout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
