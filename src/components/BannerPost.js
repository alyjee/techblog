import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class BannerPost extends React.Component {
    constructor(){
        super();
    }

    render(){
        const classes = this.props.classes;
        return (
            // Main featured post
            <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Title of a longer featured blog post
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                            Multiple lines of text that form the lede, informing new readers quickly and
                            efficiently about what&apos;s most interesting in this post&apos;s contents…
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            // End main featured post
        );
    }
}