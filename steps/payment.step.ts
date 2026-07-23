import { Then, When } from "@cucumber/cucumber";
import { CheckoutPage } from "../pages/checkout-page";
import { CustomWorld } from "../support/world";
import { PaymentPage } from "../pages/payment-page";

When(
  "the user submits payment with credit card details",
  async function (this: CustomWorld, dataTable) {
    const paymentDetails = dataTable.rowsHash();
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.submitPayment(
      paymentDetails.cardholderName,
      paymentDetails.cardNumber,
      paymentDetails.expiryDate,
      paymentDetails.cvv,
    );
  },
);

Then(
  "the user should be redirected to payment success",
  async function (this: CustomWorld) {
    const paymentPage = new PaymentPage(this.page);
    await paymentPage.verifyPaymentSuccess();
    // expect(this.page.getByRole("link", { name: "eCommerce" })).toBeVisible();
  },
);
