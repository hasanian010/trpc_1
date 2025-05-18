import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProductAttributeValuesArgs {

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    @Type(() => ProductAttributeValuesWhereInput)
    where?: ProductAttributeValuesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
