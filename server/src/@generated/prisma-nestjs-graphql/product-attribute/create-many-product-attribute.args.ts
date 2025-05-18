import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeCreateManyInput } from './product-attribute-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductAttributeArgs {

    @Field(() => [ProductAttributeCreateManyInput], {nullable:false})
    @Type(() => ProductAttributeCreateManyInput)
    data!: Array<ProductAttributeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
