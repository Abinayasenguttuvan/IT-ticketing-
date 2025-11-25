// Toggle between login and signup
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

showSignup?.addEventListener('click', (e)=>{ e.preventDefault(); loginForm.classList.remove('active'); signupForm.classList.add('active'); });
showLogin?.addEventListener('click', (e)=>{ e.preventDefault(); signupForm.classList.remove('active'); loginForm.classList.add('active'); });

// Login submit (demo)
loginForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  alert('Signed in (demo): ' + email);
  // navigate to dashboard
  window.location.href = 'admin-dashboard.html';
});

// Signup submit (demo)
signupForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('signEmail').value;
  alert('Account created (demo): ' + email);
  window.location.href = 'ticket.html';
});
