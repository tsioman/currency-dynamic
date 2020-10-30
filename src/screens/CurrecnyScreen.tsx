import React from "react";
import { Currency } from "@/modules/Currency/Currency";
import { CurrencyControl } from "@/modules/CurrencyControls/CurrencyControls";
import { AnimationControls } from "@/modules/AnimationControls/";
import { SettingsForm } from "@/modules/SettingsForm/SettingsForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { User } from "@/modules/Auth/User";
import { withAuth } from "@/utils/withAuth";
export const CurrecnyScreen: React.FC<{}> = withAuth(() => (
  <ErrorBoundary>
    <User/>
    <Currency />
    <CurrencyControl />
    <AnimationControls />
    <SettingsForm />
  </ErrorBoundary>
));
