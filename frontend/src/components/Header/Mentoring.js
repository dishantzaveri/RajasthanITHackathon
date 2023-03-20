import * as React from "react";
import { Link } from "react-router-dom";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";

export default function MenuAppBar() {
  const languages = [
    { value: "", text: "Options" },
    { value: "en", text: "English" },
    { value: "hi", text: "Hindi" },
    { value: "gu", text: "Gujarati" },
    { value: "mr", text: "Marathi" },
    { value: "ta", text: "Tamil" },
  ];
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          color: "black",
          fontWeight: 500,
          fontSize: "1.28rem",
          lineHeight: "1.75rem",
        }}
      >
        {t("Mentor")}
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ margin: "10px", padding: "10px" }}
      >
        <Link to="/matchedmentors">
          <MenuItem sx={{ margin: "10px", padding: "10px", width: "140px" }}>
            Match Mentors
          </MenuItem>
        </Link>
        <Link to="/funding">
          <MenuItem sx={{ margin: "10px", padding: "10px", width: "140px" }}>
            Get Funding
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
