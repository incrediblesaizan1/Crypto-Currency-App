import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "./Grid";
import List from "./List"

export default function Tabs({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    textTransform: "capitalize",
    background: " linear-gradient(210deg, #000000 0%, #150c1d 94%)",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />

          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="flex justify-center items-center flex-wrap gap-4 my-6 mx-8">
            {coins.map((coin, i) => (
              <Grid coin={coin} key={i} />
            ))}
          </div>
        </TabPanel>

        <TabPanel value="list">
          <table>
          {coins.map((coin, i) => (
            <List key={i} coin={coin} />
          ))}
          </table>
        </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}
