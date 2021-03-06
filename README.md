# Rare Books - Inventory Solution

Overview: A business, Rare Books, needs a way of viewing and tracking their inventory. This needs to be segmented by permission and role. Managers should have access to all functions including adding, editing, and deleting books and employees. Other employees should be able to edit books and add, but not delete. They should be able to only view other employees. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Managers should be able to:

- View the book list, add new book, edit preexisting books, and delete book
- View grid of employees, add new employee, and delete employee

### Log In

- Manager - Email: manager@rarebooks.com; Password: 12345
- Employee - Email: employee@rarebooks.com; Password: 67890

### Screenshot

![alt text](images/landingpage.png "Screenshot of landing page")
![alt text](images/login.png "Log In screen")
![alt text](images/managerwelcome.png "Manager welcome screen")
![alt text](images/books.png "Manager book screen")
![alt text](images/employeetable.png "Manager employee screen")

### Links

- Solution URL: [My solution](https://github.com/ebukaohiomoba/rare-bookstore-app)
- Live Site URL: [My live site](https://ebukaohiomoba.github.io/rare-bookstore-app/)

## My process

### Built with

- Javascript ES6
- CSS custom properties
- Flexbox
- CRUD operations
- Semantic HTML5 markup



### What I learned

I learned and applied CRUD operations. It was also a great opportunity to practice CSS Grid and improve my knowledge of styling. 

```CSS Grid
.card-container{
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    }
```


### Continued development

My next step is to transform this project into a React app. The objectives would remain the same as well as the final product, but it will be built using React. Furthermore, as I grow comforatble with making API calls, I will be linking the book and employee tables to databases where the tables will be populated by a database. 

### Useful resources

- [Example resource 1](https://www.freecodecamp.org/news/a-step-by-step-guide-to-getting-started-with-html-tables-7f43b18f962b/) - This helped me with HTML tables with providing a good baseline 

## Author

- Twitter - [@eohiomoba](https://www.twitter.com/eohiomoba)


## Acknowledgments

I would like to thank the amazing TechBridge program including the instructors and the teaching assistants that provided help and mentorship for me as I put this project together. This has been a long journey to getting this project ready, and I am thankful to my TechBridge community for providing me with guidance throughout the program. 
