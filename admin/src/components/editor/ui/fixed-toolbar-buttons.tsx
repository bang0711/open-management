"use client";

import * as React from "react";

import { BaselineIcon, HighlighterIcon, PaintBucketIcon } from "lucide-react";
import { KEYS } from "platejs";
import { useEditorReadOnly } from "platejs/react";

import { AlignToolbarButton } from "./align-toolbar-button";

import { FontColorToolbarButton } from "./font-color-toolbar-button";

import { RedoToolbarButton, UndoToolbarButton } from "./history-toolbar-button";
import {
  IndentToolbarButton,
  OutdentToolbarButton,
} from "./indent-toolbar-button";
import { InsertToolbarButton } from "./insert-toolbar-button";
import { LinkToolbarButton } from "./link-toolbar-button";
import {
  BulletedListToolbarButton,
  NumberedListToolbarButton,
} from "./list-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { MediaToolbarButton } from "./media-toolbar-button";
import { TableToolbarButton } from "./table-toolbar-button";
import { ToolbarGroup } from "./toolbar";
import { TurnIntoToolbarButton } from "./turn-into-toolbar-button";
import { ModeToolbarButton } from "./mode-toolbar-button";
import { TextTransformToolbarButton } from "./text-transform-toolbar-button";
import { FontSizeToolbarButton } from "./font-size-toolbar-button";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="flex w-full">
      {!readOnly && (
        <div className="flex flex-1 items-center justify-center">
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <InsertToolbarButton />
            <TurnIntoToolbarButton />
            <FontSizeToolbarButton />
          </ToolbarGroup>

          {/* Alignment buttons */}
          <ToolbarGroup>
            <AlignToolbarButton />
          </ToolbarGroup>

          {/* Bold, Italic, Underline, Strikethrough */}
          <ToolbarGroup>
            <TextTransformToolbarButton />
          </ToolbarGroup>

          {/* Font color, Highlight */}
          <ToolbarGroup>
            <FontColorToolbarButton nodeType={KEYS.color} tooltip="Text color">
              <BaselineIcon />
            </FontColorToolbarButton>
            <MarkToolbarButton nodeType={KEYS.highlight} tooltip="Highlight">
              <HighlighterIcon />
            </MarkToolbarButton>
            <FontColorToolbarButton
              nodeType={KEYS.backgroundColor}
              tooltip="Background color"
            >
              <PaintBucketIcon />
            </FontColorToolbarButton>
          </ToolbarGroup>

          {/* Bulleted list, Numbered list */}
          <ToolbarGroup>
            <NumberedListToolbarButton />
            <BulletedListToolbarButton />
          </ToolbarGroup>

          {/* Indent, Outdent */}
          <ToolbarGroup>
            <OutdentToolbarButton />
            <IndentToolbarButton />
          </ToolbarGroup>

          {/* Link, Image, Table */}
          <ToolbarGroup>
            <LinkToolbarButton />
            <MediaToolbarButton nodeType={KEYS.img} />
            <MediaToolbarButton nodeType={KEYS.video} />
            <TableToolbarButton />
          </ToolbarGroup>
        </div>
      )}

      {/* Code view, Fullscreen (placeholders for now) */}
      <ToolbarGroup>
        <ModeToolbarButton />
      </ToolbarGroup>
    </div>
  );
}
