import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateInput } from './product-attribute-create.input';
import { ProductAttributeUpdateInput } from './product-attribute-update.input';

@ArgsType()
export class UpsertOneProductAttributeArgs {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

    @Field(() => ProductAttributeCreateInput, {nullable:false})
    @Type(() => ProductAttributeCreateInput)
    create!: ProductAttributeCreateInput;

    @Field(() => ProductAttributeUpdateInput, {nullable:false})
    @Type(() => ProductAttributeUpdateInput)
    update!: ProductAttributeUpdateInput;
}
