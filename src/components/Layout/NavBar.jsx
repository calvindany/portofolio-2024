import { Container, Box } from "@mui/material";
import { NavButton } from "../Features";

import { Navigation } from "@/datas";

const NavBar = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        className="sticky top-0 hidden md:block"
        sx={{
          background: "linear-gradient(to right, #001f3f, #003366)",
        }}
      >
        <Box className="w-100 py-8 flex justify-end gap-12">
          {Navigation.map((menu, index) => (
            <NavButton key={index} idx={index} url={menu.url}>
              {menu.name}
            </NavButton>
          ))}
        </Box>
      </Container>
    </>
  );
}
export default NavBar;
