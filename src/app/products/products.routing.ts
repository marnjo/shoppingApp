import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";

const routes: Routes = [
    {path: 'products', children: [
        {path: '', component: ProductsComponent},
      ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ProductRouting {}
