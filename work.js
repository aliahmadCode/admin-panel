const data = [
  {
    id: 1,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 2,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
  {
    id: 3,
    username: "Alex Jhons",
    email: "alex@vbc.com",
    phone: "+1 555-555-555",
    numberOfCards: "2",
    checked: false,
  },
];

function handleUserChecked(id) {
  const arr = data.map((user) => {
    if (id === user.id) {
      return { ...user, checked: true };
    } else {
      return { ...user, checked: false };
    }
  });
  return arr;
}
console.log(handleUserChecked(2))