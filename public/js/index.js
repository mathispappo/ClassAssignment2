const pingApi = (req) =>{
    fetch('/api/burger?' + new URLSearchParams({value: req}))
    .then(res => res.json())
    .then(data=>{
        document.getElementById('Burger').innerHTML =''
        for(let i = 0; i < 4; i++){
            document.getElementById('Burger').innerHTML +="<div>"+data[i].Nom+"</div>"
        }
    })
}
