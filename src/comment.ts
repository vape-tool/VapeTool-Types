import { Author } from "./index";

export default class Comment {
  constructor(
    readonly author: Author,
    readonly content: string,
    readonly timestamp: any
  ) {}
}
