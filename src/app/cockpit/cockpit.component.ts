import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{bluePrintName:string, bluePrintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement){

    // this.serverCreated.emit({
    //   serverName:serverNameInput.value, 
    //   serverContent: this.newServerContent});

      this.serverCreated.emit({
        serverName:serverNameInput.value, 
        serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
    // this.bluePrintCreated.emit({
    //   bluePrintName:serverNameInput.value, 
    //   bluePrintContent: this.newServerContent});

      this.bluePrintCreated.emit({
        bluePrintName:serverNameInput.value, 
        bluePrintContent: this.serverContentInput.nativeElement.value});
  }
  

}
