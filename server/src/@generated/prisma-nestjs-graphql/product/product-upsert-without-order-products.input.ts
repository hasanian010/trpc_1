import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutOrderProductsInput } from './product-update-without-order-products.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderProductsInput } from './product-create-without-order-products.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutOrderProductsInput {

    @Field(() => ProductUpdateWithoutOrderProductsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderProductsInput)
    update!: ProductUpdateWithoutOrderProductsInput;

    @Field(() => ProductCreateWithoutOrderProductsInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderProductsInput)
    create!: ProductCreateWithoutOrderProductsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
