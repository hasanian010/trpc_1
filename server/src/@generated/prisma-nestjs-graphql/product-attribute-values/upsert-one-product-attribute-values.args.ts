import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateInput } from './product-attribute-values-create.input';
import { ProductAttributeValuesUpdateInput } from './product-attribute-values-update.input';

@ArgsType()
export class UpsertOneProductAttributeValuesArgs {

    @Field(() => ProductAttributeValuesWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeValuesCreateInput, {nullable:false})
    @Type(() => ProductAttributeValuesCreateInput)
    create!: ProductAttributeValuesCreateInput;

    @Field(() => ProductAttributeValuesUpdateInput, {nullable:false})
    @Type(() => ProductAttributeValuesUpdateInput)
    update!: ProductAttributeValuesUpdateInput;
}
