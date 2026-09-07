import { Product } from './interface/product.interface.js';
import { ProductQueryDto } from './dto/product.query.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: ProductQueryDto): Promise<{
        products: Product[];
        total: number;
    }>;
    getDeals(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    getCategories(): Promise<string[]>;
}
