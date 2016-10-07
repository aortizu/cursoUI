function Movie(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
}

Movie.prototype.play = function() {
    console.log("The movie " + this.title + " was started");
};

Movie.prototype.pause = function() {
    console.log("The movie " + this.title + " was paused");
};

Movie.prototype.resume = function() {
    console.log("The movie " + this.title + " was resumed");
};

class Pelicula {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play() {
        console.log("The movie " + this.title + " was started");
    }

    pause() {
        console.log("The movie " + this.title + " was paused");
    }

    resume() {
        console.log("The movie " + this.title + " was resumed");
    }
}
