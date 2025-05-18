import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesOrderByWithRelationInput } from './product-attribute-values-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeValuesScalarFieldEnum } from './product-attribute-values-scalar-field.enum';

@ArgsType()
export class FindFirstProductAttributeValuesOrThrowArgs {

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    @Type(() => ProductAttributeValuesWhereInput)
    where?: ProductAttributeValuesWhereInput;

    @Field(() => [ProductAttributeValuesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductAttributeValuesOrderByWithRelationInput>;

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductAttributeValuesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductAttributeValuesScalarFieldEnum}`>;
}
