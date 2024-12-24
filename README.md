# Firebase Data Access Before Load Completion

This repository demonstrates a common error when using Firebase: attempting to access data from a document snapshot before the data has fully loaded.  The `bug.js` file showcases this issue, resulting in undefined behavior. The `bugSolution.js` file provides a corrected implementation that ensures data is accessed only after successful loading.

## How to Reproduce

1. Clone this repository.
2. Install Firebase: `npm install firebase`
3. Configure your Firebase project and replace placeholders in the code.
4. Run `bug.js`. Observe the error.
5. Run `bugSolution.js`. Observe the correct behavior.

## Solution

The core issue lies in asynchronous operations.  Always ensure your code handles the asynchronous nature of Firebase data retrieval.  Use `.then()` or `async/await` to access data only after the promise resolves.  Check `snapshot.exists` before accessing data to avoid errors when the document doesn't exist.