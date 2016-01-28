var NotificationActions = require('../actions/notification_actions');

module.exports = {
  getNotificationsData: function() {
    var data = JSON.parse(localStorage.getItem('notifications'));
    NotificationActions.loadNotifications(data);
  }
};