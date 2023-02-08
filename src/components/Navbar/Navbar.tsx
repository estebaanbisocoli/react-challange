import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const NavbarAction = ({ text, icon }: { text: string, icon: React.ReactNode }) => {
  return (
    <div className="navbar-action">
      {icon}
      <h3 className="text-xs lh16 regular">{text}</h3>
    </div>
  );
};

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="navbar-container">
      <AppBar position="static" elevation={0}>
        <Toolbar variant="dense">
          <div>
            <Logo fill="#FFF" height={48} />
          </div>
          <div className="search-container">
            <div className="search-icon" >
              <SearchOutlinedIcon />
            </div>
            <input className="search-bar  text-xs lh16 regular" placeholder="Search products"></input>
          </div>
          <div className="navbar-actions">
            <NavbarAction icon={<PersonOutlineOutlinedIcon fontSize="large" />} text={t("NAVBAR_SIGN_IN")} />
            <NavbarAction icon={<ShoppingCartOutlinedIcon fontSize="large" />} text={t("NAVBAR_CART")} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
