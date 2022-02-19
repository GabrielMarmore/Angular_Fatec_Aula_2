export class Person {
  //Uma classe chamada “Person” em um arquivo chamado “person.ts” com os atributos firstName, middleName, lastName e age

  _firstName: string;
  _middleName: string;
  _lastName: string;
  _age: number;

  constructor(
    firstName: string,
    middleName: string,
    lastName: string,
    age: number
  ) {
    this._firstName = firstName;
    this._middleName = middleName;
    this._middleName = middleName;
    this._lastName = lastName;
    this._age = age;
  }

  //com os métodos getFullName and getBirthdayYear
  getFullName() {
    return this._firstName + ' ' + this._middleName + ' ' + this._lastName;
  }
  getBirthdayYear() {
    return this._age + ' anos';
  }
}
