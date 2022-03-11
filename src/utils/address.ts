export class AddressUtil {
  /**
   * Shortens the 64 digit addess
   */
  static shorternAddress(str: string) {
    let shortern =
      str.length > 10
        ? str.substr(0, 5) + "...." + str.substr(str.length - 5, str.length)
        : str;
    return shortern;
  }
}
