import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaCreateInput } from './product-meta-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProductMetaArgs {

    @Field(() => ProductMetaCreateInput, {nullable:false})
    @Type(() => ProductMetaCreateInput)
    data!: ProductMetaCreateInput;
}
