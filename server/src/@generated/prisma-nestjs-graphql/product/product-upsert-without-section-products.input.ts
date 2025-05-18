import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutSectionProductsInput } from './product-update-without-section-products.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSectionProductsInput } from './product-create-without-section-products.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutSectionProductsInput {

    @Field(() => ProductUpdateWithoutSectionProductsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutSectionProductsInput)
    update!: ProductUpdateWithoutSectionProductsInput;

    @Field(() => ProductCreateWithoutSectionProductsInput, {nullable:false})
    @Type(() => ProductCreateWithoutSectionProductsInput)
    create!: ProductCreateWithoutSectionProductsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
