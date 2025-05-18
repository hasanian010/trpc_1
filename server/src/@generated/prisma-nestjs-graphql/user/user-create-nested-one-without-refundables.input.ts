import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefundablesInput } from './user-create-without-refundables.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRefundablesInput } from './user-create-or-connect-without-refundables.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRefundablesInput {

    @Field(() => UserCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => UserCreateWithoutRefundablesInput)
    create?: UserCreateWithoutRefundablesInput;

    @Field(() => UserCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRefundablesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
