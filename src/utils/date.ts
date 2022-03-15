export class DateUtil {
  /**
   * Returns how old the passed timestamp in by comparing the current date
   */

  static timeDiff(timestamp: number): string {
    const timeDiff = new Date().valueOf() - timestamp * 1000;
    const toSeconds = timeDiff / 1000;
    const toMinutes = toSeconds / 60;
    const toHours = toMinutes / 60;
    const toDays = toHours / 24;
    const toMonths = toDays / 12;
    const toYears = toDays / 365;

    if (Math.floor(toYears)) {
      return Math.floor(toYears).toString() + " years";
    }

    if (Math.floor(toMonths)) {
      return Math.floor(toMonths).toString() + " months";
    }

    if (Math.floor(toDays)) {
      return Math.floor(toDays).toString() + " days";
    }

    if (Math.floor(toHours)) {
      return Math.floor(toHours).toString() + " hours";
    }

    if (Math.floor(toMinutes)) {
      return Math.floor(toMinutes).toString() + " minutes";
    }

    return Math.floor(toSeconds).toString() + " seconds";
  }
}
