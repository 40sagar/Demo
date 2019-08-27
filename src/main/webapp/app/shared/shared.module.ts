import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HrHelpSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HrHelpSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HrHelpSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrHelpSharedModule {
  static forRoot() {
    return {
      ngModule: HrHelpSharedModule
    };
  }
}
