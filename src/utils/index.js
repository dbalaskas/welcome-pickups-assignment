// datetime handlers

export function getTime(date) {
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleString("en-gb", options);
}

export function getDatetime(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Athens",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date(date).toLocaleString("en-gb", options).replace(" at ", ", ");
}

export function getDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const today = new Date();
  const curDay = new Date(date);
  curDay.setHours(0, 0, 0, 0);

  const tomorrow = new Date();
  const yesterday = new Date();

  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  if (curDay == tomorrow) return "Tomorrow";
  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  if (curDay == yesterday) return "Yesterday";
  return date.toLocaleString("en-gb", options);
}

export function getDateShort(date) {
  return (
    date.toLocaleString("default", { month: "long" }) + " " + date.getDate()
  );
}

export function compareDatetimes(date1, date2) {
  return date1.getTime() - date2.getTime();
}

export function areSameDate(date1, date2) {
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  return date1.getTime() === date2.getTime();
}

// OTHER

export function getPhoneNumber(phone) {
  if (phone[0] === "+") {
    return (
      phone.slice(0, 3) +
      " " +
      phone.slice(3, 6) +
      " " +
      phone.slice(6, 9) +
      " " +
      phone.slice(9, 13)
    );
  } else {
    return (
      phone.slice(0, 3) + " " + phone.slice(3, 6) + " " + phone.slice(6, 11)
    );
  }
}

export function isSmallScreen(screenWidth) {
  return screenWidth <= 600;
}
