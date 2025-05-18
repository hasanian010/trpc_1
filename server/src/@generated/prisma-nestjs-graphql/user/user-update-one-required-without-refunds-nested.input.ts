import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefundsInput } from './user-create-without-refunds.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRefundsInput } from './user-create-or-connect-without-refunds.input';
import { UserUpsertWithoutRefundsInput } from './user-upsert-without-refunds.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutRefundsInput } from './user-update-to-one-with-where-without-refunds.input';

@InputType()
export class UserUpdateOneRequiredWithoutRefundsNestedInput {

    @Field(() => UserCreateWithoutRefundsInput, {nullable:true})
    @Type(() => UserCreateWithoutRefundsInput)
    create?: UserCreateWithoutRefundsInput;

    @Field(() => UserCreateOrConnectWithoutRefundsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefundsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRefundsInput;

    @Field(() => UserUpsertWithoutRefundsInput, {nullable:true})
    @Type(() => UserUpsertWithoutRefundsInput)
    upsert?: UserUpsertWithoutRefundsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutRefundsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutRefundsInput)
    update?: UserUpdateToOneWithWhereWithoutRefundsInput;
}
