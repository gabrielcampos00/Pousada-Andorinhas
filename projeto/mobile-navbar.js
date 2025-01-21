class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(this.mobileMenu)
        this.navList = document.querySelector(this.navList)
        this.navLinks = document.querySelectorAll(this.navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
         
    }

    handleClick() {
        console.log(this)
        this.navList.classList.toggle(this.activeClass)
        this.animateLinks()
    }

    animateLinks() {
        this.navLinks.forEach((link) => {
            console.log(index / 7 + 0.2 )
        link.style.animation
        ?(link.style.animation = "")
        :(link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        })
    }

    

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("HEY"))
    }

    init() {
        if(this.mobileMenu) {
          this.addClickEvent()
        }
        return this
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list", 
    ".nav-list li"
)
mobileNavBar.init()