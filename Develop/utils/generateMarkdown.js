//Pull in user answers
const fs = require('fs')

fs.readFile('./readme.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
 })

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (data.license=='MIT'){
    badge= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

   } else if (data.license=='ISC'){
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
   else if (data.license=='None of the Above' || data.license==''){
    badge= '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
 }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license !=='')
  if (data.license=='MIT'){
    liscText= 'MIT License'
  +
  '  Copyright (c) [year] [fullname]'
    
  '  Permission is hereby granted, free of charge, to any person obtaining a copy'
  '  of this software and associated documentation files (the "Software"), to deal'
  '  in the Software without restriction, including without limitation the rights'
  '  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell'
  '  copies of the Software, and to permit persons to whom the Software is'
  '  furnished to do so, subject to the following conditions:'
  
  '  The above copyright notice and this permission notice shall be included in all'
  '  copies or substantial portions of the Software.'
  
  '  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR'
  '  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,'
  '  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE'
  '  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER'
  '  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,'
  '  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE'
  '  SOFTWARE.""'
} else if (data.license=='ISC'){
  liscText= 'ISC License'

  'Copyright (c) [year], [fullname]'
  
  'Permission to use, copy, modify, and/or distribute this software for any'
  'purpose with or without fee is hereby granted, provided that the above'
  'copyright notice and this permission notice appear in all copies.'
  
  'THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES'
  'WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF'
  'MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR'
  'ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES'
  'WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN'
  'ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF'
  'OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'

}  else if (data.license=='None of the Above'){
    liscText= 'None'
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.description}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits) 
  * [License](#license) 
  * [Badges](#badges)
  * [Features](#features)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

  ##License
  renderLicenseSection(license); 
  renderLicenseSection(license);

  ##Badges
  renderLicenseBadge(license);

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  For any questions please contact me with the information below:
  Github: [@${data.github}]
  Email: ${data.email}
  
`

;
}

module.exports = {
  generateMarkdown
 // renderLicenseBadge,
 // renderLicenseSection

};