var React = require('react');
var request = require('superagent');
var async = require('async');
var TextBox = require('./TextBox');
var TodoList = require('./TodoList');
var superAgent = require('../superAgent/helper');

var TodoComponent = React.createClass({
  //Action to be performed on page load
  loadFromServer: function(){
    superAgent.getAllTodos(this.props.url,this);
  },
  getInitialState: function(){
    return {data:[]};
  },
  componentDidMount: function(){
    this.loadFromServer();
    setInterval(this.loadFromServer,this.props.pollInterval);
  },
  //Action to be performed on button clicks like Completed,Pending, All
  handleButtonClick: function(type){
      var url = (type === 'Pending') ?  '?active=true' : ((type === 'Completed') ? '?active=false' : '');
      superAgent.getAllTodos(url,this);
  },
  //Action to be performed on Delete button click
  handleTodoDltClick: function(id){
  	var _this = this;
      async.waterfall([
      	function(cb){
      		superAgent.deleteTodo('/'+id,_this,cb);
      	},
      	function(res,cb){
      		superAgent.getAllTodos('/',_this,cb);
      	}
      ], function(err,result){
      	if(err) throw err;
      })
  },
  //Action to be performed on status change
  handleTodoClick: function(todo,id){
    var _this = this;
      async.waterfall([
      	function(cb){
          superAgent.addOrUpdateTodo('/'+id,todo,_this,cb);
      	},
      	function(res,cb){
         superAgent.getAllTodos('/',_this,cb);
      	}
      ], function(err,result){
      	if(err) throw err;
      });
  },
  //Action to be performed on Adding Todo
	handleTodoSubmit: function(todo){
		var todos = this.state.data;
		var todoTemp = {
			task:todo.task,
			active:todo.active
		};
		var newTodos = todos.concat([todoTemp]);
		this.setState({data:newTodos});
    var _this = this;
		async.waterfall([
			function(cb){
        superAgent.addOrUpdateTodo('/',todo,_this,cb);
			},
			function(res,cb){
        superAgent.getAllTodos('/',_this,cb);
			}
		], function(err,result){
      if(err) throw err;
    });
  },
	render: function(){
		return(
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Todos</h1>
            <TextBox onTodoSubmit={this.handleTodoSubmit} />
            <TodoList onTodoDelete={this.handleTodoDltClick} onTodoClick={this.handleTodoClick} onButtonClick={this.handleButtonClick}
            data={this.state.data}/>
          </div>
          <div className="col-md-4"></div>
        </div>
			</div>
		);
	}
});

module.exports = TodoComponent;
