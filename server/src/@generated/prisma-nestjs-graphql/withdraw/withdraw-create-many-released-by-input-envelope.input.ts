import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WithdrawCreateManyReleasedByInput } from './withdraw-create-many-released-by.input';
import { Type } from 'class-transformer';

@InputType()
export class WithdrawCreateManyReleasedByInputEnvelope {

    @Field(() => [WithdrawCreateManyReleasedByInput], {nullable:false})
    @Type(() => WithdrawCreateManyReleasedByInput)
    data!: Array<WithdrawCreateManyReleasedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
