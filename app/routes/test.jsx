import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function Index() {
  const [value, Setvalue] = useState(0);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          bgcolor: "primary.main",
        }}
      >
        <Outlet />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_event, newValue) => {
            console.log("new value", newValue);
            Setvalue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/test/home"
            label="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="tea"
            component={Link}
            to="/test/incall"
            icon={<EmojiFoodBeverageIcon />}
          />
          <BottomNavigationAction label="media" icon={<SubscriptionsIcon />} />
          <BottomNavigationAction label="incall" icon={<ListAltIcon />} />
          <BottomNavigationAction label="search" icon={<SearchIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
