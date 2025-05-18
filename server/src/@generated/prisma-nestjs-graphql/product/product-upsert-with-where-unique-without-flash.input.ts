import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { Type } from 'class-transformer';
import { ProductUpdateWithoutFlashInput } from './product-update-without-flash.input';
import { ProductCreateWithoutFlashInput } from './product-create-without-flash.input';

@InputType()
export class ProductUpsertWithWhereUniqueWithoutFlashInput {

    @Field(() => ProductWhereUniqueInput, {nullable:false})
    @Type(() => ProductWhereUniqueInput)
    where!: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateWithoutFlashInput, {nullable:false})
    @Type(() => ProductUpdateWithoutFlashInput)
    update!: ProductUpdateWithoutFlashInput;

    @Field(() => ProductCreateWithoutFlashInput, {nullable:false})
    @Type(() => ProductCreateWithoutFlashInput)
    create!: ProductCreateWithoutFlashInput;
}
