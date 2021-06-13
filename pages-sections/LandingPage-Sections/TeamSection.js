import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    // classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Let's recap your past year</h2>
      <div>
        <GridContainer>
          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/2020BirthDay.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Your 2020 birthday
                <br />
                <p className={classes.smallTitle}>I was late</p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  August 1,2020 This was the day we went out to celebrate your
                  2020 birthday, as you can see from the date I was late by a
                  lot but there was nothing on my mind except you and your
                  birthday that I missed, sure 2020 was hard and challenging,
                  sure we had a lot on our minds as we wanted to get engaged
                  before 202 ends (Spoiler alert: <b>We Fuckin Did it</b>) but i
                  couldn't miss your birthday nor get you a gift, and I did when
                  I finally after a long long long searching and scouting
                  everywhere I got you JOJO from your favorite show "حديقة
                  المرح"
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/Opera3'alia.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ghalya Concert in Opera
                <br />
                <p className={classes.smallTitle}>Ghalya 2.0</p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  April 27,2021 The second concert we attend for Ghalya, one of
                  if not the most favorite singer of yours that grew on me and
                  now I love her too only because of you, this day was not the
                  easiest and smoothest by any means but we as usual made it
                  beautiful and as I told you any memory is a memory, it passed
                  and now we remember it and laugh about it, because every
                  memory is a beautiful one as long as we were together
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/MaadiMirror.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                The Mirror in Maadi
                <br />
                <p className={classes.smallTitle}>First Time</p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  September 30,2020 This was the day god gifted us with the way
                  and solution for how we will get engaged, and in just two days
                  after this day we got engaged finally for you to be mine
                  forever, this mirror is the mirror we had our first ever photo
                  together and in that day we found ourselves in front of it
                  again recreating one of our best and happiest memories ever,
                  as if Allah is giving us a message that we will indeed will be
                  together and for each other forever.
                </p>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/theDayAfter.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                The Day after our engagement
                <br />
                <p className={classes.smallTitle}>The dream became reality </p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  October 3,2020 The day we went out to celebrate our
                  engagement, this was day one in a lifetime adventure the
                  biggest challenge either of us has ever faced in our lifetime,
                  an adventure filled with happiness, success, failures yes but
                  we will always have each other backing each other, filled with
                  love and joy, we always find a way to make each other happy
                  because indeed we know each other's buttons
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/Family.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Your Family
                <br />
                <p className={classes.smallTitle}>Warmth</p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  October 9,2020 this was the first time i spent a long time
                  with you and your family, your family that never ever from the
                  first time ever i stepped a foot in this house that treated me
                  as a stranger i truly always felt at home I always felt part
                  of your family, from Hana my little sister which i already
                  feel I have responsibility towards her and want to protect
                  her, and your mother that I love like my own mom and want to
                  spend all of my time with her and your dad the first person to
                  treat me like a true man, he is the one I wish I will grow to
                  be even half the man he is, he took care of me as if i was his
                  own child when i had Covid in this day actually and trust me
                  and gave me responsibility I will always live my life to
                  fullfil.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={16} sm={16}>
            <Card plain>
              <GridItem xs={10} sm={10} md={5} className={classes.itemGrid}>
                <img
                  src="/img/Print/NewYear'sEve.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                New Year Eve
                <br />
                <p className={classes.smallTitle}>Micky</p>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  December 31, 2020 This was the first new year eve we spend
                  with each other which we managed to do it as we are engaged ,
                  in that very day we tried a lot of things with each other from
                  the Sushi to the galleries we spent the whole night running
                  around to catch them before they close, the art galleries that
                  i never imagined myself ever going to or actually loving, i
                  find myself sometimes searching and looking for an open
                  gallery for us to go to, it is a one small thing from the
                  million things you made me love and you changed about me, you
                  changed me so much that I no longer recognize myself I really
                  grow into a different self, in the same body but a totally
                  different human all thanks to you and your love and support
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
