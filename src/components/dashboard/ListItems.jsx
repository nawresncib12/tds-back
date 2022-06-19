import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useNavigate } from "react-router-dom";
export const MainListItems = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={()=>{props.setActive(1)}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
    </React.Fragment>
  );
};
export const SecondaryListItems = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Actions
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Add a product" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
         props.setActive(2);
        }}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Add crop data" />
      </ListItemButton>
    </React.Fragment>
  );
};
