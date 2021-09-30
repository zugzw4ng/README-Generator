function generateMarkdown(userInput) {
  let draftTable = `## Table of Contents`;

  if (userInput.installation !== '') {
    draftTable += `
  * [Installation](#installation)` };

  if (userInput.usage !== '') {
    draftTable += `
  * [Usage](#usage)` };

  if (userInput.contributions !== '') {
    draftTable += `
  * [Contributions](#contributions)` };

  if (userInput.tests !== '') {
    draftTable += `
  * [Tests](#tests)` };

  let draftMarkdown =
    `# ${userInput.title}
  
  ## Description 

  ${userInput.description}
  `
  draftMarkdown += draftTable;

  draftMarkdown += `
  * [License](#license)`;

  if (userInput.installation !== '') {

    draftMarkdown +=
      `
  
  ## Installation
  
  ${userInput.installation}`
  };

  if (userInput.usage !== '') {

    draftMarkdown +=

      `
  
  ## Usage 
  
  ${userInput.usage}`
  };

  if (userInput.contributions !== '') {
    `
  
  ## Contributions
  
  ${userInput.contributions}`
  };

  if (userInput.tests !== '') {
    draftMarkdown +=
      `

  ## Tests
  
  ${userInput.tests}`
  };

  draftMarkdown +=
    `

  ## License
  
  ${userInput.license}
  `;

  // Return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;