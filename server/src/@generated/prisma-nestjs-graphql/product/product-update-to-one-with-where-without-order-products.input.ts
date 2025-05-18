import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutOrderProductsInput } from './product-update-without-order-products.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutOrderProductsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutOrderProductsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutOrderProductsInput)
    data!: ProductUpdateWithoutOrderProductsInput;
}
