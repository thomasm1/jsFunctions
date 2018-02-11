var React = require('react');
var Todo = require('./Todo');

function App() {
  return (
    <div className="container text-center">
      <h1>Tom's Todo List App</h1>
      <Todo />
    </div>
  );
}

module.exports = App;
