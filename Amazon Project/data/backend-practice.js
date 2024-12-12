const Xhr = new XMLHttpRequest();

Xhr.addEventListener('load',()=>{
    console.log(Xhr.response)
})

Xhr.open('get', 'https://supersimplebackend.dev')
Xhr.send();