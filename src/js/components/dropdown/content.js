var React = require('react');

var Content = React.createClass({
  render: function() {
    return (
      <section className="dropdown-content">
        { this.props.content }
      </section>
    )
  }
});

module.exports = Content;