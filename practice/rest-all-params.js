const showAllArgs = (...args) => {
    console.log(args);
};

console.log(showAllArgs('a', 'b', 'c', 'd', 'e'));
// [ 'a', 'b', 'c', 'd', 'e' ]