import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyProductAttributeArgs {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
