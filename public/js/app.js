
var ReactDOM = require('react-dom');
var React = require('react');

var TodoComponent = require('./components/TodoComponent');

ReactDOM.render(
	<TodoComponent  url="/" pollInterval={100000} />,
	document.getElementById('content')
);
