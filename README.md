# **Random Person API**
  
> _This repo made with love_  :heart: _in Jakarta_ `¯\_(ツ)_/¯`

# _Section Header_
* [Dependencies](#dependencies)
* [Features](#features)
* [Clone](#clone)
* [Installation](#installation)
* [Pre Usage](#pre-usage)
* [Usage](#usage)
* [Another Error](#another-error)
* [License](#license)

## Dependencies
> List of all dependencies
* [morgan](https://www.npmjs.com/package/morgan)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [cors](https://www.npmjs.com/package/cors)
* [faker](https://www.npmjs.com/package/faker)

## Features
* Fetch fake data

## Clone
* Clone this repo
```bash
$ git clone https://github.com/havus/random-person-api.git
```

## Installation
Enter to the folder and install all `Dependencies`
```bash
$ npm install
# OR
$ yarn
``` 
<br>

## Pre Usage
Make a folder with name 'person_master' (without quote)
```bash
$ mkdir person_master
``` 
<br>

## Usage
### Online Access :<br>
> `http://34.87.64.217/`

### Base Url default :<br>
> `http://localhost:3000/`

### Running server
```bash
$ npm run dev
# OR
$ yarn dev
```

<br>

### List Endpoint
* [**Person**](#person)

### Person
+ ### **Get All Person**
  > **Method** : `GET`<br>
  > **Endpoint** : `/`

  #### _Request_ :
  * params:
    ```javascript
    {
      "id": String(required),
    }
    ```
    > Select one from this 
    ```javascript
    ['az','cz','de','de_AT','de_CH','en','en_AU','en_BORK','en_CA','en_GB','en_IE','en_IND','en_US','en_ZA','en_au_ocker','es','es_MX','fa','fr','fr_CA','ge','id_ID','it','ja','ko','nb_NO','nep','nl','pl','pt_BR','pt_PT','ru','sk','sv','tr','uk','vi','zh_CN','zh_TW']
    ```

  * query:
    ```javascript
    {
      "page": Number(optional),
    }
    ```
    > For limitation per page contain 10 data
  
  #### _Response Body_ :
  - 200
    ```json
    [
      {
        "id": "i9259357D",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/collegeman/128.jpg",
        "firstname": "Amelia",
        "lastname": "Lestari",
        "username": "winda.andriani40",
        "birth": "1984, 5, 12",
        "height": 156,
        "weight": 119,
        "age": 35,
        "title": "Future Intranet Engineer",
        "job": "Regional Program Assistant",
        "jobDesc": "Internal",
        "jobType": "Supervisor",
        "email": "Iriana_Puspasari43@yahoo.co.id",
        "phone": "025 2808 640",
        "address": "39418 Habibi Overpass"
      },
    ]
    ```
  - 400
    ```json
    {
      "code": 400,
      "message": "country code invalid!"
    }
    ```
<br>

## Another Error
  + This is our mistake, please report this error as issue :)
  ```json
  {
    "code": 500,
    "message": "Internal server error :("
  }
  ```


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="havus.id" target="_blank">HAVUS</a>.

<br><br><br>
### Happy Hacking!