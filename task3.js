async function getPostsid() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const posts = await response.json();
    const res = posts.map(function(post) {
        return `
        <tr class="rows">
            <td>${post.id}</td>
            <td>${post.name}</td>
            <td>${post.username}</td>
            <td>${post.email}</td>
            <td class="design"><p class="para">street:</p>${post.address.street}<P class="para"> suite:</p>${post.address.suite}<P class="para"> city:</p>${post.address.city}  <P class="para">zipcode:</p>${post.address.zipcode}  <h2 class="par">geo:</h2>  <P class="para">lat:</p>${post.address.geo.lat} <P class="para">lng:</p>${post.address.geo.lng}</td>
            <td>${post.phone}</td>
            <td>${post.website}</td>
            <td><P class="para">name:</p>${post.company.name} <P class="para">catchPhrase:</p>${post.company.catchPhrase}<P class="para">bs:</p>${post.company.bs}</td>
        </tr>
        `;
    }).join("");
    document.querySelector(".tabody").innerHTML = res; // Append the result to the body or any other container
}


getPostsid()
