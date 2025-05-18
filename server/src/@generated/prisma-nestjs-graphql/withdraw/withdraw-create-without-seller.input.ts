import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReleasedWithdrawsInput } from '../user/user-create-nested-one-without-released-withdraws.input';

@InputType()
export class WithdrawCreateWithoutSellerInput {

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

    @Field(() => UserCreateNestedOneWithoutReleasedWithdrawsInput, {nullable:true})
    releasedBy?: UserCreateNestedOneWithoutReleasedWithdrawsInput;
}
