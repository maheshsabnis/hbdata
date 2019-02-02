// 1. Angular Module File
import { NgModule } from "@angular/core";
// 1. Import all standard modules
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
// 2. Import all components and directives
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponent/app.product.component";
import { ProductFormComponent } from "./components/productformcomponent/app.productform.component";
import { SampleServiceComponent } from "./components/sampleservicecomponent/app.sampleservice.component";
import { ProductServiceComponent } from "./components/productservicecomponent/app.productservice.component";
import { CategoryMasterComponent } from "./components/masterdetails/app.categorymaster.component";
import { ProductChildComponent } from "./components/masterdetails/app.productchild.component";
import { CategorySenderMasterComponent } from "./components/masterdetailswithservices/app.categorymaster.component";
import { ProductChildReceiverComponent } from "./components/masterdetailswithservices/app.productchild.component";
import { ColorDirective } from "./directives/app.color.directive";
import { DirectiveComponent } from "./components/directivecomponent/app.directive.component";
import { HomeComponent } from "./components/routecomponents/app.home.component";
import { ContactComponent } from "./components/routecomponents/app.contact.component";
import { AboutComponent } from "./components/routecomponents/app.about.component";
import { routing } from "./components/routecomponents/app.route.table";
import { MainComponent } from "./components/routecomponents/app.main.component";
import { ErrorComponent } from "./components/routecomponents/app.error.component";
import { DepartmentComponent } from "./components/newmasterchild/app.dept.component";
import { EmployeeComponent } from "./components/newmasterchild/app.emp.component";
// 3. Import all services
import { SampleService } from "./services/app.sample.service";
import { ProductService } from "./services/app.products.service";
import { CommunicationService } from "./services/app.communication.service";

import { AppGuardService } from "./services/app.test.guard.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  declarations: [
    SimpleComponent,
    ProductComponent,
    ProductFormComponent,
    SampleServiceComponent,
    ProductServiceComponent,
    CategoryMasterComponent,
    ProductChildComponent,
    CategorySenderMasterComponent,
    ProductChildReceiverComponent,
    ColorDirective,
    DirectiveComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MainComponent,
    ErrorComponent,
    DepartmentComponent,
    EmployeeComponent
  ],
  providers: [
    SampleService,
    ProductService,
    CommunicationService,
    AppGuardService
  ],
  bootstrap: [DepartmentComponent]
})
export class AppModule {}
// 4. Making the AppModule as Bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);
