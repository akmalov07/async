async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        
        document.getElementById('user-image').src = user.picture.large;
        document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
        document.getElementById('user-phone').textContent = user.phone;
        document.getElementById('user-location').textContent = `${user.location.city}, ${user.location.country}`;
        document.getElementById('user-age').textContent = user.dob.age;
        document.getElementById('user-email').textContent = user.email;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

document.getElementById('change-user').addEventListener('click', fetchUser);

fetchUser();