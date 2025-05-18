import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutRefundablesInput } from './seller-update-without-refundables.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutRefundablesInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => SellerUpdateWithoutRefundablesInput)
    data!: SellerUpdateWithoutRefundablesInput;
}
