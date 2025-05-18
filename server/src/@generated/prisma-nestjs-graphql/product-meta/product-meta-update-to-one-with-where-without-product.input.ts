import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Type } from 'class-transformer';
import { ProductMetaUpdateWithoutProductInput } from './product-meta-update-without-product.input';

@InputType()
export class ProductMetaUpdateToOneWithWhereWithoutProductInput {

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    where?: ProductMetaWhereInput;

    @Field(() => ProductMetaUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductMetaUpdateWithoutProductInput)
    data!: ProductMetaUpdateWithoutProductInput;
}
