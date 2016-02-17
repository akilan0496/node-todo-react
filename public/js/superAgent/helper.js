var request = require('superagent');

var baseURL = 'http://localhost:3000/api/todos';

//Function exports for Getting all todos
exports.getAllTodos = function(url,_this,cb){
  var _thisObj = _this;
  request
   .get(baseURL + url)
     .end(function(err, res){
      var data = JSON.parse(res.text);
      _this.setState({data: data});
      if(cb){
        cb(null,res);
      }
     }.bind(_thisObj));
};

//Function exports for Adding or Updating todo
exports.addOrUpdateTodo = function(url,todo,_this,cb){
  var _thisObj = _this;
  request
  .post(baseURL+url)
  .set('Content-Type','application/json')
  .send(JSON.stringify(todo))
    .end(function(err, res){
      if(cb){
        cb(null,res);
      }
  }.bind(_thisObj));
};

//Function exports for Deleting todo
exports.deleteTodo = function(url,_this,cb){
  var _thisObj = _this;
  request
  .delete(baseURL+url)
  .end(function(err, res){
    if(cb){
      cb(null,res);
    }
  }.bind(_thisObj));
};
