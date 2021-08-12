const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    // console.log(blog);
    blog.style.backgroundColor = 'crimson';
    blog.style.padding = '2rem';
    blog.style.margin = '1rem'
    blog.style.color = 'white';
    blog.style.fontFamily = 'poppins';
}

const first = document.getElementById('first-blog');
first.style.textAlign = 'center';
first.style.padding = '2rem';
first.style.borderTopLeftRadius = '7rem';
// first.style.color = 'white';
// first.style.fontFamily = 'poppins';