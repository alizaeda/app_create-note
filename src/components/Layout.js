import React from "react";
import Drawer from "@material-ui/core/Drawer";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
import { red } from "@material-ui/core/colors";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    page: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(3),
      marginTop: theme.spacing(2),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      backgroundColor: "#f6f6f6",
    },
    title: {
      padding: theme.spacing(2),
    },
    navbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      padding: theme.spacing(1),
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: red[400],
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();

  const menuList = [
    {
      text: "My Notes",
      icon: <SubjectOutlined />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        className={classes.navbar}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.date}>
            Today is {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography variant="h6">Ali Eslam</Typography>
          <Avatar className={classes.avatar}>A</Avatar>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography
            variant="h4"
            align="center"
            className={classes.title}
            gutterBottom
          >
            Notes
          </Typography>
        </div>

        <List>
          {menuList.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Pages */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
