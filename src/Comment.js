import React from 'react';
import style from './style';

class Comment extends React.Component {
    render(){
        return (
            <div style={style.comment}>
            	<h3>{this.props.author || 'anon'}</h3>
                {this.props.children}
            </div>
        );
    }
}

export default Comment;