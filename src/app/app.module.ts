import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product-component/product.component';
import { ProductList } from './product-list/product.list';
import { TopMenu } from './top-menu/top.menu';
import { ContactPage } from './contact-page/contact.page';
import { ContactForm } from './contact-page/contact-form/contact.form';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductList,
    TopMenu,
    ContactPage,
    ContactForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent },
      { path: '', component: ProductList },
      { path: 'contact', component: ContactPage }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
