import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutOrderProductsInput } from './product-create-without-order-products.input';

@InputType()
export class ProductCreateOrConnectWithoutOrderProductsInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutOrderProductsInput, {nullable:false})
    @Type(() => ProductCreateWithoutOrderProductsInput)
    create!: ProductCreateWithoutOrderProductsInput;
}
