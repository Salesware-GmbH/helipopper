import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TippyDirective } from '@salesware/helipopper';

@Component({
  selector: 'app-is-visible',
  templateUrl: './isVisible.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TippyDirective],
})
export class IsVisibleComponent {
  visibility = true;
}
