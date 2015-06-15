"use strict";

import Dependency from './dependency.ts';
import {View, Component, bootstrap} from 'angular2/angular2';

let dep = new Dependency();

@Component({
    selector: 'my-app'
})
@View({
    template: '<h1>Hello {{ name }}</h1>'
})
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Alice';
    }
}