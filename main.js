let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('button was clicked')
    formvalidation();
    // acceptData();
})

let formvalidation = ()=>{
    if(input.value === ''){
        // console.log(input.value)
        console.log('failure')
        msg.innerHTML = 'Post cannot be blank'

    }
    else{
        console.log('success')
        msg.innerHTML = ''
        acceptData();
    }
}

let data={};

let acceptData = () => {
    data['text']=input.value;
    console.log(data)
    createPost();
};

let createPost = ()=>{
    posts.innerHTML +=
    `<div class="innerpost">
                <p>${data.text}</p>
                <span class="options">
                <span class="material-symbols-outlined" onClick="editPost(this)">
                    edit_note
                </span>
                <span onClick="deletePost(this)" class="material-symbols-outlined">
                    delete
                </span>
                </span>
    </div>
    `
    input.value=''

};

let deletePost = (e)=>{
    e.parentElement.parentElement.remove();
}

let editPost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}