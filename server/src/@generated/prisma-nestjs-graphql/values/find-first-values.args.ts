import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ValuesWhereInput } from './values-where.input';
import { Type } from 'class-transformer';
import { ValuesOrderByWithRelationInput } from './values-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ValuesWhereUniqueInput } from './values-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ValuesScalarFieldEnum } from './values-scalar-field.enum';

@ArgsType()
export class FindFirstValuesArgs {

    @Field(() => ValuesWhereInput, {nullable:true})
    @Type(() => ValuesWhereInput)
    where?: ValuesWhereInput;

    @Field(() => [ValuesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ValuesOrderByWithRelationInput>;

    @Field(() => ValuesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ValuesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ValuesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ValuesScalarFieldEnum}`>;
}
