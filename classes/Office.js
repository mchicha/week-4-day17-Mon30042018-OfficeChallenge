// Declaration When the files are in the client computer
import {Document} from './Document.js';
import {Manager} from './Manager.js';
import {Employee} from './Employee.js';
import {Cleaner} from './Cleaner.js';

// Declaration When the files are in the server
//var Document = require('./document').Document;
//var Manager = require('./manager').Manager;
//var Employee = require('./employee').Employee;
//var Cleaner = require('./cleaner').Cleaner;

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

// Declaration When the files are in the client computer
export {Office};

// Declaration When the files are in the server
//module.exports.Office = Office;