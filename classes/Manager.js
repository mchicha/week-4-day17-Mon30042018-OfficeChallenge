// When the files are in the client computer
import {Employee} from './Employee.js';

// When the files are in the server
//var Employee = require('./employee').Employee;

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

// Declaration When the files are in the client computer
export {Manager};

// Declaration When the files are in the server
//module.exports.Manager = Manager;


