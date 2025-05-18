import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyShippingArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    @Type(() => ShippingWhereInput)
    where?: ShippingWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
