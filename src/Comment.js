import React from 'react';
import marked from 'marked';
import style from './style';

class Comment extends React.Component {
    render(){
        return (
            <div style={style.comment}>
            	<h3>{this.props.author || 'anon'}</h3>
                <span>{this.getMarked()}</span> 
            </div>
        );
    }
    
    getMarked(){
    	return marked(this.props.text || 'watashi ga kita');
    }
}

export default Comment;