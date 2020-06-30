/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import "./myHeaderStyle.css"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function MyHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
    <ListItem className={classes.listItem}>
      <Link to="/me" className={`${classes.navLink} nlink`}> 
       me
      </Link>
    </ListItem>
    <ListItem className={classes.listItem}>
      <CustomDropdown
        noLiPadding
        buttonText="Services"
        buttonProps={{
          className: `${classes.navLink} nlink`,
          color: "transparent"
        }}
        buttonIcon={Apps}
        dropdownList={[
          <Link to="/services/all" className={ `${classes.dropdownLink} nlink`}>
            All
          </Link>,
          <Link to="/services/dateandtime/glam" className={`${classes.dropdownLink} nlink`}>
            Glam
          </Link>,
          <Link to="/services/dateandtime/brides" className={`${classes.dropdownLink} nlink`}>
            Brides
          </Link>,
          <Link to="/services/dateandtime/special_effects" className={`${classes.dropdownLink} nlink`}>
            Special Effects
          </Link>,
          <Link to="/services/dateandtime/photo_shooting" className={`${classes.dropdownLink} nlink`}>
            Photo Shoot / Editorial
          </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" className={`${classes.navLink} nlink`}> 
          Contact me
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/estefimakeup"
            target="_blank"
            className={`${classes.navLink} nlink`}
          >
          <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com//EstefiMUA25/"
            target="_blank"
            className={`${classes.navLink} nlink`}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
