import { NgModule } from '@angular/core';
import { RoughNotationComponent } from './components/rough-notation';
import { RoughNotationGroupComponent } from './components/rough-notation-group';



@NgModule({
  declarations: [RoughNotationComponent, RoughNotationGroupComponent],
  imports: [
  ],
  exports: [RoughNotationComponent, RoughNotationGroupComponent]
})
export class RoughNotationModule { }
