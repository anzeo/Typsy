import MyDependency from './dependency.js';
"use strict";


class Test {
    say(){
        var speaker = new MyDependency();
        speaker.sayHiToBabel();
    }
}

var test = new Test();
test.say();