import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import AlertPopup from "../layouts/AlertPopup";

const ProjectsCard = ({ title, description, src, gitLink }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertDescription, setAlertDescription] = useState('');

  const handleGitClick = () => {
    if (gitLink) {
      window.open(gitLink, "_blank");
    } else {
      setAlertDescription('Unfortunately, I do not have access to the source code of the project. It was a college project during my undergraduate studies. Please feel free to contact me if you would like more information about the project.');
      setShowAlert(true);
    }
  };

  const handleGlobeClick = () => {
    setAlertDescription('My apologies! I haven\'t deployed this project on the internet yet.');
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-2xl flex flex-col bg-gradient-to-r from-slate-50 to-slate-200 group hover:bg-gradient-to-b hover:from-slate-200 hover:to-slate-50 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <button
                  onClick={handleGitClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </button>
              </span>
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <a onClick={handleGlobeClick} target="_blank" rel="noopener noreferrer">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-600 duration-300">
            {description}
          </p>
        </div>
      </div>

      {showAlert && (
        <AlertPopup description={alertDescription} onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default ProjectsCard;
