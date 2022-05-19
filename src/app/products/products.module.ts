import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsComponent } from "./products.component";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ShortenPipe } from '../shared/shorten.pipe';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductItemComponent,
        ShortenPipe,
        ProductsDetailsComponent
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
    ],
    exports: [ProductsComponent]
})
export class ProductsModule {}
