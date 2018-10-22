import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Footer extends React.Component{
    render(){
        const classes = this.props.classes;
        return (
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
        );
    }
}