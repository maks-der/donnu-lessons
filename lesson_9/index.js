class User {
    name;
    age;
    
    constructor(userName, userAge) {
        this.name = userName;
        this.age = userAge;
    }

    print(){
        console.log(`name: ${this.name} age: ${this.age}`);
    }
    
    toString() {
        return `${this.name}: ${this.age}`;
    }
}

let user1 = new User();
console.log(user1);
