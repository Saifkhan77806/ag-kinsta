import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // optional, only if you use routerLink
import { MatIconModule } from '@angular/material/icon';
import { ZardButtonComponent } from '@shared/components/button/button.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, ZardButtonComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  @ViewChild('subNavPanel') subNavPanel!: ElementRef;

  isOpen = false;
  panelHeight: string | number = 'auto';
  subNav: any = [];

  subHover(children: any) {
    this.subNav = children || [];
    // this.isOpen = true;

    this.keepOpen();
    console.log(this.isOpen);

    setTimeout(() => {
      if (this.subNavPanel?.nativeElement) {
        this.panelHeight = this.subNavPanel.nativeElement.scrollHeight;
      }
    });
  }

  keepOpen() {
    this.isOpen = true;
  }

  closeNav() {
    this.panelHeight = 0;
    setTimeout(() => {
      this.isOpen = false;
    }, 100);
  }

  routes = [
    {
      path: '',
      text: 'Platform',
      children: [
        {
          title: 'WordPress highlights',
          routes: [
            { text: 'managed hosting for WordPress', path: '/managed-hosting-for-wordpress' },
            { text: 'free sites migration', path: '/free-sites-migration' },
            { text: 'automatic updates', path: '/automatic-updates' },
            { text: 'edge caching', path: '/edge-caching' },
            { text: 'APM tool', path: '/apm-tool' },
            { text: 'wordPress add-ons', path: '/wordpress-add-ons' },
            { text: 'Cloudflare integration', path: '/cloudflare-integrations' },
            { text: 'Security & backups', path: '/security-and-backups' },
            { text: 'Expert support', path: '/expert-support' },
          ],
        },
        {
          title: 'Platform extensions',
          routes: [
            { text: 'Application hosting', path: '/application-hosting' },
            { text: 'Database hosting', path: '/database-hosting' },
            { text: 'Static site hosting', path: '/static-site-hosting' },
            { text: 'DevKinsta', path: '/devkinsta' },
            { text: 'API', path: '/api' },
          ],
        },
        {
          title: "What's New",
          isCard: true,
          image: '/images/nav/platform-1.png',
          text: 'Simplify secure access to MyKinsta with SAML single sign-on',
          path: '/blog1',
          more: 'More changelogs',
        },
      ],
    },
    {
      path: '',
      text: 'Solutions',
      children: [
        {
          title: 'Who we Serve',
          routes: [
            { text: 'managed hosting for WordPress', path: '/managed-hosting-for-wordpress' },
            { text: 'free sites migration', path: '/free-sites-migration' },
            { text: 'automatic updates', path: '/automatic-updates' },
            { text: 'edge caching', path: '/edge-caching' },
            { text: 'APM tool', path: '/apm-tool' },
            { text: 'wordPress add-ons', path: '/wordpress-add-ons' },
            { text: 'Cloudflare integration', path: '/cloudflare-integrations' },
            { text: 'Security & backups', path: '/security-and-backups' },
            { text: 'Expert support', path: '/expert-support' },
          ],
        },
        {
          title: 'Platform extensions',
          routes: [
            { text: 'Application hosting', path: '/application-hosting' },
            { text: 'Database hosting', path: '/database-hosting' },
            { text: 'Static site hosting', path: '/static-site-hosting' },
            { text: 'DevKinsta', path: '/devkinsta' },
            { text: 'API', path: '/api' },
          ],
        },
        {
          title: "What's New",
          isCard: true,
          image: '/images/nav/platform-1.png',
          text: 'Simplify secure access to MyKinsta with SAML single sign-on',
          path: '/blog1',
          more: 'More changelogs',
        },
      ],
    },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
  ];
}
