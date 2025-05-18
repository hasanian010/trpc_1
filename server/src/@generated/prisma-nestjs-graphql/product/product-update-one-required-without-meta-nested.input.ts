import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutMetaInput } from './product-create-without-meta.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutMetaInput } from './product-create-or-connect-without-meta.input';
import { ProductUpsertWithoutMetaInput } from './product-upsert-without-meta.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutMetaInput } from './product-update-to-one-with-where-without-meta.input';

@InputType()
export class ProductUpdateOneRequiredWithoutMetaNestedInput {

    @Field(() => ProductCreateWithoutMetaInput, {nullable:true})
    @Type(() => ProductCreateWithoutMetaInput)
    create?: ProductCreateWithoutMetaInput;

    @Field(() => ProductCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutMetaInput)
    connectOrCreate?: ProductCreateOrConnectWithoutMetaInput;

    @Field(() => ProductUpsertWithoutMetaInput, {nullable:true})
    @Type(() => ProductUpsertWithoutMetaInput)
    upsert?: ProductUpsertWithoutMetaInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutMetaInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutMetaInput)
    update?: ProductUpdateToOneWithWhereWithoutMetaInput;
}
