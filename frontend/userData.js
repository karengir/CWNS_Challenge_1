let userData = '';
const content = document.querySelector('#userList');
const userposts = document.querySelector('#userPosts');

const fetch_User_data = () => {
    fetch(' https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => {
            userDataChange(json)
        });
};

fetch_User_data(); 

    const userDataChange = (data) => {
    userData = data
    userData.forEach(user => {
        let user_row = ""
        user_row += '<tr>'
        user_row += `<td>${user.name}</td>`
        user_row += `<td>${user.email}</td>`
        user_row += `<td> <button onClick="get_users_posts(${user.id})">Posts</button> </td>`
        user_row += '</tr>'
        content.innerHTML += user_row
    })
}

const get_users_posts = (user_id) => {
    console.log(user_id)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    .then((response) => response.json())
    .then((json) => {
        // console.log(json)
        userPostChange(json)
    });

}  

const userPostChange = (posts) => {
    console.log(posts);
    posts.forEach(post => {
        let user_post = ""
        user_post += `<h4>${post.title}</h4>`
        user_post += `<li>${post.body}</li>`
        userposts.innerHTML += user_post
    })
}