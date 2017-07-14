(function() {
  'use strict';

  const allCustomers = document.querySelector('.customers');

  fetch('https://randomuser.me/api/?format=json&results=12')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      customerData(data.results);
    });

  function customerData(arr) {
    for (let i in arr) {
      const person = arr[i];
      let personName = person.name.first + " " + person.name.last;
      let personEmail = person.email;
      let personAddr1 = person.location.street;
      let personAddr2 = person.location.city + ", " + person.location.state + ", " + person.location.postcode;
      let personPhone = person.phone;
      let personSSN = person.value;
      let box = document.createElement('div');
      let img = document.createElement('img');
      img.setAttribute('src', person.picture.large);
      box.appendChild(img);

      let name = document.createElement('p');
      name.textContent = personName.toUpperCase();
      name.classList.add('name');
      box.appendChild(name);

      let email = document.createElement('p');
      email.textContent = personEmail.toUpperCase();
      email.classList.add('email');
      box.appendChild(email);

      let address = document.createElement('p');
      address.innerHTML = personAddr1 + "<br>" + personAddr2;
      address.classList.add('address');
      box.appendChild(address);

      let phone = document.createElement('p');
      phone.textContent = personPhone;
      phone.classList.add('phone');
      box.appendChild(phone);
      allCustomers.appendChild(box);

      let ssn = document.createElement('ssn');
      ssn.textContent = personSSN;
      ssn.classList.add('ssn');
      box.appendChild(ssn);
      allCustomers.appendChild(box);

    }
  }
})();
