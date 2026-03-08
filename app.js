let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async()=>{
    let country = document.querySelector("input"). value;
    let collegeArr = await getCollege(country);
    show(collegeArr);
})
function show(colArr){
    let list = document.querySelector("#list");
    list.innerHTML = "";
    for(let coll of colArr){
        let li = document.createElement("li");
        li.innerText = coll.name;
        list.appendChild(li);        
    }
}

async function getCollege(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    } catch(e){
        console.log("error =" , e);
        return [];
    }
}