var React = require('react'),
    Header = require('./header'),
    Content = require('./content'),
    Footer = require('./footer');

var Dropdown = React.createClass({
  render: function() {
    return (
      <div className="dropdown">
        <Header />
        <Content content={ this.props.content } />
        <Footer />
      </div>
    )
  }
});

module.exports = Dropdown;