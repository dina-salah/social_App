import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { initFlowbite } from 'flowbite';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { TimelineComponent } from "./pages/timeline/timeline.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'social-media';
  
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

}
