const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    // console.log(placeholder);
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}



function dragstart(event) {
    // console.log('drag start', event.target);
    event.target.classList.add('add');
    setTimeout(() => event.target.classList.add('hide'), 0);
    
}

function dragend(event) {
    // console.log('drag end', event.target);

    // clasni uchirish - 1var
    // event.target.classList.remove('add')
    // event.target.classList.remove('hide')

    // clasni uchirish - 2var
    // event.target.classList.remove('add', 'hide')

    // clasni uchirish - 2var
    // className - xamma classlarni uchir bitta yozilganini qoldir degani
    event.target.className = 'item';
}

function dragover() {
    // console.log('drag over');
    event.preventDefault();
}

function dragenter() {
    event.target.classList.add('hovered');
    // console.log('drag enter');
}

function dragleave() {
    event.target.classList.remove('hovered');
    // console.log('drag leave');
}

function dragdrop() {
    event.target.classList.remove('hovered');
    // console.log('drag drop');
    event.target.append(item);
}