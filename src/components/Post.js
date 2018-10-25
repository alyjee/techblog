import React from 'react';

export default class Post extends React.Component{
    constructor(){
        super();
        this.state = {
            post : {
                title : {
                    rendered: ''
                },
                content : {
                    rendered: ''
                }
            }
        };
    }

    componentWillMount(){
        let id = this.props.match.params.id;
        fetch('http://localhost/techblog-admin/wp-json/wp/v2/posts/'+id)
        .then(response => response.json())
        .then(post => this.setState({ post }) );
    }

    render(){
        return (
            <React.Fragment>
                    <h3>{this.state.post.title.rendered}</h3>
                    {this.state.post.content.rendered}
            </React.Fragment>
        );
    }
}