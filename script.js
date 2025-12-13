class YoutubeChannel {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update(`${user.name} subscribbed the channel`)
    }

    unSubscribe(user) {
        if (!user) {
            console.error("Provide a user at least");
            return;
        }
        let isExists = this.subscribers.some((el) => el.name === user.name);
        if (!isExists) {
            console.warn("Please subscribe First !!")
            return;
        }
        this.subscribers = this.subscribers.filter((el) => el.name !== user.name);
        console.warn(`${user.name} is unsubscribbed your channel`)
    }

    showAllSubscribers() {
        console.log(this.subscribers)
    }

    addVideo() {
        this.notify("New Video is out now !!!")
    }
    notify(data) {
        this.subscribers.forEach((user) => user.update(data))
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        console.log(`${this.name} ` + data)
    }
}

let yashcodes = new YoutubeChannel();
let user1 = new User("Ram");
let user2 = new User("Shyam");
let user3 = new User("GhanShyam");

yashcodes.subscribe(user1);
yashcodes.subscribe(user2);
yashcodes.subscribe(user3);
yashcodes.addVideo()


// yashcodes.showAllSubscribers()