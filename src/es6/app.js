"use strict";
import MyDependency from './dependency.js';

class Test {
    say(){
        var speaker = new MyDependency();
        speaker.sayHiToBabel();
    }
}

var test = new Test();
test.say();