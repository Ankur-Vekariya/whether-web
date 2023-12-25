import React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Box, Paper, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "@/utils/theme";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LeftBar = () => {
  return (
    <Item elevation={3} className=" min-h-screen p-10">
      <TextField
        id="outlined-basic"
        label="Search...."
        variant="outlined"
        sx={{ minWidth: "100%" }}
      />
      <Box sx={{ padding: 4 }}>
        <Image
          src={require("../../public/sun.png")}
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </Box>
      <Typography fontSize={50} color={theme.dark}>xs=6 md=4</Typography>
    </Item>
  );
};

export default LeftBar;
