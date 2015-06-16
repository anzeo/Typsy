"use strict";

import Dependency from 'src/dependency';
import {View, Component, bootstrap} from '/node_modules/angular2/angular2';

let dep = new Dependency();
dep.say();

//
//@Component({
//    selector: 'my-app'
//})
//@View({
//    template: '<h1>Hello {{ name }}</h1>'
//})
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}