import { action,observable, makeObservable } from "mobx";
import { isAnnotation } from "mobx/dist/internal";

class Movie{
    id;
    title;
    rate;

    constructor(id, title, rate){
        this.id = id;
        this.title = title;
        this.rate = rate;
    }
}

export class MovieStore{
    rootStore;

    movies = [];

    constructor(root){
        makeObservable(this,  {
            movies:observable,
        })

        this.rootStore = root

        this.movies = [
            new Movie( 1, "LOTR", 5 ),
            new Movie( 2, "Harry Poter", 4),
            new Movie( 3, "창궐", 0),
        ]
    }
}