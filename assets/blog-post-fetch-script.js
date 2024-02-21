/**
 * Steps to re-fetch the posts:
 * 1. go to https://ploomber.io/blog/
 * 2. open dev tools
 * 3. paste in this code below to the console
 * 4. copy the resulting JSON string to a file
 * 5. navigate to the next page and do steps 2 to 4 again until all posts are in file
 * 6. replace "posts" field in JSON (blog-posts.json and in index.html) with the JSON string from step 4
 */

const cards = document.querySelectorAll('.blog-card');

const data = [];

cards.forEach(card => {
    if(card.querySelector('.user-info p').innerText.includes('Laura Funderburk')) {
        let url = card.querySelector('a').href;
        let thumb = card.querySelector('img').src;
        let title = card.querySelector('.card-title a').innerText;
        let description = card.querySelector('.card-body p').innerText;
        let [date, duration] = card.querySelector('.user-info span').innerText.split(' - ');
        data.push({ url, title, thumb, description, date, duration });
    }
})

const json = JSON.stringify(data)

console.log(json);
