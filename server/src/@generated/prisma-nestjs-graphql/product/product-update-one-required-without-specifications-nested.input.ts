import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutSpecificationsInput } from './product-create-without-specifications.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutSpecificationsInput } from './product-create-or-connect-without-specifications.input';
import { ProductUpsertWithoutSpecificationsInput } from './product-upsert-without-specifications.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';
import { ProductUpdateToOneWithWhereWithoutSpecificationsInput } from './product-update-to-one-with-where-without-specifications.input';

@InputType()
export class ProductUpdateOneRequiredWithoutSpecificationsNestedInput {

    @Field(() => ProductCreateWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductCreateWithoutSpecificationsInput)
    create?: ProductCreateWithoutSpecificationsInput;

    @Field(() => ProductCreateOrConnectWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutSpecificationsInput)
    connectOrCreate?: ProductCreateOrConnectWithoutSpecificationsInput;

    @Field(() => ProductUpsertWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductUpsertWithoutSpecificationsInput)
    upsert?: ProductUpsertWithoutSpecificationsInput;

    @Field(() => ProductWhereUniqueInput, {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductWhereUniqueInput, 'id'>;

    @Field(() => ProductUpdateToOneWithWhereWithoutSpecificationsInput, {nullable:true})
    @Type(() => ProductUpdateToOneWithWhereWithoutSpecificationsInput)
    update?: ProductUpdateToOneWithWhereWithoutSpecificationsInput;
}
