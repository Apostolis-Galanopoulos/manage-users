import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { InputComponent } from '@app/shared/elements/input/input.component';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'usr-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Output() fileUploaded = new EventEmitter();
  @Input() data!: string;
  @Input() accepts: string = '*';
  @Input() formControlNameValue!: string;
  @ViewChild(InputComponent) inputComponent!: InputComponent;
  hasUploaded: boolean = false;
  base64Output!: string;
  constructor (
    private readonly cd: ChangeDetectorRef
  ) { }
  ngOnInit (): void {
    if (this.data) {
      this.base64Output = this.data;
      this.hasUploaded = true;
    }
  }

  fileUploadEvent () {
    this.inputComponent.inputEL.nativeElement.click();
  }
  onFileSelected (event: Event) {
    if (!event) {
      return;
    }
    const target = event.target as HTMLInputElement;
    const file: File = target.files![0] || null;
    if (file) {
      this.convertFile(file).subscribe(base64 => {
        this.base64Output = base64;
        this.fileUploaded.emit(base64);
        this.cd.detectChanges();
      });
      this.hasUploaded = true;
    }
  }

  /**
   *
   * @param file
   * @returns
   * @description convert bas64 from the file
   */
  convertFile (file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
      if (event && event.target) {
        const target = event.target.result || '';
        result.next(btoa(target.toString()));
      }
    };
    return result;
  }
}
