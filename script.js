// handle form submission
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  event.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const date = form.date.value;
  const time = form.time.value;

  // add appointment to table
  const appointments = document.querySelector("#appointments");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${date}</td>
    <td>${time}</td>
  `;
  appointments.appendChild(row);

  // reset form
  form.reset();
});
