export class Timestamp {
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @return A new `Timestamp` representing the current date.
   */
  static now(): Timestamp {
    return new Timestamp();
  }

  /**
   * Creates a new timestamp from the given date.
   *
   * @param date The date to initialize the `Timestamp` from.
   * @return A new `Timestamp` representing the same point in time as the
   * given date.
   */
  static fromDate(date: Date): Timestamp {
    return new Timestamp(date.getTime() / 1000, date.getTime() % 1000 * 1e6);
  }

  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds Number of milliseconds since Unix epoch
   * 1970-01-01T00:00:00Z.
   * @return A new `Timestamp` representing the same point in time as the
   * given number of milliseconds.
   */
  static fromMillis(milliseconds: number): Timestamp {
    const seconds = Math.floor(milliseconds / 1000);
    const nanos = (milliseconds % 1000) * 1e6;
    return new Timestamp(seconds, nanos);
  }

  /**
   * Creates a new timestamp.
   *
   * @param seconds The number of seconds of UTC time since Unix epoch
   * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   * 9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds The non-negative fractions of a second at nanosecond
   * resolution. Negative second values with fractions must still have
   * non-negative nanoseconds values that count forward in time. Must be from
   * 0 to 999,999,999 inclusive.
   */
  constructor(seconds?: number, nanoseconds?: number) {
    if (seconds !== undefined && nanoseconds !== undefined) {
      this.seconds = seconds;
      this.nanoseconds = nanoseconds;
    } else {
      const now = new Date().getTime();
      this.seconds = Math.floor(now / 1000);
      this.nanoseconds = (now % 1000) * 1e6;
    }
  }

  /**
   * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
   */
  readonly seconds: number;

  /** The non-negative fractions of a second at nanosecond resolution. */
  readonly nanoseconds: number;

  /**
   * Returns a new `Date` corresponding to this timestamp. This may lose
   * precision.
   *
   * @return JavaScript `Date` object representing the same point in time as
   * this `Timestamp`, with millisecond precision.
   */
  toDate(): Date {
    return new Date(this.toMillis());
  }

  /**
   * Returns the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   *
   * @return The point in time corresponding to this timestamp, represented as
   * the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis(): number {
    return this.seconds * 1000 + this.nanoseconds / 1e6;
  }

  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other The `Timestamp` to compare against.
   * @return 'true' if this `Timestamp` is equal to the provided one.
   */
  isEqual(other: Timestamp): boolean {
    return (
      this.seconds === other.seconds && this.nanoseconds === other.nanoseconds
    );
  }
}
