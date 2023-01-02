import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  isChecked: boolean = false;
  mode: string = 'light_mode';
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }

  ngOnInit(): void {
   
  }
}
