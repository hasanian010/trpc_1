import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneProductAttributeArgs {

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:false})
    @Type(() => ProductAttributeWhereUniqueInput)
    where!: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;
}
