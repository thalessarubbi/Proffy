<h1 align="center">
    <img alt="Proffy" src="assets/images/banner.svg" />
    <br>
    Proffy
    <br>
    <img src="https://img.shields.io/github/issues/thalessarubbi/Proffy" />
    <img src="https://img.shields.io/github/forks/thalessarubbi/Proffy" />
    <img src="https://img.shields.io/github/stars/thalessarubbi/Proffy" />
    <img src="https://img.shields.io/github/license/thalessarubbi/Proffy" />
</h1>

<div align="center">
    <h4 style="margin-bottom: 0;"> 🏁  Finished.  🏁</h4>
    <h5 style="margin-top: 0;">(for now)</h5>
</div>

<p align="center">Proffy is a project developed at the NLW(next level week) 2 program of Rocketseat company using Node.js, React and React Native.</p>

<p align="center">
 <a href="#-goal">Goal</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-features">Features</a> • 
 <a href="#-requirements">Requirements</a> • 
 <a href="#%EF%B8%8F-runing-project-%EF%B8%8F">Running project</a> • 
 <a href="#-technologies">Technologies</a> • 
 <a href="#%EF%B8%8F-author">Author</a>
</p>

## 🎯 Goal

<p align="center">Proffy is a project developed to help teachers from several subjects connect with students who want to learn them.</p>

## 🎨 Layout
### 🕸 Web

<div align="center">
    <img width="98.5%" alt="Proffy home web" src="assets/images/web/home-web.svg" />
</div>

<div align="center">
    <img width="49%" alt="Proffy form web" src="assets/images/web/form-web.svg" />
    <img width="49%" alt="Proffy list web" src="assets/images/web/list-web.png" />
</div>

### 📱 Mobile

<div align="center">
    <img width="33%" alt="Proffy favorites mobile" src="assets/images/mobile/favorites-mobile.png" />
    <img width="33%" alt="Proffy home mobile" src="assets/images/mobile/home-mobile.svg" />
    <img width="33%" alt="Proffy barber study mobile" src="assets/images/mobile/study-mobile.svg" />
</div>

## 🎩 Features

### Class
- [x] Search for classes by week day, subject and time
- [x] Create class

### Connection
- [x] List number of connections between teacher and student
- [x] Create connection between teacher and student

### Student(only on mobile)
- [x] Add teacher to list of favorites
- [x] Remove teacher from list of favorites
- [x] List favorite teachers

## 👨🏻‍🔬 Requirements

Before we begin, you'll need to have the following dependencies installed:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).
Besides, it would be great that you have a code editor to work on this project, such as [VSCode](https://code.visualstudio.com/).

## 🏃‍♀️ Runing project 🏃‍♂️

### ⚠️ Attention ⚠️ ###
#### To run the mobile app It's important that you change the 'baseURL' value to your IP address in [this](mobile/src/services/api.ts) file.

### 🕵️‍♀️ Hint 🕵️‍♂️ ###
#### You can also access the Insomnia file below to check for api features and how to use them.
<p align="center">
    <a href="assets/insomnia/Insomnia-Proffy.json">
        <img src="https://img.shields.io/badge/-insomnia-5849BE?style=for-the-badge&logo=Insomnia&logoColor=white" />
    </a>
</p>

```bash
#### Start sever ####

# Clone the repo
$ git clone <https://github.com/thalessarubbi/Proffy.git>

# Access project folder from a terminal
$ cd Proffy

# Go to server folder
$ cd server

# Install dependencies
$ yarn

# run api on dev mode
$ yarn start

# The server will start at port :3333 - access <http://localhost:3333>


#### Start web app ####

# Access project folder from a terminal
$ cd Proffy

# Go to web folder
$ cd web

# Install dependencies
$ yarn

# run web ap on dev mode
$ yarn start

# The web app will start at port :3000 - access <http://localhost:3000>


#### Start mobile app ####

# Access project folder from a terminal
$ cd Proffy

# Go to mobile app folder
$ cd mobile

# Install dependencies
$ yarn

# run mobile app on real device(you'll need to have an Expo client app installed in your device - <https://expo.io/tools#client>)
$ yarn start

# Your browser will open with an available QrCode.
# Scan the QrCode and the Expo client app will open with your project running

# run mobile app on iOS emulator(you'll need to be on a MacOS)
$ yarn start ios

# run mobile app on android emulator
$ yarn start android

# The mobile app will start in an emulator
```

## 🛠 Technologies

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQlite](https://www.sqlite.org/index.html)
- [Knex.js](http://knexjs.org/)
- [Axios](https://github.com/axios/axios)
- [Expo](https://expo.io/)
- [VS Code](https://code.visualstudio.com/)

## ✍️ Author
---
<br />
<img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/4613797?s=460&u=0dea595bfe97ee91a926f06a3fb2040893d58456&v=4" width="100px;" alt=""/>
<br />
<sub><b>Thales Sarubbi</b></sub>


Made with 💙 by Thales Sarubbi 🗣 Let's talk!


[![Linkedin Badge](https://img.shields.io/badge/-Thales%20Sarubbi-26c3eb?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thales-sarubbi/)](https://www.linkedin.com/in/thales-sarubbi/) 
[![Gmail Badge](https://img.shields.io/badge/-thalessarubbi@gmail.com-26c3eb?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:thalessarubbi@gmail.com)](mailto:thalessarubbi@gmail.com)
