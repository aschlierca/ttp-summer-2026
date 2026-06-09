# Assignment 04B: DOM II Workshop

## Goal

Build an interactive help queue that uses browser events, form submission, event bubbling, and event delegation. This workshop should make event handling feel less mysterious and prepare you for the interaction patterns you will see in React later.

## Objectives

You will practice:

- Listening for browser events with `addEventListener()`.
- Reading the event object, especially `event.type`, `event.target`, `event.currentTarget`, and `event.key`.
- Preventing default form submission with `event.preventDefault()`.
- Explaining event bubbling.
- Using event delegation to manage many child buttons from one parent listener.
- Using `stopPropagation()` deliberately for nested interactive elements.
- Creating DOM nodes in response to user input.
- Keeping UI state in JavaScript data and rendering from that data.

## Problem

Build **Help Queue**, a small classroom tool for tracking student support tickets during project work.

Students should be able to submit a help request, see it appear in the queue, update its status, mark it as resolved, remove it, and filter the visible tickets.

Create a folder named `help-queue` with the following files:

```text
help-queue/
  index.html
  styles.css
  script.js
```

## Required Interface

Your page must include:

- [ ] A valid HTML skeleton.
- [ ] A linked `styles.css`.
- [ ] A linked `script.js` using `defer`.
- [ ] A form with an id of `ticket-form`.
- [ ] A text input for student name.
- [ ] A select dropdown for topic, such as HTML/CSS, JavaScript, DOM, Git, or Other.
- [ ] A textarea for the question.
- [ ] A submit button.
- [ ] A section that displays queue stats.
- [ ] A filter control with buttons or a select menu for `all`, `open`, `in-progress`, and `resolved`.
- [ ] A ticket list container with an id of `ticket-list`.

Use labels for all fields. The name and question fields should be required.

## Data Model

In `script.js`, store tickets in an array. Each ticket object should have:

```js
{
  id: 1,
  name: "Sam",
  topic: "DOM",
  question: "Why is querySelector returning null?",
  status: "open",
  createdAt: "10:45 AM"
}
```

You may start with an empty array or seed the page with two sample tickets.

## Assignment Tasks

### Part 1: Form Submission

- [ ] Add a `submit` listener to `#ticket-form`.
- [ ] Use `event.preventDefault()`.
- [ ] Read values from the name input, topic select, and question textarea.
- [ ] Create a new ticket object.
- [ ] Add the ticket to the tickets array.
- [ ] Clear the form after a successful submission.
- [ ] Render the updated ticket list.

### Part 2: Rendering Tickets

Write a `renderTickets()` function that:

- [ ] Clears the current ticket list.
- [ ] Loops over the tickets array.
- [ ] Creates DOM elements for each ticket.
- [ ] Displays the student name, topic, question, status, and created time.
- [ ] Adds action buttons for:
  - `Start`
  - `Resolve`
  - `Delete`
- [ ] Stores the ticket id on each ticket element using a `data-id` attribute.
- [ ] Uses classes to visually distinguish ticket statuses.

Avoid building the whole ticket with one large `innerHTML` string. Practice `createElement()` and `textContent`.

### Part 3: Event Delegation

Add one click listener to `#ticket-list`.

Inside that listener:

- [ ] Log `event.target`.
- [ ] Log `event.currentTarget`.
- [ ] Ignore clicks that are not on action buttons.
- [ ] Find the closest ticket element.
- [ ] Read the ticket id from `data-id`.
- [ ] If the user clicks `Start`, change the ticket status to `in-progress`.
- [ ] If the user clicks `Resolve`, change the ticket status to `resolved`.
- [ ] If the user clicks `Delete`, remove the ticket from the array.
- [ ] Re-render the ticket list after each action.

This should keep working for tickets created after the page loads.

### Part 4: Bubbling and stopPropagation

Add a ticket details toggle:

- [ ] Clicking a ticket card should expand or collapse its question text.
- [ ] Clicking an action button inside the ticket should not also toggle the card.
- [ ] Use `event.stopPropagation()` on the action button path where appropriate.
- [ ] Be ready to explain why the action button click also counts as a click inside the ticket card.

### Part 5: Filters and Keyboard Events

Add filtering:

- [ ] The user can view all tickets.
- [ ] The user can view only open tickets.
- [ ] The user can view only in-progress tickets.
- [ ] The user can view only resolved tickets.
- [ ] The active filter has a visible selected style.

Add one keyboard feature:

- [ ] Pressing `Escape` clears the current filter back to `all`, or clears the form.
- [ ] Use `event.key` to detect the key.

### Part 6: Queue Stats

Render queue stats that update whenever tickets change:

- [ ] Total tickets.
- [ ] Open tickets.
- [ ] In-progress tickets.
- [ ] Resolved tickets.

## CSS Requirements

In `styles.css`, include:

- [ ] Clear layout for the form, stats, filters, and ticket list.
- [ ] Status styles for `open`, `in-progress`, and `resolved`.
- [ ] Button hover, focus, and disabled states.
- [ ] A responsive layout that works on mobile and desktop.
- [ ] A collapsed and expanded visual state for ticket details.

## Common Gotchas

- A form submit refreshes the page unless you call `preventDefault()`.
- `event.target` is the deepest element clicked. `event.currentTarget` is where the listener is attached.
- Event delegation depends on bubbling. This is why a listener on `#ticket-list` can hear button clicks inside tickets.
- If your button contains a span or icon later, `event.target` might be that nested element. Use `.closest("button")`.
- Data attributes are strings. Convert ids with `Number()` when comparing to numeric ids.
- Do not attach a new listener to every ticket during every render if delegation can solve it once.

## Industry Standards

- Keep state changes predictable: update the tickets array, then render.
- Use small helper functions such as `createTicketElement()`, `updateStats()`, and `setFilter()`.
- Use event delegation for repeated dynamic UI.
- Prefer `textContent` for user-submitted text.
- Make invalid form states obvious and friendly.
- Format your code with Prettier or your editor's format-on-save.

## Stretch Challenges

If you finish early:

- [ ] Add priority: low, medium, high.
- [ ] Sort high-priority tickets first.
- [ ] Add a search input that filters by student name or question text.
- [ ] Disable `Start` when a ticket is already in progress or resolved.
- [ ] Save tickets to `localStorage` so they remain after refreshing the page.
- [ ] Add a "clear resolved" button.

## Finished Checklist

Before submitting, verify:

- [ ] Submitting the form adds a ticket without refreshing the page.
- [ ] Start, Resolve, and Delete work on newly created tickets.
- [ ] Filtering works after ticket status changes.
- [ ] Ticket card clicks and action button clicks behave differently.
- [ ] The stats update correctly.
- [ ] The page loads with no console errors.
- [ ] Your code is formatted and readable.
- [ ] Your work has been committed and pushed to GitHub.
