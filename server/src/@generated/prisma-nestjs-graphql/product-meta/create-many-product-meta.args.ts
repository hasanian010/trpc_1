import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaCreateManyInput } from './product-meta-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProductMetaArgs {

    @Field(() => [ProductMetaCreateManyInput], {nullable:false})
    @Type(() => ProductMetaCreateManyInput)
    data!: Array<ProductMetaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
