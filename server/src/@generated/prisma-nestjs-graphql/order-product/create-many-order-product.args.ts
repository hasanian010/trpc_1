import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderProductCreateManyInput } from './order-product-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderProductArgs {

    @Field(() => [OrderProductCreateManyInput], {nullable:false})
    @Type(() => OrderProductCreateManyInput)
    data!: Array<OrderProductCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
