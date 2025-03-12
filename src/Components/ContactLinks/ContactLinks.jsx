import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={50} className="text-blue-600 hover:text-blue-800" color="white"/>
      </a>
      <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} className="text-gray-800 hover:text-gray-600" color="white"/>
      </a>
    </div>
  );
};

export default SocialLinks;
