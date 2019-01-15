// 1. Angular Module File
import { NgModule } from "@angular/core";
// 1. Import all standard modules
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule } from "@angular/forms";
// 2. Import all components and directives
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
// 3. Import all services

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SimpleComponent, ProductComponent],
  bootstrap: [ProductComponent]
})
export class AppModule {}
// 4. Making the AppModule as Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
