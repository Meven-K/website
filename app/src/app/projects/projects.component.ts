import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ApiService]

})
export class ProjectsComponent implements OnInit {
  contents: string | undefined;

  constructor(private apiService: ApiService) { }

  clear() {
    this.contents = undefined;
  }

  download() {
    this.contents = this.apiService.getMessage("http://127.0.0.1:5000/message");
  }

  ngOnInit(): void {
  }

}