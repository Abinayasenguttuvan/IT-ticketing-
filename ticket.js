

// ===== TICKET SYSTEM =====
let ticketCount = 1;
let ticketList = document.getElementById("ticketList");

document.getElementById("ticketForm").addEventListener("submit", function(e){
  e.preventDefault();

  let title = document.getElementById("title").value;
  let desc = document.getElementById("description").value;
  let priority = document.getElementById("priority").value;
  let dept = document.getElementById("department").value;

  let row = `
    <tr>
      <td>${ticketCount++}</td>
      <td>${title}</td>
      <td>${priority}</td>
      <td>Open</td>
      <td>${dept}</td>
    </tr>
  `;

  ticketList.innerHTML += row;

  this.reset();
});

// ===== SEARCH FILTER =====
document.getElementById("searchBox").addEventListener("keyup", function(){
  let search = this.value.toLowerCase();
  let rows = ticketList.getElementsByTagName("tr");

  for(let i = 0; i < rows.length; i++){
    let text = rows[i].innerText.toLowerCase();
    rows[i].style.display = text.includes(search) ? "" : "none";
  }
});
