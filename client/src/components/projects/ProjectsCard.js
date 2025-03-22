import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import AlertPopup from "../layouts/AlertPopup";
import { motion } from "framer-motion";

const ProjectsCard = ({ title, description, src, gitLink, deployLink }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform duration-300 hover:shadow-2xl"
    >
      <img
        src={src}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
          <div className="flex space-x-2">
            <button
              onClick={handleGitClick}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <BsGithub />
            </button>
            <button
              onClick={handleGlobeClick}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              <FaGlobe />
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
      {showAlert && (
        <AlertPopup description={alertDescription} onClose={handleAlertClose} />
      )}
    </motion.div>
  );
};

export default ProjectsCard;