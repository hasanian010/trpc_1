import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRefundsInput } from './user-create-without-refunds.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutRefundsInput } from './user-create-or-connect-without-refunds.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutRefundsInput {

    @Field(() => UserCreateWithoutRefundsInput, {nullable:true})
    @Type(() => UserCreateWithoutRefundsInput)
    create?: UserCreateWithoutRefundsInput;

    @Field(() => UserCreateOrConnectWithoutRefundsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutRefundsInput)
    connectOrCreate?: UserCreateOrConnectWithoutRefundsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;
}
