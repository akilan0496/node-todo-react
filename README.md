# node-todo-react
#Description:
It is a To-DO Application with ReactJs and Node js

#Functionalities:
Add Todo, Mark Completed, Fetch All Todo, Fetch Completed Todo, Fetch Pending Todo, Delete Todo

#Dependency Modules:
npm install -g browserify


#Installation Steps:
// To download all the dependency packages

npm install

// To Bundle the js files into bundle.js

browserify -t [ babelify --presets [ react ] ] ./public/js/app.js -o bundle.js

//start the Application

node server.js

#Server API
https://github.com/akilan0496/node-todo-express

