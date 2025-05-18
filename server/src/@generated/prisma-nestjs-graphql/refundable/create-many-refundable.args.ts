import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableCreateManyInput } from './refundable-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRefundableArgs {

    @Field(() => [RefundableCreateManyInput], {nullable:false})
    @Type(() => RefundableCreateManyInput)
    data!: Array<RefundableCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
