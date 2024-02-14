let btn = document.getElementById('btn');
let twitterBtn = document.getElementById('twitterBtn');
let quoteContainer = document.getElementById('quoteContainer');
let authorPara = document.getElementById('authorPara');

btn.addEventListener('click' ,async function(e){
    console.log(e.target);
    let fetchData = await fetch('https://api.quotable.io/random');
    let data = await fetchData.json();
    console.log(data);
    quoteContainer.innerHTML = data.content;
    authorPara.innerHTML = `- ${data.author}`;
},false);

twitterBtn.addEventListener('click',function(){
    window.open(`https://x.com/internet/tweet?text=${quoteContainer.innerHTML}`)
},false);
