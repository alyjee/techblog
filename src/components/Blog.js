import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

import BannerPost from './BannerPost';
import FeaturedPost from './FeaturedPost';
import Siderbar from './Sidebar';
import BlogContent from './BlogContent';

const posts = [post1, post2, post3];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class Blog extends React.Component {

  constructor(){
    super();
    this.state = {
      posts : [],
      featuredPost : {
        title : { rendered : 'This is title' },
        excerpt : { rendered : 'This is title' }
      }
    };
  }

  componentDidMount(){
    fetch('http://localhost/techblog-admin/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts }) );
  }

  render(){
    let featuredPosts = this.state.posts;
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <BannerPost classes={classes} />

        <Grid container spacing={40} className={classes.cardGrid}>
          {featuredPosts.map(post => (
            <FeaturedPost post={post} classes={classes} />
          ))}
        </Grid>
  
        <Grid container spacing={40} className={classes.mainGrid}>
          <BlogContent classes={classes} posts={posts} />
          <Siderbar classes={classes} archives={archives} social={social} />
        </Grid>
        
      </React.Fragment>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Blog;