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
	
	render(){
		return (
			<form style={style.commentForm} onSubmit={this.handleSubmit.bind(this)}>
				<input
					type='text'
					placeholder='Here goes your name!'
					style={style.commentFormAuthor}
					onChange={(ele) => this.setState({author : ele.value})}
				/>
				<input
					type='text'
					placeholder='How you doin?'
					style={style.commentFormText}
					onChange={(ele) => this.setState({text : ele.value})}
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