const ul= document.querySelector('ul');
fetch('./data.json')
    .then(res=> res.json())
    .then(data=>{
        data.forEach(post => {
            ul.insertAdjacentHTML('beforeend',`<li > <img src="${post.icon} " id="imgs" >  ${post.category} <span>${post.score}<p id="para100">/100</p></span></li>`);
        });
    })