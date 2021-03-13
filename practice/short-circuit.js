// OR演算子は左辺が falsy な値だと評価が右辺に渡される
// falsy な値を続けているので、最終的に最右辺の値が入る
const hello = undefined || null || 0 || NaN  || '' || 'Hello';

// AND演算子や逆に左辺が truthy な値だと右辺に渡される
const chao = ' ' && 100 && [] && {} && 'Chao';

true && console.log('1.', hello);
false && console.log('2.', hello); // falsy なので && の右側に行かない

true || console.log('3.', chao); // truthy なので || の右側に行かない
false || console.log('4.', chao);

// $ node practice/short-circuit.js
// 1. Hello
// 4. Chao