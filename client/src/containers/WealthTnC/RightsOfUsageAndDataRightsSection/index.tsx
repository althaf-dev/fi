import React from 'react';

import { PrivacyCardSegment } from '../../PrivacyPolicy/PrivacyStyled/PrivacyStyled';

import { Font } from '../../../components';

import Title from '../Title';
import Description from '../Description';
import Card from '../Card';

import { SectionContainer } from '../styled';

const RIGHTS_OF_USAGE_AND_DATA_RIGHTS_SECTION_DATA = {
    title: 'Rights of Usage & Data Rights ✔️',
    description: {
        content: (
            <p>
                From breaching the T&Cs to duplicating portions of the platform, and everything in between.
                <br />
                Here are absolute NO-NOs that every user should be aware of. Some necessary content permissions
                that you grant us while signing up for our platform. P.S. Our logo and brand name are ours
                alone. We’d appreciate it if you don’t mess with it. Thanks!
            </p>
        ),
    },
    card: {
        content: [
            {
                id: 1,
                content: (
                    <p>
                        <PrivacyCardSegment>
                            • Epifi Wealth provides multiple services — either by itself or in partnership with third parties.
                        </PrivacyCardSegment>

                        <PrivacyCardSegment>
                            • You acknowledge and agree that: Your personal info, such as name and phone number etc. (“Information”),
                            may get transferred to third parties to provide you with the services.
                        </PrivacyCardSegment>

                        <PrivacyCardSegment>
                            • You further agree that upon your request and consent, Information may be shared with third parties so
                            that you can get access to services enabled by our group companies either by themselves or through their partners.
                        </PrivacyCardSegment>
                    </p>
                ),
            },
            {
                id: 2,
                content: 'If we reasonably believe that you are violating the T&Cs, we reserve the right to deny you access to the services. In such extreme term-breach scenarios – we may even terminate accounts, remove, or edit content at any time without notice to the user concerned. We may also monitor your use of the services, content, or platform for such a breach or violation.',
            },
            {
                id: 3,
                content: (
                    <p>
                        You understand that your personal information (including your credit information) may
                        be transferred to other parties to provide you with our services, and you consent to
                        such transfer. For more information on how securely & respectfully we do this, please
                        refer to our&nbsp;
                        <a href='/privacy'>
                            <Font font='pSmallVariantOne' tagType='span' color='FOREST_GREEN'>
                                Privacy Policy.
                            </Font>
                        </a>
                    </p>
                ),
            },
            {
                id: 4,
                content: 'You agree that all rights, titles and interests in the content, services, and platform or other intellectual property owned by Epifi remain the sole and exclusive property of Epifi, except as otherwise expressly stated.',
            },
            {
                id: 5,
                content: 'You acknowledge that you have no ownership rights in the content, services, or platform owned by us or our licensors — and that these remain protected under copyright, trademark, and other intellectual property laws and other applicable laws. You receive no copyright claim (or any other intellectual property right) in or to the content, services, or platform except as provided above. You may use the content, services, or platform only for your personal and non-commercial use.',
            },
            {
                id: 6,
                content: 'You also agree not to (or allow third parties to) reproduce, duplicate, reverse engineer, modify, transmit, perform, publish, license, create derivative works, copy, sell, resell, transfer, display, or exploit the platform, content, services or any of its portions or any intellectual property owned by and belonging to Epifi (including its trademarks, Epifi and the Epifi logo), without an explicitly granted written permission from the company. You also agree not to use our content or platform for commercial or public purposes in whole (or in part) without explicit written permission from the company.',
            },
            {
                id: 7,
                content: 'You acknowledge that we may provide certain portions of the content under license from our third-party providers. You also agree to comply with any additional restrictions on your usage that we may communicate to you on occasion, or that are otherwise the subject of an agreement between you and such licensors. The inclusion of any linked website does not imply our endorsement of such a website. We neither control nor have reviewed or approved these websites and will not be responsible for the contents or omissions of any linked website or any links contained therein.',
            },
            {
                id: 8,
                content: 'You understand and acknowledge that upon using the content, platform, weblink or services, you authorise us to access third party sites when designated by you, on your behalf, to retrieve such information required to register the account requested by you. To this end, you grant us the power to do so and acknowledge and agree that when we access and retrieve information from third-party sites, we act as your agent.',
            },
            {
                id: 9,
                content: (
                    <p>
                        We respect your right to ownership of your data (created or stored by you) on the platform.
                        You acknowledge granting Epifi the permission to access, copy, distribute, store, transmit,
                        reformat, publicly display, and perform your content as per these T&Cs. We will make all
                        reasonable efforts to ensure that your information is kept confidential. However, we will not
                        be responsible for any disclosure or leakage of confidential information or loss or damage to
                        your devices due to theft, negligence, or failure on your part to practise safe computing.
                        <br />
                        <br />
                        In your use of our content, services, or platform you agree not to:
                        <br />
                        <br />
                        - defame, abuse, harass, stalk, threaten, or otherwise violate the legal rights (such as
                        rights of privacy and publicity) of others users or the company;
                        <br />
                        <br />
                        - publish, post, distribute or disseminate any defamatory, libellous, infringing, obscene,
                        pornographic, indecent, invasive of privacy, racially or ethnically objectionable, disparaging,
                        or unlawful material or information;
                        <br />
                        <br />
                        - upload files that contain software or other material protected by intellectual property laws
                        (or by rights of privacy/publicity) unless you own or control the rights to that or have
                        received all necessary consents and the prior written permission of the company;
                        <br />
                        <br />
                        - upload files that contain viruses, corrupted files, or any other similar software or programs
                        that may damage the operation of another’s computer;
                        <br />
                        <br />
                        - conduct or forward surveys, contests, or chain letters;
                        <br />
                        <br />
                        - download or distribute any file posted by another user that you know cannot be legally
                        distributed in such manner.
                    </p>
                ),
            },
            {
                id: 10,
                content: 'You also agree that you will not use the content, platform, weblink or services, in a manner that could damage, disable, overburden, or impair our server or any network connected to it, or interfere with any other party’s use and enjoyment of the same.',
            },
            {
                id: 11,
                content: 'You will not attempt to gain unauthorised access to any functions or features, other user accounts, computing systems or networks connected to any Epifi server in any manner, including through hacking, password mining, or any other means. Moreover, you will not obtain or attempt to obtain any materials or information through any means which is not intentionally made available to you.',
            },
            {
                id: 12,
                content: 'You acknowledge and understand that Epifi takes the role of ‘financial information user‘ under applicable regulations for account aggregators.',
            },
            {
                id: 13,
                content: (
                    <p>
                        Epifi will require your consent to receive or share your information through recognised account aggregators to provide
                        services or use your content. You shall provide your consent as required by recognised account aggregators through the
                        consent artefact prescribed under the relevant regulations, which shall include:
                        <br />
                        <br />
                        (i) identity of the user and optional contact information;
                        <br />
                        <br />
                        (ii) nature of the financial information requested;
                        <br />
                        <br />
                        (iii) purpose of collecting such information;
                        <br />
                        <br />
                        (iv) identity of the recipients of the information, if any;
                        <br />
                        <br />
                        (v) URL or other address to which notification needs to be sent every time the consent artefact is used to access information;
                        <br />
                        <br />
                        (vi) consent creation date, expiry date, identity and signature/ digital signature of the account aggregator;
                        <br />
                        <br />
                        (vii) And/or any other attribute as may be prescribed
                    </p>
                ),
            },
            {
                id: 14,
                content: 'You agree to allow recognised financial information providers to securely transfer your information to the account aggregators and share such information with Epifi once the account aggregators obtain a valid consent artefact as per regulations.',
            },
            {
                id: 15,
                content: 'You agree that the account aggregator may electronically obtain a consent artefact from you. (A consent artefact is a machine-readable electronic document that specifies the scope of data that a user agrees to provide.) The account aggregator will inform you about all the necessary attributes to be contained in the consent artefact. And that this consent artefact would be logged, audited, and verified.',
            },
            {
                id: 16,
                content: ' You understand that you have the right to revoke consent. Or that you can choose to provide consent for all or part of the information requested in the consent artefact. You also have the right to file complaints with the relevant authorities in case of non-redressal of any grievances.',
            },
            {
                id: 17,
                content: 'Epifi will not disclose your information in any manner other than as expressly provided in the consent artefact or through additional consent provided by you.',
            },
            {
                id: 18,
                content: (
                    <p>
                        In addition to the above, Epifi may gather your information for risk assessment of your profile
                        per the applicable SEBI regulations. For such purpose, Epifi may request details of:
                        <br />
                        <br />
                        (i) age;
                        <br />
                        <br />
                        (ii) investment objective;
                        <br />
                        <br />
                        (iii) income details;
                        <br />
                        <br />
                        (iv) existing investments;
                        <br />
                        <br />
                        (v) risk appetite/tolerance;
                        <br />
                        <br />
                        (vi) liability/borrowings.
                    </p>
                ),
            },
            {
                id: 19,
                content: 'We may process this information to assess your ability to absorb losses and understand your tolerance for capital loss. We will communicate our assessment of your profile and may identify suitable products or schemes based on your evaluation. We will store details/reports of such risk assessment of your profile for our records in accordance with the applicable SEBI regulations.',
            },
        ],
    },
};

const RightsOfUsageAndDataRightsSection = () => (
    <SectionContainer>
        <Title content={RIGHTS_OF_USAGE_AND_DATA_RIGHTS_SECTION_DATA.title} />
        <Description content={RIGHTS_OF_USAGE_AND_DATA_RIGHTS_SECTION_DATA.description.content} />
        <Card content={RIGHTS_OF_USAGE_AND_DATA_RIGHTS_SECTION_DATA.card.content} />
    </SectionContainer>
);

export default RightsOfUsageAndDataRightsSection;
