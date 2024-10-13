import { React, useState, useEffect } from "react"
import * as Scroll from "react-scroll"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import { Grid, Typography, styled } from "@mui/material"

const StyledHomeGrid = styled(Grid)(({ theme, ismobile }) => ({
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginLeft: "0 !important",
    marginTop: "0 !important",
    paddingBottom: "1rem",
    paddingTop: "1rem",
}));

const StyledHomeGridItem = styled(Grid)(({ theme }) => ({
    display: "flex",
    padding: "0rem",
    alignItems: "center",
    justifyContent: "center",
    // [theme.breakpoints.down("md")]: {
    //     order: "1",
    //     paddingLeft: "1rem",
    //     marginTop: "2rem",
    // },
}));

const StyledHomeText = styled(Grid)(({ theme }) => ({
    animation: "fadeIn",
    animationDuration: "2s",
    paddingLeft: "0 !important",
    // [theme.breakpoints.down("md")]: {
    //   width: "100%",
    //   margin: "0",
    //   order: "2",
    //   textAlign: "center",
    //   padding: "2rem",
    //   paddingRight: "0 !important"
    // },
}));

const StyledHomeTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Lastica', sans-serif",
    fontWeight: "bold !important",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(32px, 4vw, 56px) !important",
    [theme.breakpoints.up("md")]: {
        whiteSpace: "nowrap",
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    },
}));

const StyledHomeSubText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary + " !important",
    fontSize: "clamp(20px, 2vw, 26px) !important",
    [theme.breakpoints.down("md")]: {
        textAlign: "center"
    },
}));

const Home = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice =
            /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
        setIsMobile(isMobileDevice);
    }, []);

    return (
        <Scroll.Element name="Home">
            <StyledGenericRoot ismobile={isMobile}>
                <StyledGenericContainer>
                    <StyledHomeGrid container>
                        <StyledHomeText
                            item
                            xs={12}
                            md={6}
                        >
                            <StyledHomeTitle component="h1">
                                WE TRANSFER <br />YOUR <br />PROBLEMS INTO <br />OPPORTUNITIES
                            </StyledHomeTitle>

                            <StyledHomeSubText component="h1">
                                Let’s innovate together
                            </StyledHomeSubText>

                        </StyledHomeText>

                        <StyledHomeGridItem
                            item
                            xs={12}
                            md={6}>
                            
                        </StyledHomeGridItem>
                    </StyledHomeGrid>
                </StyledGenericContainer>
            </StyledGenericRoot>

        </Scroll.Element>
    )
}

export default Home