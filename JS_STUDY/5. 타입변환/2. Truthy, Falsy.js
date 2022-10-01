
// Falsy: 0, '', undefined, null, NaN    ''는 null이다. empty string이다.
//false같아 보이는데 true인 것들: 99, -6, '  ',  [ ] 빈배열,   if(new Dog()), 
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');
// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');

console.log('=====================');

var num = 9;
if (num % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

var apple = 0;
if (apple) {
    console.log(`사과가 ${apple}개 있습니다.`);
} else {
    console.log('사과가 하나도 없습니다.');
}

//자바스크립트 안 좋은 점: 2015년에 대격변을 겪으면서 온갖 언어들의 좋아보이는 것들을 다 가져와서 짬뽕돼버렸다. 예를 들어 new 와 같은 생성자 종류만 해도 6가지다.