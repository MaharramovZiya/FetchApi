document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', fetchData);

    function fetchData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        getData(apiUrl);
    }

    function getData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => displayData(data))
            .catch(err => console.error(err));
    }

    function displayData(data) {
        const newsContainer = document.getElementById('cards');

        data.forEach(item => {
            const card = createCard(item);
            newsContainer.appendChild(card);
        });
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = 'https://buffer.com/library/content/images/2023/10/free-images.jpg';
        image.alt = 'Card Image';
        card.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = item.name;

        const email = document.createElement('p');
        email.textContent = `Email: ${item.email}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${item.phone}`;

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(phone);

        return card;
    }
    var contDiv = document.querySelector("#cont");

var clicked = false;

btn.addEventListener("click", function () {
  if (!clicked) {
    // Əgər bir dəfə click edilibsə
    contDiv.style.display = "none"; // contDiv-i gizlə
    clicked = true; // clicked dəyişənini true olaraq tənzimlə
  }
});
}

)