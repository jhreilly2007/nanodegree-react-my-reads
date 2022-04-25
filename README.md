# Udacity Nanodegree Project 1: MyReads: A Book Lending App

## Project Overview
A bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. A React application with an API server and client library to persist information as you interact with the application.

## Approach
I created this application using ``create-react-app`` I then added the starter code, provided by Udacity, to my project. 

Next I separated out the code into sections the following sections:
![image](https://user-images.githubusercontent.com/45285387/165129200-79db50ba-cee9-4bbb-9d8c-b6e4a8bb8888.png)

The homepage or '/'
![image](https://user-images.githubusercontent.com/45285387/165129720-ddc13ae5-3988-4bdf-a72d-6c8bc4faad5e.png)

Users can see the books they are currently reading, want to read or have read. User can also move books from shelf to shelf: 
![Screenshot (4)](https://user-images.githubusercontent.com/45285387/165130112-5490c04d-4010-4ef3-b06d-f107a9ad52b4.png)

User can use the search functionality to search for books: 
![image](https://user-images.githubusercontent.com/45285387/165130268-cc479482-5141-464d-81da-f7471841980b.png)

![image](https://user-images.githubusercontent.com/45285387/165130350-3af161a1-b1b9-4985-9502-11e3ceab1d2f.png)

![image](https://user-images.githubusercontent.com/45285387/165130436-a41f7ac1-ea7b-407e-8814-3108d4246762.png)

and a user can add any searched book to their bookshelves
![Screenshot (5)](https://user-images.githubusercontent.com/45285387/165130599-d07ca0a6-6380-48a5-8f36-987fb1496ed0.png)

## My approach
I broke the UI down visually into parts: 2 pages
Page 1 '/'
- (1)App.js is the top level manages state of the Library(all books on all shelves). A Library is passed as a prop to child components
  - <b>(2)Bookshelves :</b> that contain 3 shelves contain multiple:
  - <b>(3)Book</b> need a
  - <b>ShelfChanger</b>
  - 
  - ![image](https://user-images.githubusercontent.com/45285387/165132913-67274312-9132-40fc-9c00-f3dbc1b6767e.png)
 
  Page 2 '/search'
  Finally I added a specifc search component to manage the Search functionality
  - <b>Search</b>
  
 
## Run the project
To run this project, clone the repository from GitHub:

### Steps: 
1. $ git clone https://github.com/jhreilly2007/nanodegree-react-my-reads.git

2. to install project dependencies: ``npm install``

3. Start the server: ``npm start``

### All specifications as detailed in the Udacity project specifications have been met



