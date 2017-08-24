import React from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends React.Component {
	render(){
		let comments = this.props.data.map((ele) => {
			return (
				<Comment author={ele.author} key={ele['_id']} id={ele['_id']} 
					onUpdate={this.props.onUpdate}
					onDelete={this.props.onDelete}
				>
					{ele.text}
				</Comment>
			);
		});

		return (
			<div style={style.commentList}>
				{comments}
			</div>
		);
	}
}
export default CommentList;