import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationCreateInput } from './order-variation-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneOrderVariationArgs {

    @Field(() => OrderVariationCreateInput, {nullable:false})
    @Type(() => OrderVariationCreateInput)
    data!: OrderVariationCreateInput;
}
