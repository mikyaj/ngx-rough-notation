import { Component, QueryList, AfterContentInit, ContentChildren, Input } from '@angular/core';
import { RoughNotationComponent } from '../rough-notation/rough-notation.component';

@Component({
  selector: 'rough-notation-group',
  templateUrl: 'rough-notation-group.component.html'
})

export class RoughNotationGroupComponent implements AfterContentInit {
  public showAll: boolean;
  @Input()
  set show(value: boolean) {
    this.showAll = value;
    this.updateAnnotationsVisiblity(value);
  }
  @ContentChildren(RoughNotationComponent) annotations: QueryList<RoughNotationComponent>;

  ngAfterContentInit(): void {
    this.updateAnnotationsVisiblity(this.showAll);
  }

  updateAnnotationsVisiblity(value: boolean): void {
    if (this.annotations) {
      this.annotations.forEach((comp) => {
        comp.show = this.showAll;
      });
    }
  }


}
