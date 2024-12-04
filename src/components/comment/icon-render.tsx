import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaShopify,
  FaWordpress,
  FaShieldAlt,
  FaRocket,
  FaBug,
  FaExclamationTriangle,
  FaEnvelope,
  FaFacebook,
  FaLink,
  FaServer,
  FaCode,
  FaCube,
  FaImage,
  FaPlay,
} from 'react-icons/fa';

// Map of icon names to actual React components from react-icons
const iconMapping: { [key: string]: React.ElementType } = {
  FaReact,
  FaNodeJs,
  FaJs,
  FaShopify,
  FaWordpress,
  FaShieldAlt,
  FaRocket,
  FaBug,
  FaExclamationTriangle,
  FaEnvelope,
  FaFacebook,
  FaLink,
  FaServer,
  FaCode,
  FaCube,
  FaImage,
  FaPlay,
};

// Component to render the correct icon based on the name
interface IconProps {
  iconName: string;
}

const IconRenderer: React.FC<IconProps> = ({ iconName }) => {
  const IconComponent = iconMapping[iconName];

  // Render the icon if it exists, otherwise return null or a default icon
  return IconComponent ? <IconComponent /> : <FaExclamationTriangle />;
};

export default IconRenderer;
