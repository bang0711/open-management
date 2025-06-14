"use client";

import { createPlatePlugin } from "platejs/react";

import { FixedToolbarButtons } from "@/components/editor/ui/fixed-toolbar-buttons";
import { FixedToolbar } from "@/components/editor/ui/fixed-toolbar";

export const FixedToolbarKit = [
  createPlatePlugin({
    key: "fixed-toolbar",
    render: {
      beforeEditable: () => (
        <FixedToolbar>
          <FixedToolbarButtons />
        </FixedToolbar>
      ),
    },
  }),
];
