import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'oek-sdf-form-builder',
  template: `
    <p>
      form-builder works!
    </p>
  `,
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderComponent {

}
