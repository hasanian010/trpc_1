import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeCreateInput } from './product-attribute-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductAttributeArgs {

    @Field(() => ProductAttributeCreateInput, {nullable:false})
    @Type(() => ProductAttributeCreateInput)
    data!: ProductAttributeCreateInput;
}
