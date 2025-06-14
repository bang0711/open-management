export type Collection = {
  id: string;
  slug: string;
  name: string;
  fields: Field[];
  permissions: Permission;
};

export type Permission = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type Field = {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
};

export enum FieldType {
  Text = "text",
  RichText = "rich_text",
  Number = "number",
  Bool = "bool",
  Email = "email",
  Url = "url",
  DateTime = "datetime",
  Select = "select",
  File = "file",
  Relation = "relation",
  JSON = "json",
}
