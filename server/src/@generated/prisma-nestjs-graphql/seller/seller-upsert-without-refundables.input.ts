import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutRefundablesInput } from './seller-update-without-refundables.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutRefundablesInput } from './seller-create-without-refundables.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutRefundablesInput {

    @Field(() => SellerUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => SellerUpdateWithoutRefundablesInput)
    update!: SellerUpdateWithoutRefundablesInput;

    @Field(() => SellerCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => SellerCreateWithoutRefundablesInput)
    create!: SellerCreateWithoutRefundablesInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
