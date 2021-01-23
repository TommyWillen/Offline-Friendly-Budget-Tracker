# Offline Friendly Budget Tracker App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Description

This app utilizes express server side technology, MongoDB, IndexDB, and Service workers to create a budget tracking app for users to add and store funds on a server. Click [here]() to view the deployed app.

## Table of Contents
    
- [Description](#description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Questions](#Questions)
    
## Installation
    
To install dependencies you need to perform npm i
You will also need to have MongoDB running to store the DB data
    
## Usage

![Budget-Tracker-functionality-gif](/public/assets/images/budget-tracker-gif.gif)
    
To use this app you will need to install the dependencies using node.js. This app uses MongoDB to store information to the server for budget information. The budget is then displayed in a nifty graph using chart.js. The coolest feature is that this application can be used even while offline. To manage this I incorporated a service worker to cache the site to allow the user to view the pages offline and included indexDB so the user can store the information on their browser to post it once the internet is restored. 

I would like to eventually include a way to allow users to create their own username/password interface so they can see/edit their personal/private budget because the current iteration only allows for one user and does not have any security attached to their budget information.

Click the image below to view the video tutorial for the app.

[![Budget-Tracker-tutorial](/public/assets/images-and-gifs/budget-tracker-homepage.png)]()

## License
    
The project is covered under the MIT license.
    
## Contributing
    
This is an open source application and welcome for contribution. If you would like to contribute, you can fork my repo and submit any pull request for any features you would like added.    
Contributions are protected by the contributor covenant V2.0. If you have any new features you would like to see added or want to report abuse please contact me at tommywillen12@gmail.com 
Click [here](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) for more information regarding contributor covenant V2.0.
    
## Questions
    
GitHub Profile: [TommyWillen](https://github.com/TommyWillen)

Email: tommywillen12@gmail.com