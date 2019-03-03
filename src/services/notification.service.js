import { Icon, notification } from 'antd';
import React from 'react';

export default class NotificationService {

  static baseNotificationConfig = (title, message) => {
    return {
      message: title,
      description: message,
      placement: 'bottomRight',
    }
  };

  static info = (title, message) => {
    return notification.open({
      ...NotificationService.baseNotificationConfig(title, message),
      className: 'notification notification__info',
      icon: <Icon className="notification__icon" type="info-circle" />
    });
  }

  static success = (title, message) => {
    return notification.open({
      ...NotificationService.baseNotificationConfig(title, message),
      className: 'notification notification__success',
      icon: <Icon className="notification__icon" type="check-circle" />
    });
  }

  static warning = (title, message) => {
    return notification.open({
      ...NotificationService.baseNotificationConfig(title, message),
      className: 'notification notification__warning',
      icon: <Icon className="notification__icon" type="warning" />
    });
  }

  static error = (title, message) => {
    return notification.open({
      ...NotificationService.baseNotificationConfig(title, message),
      className: 'notification notification__error',
      icon: <Icon className="notification__icon" type="stop" />
    });
  }
}