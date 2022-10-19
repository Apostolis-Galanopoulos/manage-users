import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl } from '@angular/forms';
import { SafeHtmlPipe } from '@app/shared/pipes/safe-html.pipe';

@Component({
  selector: 'usr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SafeHtmlPipe]
})
export class InputComponent implements ControlValueAccessor, AfterViewInit {

  @Input() accepts: string = '*';
  @Output() change: EventEmitter<Event> = new EventEmitter();
  @Input() set placeholder (val: string) {
    this.placeholderText = this.safeHtmlPipe.transform(val) as string;

  }
  @Input() type: string = 'text';
  @Input() formControlNameValue!: string;
  @ViewChild('inputEl') inputEL!: ElementRef;
  placeholderText!: string;
  control!: AbstractControl;
  constructor (
    private readonly controlContainer: ControlContainer,
    private readonly safeHtmlPipe: SafeHtmlPipe
  ) { }

  ngAfterViewInit (): void {
    this.inputEL.nativeElement.placeholder = 'Please specify';
  }
  writeValue (): void {

  }
  registerOnChange (): void {

  }
  registerOnTouched (): void {

  }

  get formControl (): FormControl {
    return this.control = this.controlContainer.control!!.get(this.formControlNameValue) as FormControl;
  }
  changeEvent (event: Event) {
    this.change.emit(event);
  }
}
