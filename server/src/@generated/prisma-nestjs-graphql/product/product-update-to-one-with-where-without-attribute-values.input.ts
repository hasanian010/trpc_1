import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutAttributeValuesInput } from './product-update-without-attribute-values.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutAttributeValuesInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAttributeValuesInput)
    data!: ProductUpdateWithoutAttributeValuesInput;
}
