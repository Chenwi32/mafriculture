function mafriculture() {


    /*-------Toggle menu------*/

    function toggle() {
        const btn = document.getElementById('btn')
        const menu = document.querySelector('.nav-menu')

        btn.addEventListener('click', () => {
            let value = menu.classList.contains('navbar-collapse')


            // This checks if the navbar__collapse and change classes are added to 
            // the menu ul if not it should add
            if (value) {
                menu.classList.remove('navbar-collapse')
                btn.classList.add('change')
            }
            else {
                menu.classList.add('navbar-collapse')

                btn.classList.remove('change')
            }
        })
    }

    toggle();

}

mafriculture();




