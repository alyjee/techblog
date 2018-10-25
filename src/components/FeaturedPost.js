import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FeaturedPostMedia from './general/FeaturedPostMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

export default class FeaturedPost extends React.Component {
    render(){
      const post = this.props.post;
      const classes = this.props.classes;
        return (
            <Grid item key={post.title.rendered} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title.rendered}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.excerpt.rendered}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        <Link to={`posts/${post.id}/${post.slug}`} >Continue reading...</Link>
                      </Typography>
                    </CardContent>
                  </div>
                  <FeaturedPostMedia classes={classes} mediaId={post.featured_media} />
                </Card>
            </Grid>
        );
    }
}