import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Type } from 'class-transformer';
import { RefundUpdateWithoutUserInput } from './refund-update-without-user.input';
import { RefundCreateWithoutUserInput } from './refund-create-without-user.input';

@InputType()
export class RefundUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RefundWhereUniqueInput, {nullable:false})
    @Type(() => RefundWhereUniqueInput)
    where!: Prisma.AtLeast<RefundWhereUniqueInput, 'id'>;

    @Field(() => RefundUpdateWithoutUserInput, {nullable:false})
    @Type(() => RefundUpdateWithoutUserInput)
    update!: RefundUpdateWithoutUserInput;

    @Field(() => RefundCreateWithoutUserInput, {nullable:false})
    @Type(() => RefundCreateWithoutUserInput)
    create!: RefundCreateWithoutUserInput;
}
