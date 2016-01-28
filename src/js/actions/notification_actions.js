var AppDispatcher = require('../dispatcher/app_dispatcher'),
    NotificationConstants = require('../constants/notification_constants');

var NotificationActions = {
  loadNotifications: function(data) {
    AppDispatcher.handleAction({
      actionType: NotificationConstants.LOAD_NOTIFICATIONS,
      data: data
    })
  }
};

module.exports = NotificationActions;