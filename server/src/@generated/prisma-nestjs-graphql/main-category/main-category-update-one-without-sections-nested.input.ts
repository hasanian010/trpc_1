import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutSectionsInput } from './main-category-create-without-sections.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutSectionsInput } from './main-category-create-or-connect-without-sections.input';
import { MainCategoryUpsertWithoutSectionsInput } from './main-category-upsert-without-sections.input';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { MainCategoryUpdateToOneWithWhereWithoutSectionsInput } from './main-category-update-to-one-with-where-without-sections.input';

@InputType()
export class MainCategoryUpdateOneWithoutSectionsNestedInput {

    @Field(() => MainCategoryCreateWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutSectionsInput)
    create?: MainCategoryCreateWithoutSectionsInput;

    @Field(() => MainCategoryCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSectionsInput;

    @Field(() => MainCategoryUpsertWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryUpsertWithoutSectionsInput)
    upsert?: MainCategoryUpsertWithoutSectionsInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    disconnect?: MainCategoryWhereInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    delete?: MainCategoryWhereInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryUpdateToOneWithWhereWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryUpdateToOneWithWhereWithoutSectionsInput)
    update?: MainCategoryUpdateToOneWithWhereWithoutSectionsInput;
}
