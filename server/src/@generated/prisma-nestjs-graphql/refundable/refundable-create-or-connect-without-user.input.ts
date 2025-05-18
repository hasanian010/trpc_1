import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableCreateWithoutUserInput } from './refundable-create-without-user.input';

@InputType()
export class RefundableCreateOrConnectWithoutUserInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableCreateWithoutUserInput, {nullable:false})
    @Type(() => RefundableCreateWithoutUserInput)
    create!: RefundableCreateWithoutUserInput;
}
