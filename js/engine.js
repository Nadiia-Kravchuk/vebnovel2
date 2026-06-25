const game = document.getElementById("game");
const character = document.getElementById("character");
const speaker = document.getElementById("speaker");
const text = document.getElementById("text");
const choices = document.getElementById("choices");

let currentScene = "start";

function showScene(sceneId) {
  const scene = story[sceneId];

  if (!scene) {
    console.error("Сцена не знайдена:", sceneId);
    return;
  }

  currentScene = sceneId;

  game.style.backgroundImage = `url('${scene.background}')`;

  if (scene.character) {
    character.src = scene.character;
    character.style.display = "block";
  } else {
    character.style.display = "none";
  }

  speaker.textContent = scene.speaker;
  text.textContent = scene.text;

  choices.innerHTML = "";

  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}
