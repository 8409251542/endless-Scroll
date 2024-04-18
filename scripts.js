let image = document.getElementById("image");
window.addEventListener('scroll',()=>{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        console.log("ravi");
        getImg();
    }
});
window.onload=function(){
    getImg();
}
  

async function getImg(){
    let api="mxC1VKPkeltpuIjANSzP9MuNl-KE4BRYe-sAfjZOHUI";
    let response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${api}&count=10`);
    let result = await response.json();
    console.log(result);
    result.forEach(element => {
        let img=document.createElement("img");
        img.className="container mt-6 w-[30%] h-[50%] gap-3 px-4 bg-slate-50 border-2";
        img.setAttribute="src";
        img.src=`${element.urls.regular}`
        image.appendChild(img);
    });
}
