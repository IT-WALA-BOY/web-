// //         examine the documentt Object

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // document.title = 123;
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'mango';
// console.log(document.forms[0]);
// console.log(document.links);




// console.log(document.images);
//                 selector
// console.log(document.getElementById('item'));
// var title = document.getElementById('header');
// console.log(title);
// title.textContent = 'kasa laga';
// title.innerText = 'nahi dia';
// title.innerHTML = '<h1>no comment</h1>';
// const change = document.getElementsByClassName('item1');
// console.log(change[1]);
// change.textContent = '<li>item no</li>';
// console.log(change.textContent);
// const header = document.getElementById('main');
// console.log(header);
// // header.innerText = 'mango baz';
// header.innerHTML = '<h2>banana Gy</h2>';
// header.style.color = 'yellow';
// header.style.borderBottom = '1px solid black';
//              GET ELEMENTS BY CLASS NAME 
// var atm = document.getElementsByClassName('item1');
// console.log(atm);
// console.log(atm[0]);
// atm[0].innerText = 'loop';
// atm[0].style.color = 'pink';
// atm[0].style.backgroundColor = 'green';
// // atm.style.backgroundColor = 'green';
// for (var i = 0; i < atm.length; i++) {
//     atm[i].style.backgroundColor = 'lightgrey';
// }
// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[0].innerText = 'loop';
// li[0].style.color = 'pink';
// li[0].style.backgroundColor = 'green';
// // atm.style.backgroundColor = 'green';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgrey';
// }


// //                     Quarry selector 
// const header = document.querySelector('#main')
// header.style.borderBottom = '1px solid grey';
// var input = document.querySelector('input');
// input.value = 'helo';
// // const b = document.querySelector('button');
// // console.log(b);
// const atm = document.querySelector('.item1');
// atm.style.color = 'brown';
// const atm1 = document.querySelector('.item1:last-child');
// atm1.style.color = 'yellow';


//       QUARRY SELECTOR ALL

// const all = document.querySelectorAll('.item1')
// console.log(all);
// all[1].textContent = 'hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "orange";
//     even[i].style.backgroundColor = "red";
// }

// TRAVERSING THE DOM 

// var atm = document.querySelector('.item')
// parent node
// console.log(atm.parentNode);
// atm.parentNode.style.backgroundColor = 'pink';
// console.log(atm.parentNode.parentNode.parentNode);

// parentElement and parentnode samr thing



// child nodes
var atm = document.querySelector('#itemm')
// console.log(atm.children);
// console.log(atm.children[1])
// atm.children[1].style.backgroundColor = 'yellow';



// first child

// console.log(atm.firstChild); useless


// first element Child
console.log(atm.firstElementChild);
atm.firstElementChild.textContent = 'helo 1 '