var React = require('react');
var TodoNode = require('./TodoNode');

var TodoList = React.createClass({
    handleTodoDelete: function(id){
        this.props.onTodoDelete(id);
    },
    handleTodoClick: function(todo,id){
        this.props.onTodoClick(todo,id);
    },
    fetchAll: function(){
        this.props.onButtonClick("All");
    },
    fetchNew: function(){
        this.props.onButtonClick("Pending");
    },
    fetchCompleted: function(){
        this.props.onButtonClick("Completed");
    },
  	render: function(){
  		var todoNodes = this.props.data.map(function(todo){
  			return(
  				<TodoNode onTodoClick={this.handleTodoClick} onTodoDelete={this.handleTodoDelete} task={todo.task} todoId={todo._id} active={todo.active} key={todo._id}/>
  			)
  		},this);
  		return (
  			<div className="todoList">
  				{todoNodes}
          <form className="todoAction" >
    				<input type="button" value="All Todo" onClick={this.fetchAll} className="btn btn-default"/>
    				<input type="button" value="Completed Todo" onClick={this.fetchCompleted} className="btn btn-default"/>
            <input type="button" value="Pending Todo" onClick={this.fetchNew} className="btn btn-default"/>
  			  </form>
  			</div>
  		);
  	}
});

module.exports = TodoList;
