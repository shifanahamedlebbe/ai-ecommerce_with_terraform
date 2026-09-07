import { ProductsService } from './products.service.js';
import { ProductQueryDto } from './dto/product.query.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(query: ProductQueryDto): Promise<{
        products: import("./interface/product.interface.js").Product[];
        total: number;
    }>;
    getCategories(): Promise<string[]>;
    getDeals(): Promise<import("./interface/product.interface.js").Product[]>;
    findById(id: string): Promise<import("./interface/product.interface.js").Product>;
}
