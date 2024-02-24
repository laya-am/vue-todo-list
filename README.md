# task

Project: Enhanced To-Do List Application
Objective
Create a to-do list application that allows users to manage their tasks effectively. The application will fetch tasks from a fake REST API (JSONPlaceholder), allowing users to perform CRUD operations. It will also feature multiple views navigated through Vue Router.

Key Features
Task Management

View all tasks fetched from JSONPlaceholder.
Add a new task and post it to JSONPlaceholder.
Edit an existing task and update it on JSONPlaceholder.
Delete a task and remove it from JSONPlaceholder.
Toggle task completion status.
Routing

A home page listing all tasks.
A task detail page for adding/editing tasks.
Use Vue Router to navigate between the home page and the task detail page.
API Integration

Utilize JSONPlaceholder to mimic backend CRUD operations for tasks.
User Interface
Home Page
Displays a list of tasks with a brief overview (e.g., title, completed status).
Buttons or links to add a new task, edit, or delete an existing task, and toggle the completion status of a task.
Task Detail Page
A form to add a new task or edit an existing task.
Fields include the task title and a checkbox for the completion status.
Submit button to save the task, which then redirects the user back to the home page.
Technical Specifications
Vue 3 Framework: Utilize Vue 3 features including the Composition API for managing state and logic.
Vue Router: For handling navigation between the home page and the task detail page.
Axios or Fetch API: For making HTTP requests to JSONPlaceholder.
Responsive Design: Ensure the application is usable on both desktop and mobile devices.

# vue-todo-list

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
