var AppDispatcher = require('../dispatcher/app_dispatcher'),
    NotificationConstants = require('../constants/notification_constants'),
    EventEmitter = require('events').EventEmitter,
    _ = require('underscore');

var _notifications = {};

function loadNotifications(data) {
  _notifications = data;
};

var NotificationStore = _.extend({}, EventEmitter.prototype, {
  getNotifications: function() {
    return _notifications;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action,
      text;

  switch(action.actionType) {
    case NotificationConstants.LOAD_NOTIFICATIONS:
      loadNotifications(action.data);
      break;

    default:
      return true;
  }

  NotificationStore.emitChange();

  return true;
});

module.exports = NotificationStore;