addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () =>{
            const top_menu_items = document.querySelector('.top_menu_items')
            top_menu_items.classList.toggle('mostrar')
            
        })
    }
})
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () =>{
            const body = document.querySelector('body')
            body.classList.toggle('stop_scroll')
            
        })
    }
})
addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () =>{
            const html = document.querySelector('html')
            html.classList.toggle('stop_scroll')
            
        })
    }
})