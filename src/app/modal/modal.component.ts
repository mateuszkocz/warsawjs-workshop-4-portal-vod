import {Component, HostBinding, HostListener, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input()
  @HostBinding('class.visible')
  visible = false;

  @Output()
  close = new EventEmitter<void>();

  @HostListener('click')
  closeModal() {
    this.close.emit(null);
  }
}
