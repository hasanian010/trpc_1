import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductUpdateWithoutMetaInput } from './product-update-without-meta.input';
import { Type } from 'class-transformer';
import { ProductCreateWithoutMetaInput } from './product-create-without-meta.input';
import { ProductWhereInput } from './product-where.input';

@InputType()
export class ProductUpsertWithoutMetaInput {

    @Field(() => ProductUpdateWithoutMetaInput, {nullable:false})
    @Type(() => ProductUpdateWithoutMetaInput)
    update!: ProductUpdateWithoutMetaInput;

    @Field(() => ProductCreateWithoutMetaInput, {nullable:false})
    @Type(() => ProductCreateWithoutMetaInput)
    create!: ProductCreateWithoutMetaInput;

    @Field(() => ProductWhereInput, {nullable:true})
    @Type(() => ProductWhereInput)
    where?: ProductWhereInput;
}
