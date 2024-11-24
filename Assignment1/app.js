let btn = document.querySelector('button');  
let ans = document.querySelector("li");
let i = document.querySelector('i');

let check = false;
btn.addEventListener('click', () => {
    console.log('clicked');
    
    if (check == false) {
        ans.classList.remove('d-none');
        i.classList.add('fa-angle-up');
        i.classList.remove('fa-angle-down');
        check = true;
    }else{
        ans.classList.add('d-none');
        i.classList.remove('fa-angle-up');
        i.classList.add('fa-angle-down');
        check = false;
    }
})