import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';
import { Type } from 'class-transformer';
import { WithdrawOrderByWithRelationInput } from './withdraw-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WithdrawScalarFieldEnum } from './withdraw-scalar-field.enum';

@ArgsType()
export class FindManyWithdrawArgs {

    @Field(() => WithdrawWhereInput, {nullable:true})
    @Type(() => WithdrawWhereInput)
    where?: WithdrawWhereInput;

    @Field(() => [WithdrawOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WithdrawOrderByWithRelationInput>;

    @Field(() => WithdrawWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [WithdrawScalarFieldEnum], {nullable:true})
    distinct?: Array<`${WithdrawScalarFieldEnum}`>;
}
