import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SellerScalarRelationFilter } from '../seller/seller-scalar-relation-filter.input';
import { MainCategoryScalarRelationFilter } from '../main-category/main-category-scalar-relation-filter.input';
import { CategoryNullableScalarRelationFilter } from '../category/category-nullable-scalar-relation-filter.input';
import { SubCategoryListRelationFilter } from '../sub-category/sub-category-list-relation-filter.input';
import { BrandNullableScalarRelationFilter } from '../brand/brand-nullable-scalar-relation-filter.input';
import { TagListRelationFilter } from '../tag/tag-list-relation-filter.input';
import { FlashNullableScalarRelationFilter } from '../flash/flash-nullable-scalar-relation-filter.input';
import { ProductAttributeValuesListRelationFilter } from '../product-attribute-values/product-attribute-values-list-relation-filter.input';
import { ProductAttributeVariantListRelationFilter } from '../product-attribute-variant/product-attribute-variant-list-relation-filter.input';
import { ProductAttributeListRelationFilter } from '../product-attribute/product-attribute-list-relation-filter.input';
import { ProductSpecificationListRelationFilter } from '../product-specification/product-specification-list-relation-filter.input';
import { ProductMetaNullableScalarRelationFilter } from '../product-meta/product-meta-nullable-scalar-relation-filter.input';
import { OrderProductListRelationFilter } from '../order-product/order-product-list-relation-filter.input';
import { RefundableListRelationFilter } from '../refundable/refundable-list-relation-filter.input';
import { WishlistListRelationFilter } from '../wishlist/wishlist-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { SectionProductListRelationFilter } from '../section-product/section-product-list-relation-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sellerId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    mainCategoryId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    categoryId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    brandId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    unit?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    minPurchase?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    refundAble?: BoolFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    youtubeLink?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    flashId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    price?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    quantity?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discount?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    discountUnit?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    visibility?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isApproved?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    estimateDelivery?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    warranty?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    showStock?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    tax?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    taxUnit?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    totalPrice?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    disclaimer?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SellerScalarRelationFilter, {nullable:true})
    seller?: SellerScalarRelationFilter;

    @Field(() => MainCategoryScalarRelationFilter, {nullable:true})
    mainCategory?: MainCategoryScalarRelationFilter;

    @Field(() => CategoryNullableScalarRelationFilter, {nullable:true})
    category?: CategoryNullableScalarRelationFilter;

    @Field(() => SubCategoryListRelationFilter, {nullable:true})
    subCategories?: SubCategoryListRelationFilter;

    @Field(() => BrandNullableScalarRelationFilter, {nullable:true})
    brand?: BrandNullableScalarRelationFilter;

    @Field(() => TagListRelationFilter, {nullable:true})
    tags?: TagListRelationFilter;

    @Field(() => FlashNullableScalarRelationFilter, {nullable:true})
    flash?: FlashNullableScalarRelationFilter;

    @Field(() => ProductAttributeValuesListRelationFilter, {nullable:true})
    attributeValues?: ProductAttributeValuesListRelationFilter;

    @Field(() => ProductAttributeVariantListRelationFilter, {nullable:true})
    attributeVariants?: ProductAttributeVariantListRelationFilter;

    @Field(() => ProductAttributeListRelationFilter, {nullable:true})
    productAttribute?: ProductAttributeListRelationFilter;

    @Field(() => ProductSpecificationListRelationFilter, {nullable:true})
    specifications?: ProductSpecificationListRelationFilter;

    @Field(() => ProductMetaNullableScalarRelationFilter, {nullable:true})
    meta?: ProductMetaNullableScalarRelationFilter;

    @Field(() => OrderProductListRelationFilter, {nullable:true})
    orderProducts?: OrderProductListRelationFilter;

    @Field(() => RefundableListRelationFilter, {nullable:true})
    refundables?: RefundableListRelationFilter;

    @Field(() => WishlistListRelationFilter, {nullable:true})
    wishlists?: WishlistListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => SectionProductListRelationFilter, {nullable:true})
    sectionProducts?: SectionProductListRelationFilter;
}
