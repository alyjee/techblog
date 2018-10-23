import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class BannerPost extends React.Component {
    constructor(props){
        super();
        this.state = {
            post : {
                title : { rendered : 'This is title' },
                excerpt : { rendered : 'This is title' }
            }
        };
    }

    componentDidMount(){
    
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/posts/1')
        .then(response => response.json())
        .then(post => this.setState({ post }) );
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
                            {this.state.post.title.rendered}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                            {this.state.post.excerpt.rendered}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            // End main featured post
        );
    }
}