var React = require('react');


var TextBox = React.createClass({
	getInitialState: function(){
		return {task:''};
	},
	handleOnChange: function(e){
		this.setState({task:e.target.value})
	},
	//Action to be performed on Add button click
	handleSubmit: function(e){
		e.preventDefault();
		var task = this.state.task.trim();
		if(!task)
			return;
		this.props.onTodoSubmit({task:task,active:true})
		this.setState({task:''})
	},
	render: function(){
		return (
			<form className="todoForm"  onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col-md-8">
						<input type="text" placeholder="What needs to be done..." className="form-control" value={this.state.task} onChange={this.handleOnChange}/>
					</div>
					<div className="col-md-4">
						<input type="submit" value="Add" className="btn btn-default"/>
					</div>
				</div>
			</form>
		);
	}
});

module.exports = TextBox;
