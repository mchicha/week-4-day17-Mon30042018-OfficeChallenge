// Declaration When the files are in the client computer
/* import Document from './document.js';
import Manager from './manager.js';
import Employee from './employee.js';
import Cleaner from './cleaner.js';
import Office from './office.js';  */

class Document{
    constructor(name) {
        this.employeeName = name;
    }
}

class Employee{
    constructor(name) {
        this.name = name;
    }
    work(office) {
        for (var i=0; i < 10; i++){
            let newDoc = new Document(this.name);
            office.documents.push(newDoc);
        }
    }
}

class Manager{
    constructor(name, employees) {
        this.name = name;
        this.employees = [];
    }
    hireEmployee(name) {
        this.employees.push(new Employee(name));
    }
    askEmployeesToWork(office) {
        for (var i=0; i < this.employees.length; i++){
            this.employees[i].work(office);

        }
    }
}

class Cleaner{
    constructor(name) {
        this.name = name;
    }
    clean() {
        console.log("Clean");
    }
}

class Office {
    constructor(documents, managers, cleaners) {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }
    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name));
    }
    hireManager(name) {
        this.managers.push(new Manager(name));
    }
    startWorkDay() {
        for (var i= 0; i < this.managers.length; i++){
            this.managers[i].askEmployeesToWork(this);
        }
    }
}

/* // Declaration When the files are in the server
var Document = require('./document').Document;
var Manager = require('./manager').Manager;
var Cleaner = require('./cleaner').Cleaner;
var Office = require('./office').Office;
var Employee = require('./employee').Employee; */
