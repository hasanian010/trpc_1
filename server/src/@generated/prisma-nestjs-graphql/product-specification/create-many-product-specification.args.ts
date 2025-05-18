import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationCreateManyInput } from './product-specification-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductSpecificationArgs {

    @Field(() => [ProductSpecificationCreateManyInput], {nullable:false})
    @Type(() => ProductSpecificationCreateManyInput)
    data!: Array<ProductSpecificationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
