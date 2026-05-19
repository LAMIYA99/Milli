const locations = [
  "Afiyəddin Cəlilov küçəsi 27a, Baku",
  "Şahlar Allahverdiyev küçəsi, Baku",
  "Qobu şosesi, Lökbatan",
  "Babək prospekti 94, Baku",
];

async function geocode() {
  for (let loc of locations) {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(loc)}`);
    const data = await res.json();
    console.log(loc, data.length > 0 ? {lat: data[0].lat, lon: data[0].lon} : "NOT FOUND");
    await new Promise(r => setTimeout(r, 1000));
  }
}
geocode();
