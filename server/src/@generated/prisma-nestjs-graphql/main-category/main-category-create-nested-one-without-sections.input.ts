import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryCreateWithoutSectionsInput } from './main-category-create-without-sections.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateOrConnectWithoutSectionsInput } from './main-category-create-or-connect-without-sections.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';

@InputType()
export class MainCategoryCreateNestedOneWithoutSectionsInput {

    @Field(() => MainCategoryCreateWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryCreateWithoutSectionsInput)
    create?: MainCategoryCreateWithoutSectionsInput;

    @Field(() => MainCategoryCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => MainCategoryCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSectionsInput;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    @Type(() => MainCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;
}
