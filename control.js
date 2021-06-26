/* 조건문 */
let testNum = 27,
    testStr = 'kong',
    testUn = undefined,
    testNull = null;
    testObj = {
        name : 'woojeong',
        age : 1995
    },
    testArr = [1, 2, 3];

/* 1. if ... else */

// testNum : 27
if(testNum === 27) {
    console.log(`testNum : ${testNum}`); 
}

// 27보다 크지 않다.
if(testNum > 27) {
    console.log('27보다 크다');
} else {
    console.log('27보다 크지 않다.');
}

// testNum은 0보다 크고 29보다 작다
if(testNum > 0 && testNum < 29) {
    console.log('testNum은 0보다 크고 29보다 작다');
}

// 해당 조건문에서 값이 0이면 false 가 되고 1이면 true가 된다.
if(testNum % 2) {
    console.log(`나머지 : ${testNum % 2}`);
} else if(testNum % 3) {
    console.log(`나머지 : ${testNum % 3}`);
}

// 해당 조건문이 두개 이상 해당 되지만 처음 조건문을 만족한다면 그 다음 조건은 실행되지 않는다.
if(testNum > 0) {
    console.log('testNum은 0 보다 크다');
} else if(testNum < 29) {
    console.log('29보다 작다.');
} else {
    console.log('testNum은 0보다 크지 않고 29보다 작지 않다');
}

// 조건문 실행 블록에 코드가 한줄이면 대괄호 { } 생략이 가능하다
if(testStr === 'kong') console.log(`testStr : ${testStr}`);

// 조건문에서 두개이상이 조건을 만족하려면 논리 연산자를 사용한다. 
if(testStr !== 'kong' || testNum === 27) {
    console.log(`첫번째 false,,, 두번째 true`);
    console.log('testStr은 kong과 같고 testNum은 27이다');
}

// 조건문에서 어떠한 값을 비교할수도 있지만 해당 null 타입을 사용할 수 도 있다.
if(testNull === null) {
    console.log('testNull의 값은 null');
}

// undefined 타입 비교도 조건문에서 활용 할 수 있다.
if(testUn === undefined) {
    console.log('testUn의 값은 undefined');
}

// testArr으 길이 : 3 .... testArr의 길이는 2보다 크다
if(testArr.length > 3) {
    console.log(testArr.length);
    console.log('testArr의 길이는 3보다 크다');
} else if(testArr.length > 2) {
    console.log(testArr.length);
    console.log('testArr의 길이는 2보다 크다');
}

// 객체의 프로퍼티도 접근하여 조건문 활용 가능
if(testObj.name === 'woojeong') {
    console.log(testObj.name);
}

// typeof 연산자를 활용하여 해당 변수의 타입으로도 조건문 활용 가능
if(typeof testObj === 'object') {
    console.log('testObj는 객체이다.');
}

// 객체의 name 프로퍼티에는 값이 할당되어 있다. 
if(testObj.name === undefined) {
    console.log('name의 값은 undefined 이다');
}

// 삼항 조건 연산자
let test = testNum > 27 ? 'testNum은 27보다 크다' : 'testNum은 27보다 크지 않다';
console.log(test); // testNum은 27보다 크지 않다. 

/* 2. switch */

switch (testNum) {
    case 25 : 
        console.log('testNum은 25이다');
        break;
    case 26 :
        console.log('testNum은 26이다');
        break;
    case 27 :
        console.log('testNum은 27이다'); // 해당 case문이 실행 된다.
        break;
}

// defalut문 실행 된다.
switch (testNum) {
    case 24 : 
        console.log('testNum은 24이다');
        break;
    case 25 :
        console.log('testNum은 25이다');
        break;
    case 26 :
        console.log('testNum은 26이다'); 
        break;
    default :
        console.log('해당 case문에서 일치하는 값이 없다'); // 해당 defalut문이 실행 된다.
}

switch (testArr[1]) {
    case 0 :
        console.log('testArr[1]은 0이다');
        break;
    case 1 : 
        console.log('testArr[1]은 1이다');
        break;
    case 2 :
        console.log('testArr[1]은 2이다'); // 해당 문이 실행된다.
        break;
}

// for문과 switch문 활용하여 사용할 수 있다.
for(let i = 0; i < testArr.length; i++) {
    switch (testArr[i]) {
        case 0 :
            console.log(`testArr[${i}] : 0`);
            break;
        case 1 : 
            console.log(`testArr[${i}] : 1`);
            break;
        case 2 :
            console.log(`testArr[${i}] : 2`);
            break;
        case 3 :
            console.log(`testArr[${i}] : 3`);
            break;
    }
}

switch (testNull) {
    case 1 :
        console.log('testNull은 1이다');
        break;
    case null :
        console.log('testNull은 null이다'); // 해당 문 실행 
        break;
}

switch (testObj.age) {
    case 1994 :
        console.log('age는 1994이다');
        break;
    case 1995 :
        console.log('age는 1995이다'); // 해당 문 실행
        break;
}

// case에 일치하는 값이 없어 default문이 실행된다.
switch (testObj.name) {
    case 'name' :
        console.log('name은 name이다');
        break;
    case 'woo':
        console.log('name은 woo이다');
        break;
    default :
        console.log('name 도 아니고 woo 아니다');
}

// case문의 표현식에 배열의 값을 넣을수도 있다.
switch (1) {
    case testArr[0] :
        console.log('testArr[0]의 값이다');
        break;
    case testArr[1] :
        console.log('testArr[1]의 값이다');
        break;
    case testArr[2] :
        console.log('testArr[2]의 값이다');
        break;
}

// 해당 case문을 여러개 붙여서 쓸수 있다.
switch (testNum) {
    case 1: case 2: case 20: case 21: case 22: case 26:
        console.log('testNum이 1...21...26'); 
        break;
    case 27:
        console.log('testNum은 27이다');
        break;
}

/* 조건문 */

/* 1. for문 */

// 초기화 변수를 for문 안에 선언
for(let i = 0; i < 5; i++) {
    console.log(`i : ${i}`); // 0..1..2..3..4
}

// 초기화 변수를 for문 밖에 선언
let i = 0;
for(i = 0; i < 5; i++) {
    console.log(`i : ${i}`); // 0..1..2..3..4
}

// 초기화변수를 fo문 밖에서 선언 및 초기화
i = 3;
for(i; i < 5; i++) {
    console.log(`i : ${i}`); // 3..4
}
console.log(i); // 5가 된다. 그이유는 for문에서 증감식을 실행하고 나왔기때문이다.

// for문에서 변수 감소식
for(i = 5; i > 0; i--) {
    console.log(`i : ${i}`); // 5..4..3..2..1
}

// for문 변수가 2식 증가 
for(i = 0; i < 8; i += 2) {
    console.log(`i : ${i}`); // 0..2..4..6
}

// for문 변수가 3배씩 증가
for(i = 1; i < 12; i *= 3) {
    console.log(`i : ${i}`); // 1..3..9
}

// 배열 활용
for(let j = 0; j < testArr.length; j++) {
    console.log(`[${j}] : ${testArr[j]}`); // [0] : 1 ... [1] : 2 .... [2] : 3
}

// 중첩 for문 
for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 2; j++) {
        console.log(`[${i}][${j}]`); // [0][0] ... [0][1] ... [1][0] ... [1][1]
        // i가 0일때 j가 0,1 반복
        // i가 1일때 j가 0,1 반복
    }
}

/* break */
for(let i = 0; i < 5; i++) {

    // i가 4이면 해당 for문 정지
    if(i === 4) {
        console.log('break');
        break;
    }
    console.log(i); // 0..1..2..3
}

// 중첩 for문에서 break는 가장 가까운 for문을 정지 한다.
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(`[${i}][${j}]`); // [0][0]...[0][1]...[1][0]....[1][1]....[2][0]...[2][1]
        if(j === 1) {
            console.log('break'); 
            break; // 해당 break는 가장 가까운 for문을 정지한다.
        }
    }
}

/* continue */

// continue를 만나면 해당 반복문이 중지 아니고 해당 단계는 무시하고 다음 단계로 넘어간다.
for(let i = 0; i < 5; i++) {
    if(i === 2) {
        console.log('continue');
        continue;
    }
    console.log(i); // 0..1..3..4
}

// for in 문
for(prop in testObj) {
    console.log(`${prop} : ${testObj[prop]}`); // name : woojeong .... age : 1995
}

/* 2. while */
let num = 0;

// num 10보다 작을때 계속 반복문 실행 
// num이 10이되년 실행 블록을 실행 하지 않는다.
while(num < 10) {
    console.log(num); // 0..1..2..3..4..5..6..7..8..9
    num++;
}

let bool = true;
let test1 = 1;

while(bool) {
    console.log(test1); // 1..2..3..4
    test1 += 1;

    // test1이 5이면 변수 bool를 사용하여 while문 실행 정지
    if(test1 === 5) {
        bool = false;
    }    
}

// do while 문
let chk = 0;

do {
    console.log(chk); // 0..1..2
    chk++;
} while(chk < 3);

// 해당 while 조건식에는 거짓이지만 do 실행 블록은 무조건 한번은 실행된다.
chk = 3;
do {
    console.log(chk); // 3
    chk++;
} while(chk < 3);

/* while break */
let testNum4 = 1;

// 무한루프
/*
while(true) {
    console.log(testNum4);
    testNum4++;
}
*/

// break 문 활용하여 무한루프 정지
while(true) {
    console.log(testNum4); // 1..2..3..4..5
    testNum4++;

    // testNum4 5보다 크면 해당 while문으ㅡㄹ 정지한다.
    if(testNum4 > 5) {
        break;
    }
}