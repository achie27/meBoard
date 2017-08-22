import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox'

ReactDOM.render(
	<CommentBox
		url={'https://'+window.location.hostname+':8080/api/comments'}
		pollInterval={2000}
	/>,
	document.getElementById('root')
);
