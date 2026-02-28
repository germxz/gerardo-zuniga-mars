const body = document.body;
//////===Copyright Section===//////
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 Gerardo Zuniga ${thisYear}`;
footer.appendChild(copyright);

/////=== Skills section===////////
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
const skillsSection = document.getElementById("Skills"); // select skills section by id
const skillsList = skillsSection.querySelector("ul");

//Loop through skills and create list items for each skill
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

/////=== Message handling===//////
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;
  console.log(userName, userEmail, userMessage);

  //// DISPLAY MESSAGES ///
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul"); // adds messages to <ul> in messages section
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href= mailto: ${userEmail}> ${userName}</a> <span> wrote: ${userMessage} </span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  removeButton.appendChild(newMessage);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

//=== Fetching GitHub repos ===//////

fetch("https://api.github.com/users/germxz/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (repositories) {
    console.log("repositories", repositories);

    //code to get the projects section and create list items for each repository
    const projectSection = document.getElementById("Projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(function (error) {
    console.log("error", error);
  });
