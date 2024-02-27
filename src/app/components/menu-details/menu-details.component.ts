import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.css'
})
export class MenuDetailsComponent implements OnInit{

  @Input() viewMode = false;

  @Input() currentmenu: Menu = {
    menuid:0,
    menuName:'',
    quantity:0,
    price:0,
    totalbill: 0,
  };

  
  message = '';

  constructor(
    private menuService: MenuService,
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getmenu(this.route.snapshot.params['menuid']);
  }

  getmenu(menuid: number): void {
    this.menuService.get(menuid)
      .subscribe(
        data => {
          this.currentmenu = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentmenu.title,
  //     description: this.currentTutorial.description,
  //     published: status
  //   };

  //   this.message = '';

  //   this.MenuService.update(this.currentmenu.id, data)
  //     .subscribe(
  //       response => {
  //         this.currentmenu.published = status;
  //         console.log(response);
  //         this.message = response.message ? response.message : 'The status was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  updateMenu(): void {
    this.message = '';

    this.menuService.update(this.currentmenu.menuid, this.currentmenu)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This Menu was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deletemenu(): void {
    this.menuService.delete(this.currentmenu.menuid)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/menu']);
        },
        error => {
          console.log(error);
        });
  }
}
