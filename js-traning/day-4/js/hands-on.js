// Task 1 — Grading system: const marks + if / else if / else (log grade)
// Bonus: if marks < 0 or > 100 → log "Invalid marks" only (no grade)

{
  const marks = 72;
  if (marks < 0 || marks > 100) console.log("Invalid marks");
  else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}
{
  const marks = 95;
  if (marks < 0 || marks > 100) console.log("Invalid marks");
  else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}
{
  const marks = 50;
  if (marks < 0 || marks > 100) console.log("Invalid marks");
  else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}
{
  const marks = 75;
  if (marks < 0 || marks > 100) console.log("Invalid marks");
  else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}
{
  const marks = 120;
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}
{
  const marks = -3;
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks >= 90) console.log(marks, "→ A");
  else if (marks >= 75) console.log(marks, "→ B");
  else if (marks >= 60) console.log(marks, "→ C");
  else console.log(marks, "→ F");
}

// Task 2 — Day type with switch (fall-through weekdays); test Monday, Saturday, Holiday
{
  const day = "Wednesday";
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log(day + " → Weekday");
      break;
    case "Saturday":
    case "Sunday":
      console.log(day + " → Weekend");
      break;
    default:
      console.log(day + " → Invalid day");
  }
}
{
  const day = "Monday";
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log(day + " → Weekday");
      break;
    case "Saturday":
    case "Sunday":
      console.log(day + " → Weekend");
      break;
    default:
      console.log(day + " → Invalid day");
  }
}
{
  const day = "Saturday";
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log(day + " → Weekday");
      break;
    case "Saturday":
    case "Sunday":
      console.log(day + " → Weekend");
      break;
    default:
      console.log(day + " → Invalid day");
  }
}
{
  const day = "Holiday";
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      console.log(day + " → Weekday");
      break;
    case "Saturday":
    case "Sunday":
      console.log(day + " → Weekend");
      break;
    default:
      console.log(day + " → Invalid day");
  }
}

// Task 3 — Truthy / falsy detective (guess in comment, then if/else)
// 0 — guess: falsy
if (0) console.log("0 → truthy");
else console.log("0 → falsy");

// "0" — guess: truthy (non-empty string)
if ("0") console.log('"0" → truthy');
else console.log('"0" → falsy');

// "" — guess: falsy
if ("") console.log('"" → truthy');
else console.log('"" → falsy');

// " " — guess: truthy (string with a space)
if (" ") console.log('" " → truthy');
else console.log('" " → falsy');

// null — guess: falsy
if (null) console.log("null → truthy");
else console.log("null → falsy");

// undefined — guess: falsy
if (undefined) console.log("undefined → truthy");
else console.log("undefined → falsy");

// NaN — guess: falsy (surprise: NaN is falsy)
if (NaN) console.log("NaN → truthy");
else console.log("NaN → falsy");

// [] — guess: truthy (empty array is object, truthy)
if ([]) console.log("[] → truthy");
else console.log("[] → falsy");

// {} — guess: truthy
if ({}) console.log("{} → truthy");
else console.log("{} → falsy");

// "false" — guess: truthy (non-empty string)
if ("false") console.log('"false" → truthy');
else console.log('"false" → falsy');

/*
The six falsy values in JavaScript (memorise):
  false, 0, "" (empty string), null, undefined, NaN
*/

// Bonus — guard clauses (refactor nested version)
/*
// Nested version — refactor this:
function canCommentNested(user) {
  if (user) {
    if (!user.isBanned) {
      if (user.age >= 13) {
        console.log("Comment allowed");
      }
    }
  }
}
*/

function canComment(user) {
  if (!user) {
    console.log("canComment: no user");
    return;
  }
  if (user.isBanned) {
    console.log("canComment: banned");
    return;
  }
  if (user.age < 13) {
    console.log("canComment: too young");
    return;
  }
  console.log("Comment allowed");
}

canComment({ name: "Aarav", age: 20, isBanned: false });
canComment({ name: "Riya", age: 25, isBanned: true });
canComment(null);
