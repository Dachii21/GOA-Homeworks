function user(name, lastname, phonenumber, email, password, confirmpassword) {
    this.name = name;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
    this.email = email;
    this.password = password;
    this.confirmpassword = confirmpassword;
    this.getInfo = function() {
        return `My name is ${this.name}, my lastname is ${this.lastName}, my phone number is ${this.phoneNumber}, my email is ${this.email}, my password is ${this.password}, my password confirmation is ${this.confirmpassword}.`;
    };
}

const user1 = new user("Gio", "Giorgadze", "123456789", "giorgi.mail.com", "gio123", "gio123");
const user2 = new user("Ana", "Anadze", "234567890", "ana.mail.com", "ana123", "ana123");
const user3 = new user("Lashadze", "Lashadze", "345678910", "lasha.mail.com", "lasha123", "lasha123");

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log(user3.getInfo());