//import Dep from 'dep';

class Depje {
    yell(something:String){
        alert("Hello " + something + "!");
    }
}

var dep = new Depje();

dep.yell("world");

export default {};