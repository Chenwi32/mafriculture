function productDetailsImgDisplay(){
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
}

<<<<<<< HEAD

/*-------Toggle menu------*/
=======
function mafriculture(){
>>>>>>> 26a4281 (Changed the color theme, fixed footer layout issues, added a background image in the banner area with a blend mode)

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





<<<<<<< HEAD
nextProducts()
productDetailsImgDisplay()
=======
>>>>>>> 26a4281 (Changed the color theme, fixed footer layout issues, added a background image in the banner area with a blend mode)
