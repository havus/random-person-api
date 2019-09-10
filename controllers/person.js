const fs = require('fs');
const faker = require('faker');

const dictionaryCountry = include('helpers/dictionary_country');
const randomBirth = include('helpers/random_birth');
const calculateAge = include('helpers/calculate_age');
const randomNum = include('helpers/randomNum');

class Person {
  static buildPerson(countrycode) {
    faker.locale = countrycode;
    const id = `${countrycode[0]}${randomNum(100000, 100000000)}${countrycode[countrycode.length-1]}`;
    const avatar = faker.internet.avatar();
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const username = faker.internet.userName().toLowerCase();
    const birth = randomBirth();
    const height = randomNum(140, 190);
    const weight = randomNum(45, 120);
    const age = calculateAge(birth);
    const title = faker.name.title();
    const job = faker.name.jobTitle();
    const jobDesc = faker.name.jobDescriptor();
    const jobType = faker.name.jobType();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumberFormat();
    const address = faker.address.streetAddress();
    return { id, avatar, firstname, lastname, username, birth, height, weight, age, title, job, jobDesc, jobType, email, phone, address };
  }

  static generateNewFile(countrycode) {
    const arrData = [];
    for (let i = 0; i < 300; i++) {
      const temp = Person.buildPerson(countrycode);
      
      arrData.push(temp);
    }
    fs.writeFileSync(`${__dirname}/../person_master/${countrycode}.json`, JSON.stringify(arrData, null, 2));
  }
  
  static readFile(filename) {
    const data = fs.readFileSync(`${__dirname}/../person_master/${filename}.json`, 'utf8');
    
    return JSON.parse(data);
  }
  
  static getPersonJson(countrycode) {
    try {
      if (fs.existsSync(`${__dirname}/../person_master/${countrycode}.json`)) {
        return Person.readFile(countrycode);
      } else {
        Person.generateNewFile(countrycode);
        return Person.readFile(countrycode);
      }
    } catch(err) {
      return false;
    };
  }

  static getAllPerson(req, res, next) {
    if (dictionaryCountry(req.params.id)) {
      const data = Person.getPersonJson(req.params.id)
      if (req.query.page > 0) {
        const page = +req.query.page;
        const dataPerPage = 10;
        const lastIndex = page * dataPerPage;
        const startIndex = lastIndex - dataPerPage;
        res.status(200).json(data.slice(startIndex, lastIndex));
      } else {
        res.status(200).json(data);
      }
    } else {
      next({ code: 400, message: 'country code unvalid!' });
    }
  }
}

module.exports = Person;