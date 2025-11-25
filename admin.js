
// Sample data
const users = [
  {name:'Abinaya S', email:'abinaya@stackly.com', role:'User', status:'Active'},
  {name:'John Doe', email:'john@stackly.com', role:'Technician', status:'Active'},
  {name:'Priya R', email:'priya@stackly.com', role:'Admin', status:'Active'}
];

const tickets = [
  {id:'TCK-00124', issue:'VPN timeout', priority:'High', assignee:'Unassigned', status:'Open'},
  {id:'TCK-00122', issue:'Printer offline', priority:'Low', assignee:'John Doe', status:'Resolved'},
  {id:'TCK-00120', issue:'Email sync issue', priority:'Medium', assignee:'Priya R', status:'In Progress'}
];

// Populate Users table
const usersTableBody = document.querySelector('#usersTable tbody');
const ticketsTableBody = document.querySelector('#ticketsTable tbody');

function renderUsers(){
  usersTableBody.innerHTML = users.map(u => `
    <tr>
      <td>${u.name}</td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td>${u.status}</td>
      <td>
        <button class="btn" onclick="editUser('${u.email}')"><i class="fa fa-pen"></i></button>
        <button class="btn ghost" onclick="deactivateUser('${u.email}')"><i class="fa fa-user-slash"></i></button>
      </td>
    </tr>
  `).join('');
}

// Populate Tickets table
function renderTickets(){
  ticketsTableBody.innerHTML = tickets.map(t => `
    <tr onclick="openTicket('${t.id}')">
      <td>${t.id}</td>
      <td>${t.issue}</td>
      <td>${t.priority}</td>
      <td>${t.assignee}</td>
      <td>${t.status}</td>
    </tr>
  `).join('');
}

function editUser(email){
  const u = users.find(x=>x.email===email);
  const newRole = prompt('Change role for ' + u.name, u.role);
  if(newRole) { u.role = newRole; renderUsers(); alert('Role updated'); }
}
function deactivateUser(email){
  if(!confirm('Deactivate user?')) return;
  const u = users.find(x=>x.email===email);
  u.status = 'Inactive';
  renderUsers();
}

// Open ticket (link to details page)
function openTicket(id){
  // For demo, navigate to ticket-details.html (you can pass id via querystring)
  window.location.href = 'ticket-details.html?id=' + encodeURIComponent(id);
}

// Charts (using Chart.js)
function initCharts(){
  // Priority chart (doughnut)
  const ctx = document.getElementById('priorityChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Low','Medium','High','Critical'],
      datasets: [{ data: [12, 20, 8, 2], backgroundColor: ['#60a5fa','#7dd3fc','#f97316','#ef4444'] }]
    },
    options: { plugins: { legend:{position:'bottom'} } }
  });

  // Trend chart (line)
  const ctx2 = document.getElementById('trendChart').getContext('2d');
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Nov 18','Nov 19','Nov 20','Nov 21','Nov 22','Nov 23','Nov 24'],
      datasets: [{ label:'Created', data:[5,8,12,7,9,6,11], tension:0.35, borderColor:'#4f46e5', fill:true, backgroundColor:'rgba(79,70,229,0.08)'}]
    },
    options: { plugins:{legend:{display:false}}}
  });
}

// Global search (users + tickets)
document.getElementById('globalSearch')?.addEventListener('input', function(e){
  const q = this.value.toLowerCase();
  // filter tables by hiding rows (simple)
  [...document.querySelectorAll('#usersTable tbody tr')].forEach(tr=>{
    tr.style.display = tr.innerText.toLowerCase().includes(q) ? '' : 'none';
  });
  [...document.querySelectorAll('#ticketsTable tbody tr')].forEach(tr=>{
    tr.style.display = tr.innerText.toLowerCase().includes(q) ? '' : 'none';
  });
});

// init
renderUsers();
renderTickets();
initCharts();
