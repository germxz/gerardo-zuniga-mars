const body = document.body;
//////===Copyright Section===//////
const footer = document.createElement("footer"); //create footer
body.appendChild(footer); //append footer to body (bottom)

// Create a new date object
const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p"); // creates <p></p> for `copyright`

//set the inner html with the copyright sympbol , your name, and year

copyright.innerHTML = `\u00A9 Gerardo Zuniga ${thisYear}`;
footer.appendChild(copyright); // append <p> to the footer
//////////////////////////////////////////////////////////////

/////=== Skills section===////////
const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsSection = document.getElementById("Skills"); // select skills section by id

//Unordered list
const skillsList = skillsSection.querySelector("ul");

//Loop through skills and create list items for each skill
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
