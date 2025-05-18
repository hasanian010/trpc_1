import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutAttributeVariantsInput } from './product-update-without-attribute-variants.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAttributeVariantsInput } from './product-create-without-attribute-variants.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutAttributeVariantsInput {

    @Field(() => ProductUpdateWithoutAttributeVariantsInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAttributeVariantsInput)
    update!: ProductUpdateWithoutAttributeVariantsInput;

    @Field(() => ProductCreateWithoutAttributeVariantsInput, {nullable:false})
    @Type(() => ProductCreateWithoutAttributeVariantsInput)
    create!: ProductCreateWithoutAttributeVariantsInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
