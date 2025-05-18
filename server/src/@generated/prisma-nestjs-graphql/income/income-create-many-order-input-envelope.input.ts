import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateManyOrderInput } from './income-create-many-order.input';
import { Type } from 'class-transformer';

@InputType()
export class IncomeCreateManyOrderInputEnvelope {

    @Field(() => [IncomeCreateManyOrderInput], {nullable:false})
    @Type(() => IncomeCreateManyOrderInput)
    data!: Array<IncomeCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
