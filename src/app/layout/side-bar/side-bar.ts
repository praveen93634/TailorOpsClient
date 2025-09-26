import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { items } from '../../data/menu';
import {Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule,RouterModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {
    isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
items: any=items;
  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
