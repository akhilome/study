// Defining Constants

const TAX = 0.05; // 5% tax rate

const PHONE_PRICE = 149.99;

const ACCESSORY_PRICE = 9.99;

const SPEND_THRESHOLD = 0.7;


// Creating the buyPhone function

function buyPhone() {
	var numPhones = Number(prompt("How many phones do you want to buy?"));

	var phonesPrice = numPhones * PHONE_PRICE;

	var accessory = prompt("Should I add an accessory for each device? Answer Yes/No");

	if (accessory.toLowerCase() === 'no') {
		phonesPrice = phonesPrice;
    } else {
		phonesPrice = phonesPrice + (numPhones * ACCESSORY_PRICE);
    }

	var finalPrice = 0;

	finalPrice = String((phonesPrice + (phonesPrice * TAX)).toFixed()); // Add Tax
	
	alert("Your order price is $" + String(finalPrice) + ".");
	
	var bankBal = Number(prompt("How much do you have in your account? e.g. 3500"));

	if (bankBal*SPEND_THRESHOLD >= finalPrice) {
		console.log("Items purchased");
    } else {
		console.log("Bros abeg go hustle for more money comeback");
    }
	
}

buyPhone();