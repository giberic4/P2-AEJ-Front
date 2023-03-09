// fetch('https://acnhapi.com/v1/houseware/amp').then((res) => res.json()).then(data => {
//     const randomFactDiv = document.getElementById('random-fact-container');
    
//     const factText = document.createElement('p');
//     factText.innerText = data.text;

//     const linkToSource = document.createElement('a');
//     linkToSource.innerText = 'link to source';
//     linkToSource.href = data.source_url;

//     randomFactDiv.appendChild(factText);
//     randomFactDiv.appendChild(linkToSource);
// });

// In Fetch API, they use Promise to handle asynchronous operations, this is akin to Task in C#
// let itemPicId = ''
async function getItemPic() {
    const response = await fetch('https://acnhapi.com/v1/houseware/baby_chair');
    console.log("@@@");
    const data = await response.json();
    const itempicDiv = document.querySelector('#item-pic-container');

    const nameTag = document.getElementById('item-name');
    if(!nameTag) {
        const itemname = document.createElement('p');
        itemname.id = 'item-name'
        itemname.className = 'name-container'
        itemname.innerText = data[0]["name"]["name-USen"];
        // console.log(data[0].source-detail);
        itempicDiv.appendChild(itemname);
    }
    else {
        itemname.innerText = data[0]["name"]["name-USen"];
    }

    const imgTag = document.getElementById('item-image');

    if(!imgTag) {
        const itemImg = document.createElement('img');
        itemImg.id = 'item-image'
        itemImg.className = 'image-container'
        itemImg.src = data[0]['image_uri'];
        itempicDiv.appendChild(itemImg);

    }
    else {
        imgTag.src = data[0].image_uri;
        // document.getElementById('up-vote').onclick = (e) => sendVotes(data[0].id, 1)
        // document.getElementById('down-vote').onclick = (e) => sendVotes(data[0].id, -1)
    }
    const buypriceTag = document.getElementById('item-buy-price');
    if(!buypriceTag) {
        const itembuyprice = document.createElement('p');
        itembuyprice.id = 'item-buy-price'
        itembuyprice.className = 'buyprice-container'
        itembuyprice.innerText = data[0]['buy-price'];
        // console.log(data[0].source-detail);
        itempicDiv.appendChild(itembuyprice);
    }
    else {
        itembuyprice.innerText = data[0]['buy-price'];
    }

}

// function sendVotes(imgId, voteValue) {
//     if(!imgId) return;
//     // make a post call with the vote value
//     const apiKey = '633db2f9-8706-4329-bcb4-352e765361b4'
//     const reqBody = {
//         image_id : imgId,
//         value : voteValue
//     }
//     console.log(reqBody);
//     fetch('https://api.theitemapi.com/v1/votes', {
//         method: "POST",
//         headers: {
//             "Content-Type": "appliitemion/json",
//             'x-api-key': apiKey
//         },
//         body: JSON.stringify(reqBody)
//     }).then((res) => res.json()).then(data => console.log(data))
// }