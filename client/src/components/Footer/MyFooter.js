/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import './style.css'


const useStyles = makeStyles(styles);

export default function MyFooter(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/"
                className={classes.block}
                target="_blank"
              >
                EstefiMakeup
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/me"
                className={classes.block}
                target="_blank"
              >
                About me
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/services/all"
                className={classes.block}
                target="_blank"
              >
                Services
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="/contact"
                className={classes.block}
                target="_blank"
              >
                Contact
              </a>
            </ListItem>
            <ListItem className="attribution" >
              <h6> Icon made by Freepik from www.flaticon.com </h6>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  );
}

MyFooter.propTypes = {
  whiteFont: PropTypes.bool
};