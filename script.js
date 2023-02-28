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
const table = document.querySelector('table');
const newRow = table.insertRow();
const newCell = newRow.insertCell();
newCell.colSpan = 2;
};

getSumBtn.addEventListener("click", getSum);

