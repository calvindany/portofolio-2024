import Link from "next/link";

import { ChakraPetch as CP } from "../Fonts";

const NavButton = ({ children, highlighted = false, idx, url }) => {
  return (
    <Link
      className={`${CP.ChakraPetchNormal.className} normal-case`}
      style={{ fontSize: "20px", color: highlighted ? "#FFA500" : "#F8F7F9" }}
      aria-label={`navigation_button_${idx}`}
      id={`navigation_button_${idx}`}
      href={url}
    >
      {children}
    </Link>
  );
};

export default NavButton;
