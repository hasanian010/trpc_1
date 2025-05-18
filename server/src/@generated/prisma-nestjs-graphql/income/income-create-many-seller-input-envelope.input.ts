import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IncomeCreateManySellerInput } from './income-create-many-seller.input';
import { Type } from 'class-transformer';

@InputType()
export class IncomeCreateManySellerInputEnvelope {

    @Field(() => [IncomeCreateManySellerInput], {nullable:false})
    @Type(() => IncomeCreateManySellerInput)
    data!: Array<IncomeCreateManySellerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
