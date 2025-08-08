const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});



const projectsData = [
  {
    name: "FullStack Thread Clone",
    description: "A modern full-stack social thread app using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "#",
    image: "screenshot1.png"
  },
  {
    name: "Curve Network UI",
    description: "Landing page with auth, dynamic stats and investment highlights.",
    tech: ["Next.js", "Tailwind", "Firebase"],
    github: "#",
    image: "screenshot2.png"
  },
  // Add more projects as needed
];

let currentProject = 0;

function renderProject(index) {
  const project = projectsData[index];
  document.querySelector(".project-name").textContent = project.name;
  document.querySelector(".project-description").textContent = project.description;
  document.querySelector(".tech-stack").innerHTML = project.tech.map(t => `<li>${t}</li>`).join("");
  document.querySelector(".github-btn").href = project.github;
  document.querySelector(".project-preview img").src = project.image;
}

document.getElementById("prevProject").onclick = () => {
  currentProject = (currentProject - 1 + projectsData.length) % projectsData.length;
  renderProject(currentProject);
};

document.getElementById("nextProject").onclick = () => {
  currentProject = (currentProject + 1) % projectsData.length;
  renderProject(currentProject);
};

// Initial render
renderProject(currentProject);
