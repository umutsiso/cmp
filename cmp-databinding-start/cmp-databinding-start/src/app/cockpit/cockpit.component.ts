import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerContent = '';
  newServerName = '';

  @Output() serverAdded = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintAdded = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintAdded.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
