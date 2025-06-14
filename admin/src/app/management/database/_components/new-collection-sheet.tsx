"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FieldType } from "@/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  LucideIcon,
  Plus,
  Type,
  Hash,
  ToggleLeft,
  Mail,
  Link,
  Calendar,
  List,
  PenLine,
  Image,
  Share2,
  Braces,
  Settings,
} from "lucide-react";

import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Collection name must be at least 1 character.",
  }),
});

type Props = {};

type Field = {
  name: string;
  type: FieldType;
  icon: LucideIcon;
};

const fields: Field[] = [
  {
    name: "Plain text",
    type: FieldType.Text,
    icon: Type,
  },
  {
    name: "Rich editor",
    type: FieldType.RichText,
    icon: PenLine,
  },
  {
    name: "Number",
    type: FieldType.Number,
    icon: Hash,
  },
  {
    name: "Bool",
    type: FieldType.Bool,
    icon: ToggleLeft,
  },
  {
    name: "Email",
    type: FieldType.Email,
    icon: Mail,
  },
  {
    name: "Url",
    type: FieldType.Url,
    icon: Link,
  },
  {
    name: "DateTime",
    type: FieldType.DateTime,
    icon: Calendar,
  },
  {
    name: "Select",
    type: FieldType.Select,
    icon: List,
  },
  {
    name: "File",
    type: FieldType.File,
    icon: Image,
  },
  {
    name: "Relation",
    type: FieldType.Relation,
    icon: Share2,
  },
  {
    name: "JSON",
    type: FieldType.JSON,
    icon: Braces,
  },
];

function NewCollectionSheet({}: Props) {
  const [open, setOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedFields, setSelectedFields] = useState<Field[]>([]);
  const [openFields, setOpenFields] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const loading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleAddField = (field: Field) => {
    setSelectedFields((prev) => [...prev, field]);
    setPopoverOpen(false);
  };

  const toggleField = (index: number) => {
    const fieldKey = `field-${index}`;

    setOpenFields((prev) =>
      prev.includes(fieldKey)
        ? prev.filter((key) => key !== fieldKey)
        : [...prev, fieldKey],
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="w-full" variant={"outline"}>
          <Plus />
          New Collection
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Collection</SheetTitle>
          <SheetDescription>
            Enter the details for the new collection.
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            className="flex flex-1 flex-col justify-between"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-3 px-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='eg. "posts"'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-sm">
                System fields:{" "}
                <span className="bg-secondary rounded px-0.5">id</span>,{" "}
                <span className="bg-secondary rounded px-0.5">created</span>,{" "}
                <span className="bg-secondary rounded px-0.5">updated</span>.
              </p>

              <Accordion
                className="space-y-3 py-3"
                value={openFields}
                type="multiple"
              >
                {selectedFields.map((field, index) => (
                  <AccordionItem
                    className="bg-muted rounded"
                    value={`field-${index}`}
                    key={index}
                  >
                    <div className="flex items-center">
                      <div className="flex h-full flex-1 items-center gap-2 px-2">
                        <field.icon className="size-4" />
                        <span className="text-sm">{field.name}</span>
                      </div>

                      <div className="border-l p-2">
                        <Button
                          onClick={() => toggleField(index)}
                          type="button"
                          variant={"ghost"}
                          size={"icon"}
                          className="hover:bg-muted-foreground/10 dark:hover:bg-muted-foreground/10 rounded-full"
                        >
                          <Settings />
                        </Button>
                      </div>
                    </div>

                    <AccordionContent className="bg-primary/10 dark:bg-primary-foreground rounded-b border-t p-2">
                      text
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger className="bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:data-[state=open]:bg-input/50! data-[state=open]:bg-accent! inline-flex w-full shrink-0 items-center justify-center gap-2 rounded border px-4 py-2 text-sm font-medium shadow-xs transition-all has-[>svg]:px-3 data-[state=open]:rounded-b-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
                  <Plus />
                  New Field
                </PopoverTrigger>

                <PopoverContent
                  className="max-h-[300px] w-[var(--radix-popover-trigger-width)] overflow-y-auto rounded-t-none p-2"
                  align="start"
                  sideOffset={0}
                >
                  <div className="grid grid-cols-4 gap-2">
                    {fields.map((field, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="justify-start text-xs"
                        onClick={() => {
                          // Handle adding field logic here
                          console.log(`Adding field: ${field.name}`);
                          handleAddField(field);
                        }}
                      >
                        <field.icon className="size-4" />
                        {field.name}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex justify-end gap-2 border-t p-4">
              <Button
                onClick={() => setOpen(false)}
                disabled={loading}
                type="button"
                variant={"ghost"}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                Create
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default NewCollectionSheet;
