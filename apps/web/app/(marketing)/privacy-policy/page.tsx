import React from "react";
import { HeroCenter } from "../_comps";
import { TextH } from "@repo/ui";

export default function PrivacyPolicyPage() {
  return (
    <section>
      <HeroCenter>
        <TextH
          v="h1"
          className={
            "text-[24px] font-extrabold md:text-[50px] text-card-foreground"
          }
        >
          Privacy Policy
        </TextH>
      </HeroCenter>
    </section>
  );
}
