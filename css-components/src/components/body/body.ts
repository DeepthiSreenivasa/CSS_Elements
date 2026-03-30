import { Component } from '@angular/core';
import { BadgeOnCard } from '../badge-on-card/badge-on-card';
import { NavBar } from '../nav-bar/nav-bar';

@Component({
  selector: 'app-body',
  imports: [BadgeOnCard,NavBar],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
