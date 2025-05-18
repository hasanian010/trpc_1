import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateInput } from './product-attribute-variant-create.input';
import { ProductAttributeVariantUpdateInput } from './product-attribute-variant-update.input';

@ArgsType()
export class UpsertOneProductAttributeVariantArgs {

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeVariantCreateInput, {nullable:false})
    @Type(() => ProductAttributeVariantCreateInput)
    create!: ProductAttributeVariantCreateInput;

    @Field(() => ProductAttributeVariantUpdateInput, {nullable:false})
    @Type(() => ProductAttributeVariantUpdateInput)
    update!: ProductAttributeVariantUpdateInput;
}
