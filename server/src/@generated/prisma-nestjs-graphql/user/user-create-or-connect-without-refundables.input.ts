import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRefundablesInput } from './user-create-without-refundables.input';

@InputType()
export class UserCreateOrConnectWithoutRefundablesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => UserCreateWithoutRefundablesInput)
    create!: UserCreateWithoutRefundablesInput;
}
