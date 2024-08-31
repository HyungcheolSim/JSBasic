우리는 이미 thumbBar 상수 내부에 thumb-bar <div>에 대한 참조를 저장하고, 새로운 <img> 요소를 생성하고, 그것의 src 어트리뷰트를 플레이스홀더 값 xxx로 설정하고, 그리고 thumbBar 내부에 이 새로운 <img> 요소를 추가하는 코드를 제공했습니다.

여러분은 다음을 할 필요가 있습니다:

5개의 모든 이미지를 순회하는 반복문 내부의 "Looping through images" 주석 아래에 코드 섹션 추가하기 — 여러분은 그저 5개의 숫자를 순회할 필요가 있는데, 각 숫자는 각각의 이미지를 나타냅니다.
각각의 반복에서, xxx 플레이스홀더 값을 각 경우의 이미지 경로와 동일한 문자열으로 대체하세요. 우리는 src 어트리뷰트의 값을 각 경우에서 이 값으로 설정하고 있습니다. 각 경우에서, 이미지는 이미지 디렉토리 내부에 있고 그것의 이름은 pic1.jpg, pic2.jpg 등등이라는 것을 기억해 두세요.
onclick 핸들러를 각 섬네일 이미지에 추가하기
각각의 반복에서, 여러분은 onclick 핸들러를 현재의 newImage에 추가할 필요가 있습니다 — 이 핸들러는 현재 이미지의 src 어트리뷰트의 값을 찾아야만 합니다. displayed-img <img>의 src 어트리뷰트 값을 매개변수로서 전달된 src 값으로 설정하세요.

그 대신에, 여러분은 섬네일 바에 하나의 이벤트 리스너를 추가할 수 있습니다.

어두워지게/밝게 하는 버튼을 실행하는 핸들러 작성하기
우리의 어두워지게/밝게 하는 <button>은 가만히 있습니다 — 우리는 이미 btn 상수에 <button>에 대한 참조를 저장하는 코드 라인을 제공했습니다. 여러분은 다음을 수행하는 onclick을 추가할 필요가 있습니다:

<button>에 설정된 현재 클래스명을 확인 — 여러분은 다시 이것을 getAttribute()를 사용함으로써 달성할 수 있습니다.
만약 클래스명이 "dark"라면, <button> 클래스를 "light"로 (setAttribute()를 사용하여), 이것의 텍스트 콘텐츠를 "Lighten"으로, 그리고 덮어씌운 <div>의 background-color를 "rgba(0,0,0,0.5)"로 변경.
만약 클래스명이 "dark"가 아니라면, <button> 클래스를 "dark"로, 이것의 텍스트 콘텐츠를 다시 "Darken"으로, 덮어씌운 <div>의 background-color를 "rgba(0,0,0,0)"로 변경.
다음의 코드 라인은 위의 2와 3에서 규정된 변화 달성에 대한 기초를 제공합니다.

js
Copy to Clipboard
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;