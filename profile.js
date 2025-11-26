 
  // Sample user data & tickets
  const user = {name:'Abinaya S', role:'User', email:'abinaya@stackly.com', phone:'+91 98765 43210'};
  const myTickets = [
    {id:'TCK-00124', issue:'VPN timeout', priority:'High', status:'Open'},
    {id:'TCK-00110', issue:'Password reset', priority:'Low', status:'Resolved'}
  ];
  
  // render profile
  document.getElementById('userName').innerText = user.name;
  document.getElementById('userRole').innerText = user.role;
  document.getElementById('userEmail').innerText = user.email;
  document.getElementById('userPhone').innerText = user.phone;
  
  // tickets list
  const tbody = document.querySelector('#userTickets tbody');
  tbody.innerHTML = myTickets.map(t=>`<tr onclick="location.href='ticket-details.html?id=${t.id}'"><td>${t.id}</td><td>${t.issue}</td><td>${t.priority}</td><td>${t.status}</td></tr>`).join('');
  
  // logout
  document.getElementById('logoutBtn')?.addEventListener('click', ()=> {
    alert('Logged out (demo).');
    window.location.href = 'auth.html';
  });
  