import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})

export class MenuListComponent implements OnInit {

  
  Menu?: Menu[];
  currentmenu: Menu = {};
  currentIndex = -1;
  menuName = '';

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
    this.retrievemenu();
  }

  retrievemenu(): void {
    this.MenuService.getAll()
      .subscribe(
        data => {
          this.Menu = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievemenu();
    this.currentmenu = {};
    this.currentIndex = -1;
  }

  setActivemenu(menu: Menu, index: number): void {
    this.currentmenu = menu;
    this.currentIndex = index;
  }

  removeAllmenu(): void {
    this.MenuService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  // searchTitle(): void {
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;

  //   this.tutorialService.findByTitle(this.title)
  //     .subscribe(
  //       data => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  }