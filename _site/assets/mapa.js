async function main() {
  const response = await fetch('./assets/mapa.json');
  const blocks = await response.json();

  const map = L.map('map').setView([-0.005486, -51.085398], 16);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">' +
      'OpenStreetMap</a> contributors &copy; ' +
      '<a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20
  }).addTo(map);

  blocks.forEach((block) => {
    const b = L.polygon(block.position, block.options).addTo(map)
    .bindTooltip(`<h1>${block.name}</h1><p>${block.description}</p>`);
  });
}

main();

