import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutMetaInput } from './product-update-without-meta.input';

@InputType()
export class ProductUpdateToOneWithWhereWithoutMetaInput {

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;

    @Field(() => ProductUpdateWithoutMetaInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMetaInput)
    data!: ProductUpdateWithoutMetaInput;
}
