import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu-item';
import { MenuItems } from '../menu-items';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  // A list of all menu items
  menuData = MenuItems;

  // Keeping track of menu item that is selected so that we know which to mark and what to
  selectedMenuItem: MenuItems[0];
  menuClick(menuItem: MenuItem): void {
    this.selectedMenuItem = menuItem;
  }

  // Toggle between showing and hiding the sidebar, and add overlay effect
  openMenu($event) {
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");

    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlay");

    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
      overlayBg.style.display = "none";
    } else {
      mySidebar.style.display = 'block';
      overlayBg.style.display = "block";
    }
  }

  // Close the sidebar with the close button
  closeMenu($event) {
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");

    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlay");

    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
  }

  ngOnInit() {
  }

}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/