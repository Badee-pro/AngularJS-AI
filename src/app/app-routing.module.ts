import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { chatBox } from './chatBox/chatBox.component';

const routes: Routes = [{ path: '', component: chatBox }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [];
