import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutProductAttributeInput } from './product-update-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutProductAttributeInput } from './product-create-without-product-attribute.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutProductAttributeInput {

    @Field(() => ProductUpdateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductUpdateWithoutProductAttributeInput)
    update!: ProductUpdateWithoutProductAttributeInput;

    @Field(() => ProductCreateWithoutProductAttributeInput, {nullable:false})
    @Type(() => ProductCreateWithoutProductAttributeInput)
    create!: ProductCreateWithoutProductAttributeInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
