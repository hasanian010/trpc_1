import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutSectionProductsInput } from './product-update-without-section-products.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutSectionProductsInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutSectionProductsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSectionProductsInput)
    data!: ProductUpdateWithoutSectionProductsInput;
}
