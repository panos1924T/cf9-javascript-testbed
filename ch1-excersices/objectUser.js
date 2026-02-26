
const user = {
    name: `PanTs`,
    age: `26`,
    city: `Athens`,

    hello() {
    console.log(`Hello ${this.name}`);
    }
};

console.log(`The user `, user.name, " is ", user.age, " years old and lives in ", user.city);

console.log(JSON.stringify(user));

user.hello();