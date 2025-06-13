import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing-modal',
  imports: [CommonModule],
  templateUrl: './listing-modal.html',
})
export class ListingModal {
  @Input() process: any;
  @Input() close!: () => void;
}
