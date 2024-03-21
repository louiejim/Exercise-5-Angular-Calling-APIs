import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
  @Output() actionEmitter = new EventEmitter<string>();

  emitAction(actionType: string) {
    this.actionEmitter.emit(actionType);
}
}
