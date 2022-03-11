/**
 *
 * @param variant
 * @returns style based on activity type
 */

export enum Activity {
  send = "send",
  receive = "receive",
  other = "other",
}

export enum IconName {
  sent = "sent",
  received = "received",
  other = "received",
}

export const getActivityInfo = (
  status: keyof typeof Activity = Activity.receive
) => {
  let text, iconName;

  switch (status) {
    case Activity.send:
      text = "Sent to";
      iconName = IconName.sent;
      break;

    case Activity.receive:
      text = "Received from";
      iconName = IconName.received;
      break;

    case Activity.other:
      text = "Interacted with";
      iconName = IconName.other;
      break;

    default:
      text = "Received from";
      iconName = IconName.received;
  }

  return { text, iconName };
};
