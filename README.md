Todo List API (NestJS Mini-Project)
A RESTful API for managing tasks and categories, built with NestJS to demonstrate core concepts like Controllers, Services, Modules, Dependency Injection, and DTO Validation.


🚀 Features
✅ Task Management – Create, read, update, and delete tasks
✅ Category Support – Organize tasks into categories
✅ Data Validation – Enforce correct input using class-validator
✅ Error Handling – Custom exceptions (e.g., NotFoundException)
✅ Modular Structure – Clean separation of concerns


Project Structure
src/
├── tasks/
│   ├── tasks.controller.ts      # HTTP request handling
│   ├── tasks.service.ts         # Business logic
│   ├── tasks.module.ts          # Dependency management
│   ├── dto/                     # Data Transfer Objects
│   │   ├── create-task.dto.ts   # Validation for task creation
│   │   └── update-task.dto.ts   # Validation for task updates
│   └── entities/
│       └── task.entity.ts       # Task data model
├── categories/                  # Category module (similar structure)
└── app.module.ts                # Root module


API Endpoints
Tasks
Endpoint	Method	Description
/tasks	GET	Get all tasks (filterable)
/tasks/:id	GET	Get a single task by ID
/tasks	POST	Create a new task
/tasks/:id	PATCH	Partially update a task
/tasks/:id	DELETE	Delete a task

Categories
Endpoint	Method	Description
/categories	GET	List all categories


Clone the repository:
git clone https://github.com/your-username/todo-api.git
cd todo-api


Install dependencies:
npm install


Run the application:
npm run start:dev
The API will be available at http://localhost:3000.


Example Requests:
Create a Task:
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn NestJS",
    "categoryId": 1
  }'


Get All Tasks:
curl http://localhost:3000/tasks


Update a Task:
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{
    "isCompleted": true
  }'


Testing:
Run unit tests with:
npm run test


Technologies Used
NestJS – Backend framework
TypeScript – Static typing
class-validator – Request validation
Jest – Testing


License
MIT


Contact
Have questions or suggestions?
Email: ademuyiwaikotun@hotmail.com