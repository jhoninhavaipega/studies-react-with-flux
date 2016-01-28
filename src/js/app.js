var React = require('react'),
    ReactDOM = require('react-dom'),
    NotificationsData = require('./mock/notifications_data'),
    NotificationAPI = require('./utils/notification_api'),
    ListNotifications = require('./components/list_notifications/app'),
    Badge = require('./components/badge/app'),
    AppSASS = require('../sass/app.sass');

// Temporary
NotificationsData.init();
NotificationAPI.getNotificationsData();

// Render List Notifications
ReactDOM.render(
  <ListNotifications />,
  document.getElementById('list-notifications')
);

// Render List Badge
ReactDOM.render(
  <Badge />,
  document.getElementById('list-notification-badge')
);