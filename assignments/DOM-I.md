# Assignment 04A: DOM I Workshop

## Goal

Practice the core DOM loop: search for elements, traverse between related nodes, read and update content, create new elements, remove elements, and respond to simple user events.

## Objectives

You will practice:

- Using `document` as the entry point to the live page.
- Selecting elements with `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, and `querySelectorAll`.
- Converting DOM collections with `Array.from()` or spread syntax.
- Traversing with `children`, `parentElement`, `nextElementSibling`, and `previousElementSibling`.
- Updating text with `innerText` or `textContent`.
- Updating styles and classes with `style` and `classList`.
- Creating and appending elements with `createElement()` and `appendChild()`.
- Removing elements with `remove()`.
- Attaching basic event listeners with `addEventListener()`.

## Problem

Build a small interactive page called **Workshop Roster**. The page starts as static HTML, then JavaScript upgrades it into a useful roster tool.

Create a folder named `workshop-roster` with the following files:

```text
workshop-roster/
  index.html
  styles.css
  script.js
```

Your HTML should contain the initial roster, and your JavaScript should perform the required DOM updates after the page loads.

## Starter HTML Requirements

In `index.html`, create:

- [ ] A valid HTML skeleton.
- [ ] A linked `styles.css`.
- [ ] A linked `script.js` using `defer`.
- [ ] A `main` element with an id of `app`.
- [ ] A page heading.
- [ ] A section with an id of `roster-panel`.
- [ ] An unordered list with an id of `student-list`.
- [ ] At least five student list items.
- [ ] Each student item should have:
  - A class of `student-card`.
  - A `data-track` attribute with one of these values: `frontend`, `backend`, or `design`.
  - A child element containing the student's name.
  - A child element containing the student's track.
- [ ] A button with an id of `highlight-frontend`.
- [ ] A button with an id of `add-student`.
- [ ] A button with an id of `remove-last`.
- [ ] An empty section with an id of `stats-panel`.

Use fictional names. Do not use real student personal information.

## Assignment Tasks

Complete these tasks in `script.js`. Add comments that clearly label each part.

### Part 1: Select Elements

- [ ] Select `#app` without using `querySelector`.
- [ ] Select `#roster-panel` using `querySelector`.
- [ ] Select all `.student-card` elements using `getElementsByClassName`.
- [ ] Select all `.student-card` elements using `querySelectorAll`.
- [ ] Select the first student's name using a descendant selector.
- [ ] Log each selection to the console so you can inspect what was returned.

### Part 2: Collections and Arrays

- [ ] Convert the `.student-card` collection into a real array.
- [ ] Use `.map()` to create an array of student names.
- [ ] Log the array of names.
- [ ] Use `Array.isArray()` to prove your converted collection is a real array.

### Part 3: Read and Update the Page

- [ ] Change the page heading text to include the number of students.
- [ ] Add a class of `ready` to `#roster-panel`.
- [ ] Add a class of `featured` to the first student.
- [ ] Change the first student's track text to uppercase.
- [ ] Add a short summary sentence inside `#stats-panel`.

### Part 4: Traverse the DOM

Starting from the first `.student-card`:

- [ ] Find its parent element.
- [ ] Find its next sibling element.
- [ ] Add a class of `next-up` to that sibling.
- [ ] From the sibling, move back to the previous sibling and add a class of `checked`.
- [ ] Log the parent and sibling elements.

### Part 5: Create and Remove Elements

- [ ] Create a new `li` element.
- [ ] Give it the class `student-card`.
- [ ] Add a `data-track` value.
- [ ] Add child elements for the name and track.
- [ ] Append it to `#student-list`.
- [ ] Create a small `p` element that says when the roster was last updated.
- [ ] Append that paragraph to `#stats-panel`.
- [ ] Remove one existing student from the list using `.remove()`.

### Part 6: Add Basic Interactivity

Add event listeners so that:

- [ ] Clicking `#highlight-frontend` adds a highlight class to every student with `data-track="frontend"`.
- [ ] Clicking `#add-student` creates and appends a new student card.
- [ ] Clicking `#remove-last` removes the last student card.
- [ ] After adding or removing a student, the heading and stats update to show the current count.

## CSS Requirements

In `styles.css`, include:

- [ ] Base styles for the page.
- [ ] A readable card style for `.student-card`.
- [ ] Distinct visual styles for `.ready`, `.featured`, `.next-up`, `.checked`, and your frontend highlight class.
- [ ] Button hover and focus styles.
- [ ] A responsive layout that keeps the roster readable on mobile and desktop.

## Common Gotchas

- `querySelector()` returns one element. `querySelectorAll()` returns a collection.
- `getElementsByClassName()` returns an `HTMLCollection`, not a real array.
- If you add or remove elements, reselect or recalculate when you need the newest list.
- `firstChild` may return a text node caused by whitespace. For this workshop, prefer `children` or `firstElementChild`.
- `innerHTML` can create security problems when used with user input. Prefer `createElement()` and `textContent` for this assignment.
- `script.js` should be linked with `defer` so the DOM exists before your script runs.

## Industry Standards

- Store repeated DOM selections in variables with clear names.
- Write helper functions for repeated behavior, such as updating counts.
- Prefer `textContent` when setting plain text.
- Prefer classes for visual state instead of setting many inline styles in JavaScript.
- Keep JavaScript behavior in `script.js`, CSS in `styles.css`, and structure in `index.html`.

## Stretch Challenges

If you finish early:

- [ ] Add a dropdown filter for track.
- [ ] Add a text input that lets the user type a new student's name.
- [ ] Prevent empty names from being added.
- [ ] Add a "clear highlights" button.
- [ ] Show counts by track: frontend, backend, and design.

## Finished Checklist

Before submitting, verify:

- [ ] The page loads with no console errors.
- [ ] All required DOM methods are used at least once.
- [ ] Buttons work after students are added or removed.
- [ ] The visual state classes are visible.
- [ ] Your code is formatted and readable.
- [ ] Your work has been committed and pushed to GitHub.
