import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationCreateInput } from './product-specification-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductSpecificationArgs {

    @Field(() => ProductSpecificationCreateInput, {nullable:false})
    @Type(() => ProductSpecificationCreateInput)
    data!: ProductSpecificationCreateInput;
}
