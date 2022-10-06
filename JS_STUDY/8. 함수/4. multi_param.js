
// 2개의 정수를 전달하면 그 합을 구해주는 함수 정의
function add2(n1, n2) {
    return n1 + n2;
}
function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

// n개의 정수를 전달하고 싶으면?? 배열 1개에 담아서 전달해라~
function addAll(numbers) {
    var total = 0;
    for (var n of numbers) {
        total += n;
    }
    return total;
}

function introMyPet(pet){
    console.log(`우리 애완동물 이름은 ${pet.name}입니다.`);
    console.log(`우리 애완동물 나이는 ${pet.age}입니다.`);
}

introMyPet({
    name: '해피',
    age: 5
});

// ES6+ 문법
function addAll2(...numbersss) {
    console.log(numbersss);
    console.log(typeof(numbersss));
    var total = 0;
    for (var n of numbersss) {
        total += n;
    }
    return total;
}
addAll2(1, 3, 4, 65, 7);
console.log(addAll2(1, 3, 4, 65, 7));

var result1 = add2(10, 20);
var result2 = add3(10, 20, 30);
console.log(`result2: ${result2}`);

var result3 = addAll([10, 20, 30, 40, 100, 200]);
console.log(`result3: ${result3}`);

var result4 = addAll2(10, 20, 30, 40, 100, 200);
console.log(`result4: ${result4}`);
