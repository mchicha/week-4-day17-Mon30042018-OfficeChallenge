// When the files are in the client computer
import {Document} from './document.js';

// When the files are in the server
var Document = require('./document').Document;


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

// When the files are in the client computer
export {Employee};

// When the files are in the server
//module.exports.Employee = Employee;