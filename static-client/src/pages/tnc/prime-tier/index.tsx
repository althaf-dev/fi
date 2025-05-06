import Colors from "@/Themes/Colors";
import Head from "next/head";

export default function App({CDN_URL}:any) {
  return (
    <>
    <link rel='stylesheet' href={`${CDN_URL}/content/guides/assets/css/prime-tier-tnc-style.css`}/>
    <div style={{
        fontFamily: 'Gilroy',
        padding: '20px',
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        margin: 'auto',
        gap: '20px',
    }}>
        <div style={{
            textAlign: 'center',
        }}>
            <h1><u>T&Cs for Prime Plan</u></h1>
        </div> 
        <h4>T&Cs for Prime Plan benefits</h4>
        <p>The Prime Plan comes with fantastic benefits, and we want to ensure you&apos;re aware of all the perks &amp; terms of use that come with it. These terms and conditions (T&amp;Cs) are meant to be read by you along with the Fi Terms and Conditions + <a style={{color:Colors.GREEN_3, fontWeight:600}} href="https://fi.money/privacy">Fi Privacy Policy</a>. All of which you agreed to while opening your Federal savings account via the Fi app.Don&apos;t worry! We promise to keep the legal jargon to a minimum.</p>
        <h4>Prime Plan Benefits: All You Need to Know</h4>
        <h4>You may get access to a Prime Plan by:</h4>
        <ol>
            <li>Verifing your salary.</li>
            <li>Connecting your current salary account with Fi.</li>
            <li>Confirming to transfer a predetermined amount every month to the a/c opened via Fi</li>
            <li>Benefits will only unlock after you have transferred your first credit in your Federal Bank Savings Account accessible through Fi. At this point, your account will upgrade to a ‘Prime Plan’.</li>
        </ol>
        <h4>As part of the Prime Plan, you will receive the following benefits:</h4>
        <ol>
            <li><h4>Upto 3% cashback on your monthly spends (subject to a maximum cap) </h4></li>
            <h4>How it works</h4>
            <ul>
                <li>Once your benefits are activated, you will receive up to 3% cashback on all shopping payments above ₹100 made via UPI or Debit Card through Fi. Benefits will get activated upon transferring a predetermined amount every month via recurring mandate or TPAP from an external savings account into your Federal Bank savings account through Fi. </li>
                <li>According to the eligibility criteria shared above, you can get upto 3% cashback on UPI spends through Fi or Fi-Federal Debit Card spends , capped respectively at ₹500 per month.</li>
                <li>Total monthly cashback rewards will be sent to you in the first week of the following month as a money-plant in  Fi app&apos;s Your Rewards section. When you open the money-plant, you can claim the cashback amount.</li>
                <li>For cashback on UPI payments, only payments made through the Fi app using your Federal Bank Savings Account will be eligible for the monthly cashback offer. Any UPI payments from your Federal Bank Savings account using third-party apps like Gpay, Phonepe, or Paytm will not be rewarded.</li>
                <li>International transactions will not qualify for this reward.</li>
                <li>Refunded or reversed payments will also not be considered for the monthly cashback offer.</li>
                <li>Only spends while you were active as a Prime Plan user will get considered for a reward. If your benefits are deactivated, then spends in the deactivated duration of a month will not get considered. </li>
                <li>Your predetermined portion of salary should regularly be transferred into your savings account (provided by Federal Bank through the Fi app) for Prime Plan benefits. If there is no deposit for 60 days, then benefits will be deactivated.</li>
                <li>You can track whether benefits are active by visiting the Prime Plan benefits page in the app.</li>
            </ul>
            <h4>Terms for this offer</h4>
            <ul>
                <li>For every payment, you can receive a maximum of ₹30 cashback.</li>
                <li>You can receive a maximum of ₹100 cashback in a day</li>
                <li>You can receive a maximum of up to ₹500 cashback in a calendar month (depending on your eligibility)</li>
                <li>This offer is active from 5 June, 2024.</li>
                <li>Any decisions made by Fi, in consultation with its banking partner in regard to these rewards, including but not limited to, calculation of rewards, whether the merchant transaction is eligible for the reward etc. shall be at the sole discretion of Fi in consultation with its banking partner and shall be final and binding on you. Fi, in consultation with its banking partner reserves the right to not grant the reward to you.</li>
            </ul>
            <li><h4>Shopping via Fi: Upto Flat 20% of Debit card & 10% of UPI shopping spends as Fi-Coins  </h4></li>
            <h4>How it works</h4>
            <ul>
                <li>Your Prime Plan benefits need to be active to avail this reward. </li>
                <li>On UPI spends made through the Fi App from your Federal Savings Account, you get upto 10% of your shopping spends as Fi-Coins subject to a cap of 200 Fi-coins.</li>
                <li>On Fi-Federal Debit card spends, you get upto 20% of your shopping spends as Fi-Coins subject to a cap of 800 Fi coins.</li>
                <li>There is no minimum payment amount.</li>
                <li>Every time a purchase gets successfully completed, you will receive Fi-Coin rewards. You can track these in the app&apos;s &apos;My Rewards&apos; section.</li>
            </ul>
            <h4>Terms for this offer</h4>
            <ul>
            <li>International transactions will not qualify for this reward.</li>
            <li>For UPI rewards, payments to merchants like Paytm, Club 12, Freecharge, Mobikwik, Jio Money, Amazon Pay, Ola Money or Swiggy Money are not applicable for the reward.</li>
            <li>When paying with UPI via Fi, ensure that 100% of the payment is made using UPI. Avoid combinations like wallet cash and UPI to make the payment.</li>
            <li>Refunded or reversed payments will also not be considered for rewards.</li>
            <li>You cannot win rewards on peer-to-peer transactions, i.e., payments to other non-merchant users.</li>
            <li>You can get a maximum of 200 Fi-Coins for a UPI transaction. </li>
            <li>You can get a maximum of 2,000 Fi-Coins for UPI transactions in a month.</li>
            <li>You can get a maximum of 800 Fi-Coins for a Debit Card transaction</li>
            <li>You can get a maximum of 8,000 Fi-Coins for Debit Card transactions in a month.</li>
            <li>Any decisions made by Fi, in consultation with its banking partner in regard to these rewards, including but not limited to, calculation of rewards, whether the merchant transaction is eligible for the reward etc. shall be at the sole discretion of Fi in consultation with its banking partner and shall be final and binding on you. Fi, in consultation with its banking partner reserves the right to not grant the reward to you.</li>
            </ul>
            <li><h4>Physical VISA debit card</h4></li>
            <ul>
                <li>Depending on your eligibility, you could either get a free physical Fi-Federal Debit Card with no annual maintenance fee.</li>
            </ul>
            <li><h4>Zero forex charges on Debit Card</h4></li>
            <ul>
                <li>Prime Plan users get a 0% markup of up to ₹30,000 on international spends. Forex charges, as applicable,  will get deducted on all international payments. But we&apos;ll refund this money to your Federal Bank savings account every month subject to the cap mentioned above. </li>
                <li>Waiver of forex charges shall not apply to cryptocurrency related transactions.</li>
            </ul>
            <li><h4>General Terms and Conditions</h4></li>
            <ol>
                <li>Users joining the Prime Plan need to be salaried </li>
                <li>Prime Plan provides exclusive benefits on your savings account offered by Federal Bank through Fi — over and above a regular savings account on the Fi app. Upon transferring a pre-determined amount of every month via recurring mandate or TPAP from an external savings account into your Federal Bank savings account through Fi, without having to maintain minimum balance, you can get these benefits.</li>
                <li>You agree that your Federal Bank Savings Account accessible through Fi may be categorised as a Prime Plan account only if you qualify the eligibility criteria mentioned as per the terms below.</li>
                <li>You may get access to a Prime Plan by:</li>
                <ol>
                    <li>Verify your salary.</li>
                    <li>Connecting your current salary account with Fi.</li>
                    <li>Confirming to transfer a predetermined amount of every month to the a/c opened via Fi</li>
                    <li>Benefits will only unlock after you have transferred your first credit in your Federal Bank Savings Account accessible through Fi. At this point, your account will upgrade to a ‘Prime Plan’.</li>
                </ol>
                <li>You get the below-mentioned benefits when you upgrade to a Prime Plan account. You can find detailed T&Cs for each benefit mentioned in the ‘T&Cs for Prime Plan benefits’ section:</li>
                <ol>
                    <li>Monthly cashback offer - Up to 3% cashback on your UPI (through Fi app) and Fi-Federal Debit Card monthly spends, credited in the first week of next month (per eligibility criteria detailed above)</li>
                    <li>Upto 20% off on spends made on Fi-Federal Bank Co-branded Debit Card & upto 10% off on UPI shopping spends as Fi-Coins after each transaction subject to maximum caps. For detailed T&Cs please refer to section [mention title of the section].</li>
                    <li>Free physical debit card (if eligible)</li>
                    <li>Zero forex charges on Debit Card upto a limit of 30,000. For detailed T&C please refer to section [mention title of the section]. </li>
                </ol>
                <li>The eligibility criteria for converting your Federal Bank Savings Account accessible through Fi to a Prime Plan have been mentioned below.</li>
                <ol>
                    <li>Your employer (company) should be registered on the Ministry of Corporate Affairs portal. Or be listed in the Employees&apos; Provident Fund Organisation (EPFO). Or should be registered with the GST authority.</li>
                    <li>The predetermined amount should arrive from an external savings account in your Federal Bank account (opened through Fi) every month.</li>
                    <li>To be eligible for the Prime Plan: a minimum credit per month is required (calculated at the time of onboarding basis your eligibility criteria)</li>
                    <li>Fi would reserve the right to  provide an option to upgrade to this Tier as per its discretion and could be available selectively to a few users.</li>
                    <li>Note: Fi, at its discretion, maintains the right to unilaterally vary the terms or cancel the Prime Plan and change the eligibility criteria (with or without notice). Any change (including a unilateral change) in terms of the tier would not make Fi or its partner bank liable for any (i) lost profits, (ii) loss of goodwill, or (iii) any special, indirect, incidental, punitive, or consequential damages of any kind whatsoever. However, Fi will take all reasonable and commercially prudent steps to inform users of any change in the salary account programme.</li>
                </ol>
                <li>Fi has the right to downgrade from the Prime Plan for specific users. Especially users whose accounts get flagged for fraudulent activity or other related reasons.</li>
            </ol>
        </ol>
    </div>
    </>
  );
}
// This function gets called at build time
export async function getStaticProps() {
    const { CDN_URL } = process.env;
    return {
      props: {
        CDN_URL
    }
  }
};