import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutBrandInput } from './product-create-without-brand.input';

@InputType()
export class ProductCreateOrConnectWithoutBrandInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductCreateWithoutBrandInput, {nullable:false})
    @Type(() => ProductCreateWithoutBrandInput)
    create!: ProductCreateWithoutBrandInput;
}
