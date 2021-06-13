function mafriculture() {


    /*-------Toggle menu------*/

    function toggle() {
        const btn = document.getElementById('btn');
        const menu = document.querySelector('.nav-menu');

        btn.addEventListener('click', () => {
            let value = menu.classList.contains('navbar-collapse');


            // This checks if the navbar__collapse and change classes are added to 
            // the menu ul if not it should add
            if (value) {
                menu.classList.remove('navbar-collapse');
                btn.classList.add('change');
            }
            else {
                menu.classList.add('navbar-collapse');

                btn.classList.remove('change');
            }
        })
    }

    toggle();

    function cartPage(){
        const cartBtn = document.querySelectorAll('.cartBtn');
        const displayCart = document.querySelectorAll('.cartDisplay');
        cartBtn.forEach( button => {
             button.addEventListener('click', () => {
            let value = displayCart.classList.contains('hide');
            if (value){
                displayCart.classList.remove('hide');
                displayCart.classList.add('show');
            }else{
                displayCart.classList.add('hide');
            }
        });

        });
    }

    cartPage();

}

mafriculture();




