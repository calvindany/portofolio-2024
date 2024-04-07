import { Container, Box } from "@mui/material";
import { NavButton } from "../Features";

function NavBar() {
  const Menu = ["Home", "Tech Stack", "Projects", "Contact"];
  return (
    <>
      <Container
        maxWidth="xl"
        className="fixed hidden md:block"
        sx={{
          background: "linear-gradient(to right, #001f3f, #003366)",
        }}
      >
        <Box className=" w-100 py-4 flex justify-end gap-12">
          {Menu.map((menu, index) => (
            <NavButton key={index} idx={index}>
              {menu}
            </NavButton>
          ))}
        </Box>
      </Container>
    </>
  );
}
export default NavBar;
