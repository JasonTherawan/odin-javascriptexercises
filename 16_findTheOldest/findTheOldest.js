const getAge = function (death, birth) {
    // if(!death) death = new Date().getFullYear();
    death ??= new Date().getFullYear();
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((highest, person) => {
        let highestAge = getAge(highest.yearOfDeath, highest.yearOfBirth);
        return highestAge > getAge(person.yearOfDeath, person.yearOfBirth) ? highest : person;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
