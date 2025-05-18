import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantOrderByWithRelationInput } from './product-attribute-variant-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeVariantScalarFieldEnum } from './product-attribute-variant-scalar-field.enum';

@ArgsType()
export class FindFirstProductAttributeVariantOrThrowArgs {

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    @Type(() => ProductAttributeVariantWhereInput)
    where?: ProductAttributeVariantWhereInput;

    @Field(() => [ProductAttributeVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductAttributeVariantOrderByWithRelationInput>;

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductAttributeVariantScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductAttributeVariantScalarFieldEnum}`>;
}
