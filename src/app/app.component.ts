import { Component } from '@angular/core';
import { RouterOutlet , Router } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";



@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet,LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTide-Frontend';
}
