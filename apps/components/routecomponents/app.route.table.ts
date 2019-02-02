import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { ProductComponent } from "../productcomponent/app.product.component";
import { AppGuardService } from "../../services/app.test.guard.service";
import { ErrorComponent } from "./app.error.component";

// define route table
// const routes: Routes = [
//   { path: "", component: HomeComponent },
//   { path: "about/:id", component: AboutComponent },
//   {
//     path: "contact",
//     component: ContactComponent,
//     children: [
//       {
//         path: "product",
//         component: ProductComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AppGuardService]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  // { path: "**", component: ErrorComponent }
  { path: "error", component: ErrorComponent }
];

// register the RouteTable for Root of the current NG App
// when "routing" is provided to "imports" of NgModule,
// this will load RouterModule with Route Table
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
