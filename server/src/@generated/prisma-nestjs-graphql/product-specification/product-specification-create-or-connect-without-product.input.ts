import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Type } from 'class-transformer';
import { ProductSpecificationCreateWithoutProductInput } from './product-specification-create-without-product.input';

@InputType()
export class ProductSpecificationCreateOrConnectWithoutProductInput {

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:false})
    @Type(() => ProductSpecificationWhereUniqueInput)
    where!: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;

    @Field(() => ProductSpecificationCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductSpecificationCreateWithoutProductInput)
    create!: ProductSpecificationCreateWithoutProductInput;
}
