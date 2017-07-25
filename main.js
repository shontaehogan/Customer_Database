let allCustomers = `
<header>
  <h1>Internal Company Directory</h1>
</header>
<span class="break">`


customers.results.map(function(item){
	allCustomers += `
		<div class="all">
			<div class="img">
				<img src="${item.picture.large}">
				<h4>${item.name.first} ${item.name.last}</h4>
			</div>
			<div class="personEmail">
				<span class="email">${item.email}</span>
			</div>
			<div class="personAddPhone">
				<span class="street">${item.location.street}</span>
        <span>

        <span class="location">${item.location.city}, ${item.location.state}, ${item.location.postcode}</span>

				<span class="phone">${item.cell}</span>
			</div>
			<div class="personSSN">
				<span class="ssn"> ${item.id.value}</span>
			</div>
		</div>
	`
});

document.querySelector("#customers").innerHTML = allCustomers
