let repoUrl = "";

const projUl = document.querySelector("#projects");

fetch("https://api.github.com/users/axlengblom/repos")
  .then((response) => response.json())
  .then((projects) => {
    for (project in projects) {
      projUl.insertAdjacentHTML(
        "beforeend",
        "<li><a href = '" +
          projects[project].html_url +
          "' target='_blank'>" +
          projects[project].name +
          " (" +
          projects[project].language +
          ")</a></li>"
      );
    }
  });
