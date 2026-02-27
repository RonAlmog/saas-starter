import { PricingTable } from "@clerk/nextjs";
import { div } from "motion/react-client";

function ActualFeatures() {
  return <div className="flex flex-col items-start gap-4">features</div>;
}

function UpgradeCard() {
  return (
    <div className="rounded-lg border bg-popover p-4">
      <h3 className="text-lg font-semibold">Upgrade Required</h3>
      <p className="text-sm text-muted-foreground">
        To access this feature, please upgrade your account.
      </p>
      <PricingTable />
    </div>
  );
}
const PaymentGatedPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <UpgradeCard />
    </div>
  );
};

export default PaymentGatedPage;
