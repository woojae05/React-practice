import { MovieStore } from "./movieStore";

export class RootStore{
    movieStore;

    constructor() {
        this.movieStore = new MovieStore(this);
    }
}
