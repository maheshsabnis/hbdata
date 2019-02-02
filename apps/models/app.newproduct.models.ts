export class ProductData {
    constructor(
        public ProdId:number,
        public ProdName:string,
        public CatId:number
    ) {}
}

export const Products:Array<ProductData> = new Array<ProductData>();

Products.push(new ProductData(10001,"P1",101));
Products.push(new ProductData(10002,"P2",102));
Products.push(new ProductData(10003,"P3",103));
Products.push(new ProductData(10004,"P4",101));
Products.push(new ProductData(10005,"P5",102));
Products.push(new ProductData(10006,"P6",103));