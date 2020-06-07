import { Component, ElementRef, AfterContentInit, OnDestroy, Input } from '@angular/core';
import { annotate } from 'rough-notation';
import { Annotation, types, RoughNotationPadding } from './types';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rough-notation',
  templateUrl: './rough-notation.component.html'
})

export class RoughNotationComponent implements AfterContentInit, OnDestroy {
  public annotation: Annotation;
  private showAnnotation = false;
  @Input() type: types;
  @Input() animate = true;
  @Input() animationDuration = 800;
  @Input() color: string;
  @Input() strokeWidth = 1;
  @Input() padding: RoughNotationPadding = 5;
  @Input() iterations = 2;
  @Input()
  set show(value: boolean) {
    this.showAnnotation = value;
    if (this.annotation) {
      this.updateAnnotationVisibility(value);
    }
  }

  constructor(private elementRef: ElementRef) { }

  ngAfterContentInit(): void {
    const ele = this.elementRef.nativeElement;
    if (ele && this.type) {
      this.annotation = annotate(ele, {
        type: this.type,
        color: this.color,
        animate: this.animate,
        animationDuration: this.animationDuration,
        strokeWidth: this.strokeWidth,
        padding: this.padding,
        iterations: this.iterations
      });
      if (this.showAnnotation === true) {
        this.annotation.show();
      }
    }
  }

  private updateAnnotationVisibility(value: boolean): void {
    if (value === true) {
      this.annotation.show();
    } else {
      this.annotation.hide();
    }
  }

  ngOnDestroy(): void {
    this.annotation.remove();
  }
}
