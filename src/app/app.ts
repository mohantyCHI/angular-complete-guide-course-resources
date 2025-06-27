import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header";

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'first-angular-app';
}
