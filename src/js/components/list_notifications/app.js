var React = require('react'),
    Dropdown = require('../dropdown/app'),
    Notifications = require('../notifications/app');

var ListNotifications = React.createClass({
  render: function() {
    return (
      <Dropdown content={ <Notifications /> } />
    )
  }
});

module.exports = ListNotifications;