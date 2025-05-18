import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderVariationCreateManyInput } from './order-variation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderVariationArgs {

    @Field(() => [OrderVariationCreateManyInput], {nullable:false})
    @Type(() => OrderVariationCreateManyInput)
    data!: Array<OrderVariationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
