import { Component, HostListener, signal } from '@angular/core';
import { NavBar } from "./layout/nav-bar/nav-bar";
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./layout/side-bar/side-bar";


@Component({
  selector: 'app-root',
  imports: [NavBar, RouterOutlet, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tailorOpsClient');
   isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
