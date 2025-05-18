import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutUserInput } from './refundable-update-without-user.input';

@InputType()
export class RefundableUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RefundableWhereUniqueInput, {nullable:false})
    @Type(() => RefundableWhereUniqueInput)
    where!: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => RefundableUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutUserInput)
    data!: RefundableUpdateWithoutUserInput;
}
