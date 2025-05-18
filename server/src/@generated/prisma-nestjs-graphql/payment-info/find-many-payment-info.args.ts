import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoWhereInput } from './payment-info-where.input';
import { Type } from 'class-transformer';
import { PaymentInfoOrderByWithRelationInput } from './payment-info-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PaymentInfoWhereUniqueInput } from './payment-info-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentInfoScalarFieldEnum } from './payment-info-scalar-field.enum';

@ArgsType()
export class FindManyPaymentInfoArgs {

    @Field(() => PaymentInfoWhereInput, {nullable:true})
    @Type(() => PaymentInfoWhereInput)
    where?: PaymentInfoWhereInput;

    @Field(() => [PaymentInfoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentInfoOrderByWithRelationInput>;

    @Field(() => PaymentInfoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PaymentInfoWhereUniqueInput, 'id' | 'orderId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PaymentInfoScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PaymentInfoScalarFieldEnum}`>;
}
