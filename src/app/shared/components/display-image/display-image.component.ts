import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'usr-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.scss']
})
export class DisplayImageComponent implements OnChanges {

  @Input() source!: string;
  @Input() name: string = 'display image';
  defaultImage: string = '/assets/images/user-profile.svg';
  imageSource!: SafeResourceUrl;
  data = 'data:image/png;base64';

  constructor (
    private readonly sanitizer: DomSanitizer
  ) { }
  ngOnChanges (_changes: SimpleChanges): void {
    this.handleSource();
  }
  handleSource () {
    if (this.source) {
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.data},${this.source}`);
    } else {
      this.imageSource = this.defaultImage;
    }
  }
}
