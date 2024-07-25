import { cn } from "@/lib/utils";
import { poppinsFont } from "../../_components/quick-link-section";

export function PrivacyMain() {
  return (
    <div
      className={cn(
        "pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4",
        poppinsFont.className
      )}
    >
      <div className="w-[80%] sm:w-[70%] flex flex-col items-start font-light text-sm sm:text-base space-y-2">
        <h4 className="font-semibold text-lg">Terms of use</h4>
        <p>
          1. Onboarding and Account Creation
            ● Provide accurate, complete, and current information to create your account.
            ● Maintain the confidentiality of your account; notify us within 24 hours of any unauthorized use.
            ● You grant us a non-exclusive, royalty-free license to use your name, trademarks, and logos for display, marketing, and promotional purposes.
            ● We may monitor your use of the Services and compliance with these Terms.
        </p>
        <h4 className="font-semibold text-lg">2. Service Use</h4>
        <p>
          ● The Seller or Vendor ("Seller") uses Mateng for delivery and reverse pick-up (RTO) of packages.
        </p>
        
        <h4 className="font-semibold text-lg">3. Non-Delivery and Returns</h4>
        <p>
          ● RTO charges are deducted for non-delivered packages
        </p>

        <h4 className="font-semibold text-lg">4. Package Information</h4>
        <p>
          ● Provide complete package information; delivery charges are calculated based on this information.
          ● Weight discrepancies are adjusted within 72 hours of package upload, resulting in refunds or deductions.
        </p>

        <h4 className="font-semibold text-lg">5. Final Invoice</h4>
        <p>
          A final invoice is generated monthly, serving as the basis for all reconciliations and refunds.
        </p>
        <h4 className="font-semibold text-lg">6. Charges and Taxes</h4>
        <p>
          ● Deductions include Delivery/Return Charges, COD Charges, Service Tax, and Fuel Surcharge. Entry Tax and OCTROI are manually deducted.
        </p>

        <h4 className="font-semibold text-lg">7. Refunds and Cancellations</h4>
        <p>    
          1. Lost Packages: Delivery/RTO Charges are refunded for lost packages.
          2. Service Termination: Remaining credits can be refunded upon service termination.
          3. Non-Delivery: COD Charges are refunded for non-delivered packages.
        </p>
        <h4 className="font-semibold text-lg">8. Representations and Warranties; Indemnity</h4>
        <p>
          ● Comply with all applicable laws while using the Services.
          ● Do not use automated systems, reverse engineer, or tamper with the Services.
          ● Indemnify and hold Mateng harmless from any claims, damages, or expenses
            arising from your use of the Services, violation of these Terms, or infringement of third-party rights.
        </p>


        <h4 className="font-semibold text-lg">9. Prohibited Activities</h4>
        <p>
          ● Do not use fraudulent means to access the Services or engage in disruptive or harmful behavior.
          ● Mateng reserves the right to take legal action for any violations of these Terms.
        </p>

        <h4 className="font-semibold text-lg">10. Disclaimer</h4>
        <p>
          ● Services are provided "as is" without warranties of any kind.
          ● Mateng is not responsible for incorrect delivery information or non-delivery. Relevant charges apply with no refund.
        </p>

        <h4 className="font-semibold text-lg">11. Miscellaneous</h4>
        <p>
          ● Mateng reserves the right to modify the Services and these Terms without notice.
          ● If any provision is deemed invalid, the remaining provisions will remain in effect.
          ● Mateng is not liable for performance failures due to force majeure events beyond its control.
        </p>
        <p>
          By using Mateng's services, you agree to these terms and conditions.
          For queries or concerns, contact us at contact@mateng.co.in.
        </p>
      </div>
    </div>
  );
}
