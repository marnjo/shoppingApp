import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductsComponent } from "./products.component";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ShortenPipe } from '../shared/shorten.pipe';
import { ProductRouting } from "./products.routing";

@NgModule({
    declarations: [
        ProductsComponent,
        ProductItemComponent,
        ShortenPipe,
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
        ProductRouting
    ],
    exports: [ProductsComponent]
})
export class ProductsModule {}
