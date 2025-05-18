import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SellerUpdateWithoutWithdrawsInput } from './seller-update-without-withdraws.input';
import { Type } from 'class-transformer';
import { SellerCreateWithoutWithdrawsInput } from './seller-create-without-withdraws.input';
import { SellerWhereInput } from './seller-where.input';

@InputType()
export class SellerUpsertWithoutWithdrawsInput {

    @Field(() => SellerUpdateWithoutWithdrawsInput, {nullable:false})
    @Type(() => SellerUpdateWithoutWithdrawsInput)
    update!: SellerUpdateWithoutWithdrawsInput;

    @Field(() => SellerCreateWithoutWithdrawsInput, {nullable:false})
    @Type(() => SellerCreateWithoutWithdrawsInput)
    create!: SellerCreateWithoutWithdrawsInput;

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;
}
