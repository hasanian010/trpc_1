import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateWithoutVariationsInput } from './refundable-create-without-variations.input';
import { Type } from 'class-transformer';
import { RefundableCreateOrConnectWithoutVariationsInput } from './refundable-create-or-connect-without-variations.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';

@InputType()
export class RefundableUncheckedCreateNestedManyWithoutVariationsInput {

    @Field(() => [RefundableCreateWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableCreateWithoutVariationsInput)
    create?: Array<RefundableCreateWithoutVariationsInput>;

    @Field(() => [RefundableCreateOrConnectWithoutVariationsInput], {nullable:true})
    @Type(() => RefundableCreateOrConnectWithoutVariationsInput)
    connectOrCreate?: Array<RefundableCreateOrConnectWithoutVariationsInput>;

    @Field(() => [RefundableWhereUniqueInput], {nullable:true})
    @Type(() => RefundableWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>>;
}
