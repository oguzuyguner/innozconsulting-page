import React, { useState, useEffect } from "react"
import { Container, styled } from "@mui/material"
import Home from "../sections/Home"

const StyledMainPage = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    overflow: "hidden",
  }));
  const StyledMainContainer = styled(Container)({
    maxWidth: "1600px",
  });

const Main = () => {
  return (
    <>
     <StyledMainPage>
        <StyledMainContainer>
            <Home />
        </StyledMainContainer>
     </StyledMainPage>
    </>
  )
}

export default Main