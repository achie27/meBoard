import React from 'react';
import style from './style';

class Comment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			goingToUpdate : false,
			text : this.props.children
		};
	}
	
	toggleCommentUpdate(){
		this.setState({goingToUpdate : !this.state.goingToUpdate});
	}
	
	deleteComment(){
		this.props.onDelete(this.props.id);
	}
	
	updateState(e){
		this.setState({text : e.target.value});
	}
	
	onSave(e){
		if(this.state.text!=this.props.children){
			let comment = {
				author : this.props.author,
				text : this.state.text
			};
			this.props.onUpdate(this.props.id, comment);
		}
		this.toggleCommentUpdate();
	}
	
    render(){
        return (
            <div style={style.comment}>
            	<h3>{this.props.author || 'anon'}</h3>
                
                {
                (this.state.goingToUpdate) ? 
                (<div>	
                	<input type='text' value={this.state.text} onChange={this.updateState.bind(this)} />
                	<a style={style.updateLink} href='#' onClick={this.onSave.bind(this)}>save</a>
                </div>) : 
                (<div>
                	<div>{this.state.text}</div>
                	<a style={style.updateLink} href='#' onClick={this.toggleCommentUpdate.bind(this)}>update</a>
        			<a style={style.deleteLink} href='#' onClick={this.deleteComment.bind(this)}>delete</a>
                </div>)
                }
                
                </div>
        );
    }
}

export default Comment;