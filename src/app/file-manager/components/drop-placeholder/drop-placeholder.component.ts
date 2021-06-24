import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-placeholder',
  templateUrl: './drop-placeholder.component.html',
  styleUrls: ['./drop-placeholder.component.scss']
})
export class DropPlaceholderComponent implements OnInit {
  @Input() message: string;
  @Input() targetName: string;
  @Input() visible: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
