const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceArr = document.querySelectorAll('.price')
   let sum=0;
	priceArr.forEach(price => {
		sum+=parseFloat(price.innerText)
	})
// const table = document.querySelector('table');
// const newRow = table.insertRow();
// const newCell = newRow.insertCell();
// newCell.colSpan = 2;
// newCell.innerText = `Total: ${sum.toFixed(2)}`;
	const newRow = document.createElement('tr');

// Create a new cell for the "Total" label
const labelCell = document.createElement('td');
labelCell.innerText = 'Total:';

// Create a new cell for the total price value
const valueCell = document.createElement('td');
valueCell.innerText = totalPrice.toFixed(2);

// Add the cells to the new row
newRow.appendChild(labelCell);
newRow.appendChild(valueCell);
};

getSumBtn.addEventListener("click", getSum);

