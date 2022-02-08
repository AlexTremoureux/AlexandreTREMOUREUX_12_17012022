[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) 


# Project 12 - SportSee, sports analytics Dashboard

This repo contains all the source code for the sports analytics dashboard SportSee.

## Technologies
- JS
- CSS 
- React
- Recharts

## Author

Alexandre TREMOUREUX

## 1. General Information

Primary, to start the project, you must start https://github.com/AlexTremoureux/AlexandreTREMOUREUX_12_17012022-API, this repo contains all the source code to run the micro API. Refer to the documentation of this API to launch the project.

## 2. Project

### 2.1 Prerequisites

- [NodeJS] (https://nodejs.org/en/)
- [Yarn] (https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### 2.2 Install the API

- Fork the repository: https://github.com/AlexTremoureux/AlexandreTREMOUREUX_12_17012022-API
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.


### 2.2 Install the project

- Fork the repository (with branch main)
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies:
- The `npm start` command will allow you to run the micro API:
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    The page will reload when you make changes.\
    You may also see any lint errors in the console.


## 3. Endpoints

### 3.1 Possible endpoints

This project includes four endpoints that you will be able to use: 

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 3.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## 4. Documentation

- Link Figma : https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1
- Kanban Notion :  https://www.notion.so/openclassrooms/Copy-of-Dev4U-projet-Learn-Home-6686aa4b5f44417881a4884c9af5669e
