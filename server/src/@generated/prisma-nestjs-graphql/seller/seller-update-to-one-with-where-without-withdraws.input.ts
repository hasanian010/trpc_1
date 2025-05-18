import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerUpdateWithoutWithdrawsInput } from './seller-update-without-withdraws.input';

@InputType()
export class SellerUpdateToOneWithWhereWithoutWithdrawsInput {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => SellerUpdateWithoutWithdrawsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutWithdrawsInput)
    data!: SellerUpdateWithoutWithdrawsInput;
}
