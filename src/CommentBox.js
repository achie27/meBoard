import React from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
        	data : []
        };
        this.loadComments=this.loadComments.bind(this);
        this.submitComment=this.submitComment.bind(this);
    }
    
    loadComments(){
    	axios.get(this.props.url)
		.then(res => {
			this.setState({data : res.data});
		})
    }
    
    submitComment(comment){
    	
    }
    
    render() {
        return (
	        <div style={style.commentBox}>
				<h2>Comments:</h2>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.submitComment}/>
	        </div>
        );
    }
    
    componentDidMount(){
    	this.loadComments();
    }
}

export default CommentBox;