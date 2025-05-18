import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutRefundablesInput } from './product-update-without-refundables.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutRefundablesInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutRefundablesInput)
    data!: ProductUpdateWithoutRefundablesInput;
}
