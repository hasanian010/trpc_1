import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductCreateManyInput } from './section-product-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySectionProductArgs {

    @Field(() => [SectionProductCreateManyInput], {nullable:false})
    @Type(() => SectionProductCreateManyInput)
    data!: Array<SectionProductCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
