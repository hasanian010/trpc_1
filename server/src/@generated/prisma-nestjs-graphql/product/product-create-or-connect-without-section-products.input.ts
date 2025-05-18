import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutSectionProductsInput } from './product-create-without-section-products.input';

@InputType()
export class ProductCreateOrConnectWithoutSectionProductsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutSectionProductsInput, {nullable:false})
    @Type(() => ProductCreateWithoutSectionProductsInput)
    create!: ProductCreateWithoutSectionProductsInput;
}
