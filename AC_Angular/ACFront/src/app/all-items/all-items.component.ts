import { Component } from '@angular/core';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent {
}

//  getItemPic() {
//     const response = await fetch('https://acnhapi.com/v1a/houseware/');
//     console.log("@@@");
//     const data = await response.json();
//     console.log(data);
//     console.log(countInObject(data));
//     console.log(countInObject(data[1]));
//     const numof = countInObject(data);
//     let arr = [[]];
//     console.log(arr);

//     let itempicDiv : any = document.querySelector('#item-pic-container')
    

//     let ari = []

//      for (let i = 0; i < numof;i++){
//         if(data[i][0]['buy-price'] === null) continue;
//         let itemname = document.createElement('p');
//         itemname.id = 'item-name'
//         itemname.className = 'name-container'
//         let string1 = (data[i][0]['name']['name-USen'])
//         let string2 = (data[i][0]['image_uri'])
//         ari.push(string1 + "," + string2 )
//         let itembuyprice = document.createElement('p');
//         itembuyprice.id = 'item-buy-price'
//         itembuyprice.className = 'buyprice-container'
    
//         let itemImg = document.createElement('img');
//         itemImg.id = 'item-image'
//         itemImg.className = 'image-container'
//     itemname.innerText = data[i][0]['name']['name-USen'];
//     itempicDiv.appendChild(itemname)
//     itemImg.src = data[i][0].image_uri;
//     itempicDiv.appendChild(itemImg)
//     itembuyprice.innerText = data[i][0]['image_uri'];
//     itempicDiv.appendChild(itembuyprice)

//       } 
//     console.log(ari)
//     }
// CountInObject(obj) {
//     let count = 0;
//     // iterate over properties, increment if a non-prototype property
//     for(var key in obj) if(obj.hasOwnProperty(key)) count++;
//     return count;
// }

// }

// async function getAllITEMS() {
//     const response = await fetch('https://acnhapi.com/v1/houseware/');
//     const data = await response.json();


// }

  
// }
