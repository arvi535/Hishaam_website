// ===== YOUR PROPERTIES =====
// To add a property: open admin.html, fill the form, copy the line it gives you,
// and paste it below, just before the closing  ];
// To remove a property: delete its line.
// title = English name, ar = Arabic name (optional), price = any text you like (use /mo or /night for rent)
// type: "rent", "sale" or "airbnb".   bg: a gradient, or  "url('images/villa1.jpg')"
const properties = [
  { id: 1, title: "Malki Luxury Apartment",  ar: "شقة فاخرة في المالكي",  price: "$120,000",  type: "sale",   bg: "linear-gradient(160deg,#f6c58e,#c9835a)" },
  { id: 2, title: "Mezzeh Family Apartment", ar: "شقة عائلية في المزة",   price: "$400/mo",   type: "rent",   bg: "linear-gradient(160deg,#9cc3d5,#e9a96b)" },
  { id: 3, title: "Old Damascus House",      ar: "بيت دمشقي قديم",        price: "$90/night", type: "airbnb", bg: "linear-gradient(160deg,#d8c3a5,#8a6f5a)" },
  { id: 4, title: "Abu Rummaneh Flat",       ar: "شقة في أبو رمانة",      price: "$350/mo",   type: "rent",   bg: "linear-gradient(160deg,#b7cfa0,#e9c58e)" },
  { id: 5, title: "Yaafour Villa",           ar: "فيلا في يعفور",         price: "$250,000",  type: "sale",   bg: "linear-gradient(160deg,#8fb8c9,#f2d6a8)" },
  { id: 6, title: "Bab Touma Studio",        ar: "استوديو في باب توما",   price: "$60/night", type: "airbnb", bg: "linear-gradient(160deg,#e3b98a,#7b5a46)" },
  { id: 7, title: "Kafr Sousa Office",       ar: "مكتب في كفرسوسة",       price: "$600/mo",   type: "rent",   bg: "linear-gradient(160deg,#cdb6a4,#e8a27a)" },
  { id: 8, title: "Qassaa Apartment",        ar: "شقة في القصاع",         price: "$75,000",   type: "sale",   bg: "linear-gradient(160deg,#a9c0a0,#d9a066)" }
];
