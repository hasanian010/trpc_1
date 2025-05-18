import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { SellerCreateNestedOneWithoutWithdrawsInput } from '../seller/seller-create-nested-one-without-withdraws.input';
import { UserCreateNestedOneWithoutReleasedWithdrawsInput } from '../user/user-create-nested-one-without-released-withdraws.input';

@InputType()
export class WithdrawCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SellerCreateNestedOneWithoutWithdrawsInput, {nullable:false})
    seller!: SellerCreateNestedOneWithoutWithdrawsInput;

    @Field(() => UserCreateNestedOneWithoutReleasedWithdrawsInput, {nullable:true})
    releasedBy?: UserCreateNestedOneWithoutReleasedWithdrawsInput;
}
