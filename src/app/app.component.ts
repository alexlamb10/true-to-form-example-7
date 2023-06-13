import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    subscribe: [false, [Validators.required]],
  });

  constructor(private _fb: FormBuilder) {}
  public formUpdates$ = this.form.valueChanges.pipe(
    startWith(this.form.value),
    map((formValues) => {
      return { ...formValues, valid: this.form.valid };
    })
  );
}
