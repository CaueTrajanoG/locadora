export function card(car) {
  return `
    <div id="investment-${car.id}" class="bg-white shadow-md rounded-lg p-4">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-semibold text-gray-700">${car.nome}</h3>
        <p class="text-lg font-semibold text-gray-700">${car.fab}</p>
      </div>
      <div class="mt-4">
        <p class="text-sm text-gray-500"><span class="font-bold">Ano:</span> ${car.ano}</p>        
      </div>
    </div>
  `;
}
