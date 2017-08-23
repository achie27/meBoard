import React from 'react';
import style from './style';

class CommentForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			author : '',
			text : ''
		}
	}
	
	handleSubmit(e){
		e.preventDefault();
		let author = this.state.author.trim();
		let text = this.state.text.trim();
		if(!text || !author){
			alert('get it together, tyrone!')
			return;
		}
		this.props.onCommentSubmit({
			author : author, 
			text : text
		});
		this.setState({author : '', text : ''});
		console.log(this.state.author + ' said ' + this.state.text);
	}
	
	authorChange(e){
		this.setState({author : e.target.value});
	}
	
	commentChange(e){
		this.setState({text : e.target.value});
	}
	
	render(){
		return (
			<form style={style.commentForm} onSubmit={this.handleSubmit.bind(this)}>
				<input
					type='text'
					placeholder='Here goes your name!'
					style={style.commentFormAuthor}
					onChange={this.authorChange.bind(this)}
				/>
				<input
					type='text'
					placeholder='How you doin?'
					style={style.commentFormText}
					onChange={this.commentChange.bind(this)}
				/>
				<input
					type='submit'
					style={style.commentFormPost}
					value='POST'
				/>
			</form>
		);
	}
}

export default CommentForm;