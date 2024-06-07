import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[1456px] w-[100%] mx-auto my-[32px]">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#7B1FA2",
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab
                sx={{ fontWeight: "600", color: "black" }}
                label="Latest Match"
                value="1"
              />
              <Tab
                sx={{ fontWeight: "600", color: "black" }}
                label="Coming Match"
                value="2"
              />
              <Tab
                sx={{ fontWeight: "600", color: "black" }}
                label="Pre-season"
                value="3"
              />
              <Tab
                sx={{ fontWeight: "600", color: "black" }}
                label="Live games"
                value="4"
              />
              <Tab
                sx={{ fontWeight: "600", color: "black" }}
                label="Fun football"
                value="5"
              />
            </TabList>
          </Box>
          <TabPanel value="1">Latest Matches</TabPanel>
          <TabPanel value="2">Coming Match</TabPanel>
          <TabPanel value="3">Pre-Season</TabPanel>
          <TabPanel value="4">Live Games</TabPanel>
          <TabPanel value="5">Fun Football</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default LabTabs;
