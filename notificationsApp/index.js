function Notification(props) {
  const { notificationType, notificationContent, notifyIcon } = props;
  return (
    <div className={`notification ${notificationType}`}>
      <img className="icon-img" src={notifyIcon} />
      <p className="notification-content">{notificationContent}</p>
    </div>
  );
}

const element = (
  <div className="notification-layout">
    <h1 className="heading">Notifications</h1>
    <Notification
      notificationType="information-msg"
      notificationContent="Information Message"
      notifyIcon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      notificationType="success-msg"
      notificationContent="Success Message"
      notifyIcon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      notificationType="warning-msg"
      notificationContent="Warning Message"
      notifyIcon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      notificationType="error-msg"
      notificationContent="Error Message"
      notifyIcon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
