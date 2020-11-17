# Agile Board

## Running the application

- `git clone https://github.ibm.com/JVines/agile-board.git`
- `npm install`
- `npm start`

## Time saving decisions

- Used local storage for state persistence opposed to a MS and DB to save time.
- Did not add functionality to add multiple comments, but functionality to display multiple comments is present.
- No consideration for accessibility and screen readers.

## Improvements

- Styling - implemented a simple design to demonstrate working concept.
- Implement persistent storage using a database.
- Change state management model, so lists are simply key value stores, where the value is the id of a task opposed to the entire task object.
- Consider if using context to store the tasks makes more sense when a wider range of components require access to the list of tasks.

## The board would also benefit from a wide range of UX enhancements/additions including

- ability to edit tasks.
- ability to choose which column to add the card to when creating a task.
- ability to delete cards.
- ability to archive tasks.
- support for multiple users.
