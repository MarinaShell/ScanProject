import * as React from "react";
import {
    Container,
    AppBar,
    CssBaseline,
    Toolbar,
    Tab,
    Tabs,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Box,
    Divider,
    Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { useDispatch, useSelector } from "react-redux";
// import { setValue } from "../../store/slicer";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const NavBar = (props) => {
    // const location = useLocation();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const status = useSelector((state) => state);
    const Menu = [
        "Главная",
        "Тарифы",
        "FAQ",
    ];

    // React.useEffect(() => {
    //     const currentLoc = Menu.indexOf(location.pathname.slice(1), 0);

    //     if (currentLoc === -1) {
    //         dispatch(setValue(0));
    //     } else {
    //         dispatch(setValue(currentLoc));
    //     }
    // });

    const drawerWidth = 240;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {Menu.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={(e) => {
                                navigate(`/${e.currentTarget.textContent}`);
                            }}
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "#161616",
                }}
            >
                <Container>
                    <CssBaseline />
                    <Toolbar sx={{ justifyContent: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                textAlign: "center",
                                display: { md: "none" },
                            }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>

                        <Tabs
                            // value={status.state.itemValue}
                            value={0}
                            TabIndicatorProps={{
                                title: "indicator",
                                sx: { backgroundColor: "#161616" },
                            }}
                        >
                            {Menu.map((item, idx) => {
                                return (
                                    <Tab
                                        tabIndex={idx}
                                        key={idx}
                                        sx={{
                                            color: "#161616",
                                            display: { xs: "none", md: "flex" },
                                            fontSize: {
                                                lg: "0.875rem",
                                                md: "12px",
                                            },
                                        }}
                                        label={
                                            <span style={{ color: "#161616" }}>
                                                {item}
                                            </span>
                                        }
                                        // onClick={(e) => {
                                        //     dispatch(
                                        //         setValue(
                                        //             e.currentTarget.tabIndex
                                        //         )
                                        //     );
                                        //     navigate(
                                        //         `/${e.currentTarget.textContent}`
                                        //     );
                                        // }}
                                    />
                                );
                            })}
                        </Tabs>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box>
                <Drawer
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
