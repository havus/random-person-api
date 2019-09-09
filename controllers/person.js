const fs = require('fs');
const faker = require('faker');
const countryCodeDict = require(`${__dirname}/../helpers/dictionary_country`);

class Person {
  static buildPerson(countrycode) {
    faker.locale = countrycode;
    const avatar = faker.internet.avatar();
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const job = faker.name.jobTitle();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumberFormat();
    const address = faker.address.streetAddress();
    return { avatar, firstname, lastname, job, email, phone, address };
  }

  static generateNewFile(countrycode) {
    const arrData = [];
    for (let i = 0; i < 50; i++) {
      const temp = this.buildPerson(countrycode);
      const obj = {
        id: i + 1,
        ...temp,
      };
      arrData.push(obj);
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