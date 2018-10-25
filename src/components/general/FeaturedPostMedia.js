import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

export default class FeaturedPostMedia extends React.Component {
    constructor(props){
        super();
        this.state = {
            id : props.mediaId,
            title : props.title,
            media: {}
        };
    }

    componentDidMount(){
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/media/'+this.props.mediaId)
        .then(response => response.json())
        .then(media => this.setState({ media }) );
    }

    componentWillMount(){
        let id = this.props.mediaId;
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/media/'+id)
        .then(response => response.json())
        .then(media => this.setState({ media }) );
    }

    render(){
      const classes = this.props.classes;
        return (
            <Hidden xsDown>
                <CardMedia
                    className={classes.cardMedia}
                    image={this.state.media.source_url}
                    title={this.state.title}
                />
            </Hidden>
        );
    }
}