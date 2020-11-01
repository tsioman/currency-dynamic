import React from "react";
import { Currency } from "@/modules/Currency/Currency";
import { AnimationControls } from "@/modules/AnimationControls/";
import { SettingsForm } from "@/modules/SettingsForm/SettingsForm";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { User } from "@/modules/Auth/User";
import { withAuth } from "@/utils/withAuth";
export const CurrecnyScreen: React.FC = withAuth(() => (
  <ErrorBoundary>
    <User />
    <Currency />
    <AnimationControls />
    <SettingsForm />
  </ErrorBoundary>
));
