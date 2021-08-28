const loadRandomUser = () => {
    fetch ('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results))
}
loadRandomUser();

const displayRandomUser = users => {
    // console.log(users)
    const divContainer = document.getElementById('random-user');
    for (const user of users){
        // console.log(user)
        const div = document.createElement('div');
        div.classList.add('user-style')
        div.innerHTML = `
            <img src="${user.picture.large}">
            <h1>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h1>
            <h1>Location</h1>
            <p>City: ${user.location.city}</p>
            <p>coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</p>
            <p>timezone: ${user.location.timezone.description}, ${user.location.timezone.offset}</p>
        `
        divContainer.appendChild(div)

    }
}