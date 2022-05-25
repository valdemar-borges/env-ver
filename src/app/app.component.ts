import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gui';


  serverInfo!: any;
  serverNames!: any;
  keys : any;

  constructor(private clientService: ClientService){
  }

  ngOnInit(): void {
    this.clientService.requestData().subscribe(data=>{
      this.serverInfo = data;
    })
  }
}
