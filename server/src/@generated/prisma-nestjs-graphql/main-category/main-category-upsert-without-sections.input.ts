import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MainCategoryUpdateWithoutSectionsInput } from './main-category-update-without-sections.input';
import { Type } from 'class-transformer';
import { MainCategoryCreateWithoutSectionsInput } from './main-category-create-without-sections.input';
import { MainCategoryWhereInput } from './main-category-where.input';

@InputType()
export class MainCategoryUpsertWithoutSectionsInput {

    @Field(() => MainCategoryUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => MainCategoryUpdateWithoutSectionsInput)
    update!: MainCategoryUpdateWithoutSectionsInput;

    @Field(() => MainCategoryCreateWithoutSectionsInput, {nullable:false})
    @Type(() => MainCategoryCreateWithoutSectionsInput)
    create!: MainCategoryCreateWithoutSectionsInput;

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;
}
