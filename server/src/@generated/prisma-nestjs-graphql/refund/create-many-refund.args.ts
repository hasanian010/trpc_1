import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundCreateManyInput } from './refund-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRefundArgs {

    @Field(() => [RefundCreateManyInput], {nullable:false})
    @Type(() => RefundCreateManyInput)
    data!: Array<RefundCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
