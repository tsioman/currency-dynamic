import React from "react";
import { Currency } from "@/containers/Currency/Currency";
import { CurrencyControl } from "@/containers/CurrencyControls/CurrencyControls";
import { AnimationControls } from "@/containers/AnimationControls/AnimationControls";
import { SettingsForm } from "@/containers/SettingsForm/SettingsForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { User } from "@/containers/Auth/User";
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
