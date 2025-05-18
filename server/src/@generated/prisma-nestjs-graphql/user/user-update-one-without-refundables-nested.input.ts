import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefundablesInput } from './user-create-without-refundables.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRefundablesInput } from './user-create-or-connect-without-refundables.input';
import { UserUpsertWithoutRefundablesInput } from './user-upsert-without-refundables.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRefundablesInput } from './user-update-to-one-with-where-without-refundables.input';

@InputType()
export class UserUpdateOneWithoutRefundablesNestedInput {

    @Field(() => UserCreateWithoutRefundablesInput, {nullable:true})
    @Type(() => UserCreateWithoutRefundablesInput)
    create?: UserCreateWithoutRefundablesInput;

    @Field(() => UserCreateOrConnectWithoutRefundablesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefundablesInput)
    connectOrCreate?: UserCreateOrConnectWithoutRefundablesInput;

    @Field(() => UserUpsertWithoutRefundablesInput, {nullable:true})
    @Type(() => UserUpsertWithoutRefundablesInput)
    upsert?: UserUpsertWithoutRefundablesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRefundablesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRefundablesInput)
    update?: UserUpdateToOneWithWhereWithoutRefundablesInput;
}
