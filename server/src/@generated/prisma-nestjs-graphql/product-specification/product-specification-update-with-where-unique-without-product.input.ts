import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Type } from 'class-transformer';
import { ProductSpecificationUpdateWithoutProductInput } from './product-specification-update-without-product.input';

@InputType()
export class ProductSpecificationUpdateWithWhereUniqueWithoutProductInput {

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:false})
    @Type(() => ProductSpecificationWhereUniqueInput)
    where!: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;

    @Field(() => ProductSpecificationUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductSpecificationUpdateWithoutProductInput)
    data!: ProductSpecificationUpdateWithoutProductInput;
}
