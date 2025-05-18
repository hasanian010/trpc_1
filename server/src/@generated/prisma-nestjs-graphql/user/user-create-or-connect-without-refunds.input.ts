import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutRefundsInput } from './user-create-without-refunds.input';

@InputType()
export class UserCreateOrConnectWithoutRefundsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'phone'>;

    @Field(() => UserCreateWithoutRefundsInput, {nullable:false})
    @Type(() => UserCreateWithoutRefundsInput)
    create!: UserCreateWithoutRefundsInput;
}
