import Link from "next/link";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials = [
  {
    Icon: <FaInstagramSquare />,
    path: "https://www.instagram.com/dzikryaal_",
  },
  {
    Icon: <FaGithubSquare />,
    path: "https://github.com/dzikryalfian14",
  },
  {
    Icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/dzikry-alfian/",
  },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} className={iconStyles}>
            {item.Icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;