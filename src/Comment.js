import React from 'react';
import style from './style';

class Comment extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			goingToUpdate : false,
			text : this.props.children,
			id : this.props.id
		};
	}
	
	updateComment(e){
		e.preventDefault();
		this.setState({goingToUpdate : !this.state.goingToUpdate});
	}
	
	deleteComment(e){
		e.preventDefault();
		this.props.onDelete();
	}
	
	updateState(e){
		this.setState({text : e.target.value});
	}
	
    render(){
        return (
            <div style={style.comment}>
            	<h3>{this.props.author || 'anon'}</h3>
                
                {
                (this.state.goingToUpdate) ? 
                (<div>	
                	<input type='text' value={this.state.text} onChange={this.updateState.bind(this)} />
                	<a style={style.updateLink} href='#' onClick={this.props.onUpdate.bind(this)}>save</a>
                </div>) : 
                (<div>
                	<div>{this.state.text}</div>
                	<a style={style.updateLink} href='#' onClick={this.updateComment.bind(this)}>update</a>
        			<a style={style.deleteLink} href='#' onClick={this.props.onDelete.bind(this)}>delete</a>
                </div>)
                }
                
                </div>
        );
    }
}

export default Comment;