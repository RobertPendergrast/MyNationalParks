# MyNationalParks (FrontEnd)
Author: Robert Pendergrast

## Project Description
As a national parks lover, I have always wanted a tool to document each of my trips in America's national parks. I often spend weekends or even weeks backpacking the wilderness. One of my life goals is to visit every national park!

## Programing
This web application is written in JavaScript using the React.js framework. It also takes use of react-router to implement multiple pages. This will allow me to create new features at new domains as I add on to the project. 

## Home Page
The ./ directory is the app's home page, which appears as this:

<img width="1688" alt="Screenshot 2024-05-08 at 10 56 12 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/b16bce32-526e-4e36-894d-694fc2cf3b13">

One feature to note is the use of a NavBar, which allows for navigtion between the different areas of the site. 
The navbar is set up by the following code:

<img width="511" alt="Screenshot 2024-05-08 at 10 57 37 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/c174e890-063a-4d8d-8c42-ecded4418467">

## Journal Entries

The user is allowed to make journal entries, composed of the national park name, the start date and end dates or their trip, and a description of their trip:

<img width="493" alt="Screenshot 2024-05-08 at 10 58 36 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/a3dd303b-5068-4c52-b729-997017012b28">

This is done under the profile component, which takes advantage of the map function for each journal entry. Following Shivam's tutorial, I implemented axios for the integration with the backend.

<img width="553" alt="Screenshot 2024-05-08 at 11 02 07 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/8dac3d77-d89a-4a90-8caa-0afe302504d8">

<img width="609" alt="Screenshot 2024-05-08 at 11 02 24 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/feb60e30-5177-4c3e-ad46-09fb5e8ffbb3">

## Park Component
The park component represents each journal entry. When the user submits the form, a new park object is created. Each park is associated with a different image. 

<img width="847" alt="Screenshot 2024-05-08 at 10 59 46 PM" src="https://github.com/RobertPendergrast/WebDev/assets/121700465/7e1d4546-4634-4da2-a35f-0de8543c56bc">


## Future Plans
I want to implement the ability for the user to add images to their journal entries, and perhaps create an image carousel for each journal entry. I also want to add an additional page that tracks which parks the user has gone to, and which parks they have yet to visit. 
Finally, I want to implement a login feature, but I did not have time to do this during the final exam period. 
