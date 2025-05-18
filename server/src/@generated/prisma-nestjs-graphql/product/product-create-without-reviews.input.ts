import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateimagesInput } from './product-createimages.input';
import { SellerCreateNestedOneWithoutProductsInput } from '../seller/seller-create-nested-one-without-products.input';
import { MainCategoryCreateNestedOneWithoutProductsInput } from '../main-category/main-category-create-nested-one-without-products.input';
import { CategoryCreateNestedOneWithoutProductsInput } from '../category/category-create-nested-one-without-products.input';
import { SubCategoryCreateNestedManyWithoutProductsInput } from '../sub-category/sub-category-create-nested-many-without-products.input';
import { BrandCreateNestedOneWithoutProductsInput } from '../brand/brand-create-nested-one-without-products.input';
import { TagCreateNestedManyWithoutProductsInput } from '../tag/tag-create-nested-many-without-products.input';
import { FlashCreateNestedOneWithoutProductsInput } from '../flash/flash-create-nested-one-without-products.input';
import { ProductAttributeValuesCreateNestedManyWithoutProductInput } from '../product-attribute-values/product-attribute-values-create-nested-many-without-product.input';
import { ProductAttributeVariantCreateNestedManyWithoutProductInput } from '../product-attribute-variant/product-attribute-variant-create-nested-many-without-product.input';
import { ProductAttributeCreateNestedManyWithoutProductInput } from '../product-attribute/product-attribute-create-nested-many-without-product.input';
import { ProductSpecificationCreateNestedManyWithoutProductInput } from '../product-specification/product-specification-create-nested-many-without-product.input';
import { ProductMetaCreateNestedOneWithoutProductInput } from '../product-meta/product-meta-create-nested-one-without-product.input';
import { OrderProductCreateNestedManyWithoutProductInput } from '../order-product/order-product-create-nested-many-without-product.input';
import { RefundableCreateNestedManyWithoutProductInput } from '../refundable/refundable-create-nested-many-without-product.input';
import { WishlistCreateNestedManyWithoutProductInput } from '../wishlist/wishlist-create-nested-many-without-product.input';
import { SectionProductCreateNestedManyWithoutProductInput } from '../section-product/section-product-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutReviewsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    unit?: string;

    @Field(() => String, {nullable:true})
    minPurchase?: string;

    @Field(() => Boolean, {nullable:true})
    refundAble?: boolean;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => String, {nullable:true})
    youtubeLink?: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => String, {nullable:false})
    quantity!: string;

    @Field(() => String, {nullable:false})
    discount!: string;

    @Field(() => String, {nullable:false})
    discountUnit!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    visibility?: boolean;

    @Field(() => Boolean, {nullable:true})
    isApproved?: boolean;

    @Field(() => String, {nullable:true})
    estimateDelivery?: string;

    @Field(() => String, {nullable:true})
    warranty?: string;

    @Field(() => Boolean, {nullable:true})
    showStock?: boolean;

    @Field(() => String, {nullable:false})
    tax!: string;

    @Field(() => String, {nullable:false})
    taxUnit!: string;

    @Field(() => String, {nullable:false})
    totalPrice!: string;

    @Field(() => String, {nullable:false})
    disclaimer!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SellerCreateNestedOneWithoutProductsInput, {nullable:false})
    seller!: SellerCreateNestedOneWithoutProductsInput;

    @Field(() => MainCategoryCreateNestedOneWithoutProductsInput, {nullable:false})
    mainCategory!: MainCategoryCreateNestedOneWithoutProductsInput;

    @Field(() => CategoryCreateNestedOneWithoutProductsInput, {nullable:true})
    category?: CategoryCreateNestedOneWithoutProductsInput;

    @Field(() => SubCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    subCategories?: SubCategoryCreateNestedManyWithoutProductsInput;

    @Field(() => BrandCreateNestedOneWithoutProductsInput, {nullable:true})
    brand?: BrandCreateNestedOneWithoutProductsInput;

    @Field(() => TagCreateNestedManyWithoutProductsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutProductsInput;

    @Field(() => FlashCreateNestedOneWithoutProductsInput, {nullable:true})
    flash?: FlashCreateNestedOneWithoutProductsInput;

    @Field(() => ProductAttributeValuesCreateNestedManyWithoutProductInput, {nullable:true})
    attributeValues?: ProductAttributeValuesCreateNestedManyWithoutProductInput;

    @Field(() => ProductAttributeVariantCreateNestedManyWithoutProductInput, {nullable:true})
    attributeVariants?: ProductAttributeVariantCreateNestedManyWithoutProductInput;

    @Field(() => ProductAttributeCreateNestedManyWithoutProductInput, {nullable:true})
    productAttribute?: ProductAttributeCreateNestedManyWithoutProductInput;

    @Field(() => ProductSpecificationCreateNestedManyWithoutProductInput, {nullable:true})
    specifications?: ProductSpecificationCreateNestedManyWithoutProductInput;

    @Field(() => ProductMetaCreateNestedOneWithoutProductInput, {nullable:true})
    meta?: ProductMetaCreateNestedOneWithoutProductInput;

    @Field(() => OrderProductCreateNestedManyWithoutProductInput, {nullable:true})
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput;

    @Field(() => RefundableCreateNestedManyWithoutProductInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutProductInput;

    @Field(() => WishlistCreateNestedManyWithoutProductInput, {nullable:true})
    wishlists?: WishlistCreateNestedManyWithoutProductInput;

    @Field(() => SectionProductCreateNestedManyWithoutProductInput, {nullable:true})
    sectionProducts?: SectionProductCreateNestedManyWithoutProductInput;
}
