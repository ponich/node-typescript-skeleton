import {injectable} from "tsyringe";

@injectable()
export class App {
    constructor() {
        console.log('Hello world');
    }
}

