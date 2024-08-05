const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * Array.length);
  return array[random];
}

const StoryText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener("click", result);

function result() {
  const oldStory = story.textContent;
  let newStory = setStory(oldStory);
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);
    
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
function setStory(oldStory) {
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let newStory = StoryText.replaceAll(':insertx:',xItem);
  newStory =newStory.replace(':inserty:',yItem).replace(':insertz:',zItem);
  // 기존 이야기와 같으면 재귀 호출
  return oldStory === newStory ? setStory(oldStory) : newStory;
}
