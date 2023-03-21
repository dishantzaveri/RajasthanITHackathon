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
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../Images/logosb.png";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";

const drawerWidth = 240;
const navItems = ["Activities", "Credit Report", "Insurance", "Loan"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Loan"} sx={{ fontWeight: "10px" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#D8E8EB", color: "#2F3A56" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <div
            style={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "left",
              padding: "10px",
            }}
          >
            <Link to="https://samriddh-bharat.netlify.app/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="https://samriddh-bharat.netlify.app/loans">
              <Button
                key={"Loan"}
                sx={{ color: "#2F3A56", float: "right !important" }}
              >
                <b>{"Loan"}</b>
              </Button>
            </Link>
          </Box>
          <Link to="https://samriddh-bharat.netlify.app/insurance">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                key={"Insurance"}
                sx={{ color: "#2F3A56", float: "right !important" }}
              >
                <b>{"Insurance"}</b>
              </Button>
            </Box>
          </Link>
          <Link to="https://samriddh-bharat.netlify.app/credit">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                key={"Credit Report"}
                sx={{ color: "#2F3A56", float: "right !important" }}
              >
                <b>{"Credit Report"}</b>
              </Button>
            </Box>
          </Link>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={handleClick1}
              key={"Activities"}
              sx={{ color: "#2F3A56", float: "right !important" }}
            >
              <b>{"Activities"}</b>
            </Button>
          </Box>
          <Menu
            id="fade-menu"
            fullwidth
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl1}
            open={open1}
            onClose={handleClose1}
            TransitionComponent={Fade}
            sx={{ margin: "10px", padding: "10px" }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="http://127.0.0.1:3001/events"
              target="_blank"
            >
              <MenuItem
                sx={{
                  margin: "10px",
                  padding: "10px",
                  width: "140px",
                }}
              >
                Events
              </MenuItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="http://127.0.0.1:3001/campaigns"
              target="_blank"
            >
              <MenuItem
                sx={{
                  margin: "10px",
                  padding: "10px",
                  width: "140px",
                }}
              >
                Campaigns
              </MenuItem>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="http://127.0.0.1:3001/market"
              target="_blank"
            >
              <MenuItem
                sx={{ margin: "10px", padding: "10px", width: "140px" }}
              >
                Marketplace
              </MenuItem>
            </Link>
          </Menu>

          {/* </div> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
