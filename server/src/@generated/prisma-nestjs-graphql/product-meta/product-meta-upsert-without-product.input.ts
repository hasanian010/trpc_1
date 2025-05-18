import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaUpdateWithoutProductInput } from './product-meta-update-without-product.input';
import { Type } from 'class-transformer';
import { ProductMetaCreateWithoutProductInput } from './product-meta-create-without-product.input';
import { ProductMetaWhereInput } from './product-meta-where.input';

@InputType()
export class ProductMetaUpsertWithoutProductInput {

    @Field(() => ProductMetaUpdateWithoutProductInput, {nullable:false})
    @Type(() => ProductMetaUpdateWithoutProductInput)
    update!: ProductMetaUpdateWithoutProductInput;

    @Field(() => ProductMetaCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductMetaCreateWithoutProductInput)
    create!: ProductMetaCreateWithoutProductInput;

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    where?: ProductMetaWhereInput;
}
