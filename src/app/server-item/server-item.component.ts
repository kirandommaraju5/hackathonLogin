import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.less']
})
export class ServerItemComponent implements OnInit {
  selectedServer;
  isEditMode: boolean;

  constructor(private router: Router) {
    this.isEditMode = false;
    this.selectedServer = this.router.getCurrentNavigation().extras.state
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.isEditMode = true
  }

  onSave() {

  }

}
