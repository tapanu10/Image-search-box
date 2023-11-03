const key="Wz4EhzWLxfySgrgkWOtbt6z7esRQkvEchkWKZwJK-EQ";

const form1=document.querySelector('form');
const input1=document.getElementById("searchinput");
const searchs=document.querySelector(".search");
const show=document.getElementById('showmore');

let inputdata=''
let page=1;

async function searchimages() {
    inputdata = input1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${key}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchs.innerHTML = "";
    }

 results.map((result) => {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("searchresults");
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = '_blank';

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchs.appendChild(imageWrapper);
    });

    page++;
}

form1.addEventListener('submit',(Event)=>
{
    Event.preventDefault();
    page=1;
    searchimages();
}
);
showmore.addEventListener('click',()=>
{
    searchimages();
})