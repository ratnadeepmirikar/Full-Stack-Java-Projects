import { Component, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css'
})
export class AddMenuComponent implements OnInit {
  menu: Menu = {
    menuid : 0,
    menuName:'',
    quantity: 1,
    price :1,
    

  };
  submitted = false;

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
  }

  savemenu(): void {
    const data = {
      menuName: this.menu.menuName,
      quantity: this.menu.quantity,
      price: this.menu.price,
     
    };

    this.MenuService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newmenu(): void {
    this.submitted = false;
    this.menu = {
      menuName:'',
      quantity: 1,
      price :1,
      
    };
  }
}

  