# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: We first need to set up the realtionship. the foreign key must be part of the student model and its going to be named cohort_id. We need to create a migration file to to add the column then migrate it.

Researched answer:Generate a migration in Rails to add the foreign key column. Inside the migration file, we need to add the code to create the foreign key column.After generating the migration and adding the column definition, you can run the migration.

2. Which RESTful routes must always be passed params? Why?

Your answer: The create and update. The reasons is we are creating and updating a new instance and we set up requiered param that the user must provide

Researched answer:POST route: This route is used for creating a new resource on the server.PUT/PATCH route: These routes are used for updating an existing resource on the server.GET route with query parameters: While not required, it is common to include query parameters in a GET request to retrieve specific data or filter the results. DELETE route with path parameters: The DELETE route is used for deleting a specific resource from the server.These routes require parameters to provide the necessary information to perform the desired action on the server. 

3. Name three rails generator commands. What is created by each?

Your answer:$rails g model => creates a new model. $rails g migration => creates a new migration file. 

Researched answer:rails generate model: This command is used to generate a new model in Rails.rails generate controller: This command is used to generate a new controller in Rails.rails generate scaffold: This command is used to generate a complete set of resources for a specific model in Rails.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
Read => Gets all students

action: "POST" location: /students
Create => create a new instance of students

action: "GET" location: /students/new
Read => reads the form to create a new student 

action: "GET" location: /students/2
Read => it reads an instance of students with an id of 2

action: "GET" location: /students/2/edit
Read => it reads the form to edit the student at id of 2

action: "PATCH" location: /students/2
Update => it updates the student with the id 2

action: "DELETE" location: /students/2
Destroy => it destroys the student with id of 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

    As a user, I want to be able to create a new to-do item with a title and description.
    
    As a user, I want to be able to mark a to-do item as completed.
    
    As a user, I want to be able to view a list of all my to-do items.
    
    As a user, I want to be able to edit the title or description of a to-do item.
    
    As a user, I want to be able to set a due date for a to-do item.
    
    As a user, I want to be able to prioritize my to-do items by assigning them a priority level (e.g., high, medium, low).
    
    As a user, I want to be able to categorize my to-do items into different lists or categories (e.g., work, personal, shopping).
    
    As a user, I want to be able to search for specific to-do items based on keywords or tags.
    
    As a user, I want to be able to receive notifications or reminders for approaching due dates of my to-do items.
    
    As a user, I want to be able to delete a to-do item once it is no longer relevant or completed.