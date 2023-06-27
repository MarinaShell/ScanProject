import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TopLogo from "../../media/TopLogo.svg";
import BottomLogo from "../../media/BottomLogo.svg";
import Close from "../../media/Close.svg";
import { Colors } from "../../theme/Colors/Colors";
import { Avatar } from "@mui/material";
import menuIcon from "../../media/menuIcon.svg";
import { CustomButton } from "../CustomComponents/CustomButton/CustomButton";
import ComponentText from "../CustomComponents/ComponentText/ComponentText";
import { InfoBlock } from "./InfoBlock/InfoBlock";
import { useTheme, useMediaQuery } from "@mui/material";
import { Navigate } from "react-router-dom";


const navItems = ["Главная", "Тарифы", "FAQ"];
const drawerWidth = "100%";

const NavBar = (props) => {
  const theme = useTheme();
  const matches_sm = useMediaQuery(theme.breakpoints.down("sm"));
  

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <img src={BottomLogo} alt="Logo" style={{width: "121px"}} />
        <img
          src={Close}
          alt="Close"
          onClick={handleDrawerToggle}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={<ComponentText>{item}</ComponentText>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div style={{ textAlign: "center", marginTop: "70px" }}>
        <ComponentText
          style={{
            marginBottom: "20px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          Зарегистрироваться
        </ComponentText>

        <CustomButton
          variant="blue"
          style={{
            backgroundColor: "rgba(124, 227, 225, 1)",
            color: Colors.colorBlack,
          }}
          onClick={() => {
            <Navigate to={"/login"}/>
          }}
        >
          Войти
        </CustomButton>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
    
  return (
    <>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          padding: matches_sm ? "0" : "0 60px",
          display: "block",
          position: "relative",
          paddingTop: "5px",
        }}
      >
        <CssBaseline />
        <Toolbar sx={{ padding: { lg: "0 !important" } }}>
          <Box
            sx={{
              flexGrow: 2,
              textAlign: "left",
              width: {md: "121px"}
              
            }}
          >
            <img src={TopLogo} alt="TopLogo"  />
          </Box>

          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", lg: "block" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  color: "#000",
                  textTransform: "none",
                  margin: "0 25px",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <InfoBlock />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "flex" },
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <div style={{ textAlign: "right" }}>
              <ComponentText
                style={{
                  color: Colors.colorBlack,
                  marginBottom: 0,
                }}
              >
                Алексей А.
              </ComponentText>

              <button
                style={{
                  fontFamily: "Inter",
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  marginTop: 0,
                }}
              >
                Выйти
              </button>
            </div>
            <Avatar />
          </Box>
          <Box sx={{
              flexGrow: 2,
              display: { lg: "none" },
              textAlign: "right"
            }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            
          >
            <img src={menuIcon} alt="menuIcon" />
          </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          PaperProps={{
            sx: {
              color: Colors.colorWhite,
              backgroundColor: Colors.colorAqua,
            },
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export { NavBar };
