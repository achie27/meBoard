import React from 'react';
import Comment from './Comment';
import style from '/.style';

class CommentList extends React.Component {
	render(){
		let comments = this.props.data;
		comments.map((ele) => {
			return (
				<Comment author = {ele.author} id = {ele.id}>
					{ele.text}
				</Comment>
			);
		});
		
		return (
			<div style = {style.commentList}>
				{comments}
			</div>
		);
	}
}
export default CommentList;