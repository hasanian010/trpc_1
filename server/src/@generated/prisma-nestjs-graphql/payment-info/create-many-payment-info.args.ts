import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentInfoCreateManyInput } from './payment-info-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPaymentInfoArgs {

    @Field(() => [PaymentInfoCreateManyInput], {nullable:false})
    @Type(() => PaymentInfoCreateManyInput)
    data!: Array<PaymentInfoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
