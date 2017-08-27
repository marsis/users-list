/**
 * A simple example of HTML5 drag and drop using Angular2.
 *
 * Author: Rafael Odon (odon.rafael@gmail.com)
 * Date: 21 sept 2016
 */

import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

// The draggable component
@Component({
  selector: 'dragme',
  template: `
        <div draggable="true">
            Drag {{name}}!
        </div>
    `,
  styles: [`
        [draggable] {
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            -khtml-user-drag: element;
            -webkit-user-drag: element;
            background-color: #AAA; 
            border: 2px solid #aaa;
            padding: 24px;
            margin: 12px;
            width: 100px;
            border-radius: 5px;
            display: inline-block;
        }
    [draggable]:hover {
      background-color: silver;
      cursor: pointer;
      border: 2px dashed #000;
    }
    `]
})
export class DragMe {

  @Input()
  name: string = "";

  @HostListener('dragstart', ['$event'])
  onDrag(event: any) {
    event.dataTransfer.setData("text/plain", '<button>submit</button>');
  }
}

// The drop area component
@Component({
  selector: 'drop',
  template: `
    <div class="drop">
      Drop over me!
      <ul>
        <li #addButton *ngFor="let i of items">{{i}}</li>
        
      </ul>
    </div>
  `,
  styles: [`
    .drop{
      border: 1px solid black;
      padding: 24px;
    }
  `]
})
export class DropOverMe {

  items: string[] = [];

  @ViewChild('addButton')
  addButton: ElementRef;

  @HostListener('dragover', ['$event'])
  onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: any) {
    event.preventDefault();
    var name = event.dataTransfer.getData("text/plain");
    this.addButton.nativeElement.appendChild(name.native);
  }
}

// The functional example
@Component({
  selector: "dragndrop-example",
  template: `
    <dragme name="Bob"></dragme>
    <dragme name="Alice"></dragme>
    <dragme name="Carl"></dragme>

    <drop></drop>
  `

})
export class DragAndDropExample {

}