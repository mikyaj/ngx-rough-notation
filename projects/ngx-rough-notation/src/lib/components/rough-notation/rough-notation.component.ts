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
  private _show = false;
  private _color = 'currentColor';
  private _strokeWidth = 1;
  private _padding: RoughNotationPadding = 5;
  @Input() type: types;
  @Input() animate = true;
  @Input() animationDuration = 800;
  @Input() iterations = 2;

  @Input()
  set color(value: string) {
    this._color = value;
    if (this.annotation) {
      this.annotation.color = value;
    }
  }

  @Input()
  set strokeWidth(value: number) {
    this._strokeWidth = value;
    if (this.annotation) {
      this.annotation.strokeWidth = value;
    }
  }

  @Input()
  set padding(value: RoughNotationPadding) {
    this._padding = value;
    if (this.annotation) {
      this.annotation.padding = value;
    }
  }

  @Input()
  set show(value: boolean) {
    this._show = value;
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
        color: this._color,
        animate: this.animate,
        animationDuration: this.animationDuration,
        strokeWidth: this._strokeWidth,
        padding: this._padding,
        iterations: this.iterations
      });
      if (this._show === true) {
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
