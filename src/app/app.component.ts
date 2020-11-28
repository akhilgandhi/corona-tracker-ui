import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  navLinks: any[];
  activeLinkIndex = -1;

  theme: string = '';

  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  themingSubscription: Subscription;

  @HostBinding('class') public cssClass: string;

  constructor(private router: Router, private themingService: ThemingService, private overlayContainer: OverlayContainer) {
    this.navLinks = [
      {
        label: 'HOME',
        link: './dashboard',
        index: 0
      },
      {
        label: 'DISCOVERED',
        link: './discovered',
        index: 1
      },
      {
        label: 'ACTIVE',
        link: './active',
        index: 2
      },
      {
        label: 'FATALITIES',
        link: './fatalities',
        index: 3
      },
      {
        label: 'CURED',
        link: './cured',
        index: 4
      }
    ]
  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    this.themingSubscription = this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      this.applyThemeOnOverlays();
    })
  }

  applyThemeOnOverlays() {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(this.themingService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.cssClass);
  }

  changeTheme(theme: string) {
    this.themingService.theme.next(theme);
    this.theme = theme;
    if (this.theme == 'light-theme') {
      document.getElementById('light').setAttribute("aria-hidden", "false");
      document.getElementById('dark').setAttribute("aria-hidden", "true");
    } 
    if (this.theme == 'dark-theme') {
      document.getElementById('dark').setAttribute("aria-hidden", "false");
      document.getElementById('light').setAttribute("aria-hidden", "true");
    }
  }
}
