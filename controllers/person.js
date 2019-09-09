const fs = require('fs');
const faker = require('faker');
const countryCodeDict = require(`${__dirname}/../helpers/dictionary_country`);

class Person {
  constructor() {
    this._avatar = faker.internet.avatar();
    this._firstname = faker.name.firstName();
    this._lastname = faker.name.lastName();
    this._job = faker.name.jobTitle();
    this._email = faker.internet.email();
    this._phone = faker.phone.phoneNumberFormat();
    this._address = faker.address.streetAddress();
  }

  static generateNewFile(countrycode) {
    const arrData = [];
    for (let i = 0; i < 50; i++) {
      const temp = new Person();
      arrData.push(temp);
    }
    fs.writeFileSync(`${__dirname}/../person_master/${countrycode}.json`, JSON.stringify(arrData, null, 2));
  }

  static readFile(filename) {
    const data = fs.readFileSync(`${__dirname}/../person_master/${filename}.json`, 'utf8');

    return JSON.parse(data);
  }

  static getPerson(req, res, next) {
    try {
      if (fs.existsSync(`${__dirname}/../person_master/${req.params.id}.json`)) {
        res.status(200).json(Person.readFile(req.params.id));
      } else {
        if (countryCodeDict(req.params.id)) {
          Person.generateNewFile(req.params.id);

          res.status(200).json(Person.readFile(req.params.id));
        } else {
          next({ code: 400, message: 'country code unvalid!' })
        };
      }
    } catch(err) {
      next(err);
    };
  }
}

module.exports = Person;