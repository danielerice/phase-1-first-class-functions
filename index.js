function receivesAFunction(callback){
   (callback)();
}
function returnsANamedFunction(){
    return function blah(){
        return 1+1;
    };
}
function returnsAnAnonymousFunction(){
    return function(a){a+1};
}