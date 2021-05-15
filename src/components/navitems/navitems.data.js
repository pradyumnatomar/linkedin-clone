import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    title: "My Network",
    icon: <FontAwesomeIcon icon={faUserFriends} />,
  },
  {
    title: "Jobs",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    title: "Messaging",
    icon: <FontAwesomeIcon icon={faCommentDots} />,
  },
  {
    title: "Notifications",
    icon: <FontAwesomeIcon icon={faBell} />,
  },
  {
    title: "Me",
    icon: <FontAwesomeIcon icon={faUserCircle} />,
  },
  {
    title: "Work",
    icon: <FontAwesomeIcon icon={faTh} />,
  },
];
