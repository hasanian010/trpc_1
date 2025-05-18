import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSectionProductsInput } from './product-create-without-section-products.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSectionProductsInput } from './product-create-or-connect-without-section-products.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductCreateNestedOneWithoutSectionProductsInput {

    @Field(() => ProductCreateWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductCreateWithoutSectionProductsInput)
    create?: ProductCreateWithoutSectionProductsInput;

    @Field(() => ProductCreateOrConnectWithoutSectionProductsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSectionProductsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutSectionProductsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;
}
