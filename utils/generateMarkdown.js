function generateMarkdown(userResponses) {
  let draftTable = `## Table of Contents`;

  if (userResponses.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftTable += `
  * [Contributions](#contributions)` };

  if (userResponses.tests !== '') { draftTable += `
  * [Tests](#tests)` };

}
module.exports = generateMarkdown;