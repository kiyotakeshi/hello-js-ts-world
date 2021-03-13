const showNames = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
};

showNames('Taro', 'Jiro', 'Saburo', 'Yoburo', 'Goro');
// Taro
// Jiro
// [ 'Saburo', 'Yoburo', 'Goro' ]