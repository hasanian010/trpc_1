import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateManyUserInput } from './refundable-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundableCreateManyUserInputEnvelope {

    @Field(() => [RefundableCreateManyUserInput], {nullable:false})
    @Type(() => RefundableCreateManyUserInput)
    data!: Array<RefundableCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
