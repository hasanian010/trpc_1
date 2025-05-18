import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderSellerCreateManyInput } from './order-seller-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyOrderSellerArgs {

    @Field(() => [OrderSellerCreateManyInput], {nullable:false})
    @Type(() => OrderSellerCreateManyInput)
    data!: Array<OrderSellerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
