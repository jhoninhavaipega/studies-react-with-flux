var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header className="dropdown-header">
        <h2>Lista de desejos <span>(27)</span></h2>
      </header>
    )
  }
});

module.exports = Header;