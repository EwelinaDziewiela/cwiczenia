import { Component } from '@angular/core'

@Component({

  selector: "top-menu",
  templateUrl: "top.menu.html",
  styles: ["top.menu.sass"]
})
export class TopMenu {

  menuItems = [{
    name: "Home",
    link: "/"
  },
    {
      name: "Contact",
      link: "/contact"
    }]

}
