import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PaymentInfoUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    paymentMethod?: string;

    @Field(() => String, {nullable:true})
    paymentId?: string;

    @Field(() => String, {nullable:true})
    provider?: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
