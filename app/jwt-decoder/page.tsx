"use client";

import {
  JwtDecoderProvider,
  JwtDecoderShell,
  JwtDecoderHeader,
  JwtDecoderDocumentation,
} from "@/features/jwt-decoder";

import { TOOL_NAMES } from "@/shared/lib/constants";
import { ToolFrame } from "@/shared/ui/tool-frame/ToolFrame";

export default function JWTDecoder() {
  return (
    <JwtDecoderProvider>
      <ToolFrame
        title="JWT Decoder"
        description="Decode and inspect JSON Web Token contents and time claims without signature verification."
        toolName={TOOL_NAMES.JWT_DECODER}
        headerRight={<JwtDecoderHeader />}
        showDataHandling={false}
      >
        <JwtDecoderShell />
        <JwtDecoderDocumentation />
      </ToolFrame>
    </JwtDecoderProvider>
  );
}
