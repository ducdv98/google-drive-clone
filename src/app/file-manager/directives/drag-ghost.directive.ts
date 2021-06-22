import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDragGhost]'
})
export class DragGhostDirective {

  @Input() content: string;
  @Input() type: string;
  @Input() countFiles: number;

  constructor() {
  }

  @HostListener('dragstart', ['$event'])
  onDragStart(event: any): void {
    const container = document.createElement('div');
    container.classList.add('drag-ghost');

    const image = new Image();
    image.src = `assets/icon-files-types/${this.type}.svg`;
    image.classList.add('image-ghost');

    const span = document.createElement('span');
    span.classList.add('description');
    span.textContent = this.content;

    const div = document.createElement('div');
    div.classList.add('count-draggable');
    div.textContent = this.countFiles.toString();

    container.appendChild(image);
    container.appendChild(span);
    if (this.countFiles > 1) {
      container.appendChild(div);
    }
    document.body.appendChild(container);
    event.dataTransfer.setDragImage(container, 0, 0);
  }

  @HostListener('dragend')
  onDragEnd(): void {
    document.querySelector('.drag-ghost')?.remove();
  }

}
