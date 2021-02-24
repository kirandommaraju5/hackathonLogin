import {Component, Input, OnInit} from '@angular/core';
import { Server } from '@app/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less']
})
export class ServersComponent implements OnInit {
  @Input() servers;
  availableColumns;
  selectedColumns;

  constructor(private router: Router) {
    this.availableColumns = Object.keys(Server)
    this.selectedColumns = [{ name: 'Name' }, { prop: 'serial_number' }, { name: 'Manufacturer' }]
  }

  ngOnInit(): void {
  }

  onActivate(event) {
    if(event.type == 'click') {
      this.router.navigate(['/details'], {state: event.row})
    }
  }

}
