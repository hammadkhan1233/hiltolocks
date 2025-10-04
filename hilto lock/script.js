function orderNow(productName) {
  const phoneNumber = "917906589675"; // Client number
  const message = `Hello Hilto Thar Locks, I want to order: ${productName}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
