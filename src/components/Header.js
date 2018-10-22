import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { NavLink } from "react-router-dom";

import About from './About';
import Contact from './About';
import Topics from './About';

export default class Header extends React.Component {
    constructor(){
        super();
    }

    render(){
        const classes = this.props.classes;
        const sections = this.props.sections;
        return (
            <div>
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            <NavLink to="/" >Blog</NavLink>
                        </Typography>
                            <NavLink className="btn btn-default" to="/about">
                            <Button >About</Button>
                            </NavLink>
                            <NavLink to="/contact">
                                <Button >Contact</Button>
                            </NavLink>
                            <NavLink to="/topics">
                                <Button >Topics</Button>
                            </NavLink>
                            <Button color="primary" variant="outlined">
                            Login
                            </Button>
                    </Toolbar>
                </AppBar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                    {section}
                    </Typography>
                ))}
                </Toolbar>
            </div>
        );
    }
}