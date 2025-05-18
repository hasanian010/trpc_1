import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderWhereInput } from './preorder-where.input';
import { Type } from 'class-transformer';
import { PreorderOrderByWithRelationInput } from './preorder-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PreorderWhereUniqueInput } from './preorder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PreorderScalarFieldEnum } from './preorder-scalar-field.enum';

@ArgsType()
export class FindManyPreorderArgs {

    @Field(() => PreorderWhereInput, {nullable:true})
    @Type(() => PreorderWhereInput)
    where?: PreorderWhereInput;

    @Field(() => [PreorderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PreorderOrderByWithRelationInput>;

    @Field(() => PreorderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PreorderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PreorderScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PreorderScalarFieldEnum}`>;
}
