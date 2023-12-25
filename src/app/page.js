"use client";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField, Typography } from "@mui/material";
import { theme } from "@/utils/theme";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import LeftBar from "@/components/leftBar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <main
      className="flex min-h-screen  "
      style={{ backgroundColor: theme.secondary }}
    >
      <Box sx={{ flexGrow: 1 }} className="flex min-h-screen ">
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={4}
            sx={{
              paddingRight: 10,
              // borderColor: "red",
              // borderWidth: 1,
            }}
          >
          <LeftBar/>
          </Grid>
          <Grid item xs={6} md={8}>
            <Box className="flex min-h-screen pt-10">
              <Typography>xs=6 md=8</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
