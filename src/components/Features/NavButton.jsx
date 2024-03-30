import { Button } from "@mui/material";
import { ChakraPetch as CP } from "../Fonts";

const NavButton = ({ children, highlighted = false, idx }) => {
  return (
    <Button
      className={`${CP.ChakraPetchNormal.className} normal-case`}
      sx={{ fontSize: "20px", color: highlighted ? "#FFA500" : "#F8F7F9" }}
      aria-label={`navigation_button_${idx}`}
      id={`navigation_button_${idx}`}
    >
      {children}
    </Button>
  );
};

export default NavButton;
