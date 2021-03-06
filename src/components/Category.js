import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from './FeaturedPost';

export default class Category extends React.Component{
    constructor(){
        super();
        this.state = {
            posts : []
        };
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/posts/?categories='+id)
        .then(response => response.json())
        .then(posts => this.setState({ posts }) );
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.id !== this.props.match.params.id) {
            let id = nextProps.match.params.id;
            fetch('http://localhost/techblog-admin/wp-json/wp/v2/posts/?categories='+id)
            .then(response => response.json())
            .then(posts => this.setState({ posts }) );
        }
    }

    render(){
        const classes = {
            card: {
                display: 'flex',
            },
            cardDetails: {
                flex: 1,
            },
            cardMedia: {
                width: 160,
            }
        };
        return (
            <React.Fragment>
                <Grid container spacing={40} className={classes.cardGrid}>
                    {this.state.posts.map(post => (
                        <FeaturedPost key={post.id} post={post} classes={classes} />
                    ))}
                </Grid>
            </React.Fragment>
        );
    }
}