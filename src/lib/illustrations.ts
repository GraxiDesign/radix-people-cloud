import hr from "@/assets/illustrations/hr.png";
import payroll from "@/assets/illustrations/payroll.png";
import recruitment from "@/assets/illustrations/recruitment.png";
import learning from "@/assets/illustrations/learning.png";
import engagement from "@/assets/illustrations/engagement.png";
import analytics from "@/assets/illustrations/analytics.png";
import workforce from "@/assets/illustrations/workforce.png";
import integrations from "@/assets/illustrations/integrations.png";
import security from "@/assets/illustrations/security.png";

export const illustrations = {
  hr, payroll, recruitment, learning, engagement,
  analytics, workforce, integrations, security,
} as const;

export type IllustrationKey = keyof typeof illustrations;

// Map product slugs → illustration
export const slugIllustration: Record<string, IllustrationKey> = {
  "core-hr": "hr",
  "employee-management": "hr",
  "onboarding": "hr",
  "ess": "engagement",
  "ats": "recruitment",
  "recruitment": "recruitment",
  "payroll": "payroll",
  "compensation": "payroll",
  "expense": "payroll",
  "attendance": "workforce",
  "leave": "workforce",
  "shift": "workforce",
  "timesheet": "workforce",
  "workforce-planning": "workforce",
  "performance": "analytics",
  "pms": "analytics",
  "okr": "analytics",
  "analytics": "analytics",
  "lms": "learning",
  "learning": "learning",
  "engagement": "engagement",
  "rewards": "engagement",
  "surveys": "engagement",
  "integrations": "integrations",
  "security": "security",
  "compliance": "security",
};
