"use strict";

import Dependency from './dependency.ts';
import {View, Component, bootstrap} from 'angular2/angular2';

let dep = new Dependency();
dep.say();

export default {};