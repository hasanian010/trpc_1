import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutProductAttributeInput } from './product-update-without-product-attribute.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutProductAttributeInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductAttributeInput)
    data!: ProductUpdateWithoutProductAttributeInput;
}
