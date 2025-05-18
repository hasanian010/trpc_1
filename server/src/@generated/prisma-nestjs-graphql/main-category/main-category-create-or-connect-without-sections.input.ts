import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutSectionsInput } from './main-category-create-without-sections.input';

@InputType()
export class MainCategoryCreateOrConnectWithoutSectionsInput {

    @Field(() => MainCategoryWhereUniqueInput, {nullable:false})
    @Type(() => MainCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => MainCategoryCreateWithoutSectionsInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutSectionsInput)
    create!: MainCategoryCreateWithoutSectionsInput;
}
