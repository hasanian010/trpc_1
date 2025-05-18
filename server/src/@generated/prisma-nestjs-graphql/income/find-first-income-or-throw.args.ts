import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeWhereInput } from './income-where.input';
import { Type } from 'class-transformer';
import { IncomeOrderByWithRelationInput } from './income-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Int } from '@nestjs/graphql';
import { IncomeScalarFieldEnum } from './income-scalar-field.enum';

@ArgsType()
export class FindFirstIncomeOrThrowArgs {

    @Field(() => IncomeWhereInput, {nullable:true})
    @Type(() => IncomeWhereInput)
    where?: IncomeWhereInput;

    @Field(() => [IncomeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IncomeOrderByWithRelationInput>;

    @Field(() => IncomeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [IncomeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${IncomeScalarFieldEnum}`>;
}
