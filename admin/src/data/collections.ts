import { Collection, FieldType } from "@/types";

export const collections: Collection[] = [
  {
    id: "collection_posts",
    fields: [
      {
        id: "field_posts_title",
        name: "title",
        type: FieldType.Text,
        required: true,
      },
      {
        id: "field_posts_content",
        name: "content",
        type: FieldType.RichText,
        required: true,
      },
      {
        id: "field_posts_author",
        name: "author",
        type: FieldType.Text,
        required: true,
      },
      {
        id: "field_posts_published_date",
        name: "published_date",
        type: FieldType.DateTime,
        required: false,
      },
    ],
    permissions: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    slug: "posts",
    name: "Posts",
  },
  {
    id: "collection_comments",
    fields: [
      {
        id: "field_comments_post_id",
        name: "post_id",
        type: FieldType.Text,
        required: true,
      },
      {
        id: "field_comments_author",
        name: "author",
        type: FieldType.Text,
        required: true,
      },
      {
        id: "field_comments_content",
        name: "content",
        type: FieldType.RichText,
        required: true,
      },
      {
        id: "field_comments_created_at",
        name: "created_at",
        type: FieldType.DateTime,
        required: false,
      },
    ],
    permissions: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    slug: "comments",
    name: "Comments",
  },
  {
    id: "collection_users",
    fields: [
      {
        id: "field_users_username",
        name: "username",
        type: FieldType.Text,
        required: true,
      },
      {
        id: "field_users_email",
        name: "email",
        type: FieldType.Email,
        required: true,
      },
      {
        id: "field_users_password",
        name: "password",
        type: FieldType.DateTime,
        required: true,
      },
      {
        id: "field_users_created_at",
        name: "created_at",
        type: FieldType.DateTime,
        required: false,
      },
    ],
    permissions: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    slug: "users",
    name: "Users",
  },
];
