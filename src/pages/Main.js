import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Home from "../sections/Home"
import Navbar from "../components/Navbar"

const StyledMainPage = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.background.primary,
  backgroundImage: theme.palette.background.gradientPrimary,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {
  return (
    <>
      <Navbar />
      <>
        <StyledMainPage>
          <StyledMainContainer>
            <Home />
          </StyledMainContainer>
        </StyledMainPage>
      </>
    </>

  )
}

export default Main