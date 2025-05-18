import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutAttributeValuesInput } from './product-update-without-attribute-values.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutAttributeValuesInput } from './product-create-without-attribute-values.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutAttributeValuesInput {

    @Field(() => ProductUpdateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductUpdateWithoutAttributeValuesInput)
    update!: ProductUpdateWithoutAttributeValuesInput;

    @Field(() => ProductCreateWithoutAttributeValuesInput, {nullable:false})
    @Type(() => ProductCreateWithoutAttributeValuesInput)
    create!: ProductCreateWithoutAttributeValuesInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
