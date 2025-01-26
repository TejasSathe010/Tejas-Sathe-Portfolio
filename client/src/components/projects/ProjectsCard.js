import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import AlertPopup from "../layouts/AlertPopup";

const ProjectsCard = ({ title, description, src, gitLink, deployLink }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState("");

  const handleGitClick = () => {
    if (gitLink) {
      window.open(gitLink, "_blank");
    } else {
      setAlertDescription(
        "Unfortunately, I do not have access to the source code of this project. Contact me for more details."
      );
      setShowAlert(true);
    }
  };

  const handleGlobeClick = () => {
    if (deployLink) {
      window.open(deployLink, "_blank");
    } else {
      setAlertDescription("This project is not deployed yet. Stay tuned!");
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleGitClick}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <BsGithub />
            </button>
            <button
              onClick={handleGlobeClick}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <FaGlobe />
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      {showAlert && (
        <AlertPopup description={alertDescription} onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default ProjectsCard;
