import { Container, Box } from "@mui/material";
import { NavButton } from "../Features";

import { Navigation } from "@/datas";

const NavBar = () => {
  return (
    <>
        <Container
          maxWidth="xl"
          className="sticky top-0 hidden md:block w-fit"
          sx={{
            background: "#003366",
            borderLeft: "2px solid #FFA500",
            borderRight: "2px solid #FFA500",
            borderBottom: "2px solid #FFA500",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}
        >
          <Box className="py-3 flex justify-end gap-12">
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
