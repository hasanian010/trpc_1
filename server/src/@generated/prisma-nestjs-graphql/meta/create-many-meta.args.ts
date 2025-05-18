import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaCreateManyInput } from './meta-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMetaArgs {

    @Field(() => [MetaCreateManyInput], {nullable:false})
    @Type(() => MetaCreateManyInput)
    data!: Array<MetaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
