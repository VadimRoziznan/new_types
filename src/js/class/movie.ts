import Buyable from "./buyable";

export default class Movie implements Buyable {
  constructor (
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly tagline: string,
    readonly genre: string,
    readonly duration: number,) {

    }
}