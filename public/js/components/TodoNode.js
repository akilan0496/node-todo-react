var React = require('react');

var TodoNode = React.createClass({
    handleDelete: function(){
        this.props.onTodoDelete(this.props.todoId);
    },
    handleClick: function(){
      var status = (this.props.active) ? false : true;
      var todo = {
          task:this.props.task,
          active:status
      }
      this.props.onTodoClick(todo,this.props.todoId);
    },
  	render: function(){
      var clsName = (this.props.active) ? "todo-active" : "todo-inactive";
      return (
              <div>
              	<form>
                  <div className="row empty-height"/>
                  <div className="row">
                    <div className="col-md-8">
                      <input className="task" type="checkbox" onClick={this.handleClick} checked={!this.props.active}/>
                      <span className={clsName}>{this.props.task}</span>
                    </div>
                    <div className="col-md-2">
                      <input type="Button" onClick={this.handleDelete} className="btn btn-default btn-sm" value="Delete"/>
                    </div>
                  </div>
                </form>
            </div>
          );
  	}
});

module.exports = TodoNode;
