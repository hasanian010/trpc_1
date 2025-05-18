import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeOrderByWithRelationInput } from './product-attribute-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeScalarFieldEnum } from './product-attribute-scalar-field.enum';

@ArgsType()
export class FindFirstProductAttributeOrThrowArgs {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => [ProductAttributeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductAttributeOrderByWithRelationInput>;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductAttributeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductAttributeScalarFieldEnum}`>;
}
