import { React, useState, useEffect } from "react"
import * as Scroll from "react-scroll"
import { StyledGenericContainer, StyledGenericRoot } from "../components/Generic"
import { Typography } from "@mui/material";

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
                    <Typography>Home</Typography>
                </StyledGenericContainer>
            </StyledGenericRoot>

        </Scroll.Element>
    )
}

export default Home