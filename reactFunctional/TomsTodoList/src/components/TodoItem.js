var React = require('react');

var TodoItem = function(props) {
  return (
    <li className="list-group-item">
      <h3>
        {props.todo}
        <button
          className="btn btn-default btn-danger pull-right"
          onClick={props.onDeleteBtnClick}
          value={props.index}
        >
          Delete
        </button>
      </h3>
    </li>
  );
};

module.exports = TodoItem;
