import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsComponent } from "./products.component";

const routes: Routes = [
    {path: 'products', children: [
        {path: '', component: ProductsComponent},
        {path: ':id', component: ProductsDetailsComponent},
      ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRouting {}
