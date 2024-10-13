import { React, useState, useEffect, useContext } from "react"
import { ThemeContext } from "../utils/ThemeContext"
import navbarData from "../content/navbar.json"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  styled,
  Slide,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Drawer,
  List,
  Box,
  Switch
} from '@mui/material';


const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  // backgroundColor: theme.palette.background.primary + " !important",
  backgroundImage: theme.palette.background.gradientPrimary,
  transition:
    "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled
    ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
    : "none !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("sm")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}));

const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  maxWidth: "1200px",
  justifyContent: "center",
  width: "90vw !important",
  [theme.breakpoints.down("sm")]: {
    width: "100vw !important",
  },
}));

const StyledAppBarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "& p": {
    color: theme.palette.text.primary + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    fontFamily: "'Arimo', sans-serif",
    fontSize: "1.2rem",
    fontWeight: "600",
    padding: "0.5rem",
    textTransform: 'none',
    "&:hover": {
      color: theme.palette.text.secondary + " !important",
      transform: "translateY(-2px)",
    },
  }

}));

const StyledNavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignSelf: "center",
}));

const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "1s",
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.text.primary,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    zIndex: "2 !important",
  },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}));

const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.text.primary + " !important",
    cursor: "pointer",
    fontSize: "1.75rem",
    padding: "0",
    "&:hover": {
      color: theme.palette.text.secondary + " !important",
    },
  },
}));

const StyledLogo = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  "& svg": {
    fill: theme.palette.logo.primary,
  },
}));


const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const MuiTheme = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("md"));
  const [checked, setChecked] = useState(theme === "dark");

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const trigger = useScrollTrigger({
    target: window,
  });

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(isOpen);
  };

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setTheme(event.target.checked === true ? "dark" : "light")
  };

  const navbar = (
    <>
      {navbarData.map((data, index) => (
        <Box
          key={data.id}
          display="flex"
          className={
            !hasAnimated ? "animate__animated animate__fadeInDown" : ""
          }
        >
          <StyledAppBarLink
            href={`#${data.name}`}
            to={data.name}
            smooth={true}
            duration={1000}
          >
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
          {index < navbarData.length - 1 && (
            <Typography style={{ margin: '0 0', fontSize: "1.2rem", fontWeight: "600", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}> | </Typography>
          )}
        </Box>

      ))}
    </>
  );

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          animation: !hasAnimated ? "fadeIn" : "",
          animationDuration: "2s",
        }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={1}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button onClick={toggleDrawer(false)}>
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          {navbarData.map((data) => (
            <StyledDrawerList key={data.id}>
              <StyledAppBarDrawerLink
                onClick={toggleDrawer(false)}
                to={data.name}
                smooth={true}
                duration={1000}
              >
                <Typography>{data.name}</Typography>
              </StyledAppBarDrawerLink>
            </StyledDrawerList>
          ))}
        </Box>
      </StyledDrawer>
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position='fixed' isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography style={{fontFamily: "'Lastica', sans-serif", fontWeight: "600", fontSize: "0.9rem"}}>INNOZ CONSULTING</Typography>
            {/* <StyledLogo
              href="#Home"
              to="Home"
              smooth={true}
              duration={1000}
            >
              <svg
                viewBox="0 0 370 300"
                style={{
                  width: "44px",
                  animation: !hasAnimated
                    ? collapse
                      ? "fadeIn"
                      : "fadeInDown"
                    : "",
                  animationDuration: collapse ? "2s" : "1s",
                }}
              >
                <path
                  d="M 213.160156 47.34375 L 264.09375 135.625 L 320.390625 233.199219 L 321.730469 235.523438 L 375.019531 327.882812 L 324.132812 327.882812 L 270.847656 235.523438 L 270.84375 235.523438 L 213.207031 135.625 L 155.570312 235.523438 L 55.15625 235.523438 C 39.96875 235.523438 26.175781 229.320312 16.191406 219.328125 C 6.207031 209.339844 0.0117188 195.539062 0.0117188 180.339844 L 0.0117188 103.382812 C 0.0117188 88.183594 6.207031 74.382812 16.191406 64.394531 C 26.175781 54.402344 39.96875 48.199219 55.15625 48.199219 L 164.210938 48.199219 L 138.65625 92.488281 L 55.15625 92.488281 C 52.183594 92.488281 49.46875 93.71875 47.484375 95.707031 C 45.503906 97.691406 44.269531 100.410156 44.269531 103.382812 L 44.269531 180.339844 C 44.269531 183.3125 45.503906 186.03125 47.484375 188.015625 C 49.46875 190 52.183594 191.234375 55.15625 191.234375 L 130.140625 191.234375 Z M 213.160156 47.34375 "
                />
              </svg>
            </StyledLogo> */}
            {collapse ? drawer : <StyledNavbarContainer>{navbar}</StyledNavbarContainer>}
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>
  )
}

export default Navbar

