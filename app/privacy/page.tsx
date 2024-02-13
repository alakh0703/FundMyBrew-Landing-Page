
export default function Privacy() {
    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-center text-2xl md:text-5xl mt-10 font-semibold">Privacy Policy</h1>
            <div className="w-[80%] lg:w-[45%] pt-12 pb-[100px]">
                <p className="text-left">Welcome to FundMyBrew, the platform designed to empower creators and their supporters. Your privacy is our top priority, and we are committed to ensuring the security of your personal information as you engage with our services.</p>
                <p className="mt-10 mb-4 font-semibold">Insights into Your Visit</p>
                <p>Just like other online platforms, FundMyBrew collects non-personally-identifying information, such as browser type, language preference, referring site, and the date and time of each visitor request. We use this data to enhance your experience and understand how our users interact with our platform. Periodically, we may share non-personally-identifying information in aggregate reports to highlight trends in platform usage.
                    <br /><br />
                    For logged-in users and those making payments, we collect potentially personally-identifying information like IP addresses, which is handled with the same confidentiality standards. Your privacy is important, and we ensure that this information is disclosed only as outlined below.</p>
                <p className="mt-10 mb-4 font-semibold">Secure Payments</p>
                <p>To facilitate payments to creators on FundMyBrew, our trusted payment processor <i>Stripe</i> handles your payment information securely. They provide us with a token representing your account, ensuring the privacy of your card details. Additionally, if you provide a name and email address during payment, this information is shared with FundMyBrew.</p>
                <p className="mt-10 mb-4 font-semibold">Your Personal Interaction</p>
                <p>Certain interactions on FundMyBrew may require personally-identifying information. The amount and type of information collected depend on the nature of the interaction. Visitors signing up may be asked for a username and email address, while transactions may require additional details for processing.
                    <br /><br />
                    We respect your privacy and collect information only as necessary to fulfill the purpose of your interaction with FundMyBrew. Personally-identifying information is not disclosed beyond the scope described below.</p>
                <p className="mt-10 mb-4 font-semibold">Deleting Personal Data</p>
                <p>You have the right to request the deletion of your personal data. Simply email us at <a href="">help@fmb.com</a>, and we&apos;ll promptly address your request.</p>
            </div>
        </div>
    )
}
