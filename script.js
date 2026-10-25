// SAJAN CLOTH HOUSE — demo catalogue
// BEFORE CLIENT HANDOVER: update SHOP_CONFIG with the real phone number, address and map search.
const SHOP_CONFIG = {
  whatsappNumber: "91XXXXXXXXXX", // digits only, e.g. 919876543210
  phoneDisplay: "+91 XXXXX XXXXX",
  address: "Add shop address here, City, State",
  mapsQuery: "Sajan Cloth House",
  shopHours: "Update opening days & hours"
};
const PRODUCTS = [
  {
    "id": 1,
    "name": "Everyday Floral Suit",
    "category": "Daily Wear",
    "price": 599,
    "oldPrice": 700,
    "colour": "Pink floral",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 2,
    "name": "Rose Garden Cotton Set",
    "category": "Daily Wear",
    "price": 799,
    "oldPrice": null,
    "colour": "Dusty rose",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 3,
    "name": "Classic Straight-Cut Suit",
    "category": "Office Wear",
    "price": 999,
    "oldPrice": null,
    "colour": "Ivory",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 4,
    "name": "Soft Pastel Kurta Set",
    "category": "Daily Wear",
    "price": 699,
    "oldPrice": 820,
    "colour": "Pastel peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 5,
    "name": "Printed Comfort Suit",
    "category": "Daily Wear",
    "price": 549,
    "oldPrice": null,
    "colour": "Multicolour",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 6,
    "name": "Elegant Office Wear Set",
    "category": "Office Wear",
    "price": 899,
    "oldPrice": null,
    "colour": "Navy",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 7,
    "name": "Festive Anarkali Suit",
    "category": "Festive",
    "price": 1499,
    "oldPrice": 1760,
    "colour": "Wine",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 8,
    "name": "Chikankari-Inspired Suit",
    "category": "Party Wear",
    "price": 1199,
    "oldPrice": null,
    "colour": "White",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 9,
    "name": "Peach Bloom Suit",
    "category": "Daily Wear",
    "price": 799,
    "oldPrice": null,
    "colour": "Peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 10,
    "name": "Midnight Blue Occasion Set",
    "category": "Party Wear",
    "price": 1599,
    "oldPrice": 1880,
    "colour": "Midnight blue",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 11,
    "name": "Traditional Motif Suit",
    "category": "Festive",
    "price": 999,
    "oldPrice": null,
    "colour": "Rust",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 12,
    "name": "Mint Meadow Suit",
    "category": "Daily Wear",
    "price": 749,
    "oldPrice": null,
    "colour": "Mint",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 13,
    "name": "Golden Hour Festive Set",
    "category": "Festive",
    "price": 1799,
    "oldPrice": 2120,
    "colour": "Gold accent",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 14,
    "name": "Lilac Dream Suit",
    "category": "Party Wear",
    "price": 1299,
    "oldPrice": null,
    "colour": "Lilac",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 15,
    "name": "Everyday Grace Suit",
    "category": "Daily Wear",
    "price": 599,
    "oldPrice": null,
    "colour": "Beige",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 16,
    "name": "Ivory Elegance Set",
    "category": "Office Wear",
    "price": 1099,
    "oldPrice": 1290,
    "colour": "Ivory",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 17,
    "name": "Maroon Celebration Suit",
    "category": "Festive",
    "price": 1499,
    "oldPrice": null,
    "colour": "Maroon",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 18,
    "name": "Sky Blue Printed Set",
    "category": "Daily Wear",
    "price": 699,
    "oldPrice": null,
    "colour": "Sky blue",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 19,
    "name": "Floral Charm Suit",
    "category": "Party Wear",
    "price": 1199,
    "oldPrice": 1410,
    "colour": "Pink",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 20,
    "name": "Royal Teal Suit",
    "category": "Premium",
    "price": 1699,
    "oldPrice": null,
    "colour": "Teal",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 21,
    "name": "Summer Breeze Cotton Suit",
    "category": "Daily Wear",
    "price": 649,
    "oldPrice": null,
    "colour": "Pink floral",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 22,
    "name": "Blush Pink Kurta Set",
    "category": "Daily Wear",
    "price": 899,
    "oldPrice": 1060,
    "colour": "Dusty rose",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 23,
    "name": "Indigo Daywear Suit",
    "category": "Office Wear",
    "price": 799,
    "oldPrice": null,
    "colour": "Ivory",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 24,
    "name": "Garden Party Suit",
    "category": "Daily Wear",
    "price": 1299,
    "oldPrice": null,
    "colour": "Pastel peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 25,
    "name": "Classic Beige Suit",
    "category": "Daily Wear",
    "price": 999,
    "oldPrice": 1170,
    "colour": "Multicolour",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 26,
    "name": "Ruby Festive Set",
    "category": "Office Wear",
    "price": 1599,
    "oldPrice": null,
    "colour": "Navy",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 27,
    "name": "Lavender Leaf Suit",
    "category": "Festive",
    "price": 899,
    "oldPrice": null,
    "colour": "Wine",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 28,
    "name": "Minimal Chic Suit",
    "category": "Party Wear",
    "price": 749,
    "oldPrice": 880,
    "colour": "White",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 29,
    "name": "Sunshine Yellow Suit",
    "category": "Daily Wear",
    "price": 699,
    "oldPrice": null,
    "colour": "Peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 30,
    "name": "Emerald Occasion Set",
    "category": "Party Wear",
    "price": 1699,
    "oldPrice": null,
    "colour": "Midnight blue",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 31,
    "name": "Soft Rose Printed Suit",
    "category": "Festive",
    "price": 799,
    "oldPrice": 940,
    "colour": "Rust",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 32,
    "name": "Bluebell Cotton Set",
    "category": "Daily Wear",
    "price": 649,
    "oldPrice": null,
    "colour": "Mint",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 33,
    "name": "Evening Glow Suit",
    "category": "Festive",
    "price": 1499,
    "oldPrice": null,
    "colour": "Gold accent",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 34,
    "name": "Pearl White Festive Set",
    "category": "Party Wear",
    "price": 1399,
    "oldPrice": 1650,
    "colour": "Lilac",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 35,
    "name": "Coral Charm Suit",
    "category": "Daily Wear",
    "price": 899,
    "oldPrice": null,
    "colour": "Beige",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 36,
    "name": "Olive Everyday Set",
    "category": "Office Wear",
    "price": 799,
    "oldPrice": null,
    "colour": "Ivory",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 37,
    "name": "Regal Wine Suit",
    "category": "Festive",
    "price": 1799,
    "oldPrice": 2120,
    "colour": "Maroon",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 38,
    "name": "Powder Blue Suit Set",
    "category": "Daily Wear",
    "price": 999,
    "oldPrice": null,
    "colour": "Sky blue",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 39,
    "name": "Petal Pink Suit",
    "category": "Party Wear",
    "price": 849,
    "oldPrice": null,
    "colour": "Pink",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 40,
    "name": "Sage Green Printed Set",
    "category": "Premium",
    "price": 1199,
    "oldPrice": 1410,
    "colour": "Teal",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 41,
    "name": "Golden Thread Occasion Suit",
    "category": "Daily Wear",
    "price": 1899,
    "oldPrice": null,
    "colour": "Pink floral",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 42,
    "name": "Black Beauty Suit",
    "category": "Daily Wear",
    "price": 1599,
    "oldPrice": null,
    "colour": "Dusty rose",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 43,
    "name": "Peach Petal Set",
    "category": "Office Wear",
    "price": 799,
    "oldPrice": 940,
    "colour": "Ivory",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 44,
    "name": "Ivory Floral Suit",
    "category": "Daily Wear",
    "price": 1299,
    "oldPrice": null,
    "colour": "Pastel peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 45,
    "name": "Royal Purple Festive Suit",
    "category": "Daily Wear",
    "price": 1699,
    "oldPrice": null,
    "colour": "Multicolour",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1583391733956-6c78276477e8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 46,
    "name": "Everyday Stripes Suit",
    "category": "Office Wear",
    "price": 599,
    "oldPrice": 700,
    "colour": "Navy",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 47,
    "name": "Daisy Print Cotton Set",
    "category": "Festive",
    "price": 699,
    "oldPrice": null,
    "colour": "Wine",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 48,
    "name": "Classic Red Suit",
    "category": "Party Wear",
    "price": 1499,
    "oldPrice": null,
    "colour": "White",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 49,
    "name": "Ocean Blue Occasion Set",
    "category": "Daily Wear",
    "price": 1599,
    "oldPrice": 1880,
    "colour": "Peach",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 50,
    "name": "Champagne Party Suit",
    "category": "Party Wear",
    "price": 1999,
    "oldPrice": null,
    "colour": "Midnight blue",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 51,
    "name": "Mehndi Green Suit",
    "category": "Festive",
    "price": 999,
    "oldPrice": null,
    "colour": "Rust",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 52,
    "name": "Pink Blossom Set",
    "category": "Daily Wear",
    "price": 899,
    "oldPrice": 1060,
    "colour": "Mint",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 53,
    "name": "Elegant Charcoal Suit",
    "category": "Festive",
    "price": 1499,
    "oldPrice": null,
    "colour": "Gold accent",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 54,
    "name": "Festive Mirror-Work Look",
    "category": "Party Wear",
    "price": 699,
    "oldPrice": null,
    "colour": "Lilac",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 55,
    "name": "Summer Sky Suit",
    "category": "Daily Wear",
    "price": 1799,
    "oldPrice": 2120,
    "colour": "Beige",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 56,
    "name": "Premium Embroidered Set",
    "category": "Office Wear",
    "price": 1899,
    "oldPrice": null,
    "colour": "Ivory",
    "tag": "BESTSELLER",
    "image": "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 57,
    "name": "Rosewood Special Suit",
    "category": "Festive",
    "price": 1099,
    "oldPrice": null,
    "colour": "Maroon",
    "tag": "NEW ARRIVAL",
    "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 58,
    "name": "Cream Classic Set",
    "category": "Daily Wear",
    "price": 1599,
    "oldPrice": 1880,
    "colour": "Sky blue",
    "tag": "POPULAR PICK",
    "image": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 59,
    "name": "Celebration Gold Suit",
    "category": "Party Wear",
    "price": 2199,
    "oldPrice": null,
    "colour": "Pink",
    "tag": "JUST IN",
    "image": "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=650&q=80"
  },
  {
    "id": 60,
    "name": "Sajan Signature Suit",
    "category": "Premium",
    "price": 1999,
    "oldPrice": null,
    "colour": "Teal",
    "tag": "SHOP FAVOURITE",
    "image": "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=650&q=80"
  }
];

const grid = document.getElementById("productGrid");
const count = document.getElementById("itemCount");
const searchInput = document.getElementById("searchInput");
const loadMoreBtn = document.getElementById("loadMore");
let activeCategory = "All";
let visibleCount = 16;

function whatsappUrl(message) {
  const number = SHOP_CONFIG.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
function updateContactDetails() {
  document.querySelectorAll(".whatsapp-link").forEach(a => {
    a.href = whatsappUrl("Hello Sajan Cloth House! I would like to enquire about your collection.");
  });
  document.querySelectorAll(".shop-address").forEach(el => el.textContent = SHOP_CONFIG.address);
  document.querySelectorAll(".shop-phone").forEach(el => el.textContent = SHOP_CONFIG.phoneDisplay);
  document.querySelectorAll(".phone-link").forEach(a => {
    const number = SHOP_CONFIG.whatsappNumber.replace(/\D/g, "");
    a.href = number.length >= 10 ? `tel:+${number}` : whatsappUrl("Hello, I would like to enquire about your collection.");
  });
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_CONFIG.mapsQuery || SHOP_CONFIG.address)}`;
  ["mapLink", "mapLink2"].forEach(id => { const el = document.getElementById(id); if(el) el.href = maps; });
}
function money(n) { return "₹" + n.toLocaleString("en-IN"); }
function getFilteredProducts() {
  const term = searchInput.value.trim().toLowerCase();
  return PRODUCTS.filter(p => (activeCategory === "All" || p.category === activeCategory) &&
    [p.name,p.category,p.colour,p.tag].join(" ").toLowerCase().includes(term));
}
function renderProducts(reset=true) {
  if(reset) visibleCount = 16;
  const items = getFilteredProducts();
  count.textContent = items.length;
  const shown = items.slice(0, visibleCount);
  grid.innerHTML = shown.length ? shown.map(p => `
    <article class="product-card">
      <div class="product-photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x800/f0e5dc/6b5145?text=Sajan+Cloth+House';">
        <span class="product-badge">${p.tag}</span>
        <a class="quick-order" href="${whatsappUrl(`Hello Sajan Cloth House! I am interested in ${p.name} (${money(p.price)}). Is it available?`)}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a>
      </div>
      <div class="product-info"><span class="product-category">${p.category}</span><h3>${p.name}</h3>
        <div class="product-bottom"><span class="price">${money(p.price)} ${p.oldPrice ? `<span class="old-price">${money(p.oldPrice)}</span>` : ""}</span><span class="product-colour">${p.colour}</span></div>
      </div>
    </article>`).join("") : `<div class="empty-state">No styles found. Try a different search or category.</div>`;
  loadMoreBtn.style.display = items.length > visibleCount ? "inline-flex" : "none";
}
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("[data-category]");
  if(!btn) return;
  activeCategory = btn.dataset.category;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
  renderProducts();
});
searchInput.addEventListener("input", () => renderProducts());
loadMoreBtn.addEventListener("click", () => { visibleCount += 16; renderProducts(false); });
document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
updateContactDetails();
renderProducts();
