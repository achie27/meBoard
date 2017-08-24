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
    
    onUpdate(){
    	console.log(this);
    }
    
    onDelete(){
    	console.log(this);	
    }
    
    submitComment(comment){
    	let comments = this.state.data;
    	comment.id = Date.now();
    	
    	let newComments = comments.concat([comment]);
    	this.setState({data : newComments});
    	
    	axios.post(this.props.url, comment)
    	.catch(err => {
    		console.error(err);
    		this.setState({data : comments});
    	});
    }
    
    render() {
        return (
	        <div style={style.commentBox}>
				<h2>Comments:</h2>
				<CommentList data={this.state.data}
					onUpdate={this.onUpdate}
					onDelete={this.onDelete}
				/>
				<CommentForm onCommentSubmit={this.submitComment.bind(this)}/>
	        </div>
        );
    }
    
    componentDidMount(){
    	this.loadComments();
    	setInterval(this.loadComments, this.props.pollInterval)
    }
}

export default CommentBox;