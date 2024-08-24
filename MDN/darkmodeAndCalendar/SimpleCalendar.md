# 간단한 달력 만들기
- 유저가 여러 달을 고를 수 있게 하는 <select> 요소
- <select> 메뉴에서 선택된 값이 변경되었을 떄를 탐지하는 onChange 이벤트 핸들러
- h1 요소에 올바른 달을 표시하고 달력을 생성하는 createCalendar() 함수

### HINT 
onchange 핸들러 함수 내에 조건문 작성. 위치는 //ADD CONDITIONAL HERE 주석 아래
조건문 조건
1. 선택된 달 보기 choice 변수 안에 저장되어 있습니다. 이것은 값이 변경된 이후에 <select> 요소 값일 것이다.(ex January)
2. days 변수를 선택된 달의 일수와 동일하게 설정. 1년의 각 달의 일수를 알아야 한다. 윤년 무시 가능.

