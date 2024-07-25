import { Footer } from "../_components/footer-section";
import { QuickLink } from "../_components/quick-link-section";
import { TERMS } from "./_components/terms";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <TERMS />
      <QuickLink />
      <Footer />
    </div>
  );
}
