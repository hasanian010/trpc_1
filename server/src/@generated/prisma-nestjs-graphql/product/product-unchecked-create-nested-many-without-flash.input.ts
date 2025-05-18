import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutFlashInput } from './product-create-without-flash.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutFlashInput } from './product-create-or-connect-without-flash.input';
import { ProductCreateManyFlashInputEnvelope } from './product-create-many-flash-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutFlashInput {

    @Field(() => [ProductCreateWithoutFlashInput], {nullable:true})
    @Type(() => ProductCreateWithoutFlashInput)
    create?: Array<ProductCreateWithoutFlashInput>;

    @Field(() => [ProductCreateOrConnectWithoutFlashInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutFlashInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutFlashInput>;

    @Field(() => ProductCreateManyFlashInputEnvelope, {nullable:true})
    @Type(() => ProductCreateManyFlashInputEnvelope)
    createMany?: ProductCreateManyFlashInputEnvelope;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}
