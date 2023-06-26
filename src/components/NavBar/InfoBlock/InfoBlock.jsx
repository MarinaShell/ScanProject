import * as React from "react";
import { Box } from "@mui/material";
import ComponentText from "../../CustomComponents/ComponentText/ComponentText";
import { useMediaQuery, useTheme } from "@mui/material";

const InfoBlock = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#d9d9d9",
        padding: matches ? "5px 2px": "5px 14px",
        borderRadius: "5px",
        color: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box
        // style={{
        //   display: "flex",
        //   flexDirection: wrappingMenuData,
        //   justifyContent: "space-evenly"
        // }}
      >
        
          <ComponentText
            style={{
              textAlign: matches ? "left" : "right",
              fontSize: "10px",
              marginRight: matches ? "0" : "10px",
              display: matches ? "block" : "inline-block"
            }}
          >
            Использовано компаний
          </ComponentText>
        

        
          <ComponentText
            style={{
              margin: "0",
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "left",
              display: matches ? "block" : "inline-block"
            }}
          >
            34
          </ComponentText>
        
      </Box>

      <Box
        // style={{
        //   display: "flex",
        //   flexDirection: wrappingMenuData,
        //   justifyContent: "space-evenly"
        // }}
      >
        
          <ComponentText
            style={{
                fontSize: "10px",
                marginRight: matches ? "0" : "10px",
                textAlign: matches ? "left" : "right",
                display: matches ? "block" : "inline-block"
            }}
          >
            лимит по компаниям
          </ComponentText>
        
        
          <ComponentText
            style={{
              margin: "0",
              fontSize: "14px",
              fontWeight: 700,
              color: "#8AC540",
              textAlign: "left",
              display: matches ? "block" : "inline-block"
            }}
          >
            100
          </ComponentText>
        
      </Box>
    </Box>
  );
};

export { InfoBlock };
