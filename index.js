const sort = document.querySelector('.sort');
const buttonMove = document.querySelector('.block__input_move-list')
const buttonDelete = document.querySelector('.block__input_delete-items')
const userInput = document.querySelector('.block__what-need-to-do');
const buttonAdd = document.querySelector('.plus');
const blockInput = document.querySelector('.block__input');
const parentInput = document.querySelector('.block__input-parent');

let dragElement;

//приминение всех событий для новых элементов
buttonAdd.addEventListener('click', () =>{
    let newElem = blockInput.cloneNode(true);
    newElem.children[1].value = '';
    parentInput.append(newElem);
    
    newElem.lastElementChild.onmouseover = function(event) {
        let target = event.target;
        target.src="images/Group 70.png"
    }
    newElem.lastElementChild.onmouseout = function(event) {
        let target = event.target;
        target.src="images/Group 56.png"
    }

    const item = document.querySelectorAll('.block__input')
    
    item.forEach((block__input) => {
        block__input.addEventListener('dragstart', (evt)=>{
            evt.target.style.background = '#E4E4E4'
            dragElement = evt.target;
        })

        block__input.addEventListener('dragend', (evt)=>{
            evt.target.style.background = 'unset'
            dragElement = null;
        })
    })
    
    
    let crossButton = newElem.lastChild.previousSibling;
    crossButton.addEventListener('click', ()=>{
        newElem.remove();
    })

})
let traker;
    
let sortButton = document.querySelector('.sort')          
sortButton.addEventListener('click', (evt)=>{
    if(traker!='sortUp') {
        evt.target.src='images/sortUp.png'
        let inputBlocks = document.querySelectorAll('.block__what-need-to-do');
        let inputSort = [];
        inputBlocks.forEach((item)=>{
        inputSort.push(item.value)
        })
        inputSort.sort((a, b)=>{
            if(a > b){
                 return 1;
            } else {
                return -1;
            }
        })
        for(let i = 0; i < inputSort.length; i++ ){
            inputBlocks[i].value = inputSort[i];
        }
        traker = 'sortUp';
        } else {
            evt.target.src='images/sort.png'
            const sortReverse = document.querySelector('.sort')
            sortReverse.addEventListener('click', (evt)=>{
            let blocksInput = document.querySelectorAll('.block__what-need-to-do');
            let reverseSort = [];
            
            blocksInput.forEach((item)=>{
                reverseSort.push(item.value)
            })
            reverseSort.sort((a, b)=>{
                if(a > b){
                    return -1;
                } else {
                    return 1;
            }
            })
            for(let i = 0; i < reverseSort.length; i++ ){
                blocksInput[i].value = reverseSort[i];
            }
            traker = 'sort';
            })
        }    
        
     
    })
    

    


//перемещение элементов
parentInput.addEventListener('dragenter', (evt)=>{ 
    evt.target.parentElement.style['border-bottom'] = 'solid 3px blueviolet';
    evt.preventDefault(); 

})

parentInput.addEventListener('dragover', (evt)=>{ 
    evt.preventDefault();
})

parentInput.addEventListener('dragleave', (evt)=>{
    evt.target.style.background = 'unset'
    evt.target.parentElement.style['border-bottom'] = '';
})

parentInput.addEventListener('drop', (evt)=>{
    evt.target.style.background = 'unset'
    evt.target.parentElement.style['border-bottom'] = '';
    parentInput.insertBefore(dragElement, evt.target.parentElement);
})


//изменение кнопки удаления 
buttonDelete.onmouseover = function(event) {
    let target = event.target;
    target.src="images/Group 70.png"
}
buttonDelete.onmouseout = function(event) {
    let target = event.target;
    target.src="images/Group 56.png"
}

//удаление элементов 
buttonDelete.addEventListener('click', () =>{
    blockInput.remove();
})

