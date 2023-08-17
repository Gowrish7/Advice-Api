import { Component } from '@angular/core';
import { AdviceDataService } from "./services/advice-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advice-api';
  advice1 :any;
  constructor(private advicedata: AdviceDataService) {}

  ngOnInit(): void {
    this.advicedata.users().subscribe((data) => {
      this.advice1 = data;
    });
  }
}
