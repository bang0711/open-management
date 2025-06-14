import { TrailingBlockPlugin, type Value } from "platejs";
import { type TPlateEditor, useEditorRef } from "platejs/react";

import { FixedToolbarKit } from "./plugins/fixed-toolbar-kit";
import { FloatingToolbarKit } from "./plugins/floating-toolbar-kit";
import { BasicBlocksKit } from "./plugins/basic-blocks-kit";
import { BasicMarksKit } from "./plugins/basic-marks-kit";
import { CommentKit } from "./plugins/comment-kit";
import { DiscussionKit } from "./plugins/discussion-kit";
import { MarkdownKit } from "./plugins/markdown-kit";
import { SuggestionKit } from "./plugins/suggestion-kit";
import { BlockPlaceholderKit } from "./plugins/block-placeholder-kit";
import { CodeBlockKit } from "./plugins/code-block-kit";
import { TableKit } from "./plugins/table-kit";
import { TocKit } from "./plugins/toc-kit";
import { ToggleKit } from "./plugins/toggle-kit";
import { CalloutKit } from "./plugins/callout-kit";
import { MediaKit } from "./plugins/media-kit";
import { ColumnKit } from "./plugins/column-kit";
import { DateKit } from "./plugins/date-kit";
import { FontKit } from "./plugins/font-kit";
import { LinkKit } from "./plugins/link-kit";
import { MathKit } from "./plugins/math-kit";
import { MentionKit } from "./plugins/mention-kit";
import { AlignKit } from "./plugins/align-kit";
import { LineHeightKit } from "./plugins/line-height-kit";
import { ListKit } from "./plugins/list-kit";
import { AutoformatKit } from "./plugins/autoformat-kit";
import { BlockMenuKit } from "./plugins/block-menu-kit";
import { CursorOverlayKit } from "./plugins/cursor-overlay-kit";
import { DndKit } from "./plugins/dnd-kit";
import { DocxKit } from "./plugins/docx-kit";
import { EmojiKit } from "./plugins/emoji-kit";
import { ExitBreakKit } from "./plugins/exit-break-kit";
import { SlashKit } from "./plugins/slash-kit";
import { AIKit } from "./plugins/ai-kit";
import { CopilotKit } from "./plugins/copilot-kit";

export const EditorKit = [
  ...CopilotKit,
  ...AIKit,

  // Elements
  ...BasicBlocksKit,
  ...CodeBlockKit,
  ...TableKit,
  ...ToggleKit,
  ...TocKit,
  ...MediaKit,
  ...CalloutKit,
  ...ColumnKit,
  ...MathKit,
  ...DateKit,
  ...LinkKit,
  ...MentionKit,

  // Marks
  ...BasicMarksKit,
  ...FontKit,

  // Block Style
  ...ListKit,
  ...AlignKit,
  ...LineHeightKit,

  // Collaboration
  ...DiscussionKit,
  ...CommentKit,
  ...SuggestionKit,

  // Editing
  ...SlashKit,
  ...AutoformatKit,
  ...CursorOverlayKit,
  ...BlockMenuKit,
  ...DndKit,
  ...EmojiKit,
  ...ExitBreakKit,
  TrailingBlockPlugin,

  // Parsers
  ...DocxKit,
  ...MarkdownKit,

  // UI
  ...BlockPlaceholderKit,
  ...FixedToolbarKit,
  ...FloatingToolbarKit,
];

export type MyEditor = TPlateEditor<Value, (typeof EditorKit)[number]>;
export const useEditor = () => useEditorRef<MyEditor>();
