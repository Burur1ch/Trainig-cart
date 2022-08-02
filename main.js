const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

// 12:49 && 9:20


input.addEventListener("keydown", (event)=>{
 if (event.key === "Enter")
 loadImg();
})

function loadImg(){
    removeImage();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value + '&per_page=9&client_id=TfqMPZcuC3ls_AuNB11AIs796J9mGEHHdUrupdHDX2I';
fetch(url)
.then(response=>{
    if(response.ok){
    
    return response.json();
    }else
    alert(response.status)
})
.then(data =>{
    const img = [];
    for(let i = 0; i<data.results.length;i++){
        img[i]=document.createElement('div');
        img[i].className = 'img';
        img[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'; 
        img[i].addEventListener('dblclick', function(){
            window.open(data.results[i].links.download,'_blank');
        })
        grid.appendChild(img[i]);
    }
})
}

function removeImage(){
    grid.innerHTML = '';
 }

function ChangeW(){
    
    let colorCh = true;
    if(colorCh){
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black"
    } 
}

function ChangeB(){
    let colorCh = false;
    if(!colorCh){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "Red"
    } 
}




