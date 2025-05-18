import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundCreateManyUserInput } from './refund-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RefundCreateManyUserInputEnvelope {

    @Field(() => [RefundCreateManyUserInput], {nullable:false})
    @Type(() => RefundCreateManyUserInput)
    data!: Array<RefundCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
