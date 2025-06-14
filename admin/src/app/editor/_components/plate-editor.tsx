"use client";

import { EditorKit } from "@/components/editor/editor-kit";
import { SettingsDialog } from "@/components/editor/settings-dialog";
import { value } from "@/components/editor/value";

import { Editor, EditorContainer } from "@/components/editor/ui/editor";

import { usePlateEditor, Plate } from "platejs/react";

function PlateEditor() {
  const editor = usePlateEditor({
    plugins: EditorKit,
    value,
  });

  return (
    <Plate editor={editor}>
      <EditorContainer className="overflow-y-auto">
        <Editor variant="demo" />
      </EditorContainer>

      <SettingsDialog />
    </Plate>
  );
}

export default PlateEditor;
