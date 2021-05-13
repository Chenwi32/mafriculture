/* function productDetailsImgDisplay(){
let galeryImages = document.getElementById('Display');
let smallImages = document.getElementsByClassName('SmallImg');

smallImages[0].onclick = function()
{
    galeryImages.src = smallImages[0].src;
}
smallImages[1].onclick = function()
{
    galeryImages.src = smallImages[1].src;
}

smallImages[2].onclick = function()
{
    galeryImages.src = smallImages[2].src;
}
} */



function mafriculture(){


    /*-------Toggle menu------*/

function toggle(){
    const btn = document.getElementById('btn')
    const menu = document.querySelector('.nav-menu')

    btn.addEventListener('click', () =>{
        let value = menu.classList.contains('navbar-collapse')


        // This checks if the navbar__collapse and change classes are added to 
        // the menu ul if not it should add
        if( value){
            menu.classList.remove('navbar-collapse')
            btn.classList.add('change')
        }
        else{
            menu.classList.add('navbar-collapse')
            
            btn.classList.remove('change')
        }
    } )
}

toggle();


/*------- Product display function for the product page*/
function nextProducts(){
    const productDisplay = document.getElementById('product-display');
    const firstPage = document.getElementById('first-page');
    const secondPage = document.getElementById('more-products');
    const next = document.getElementById('next');

    productDisplay.innerHTML = firstPage.innerHTML;

    next.addEventListener('click', () => {

        if(productDisplay.innerHTML === firstPage.innerHTML){

           productDisplay.innerHTML = secondPage.innerHTML;
        }

        else{
            productDisplay.innerHTML = firstPage.innerHTML;
        } 
    })
    }

    nextProducts();
}

mafriculture();




