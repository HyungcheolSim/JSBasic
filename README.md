형철심의 JS 도전기

7/30 1~14
8/1 15~

### 8/1 NOTE

== 동등 연산자로 undefined 와 null 을 비교하면 true
"===" strict 동등 연산자로 비교하면 false
NaN: 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형인데, 숫자가 아니라는 뜻이다.

NaN === NaN => false 

false로 간주되는 데이터형 if문 내 아래 문자열들이 들어갈 경우 false로 취급
''[빈 문자열] : false 
undefined : false


number : 변수
number() : 함수

### 8/5 Note
[MDN 기초 예제 도전_Silly Story Generator](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Silly_story_generator)

push: 맨 뒤에 넣기
pop: 맨 뒤에서 빼기
Shift : 맨 앞에 넣기
unShift : 맨 앞에 빼기

JS 객체

객체 만들기
var p1 = {};
typeof p1; => "object"

### var vs let vs const

### 호이스팅
인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것

var로 선언한 변수의 경우 호이스팅 시 undefined로 변수를 초기화한다.
반면 let과 const로 선언한 변수의 경우 호이스팅 시 변수를 초기화하지 않는다.

한줄 정리 하자면, let과 const를 var 대신 사용함으로써 너무 유연해서 발생할 수 있는 호이스팅 시 undefined같은 문제를 방지할 수 있다. [참조 오류로 잡아준다!]