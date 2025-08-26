// config.js
const users = [
  { id: 1, name: 'User1', blocked: false },
  { id: 2, name: 'User2', blocked: false },
  { id: 3, name: 'User3', blocked: false },
  { id: 4, name: 'User4', blocked: false },
  { id: 5, name: 'User5', blocked: false },
  { id: 6, name: 'User6', blocked: false },
  { id: 7, name: 'User7', blocked: false },
  { id: 8, name: 'User8', blocked: false },
  { id: 9, name: 'User9', blocked: false },
  { id: 10, name: 'User10', blocked: false },
  { id: 11, name: 'User11', blocked: false },
  { id: 12, name: 'User12', blocked: false },
  { id: 13, name: 'User13', blocked: false },
  { id: 14, name: 'User14', blocked: false },
  { id: 15, name: 'User15', blocked: false },
  { id: 16, name: 'User16', blocked: false },
  { id: 17, name: 'User17', blocked: false },
  { id: 18, name: 'User18', blocked: false },
  { id: 19, name: 'User19', blocked: false },
  { id: 20, name: 'User20', blocked: false }
];

function checkUserBlock(userId) {
  const user = users.find(user => user.id === userId);
  if (user && user.blocked) {
    window.location.href = '../bloccato.html';
  }
}