import { Box } from "@mui/material";
import { NavButton } from "../Features";

function NavBar() {
  const Menu = ["Home", "Tech Stack", "Projects", "Contact"];
  return (
    <>
      <Box className="bg-transparent w-100 py-4 flex justify-end gap-12">
        {Menu.map((menu, index) => (
          <NavButton key={index} idx={index}>
            {menu}
          </NavButton>
        ))}
      </Box>
    </>
  );
}
export default NavBar;
