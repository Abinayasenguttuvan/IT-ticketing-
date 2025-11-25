

// SIMPLE TICKET STATE (simulate server)
let ticket = {
  id: 'TCK-00124',
  status: 'Open',           // Open | In Progress | Resolved | Closed
  priority: 'High',
  assignee: null,
  description: document.getElementById('ticketDescription').innerText.trim(),
};

// ELEMENTS
const statusPill = document.getElementById('statusPill');
const priorityLabel = document.getElementById('priorityLabel');
const assigneeLabel = document.getElementById('assigneeLabel');
const closeBtn = document.getElementById('closeBtn');
const reopenBtn = document.getElementById('reopenBtn');
const escalateBtn = document.getElementById('escalateBtn');
const editBtn = document.getElementById('editBtn');
const assignBtn = document.getElementById('assignBtn');
const timelineEl = document.getElementById('timeline');
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');

// helper to render status pill
function renderStatus() {
  const s = ticket.status;
  statusPill.className = 'status-pill';
  statusPill.classList.add(
    s === 'Open' ? 'status-open' :
    s === 'In Progress' ? 'status-inprogress' :
    s === 'Resolved' ? 'status-resolved' :
    'status-closed'
  );
  statusPill.innerText = s;

  // show/hide buttons
  if (s === 'Closed') {
    closeBtn.style.display = 'none';
    reopenBtn.style.display = 'block';
  } else {
    closeBtn.style.display = 'inline-block';
    reopenBtn.style.display = 'none';
  }
}

// add entry to timeline
function addTimelineEntry(actor, text) {
  const now = new Date();
  const timeStr = now.toLocaleString('en-GB', { month: 'short', day: '2-digit', year: 'numeric', hour:'2-digit', minute:'2-digit' });
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `
    <div class="time">${timeStr}</div>
    <div class="entry">
      <div class="entry-head"><strong>${actor}</strong></div>
      <div class="entry-body">${text}</div>
    </div>
  `;
  timelineEl.insertBefore(item, timelineEl.firstChild);
}

// initial render
priorityLabel.innerText = ticket.priority;
assigneeLabel.innerText = ticket.assignee || 'Unassigned';
renderStatus();

// ASSIGN BUTTON (simple prompt simulation)
assignBtn?.addEventListener('click', () => {
  const name = prompt('Assign ticket to (enter username):', 'helpdesk.john');
  if (name) {
    ticket.assignee = name;
    assigneeLabel.innerText = name;
    addTimelineEntry('System', `Assigned to ${name}`);
    alert(`Ticket assigned to ${name}`);
  }
});

// CLOSE BUTTON
closeBtn?.addEventListener('click', () => {
  if (!confirm('Mark ticket as Resolved and Close?')) return;
  ticket.status = 'Closed';
  renderStatus();
  addTimelineEntry('Support', 'Ticket closed (Resolved).');
  alert('Ticket closed.');
});

// REOPEN BUTTON
reopenBtn?.addEventListener('click', () => {
  ticket.status = 'Open';
  renderStatus();
  addTimelineEntry('Support', 'Ticket reopened.');
});

// ESCALATE
escalateBtn?.addEventListener('click', () => {
  addTimelineEntry('Support', 'Ticket escalated to Level 2.');
  alert('Ticket escalated to Level 2');
});

// EDIT (simple inline edit for title/description)
editBtn?.addEventListener('click', () => {
  const newDesc = prompt('Edit ticket description:', ticket.description);
  if (newDesc !== null) {
    ticket.description = newDesc;
    document.getElementById('ticketDescription').innerText = newDesc;
    addTimelineEntry('Support', 'Description updated.');
  }
});

// COMMENT SUBMISSION
commentForm?.addEventListener('submit', function(e){
  e.preventDefault();
  const text = commentInput.value.trim();
  if (!text) return;
  addTimelineEntry('You', text);
  commentInput.value = '';
});

// PRINT
document.getElementById('printBtn')?.addEventListener('click', () => {
  window.print();
});
