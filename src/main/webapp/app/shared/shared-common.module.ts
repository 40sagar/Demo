import { NgModule } from '@angular/core';

import { HrHelpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [HrHelpSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [HrHelpSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HrHelpSharedCommonModule {}
