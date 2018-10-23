import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            sections : []
        };
    }

    componentDidMount(){
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/categories')
        .then(response => response.json())
        .then(sections => this.setState({ sections }) );
    }

    render(){
        const classes = this.props.classes;
        const sections = this.state.sections;
        return (
            <div>
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                            <Link to="/" >Blog</Link>
                        </Typography>
                            <Link className="btn btn-default" to="/about">
                            <Button >About</Button>
                            </Link>
                            <Link to="/contact">
                                <Button >Contact</Button>
                            </Link>
                            <Link to="/topics">
                                <Button >Topics</Button>
                            </Link>
                            <Button color="primary" variant="outlined">
                            Login
                            </Button>
                    </Toolbar>
                </AppBar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                {sections.map(section => (
                    <Typography color="inherit" noWrap key={section.id}>
                        <Link to="/categories" >{section.name}</Link>
                    </Typography>
                ))}
                </Toolbar>
            </div>
        );
    }
}