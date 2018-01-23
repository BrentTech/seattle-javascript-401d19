Full Stack Front-End Back-End Problems:
=======================================
- trouble connecting to server
  - 400s, 404s
- what's up with that thunk module?
  - we wrote our own
  - perhaps we'll use that module in the future
  - we're using the one we wrote for now
- wait, what was thunk again?
  - our own custom-written middleware
  - purpose: intercepts actions
    - if they're a function
      - execute the function
      - give the function access to store, store.dispatch
    - if they're not a function
      - continue the middleware chain for the action
- refactoring the old back-end server
- refactoring the old models
  - changing model attibutes
  - renaming routes
  - changing what's sent back from routes
    - tailoring data for exactly what the front-end needs
- differences between DB models and Component relationships
  - Schools and students (one school, many students)
  - 
- Component lifecycle hooks
  - backend DB has school with a list of students
  - how do we load one school, and get it's students?
  - how should that even be modeled?
  - when should we grab that info from server in lifecycle
- get many vs get one

- GET ALL /schools
- GET ONE /schools/:id
- GET ALL /students
- GET ONE /students/:id

School
{name: 'Harvard', students: [abd324, 242dcdcd]}

School.find().populate('student')
{name: 'Harvard', students: [{name: 'Cindy'}, {name: 'Joe'}]}
