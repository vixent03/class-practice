// Your code here
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age;
    }
    introduce() {
        return `Hi i'm ${this.firstname} ${this.lastname} and i'm ${this.age} years old`;

    }

    static introducePersons(...Person) {
        Person.forEach(element => {

            if (element !== typeof(Person)) {
                console.log(`Error:  All items in array must be Person class instances.`)
            } else {
                Person.introduce()
            }
        })
    }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Person;
} catch {
    module.exports = null;
}