import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProductAttributeVariantArgs {

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    @Type(() => ProductAttributeVariantWhereInput)
    where?: ProductAttributeVariantWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
