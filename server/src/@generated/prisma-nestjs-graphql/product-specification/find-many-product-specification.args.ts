import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationWhereInput } from './product-specification-where.input';
import { Type } from 'class-transformer';
import { ProductSpecificationOrderByWithRelationInput } from './product-specification-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductSpecificationScalarFieldEnum } from './product-specification-scalar-field.enum';

@ArgsType()
export class FindManyProductSpecificationArgs {

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    @Type(() => ProductSpecificationWhereInput)
    where?: ProductSpecificationWhereInput;

    @Field(() => [ProductSpecificationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSpecificationOrderByWithRelationInput>;

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProductSpecificationScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductSpecificationScalarFieldEnum}`>;
}
