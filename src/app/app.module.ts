import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { SummarisePipe } from './pipes/summarise.pipe';
import { UserListComponent } from './user-list/user-list.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { MakoletComponent } from './makolet/makolet.component';
import { ColorChangeDirective } from './directives/color-change.directive';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    SummarisePipe,
    UserListComponent,
    ParentComponent,
    ChildComponent,
    MakoletComponent,
    ColorChangeDirective,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
