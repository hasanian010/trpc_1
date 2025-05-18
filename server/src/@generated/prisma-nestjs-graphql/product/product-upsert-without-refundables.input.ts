import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutRefundablesInput } from './product-update-without-refundables.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutRefundablesInput } from './product-create-without-refundables.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutRefundablesInput {

    @Field(() => ProductUpdateWithoutRefundablesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutRefundablesInput)
    update!: ProductUpdateWithoutRefundablesInput;

    @Field(() => ProductCreateWithoutRefundablesInput, {nullable:false})
    @Type(() => ProductCreateWithoutRefundablesInput)
    create!: ProductCreateWithoutRefundablesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
