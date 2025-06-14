"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { ToolbarButton } from "./toolbar";
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  Type,
  UnderlineIcon,
} from "lucide-react";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { KEYS } from "platejs";

const items = [
  {
    icon: BoldIcon,
    nodeType: KEYS.bold,
    tooltip: "Bold (⌘+B)",
  },
  {
    icon: ItalicIcon,
    nodeType: KEYS.italic,
    tooltip: "Italic (⌘+I)",
  },
  {
    icon: UnderlineIcon,
    nodeType: KEYS.underline,
    tooltip: "Underline (⌘+U)",
  },
  {
    icon: StrikethroughIcon,
    nodeType: KEYS.strikethrough,
    tooltip: "Strikethrough (⌘+⇧+M)",
  },
];

export function TextTransformToolbarButton(props: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip="Transform" isDropdown>
          <Type />
        </ToolbarButton>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-0" align="start">
        <DropdownMenuRadioGroup>
          {items.map((item) => (
            <MarkToolbarButton
              key={item.nodeType}
              nodeType={item.nodeType}
              tooltip={item.tooltip}
            >
              <item.icon />
            </MarkToolbarButton>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
