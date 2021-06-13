import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";

import styles from "../styles/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="warning"
        routes={dashboardRoutes}
        brand="Farah's Birthday"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to Farah</h1>
              <h3 styles={classes.subParagraph}>
                Every year this website should be updated with the summary of
                your past year events, This year we did a lot together and I
                mean <b>A LOT</b> so in this website I will focus on the
                highlights of that year events and the things we tried, the
                laughs we had, the adventures we went on and all the love in our
                eyes everyday we meet.
              </h3>
              <br />
              <Button
                color="warning"
                size="lg"
                href="https://photos.app.goo.gl/WQCX59yze8dNtCB99"
                target="_blank"
                rel="noopener noreferrer"
                round
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      <div></div>
    </div>
  );
}
