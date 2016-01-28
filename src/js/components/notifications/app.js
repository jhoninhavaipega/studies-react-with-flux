var React = require('react'),
    NotificationStore = require('../../stores/notification_store')
    Notification = require('./notification');

function getNotificationState() {
  return {
    notifications: NotificationStore.getNotifications()
  };
};

var Notifications = React.createClass({
  getInitialState: function() {
    return getNotificationState();
  },

  componentDidMount: function() {
    NotificationStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NotificationStore.removeChangeListener(this._onChange);
  },

  renderNotification: function() {
    var notifications = this.state.notifications;

    return Object.keys(notifications).map(function(index) {
      return (
        <Notification key={ index } data={ notifications[index] } />
      )
    })
  },

  render: function() {
    return (
      <ul className="notifications">
        { this.renderNotification() }
      </ul>
    )
  },

  _onChange: function() {
    this.setState(getNotificationState());
  }
});

module.exports = Notifications;