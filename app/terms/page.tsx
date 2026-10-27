import type { Metadata } from "next"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import {
    ArrowLeft,
    ShieldCheck,
    FileText,
    Lock,
    Scale,
    Cpu,
    ExternalLink,
    Mail,
    CheckCircle2,
    Sparkles,
    AlertCircle,
    ArrowUpRight,
} from "lucide-react"

export const metadata: Metadata = {
    title: "Terms of Service | Westside Union",
    description:
        "Terms of service, client engagement frameworks, intellectual property rules, and site conditions for Westside Union Inc.",
    openGraph: {
        title: "Terms of Service | Westside Union",
        description:
            "Review Westside Union's terms of service, engagement agreements, intellectual property ownership, and acceptable use guidelines.",
        type: "website",
    },
}

interface SectionItem {
    id: string
    number: string
    title: string
    icon: React.ComponentType<{ className?: string }>
    summary: string
    content: React.ReactNode
}

export default function TermsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service | Westside Union",
        "description": "Terms of service and legal agreement governing the use of Westside Union's website, products, and services.",
        "publisher": {
            "@type": "Organization",
            "name": siteContent.brand.name,
            "url": "https://westside-union.com",
            "email": siteContent.brand.contactEmail,
            "foundingDate": "2009",
            "areaServed": siteContent.brand.locations,
        },
        "dateModified": "2026-02-01",
    }

    const quickHighlights = [
        {
            icon: ShieldCheck,
            title: "Clear Engagements",
            description: "Custom engineering, AI, and design contracts are executed via separate Statements of Work (SOWs).",
        },
        {
            icon: Cpu,
            title: "IP Ownership",
            description: "Bespoke client deliverables transfer to you upon payment; pre-existing core tooling remains with us.",
        },
        {
            icon: Lock,
            title: "Strict Confidentiality",
            description: "We safeguard proprietary client schematics, source code, data sets, and business strategies.",
        },
        {
            icon: Scale,
            title: "Dual-Hub Governance",
            description: "Structured to align across our operational hubs in Toronto, Canada and San Francisco, USA.",
        },
    ]

    const sections: SectionItem[] = [
        {
            id: "acceptance-of-terms",
            number: "01",
            title: "Acceptance of Terms",
            icon: ShieldCheck,
            summary: "By accessing our website, reading our publications, or interacting with our digital channels, you agree to these Terms of Service.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (whether personally or on behalf of an entity)
                        and <strong className="text-white font-semibold">{siteContent.brand.name} Inc.</strong> (&ldquo;Westside Union,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
                        governing your access to and use of our website (<span className="text-blue-400 font-mono text-sm">westside-union.com</span>), research whitepapers, open-source repositories,
                        podcasts, and related interactive platforms (collectively, the &ldquo;Site&rdquo;).
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        By accessing, browsing, or using the Site, you acknowledge that you have read, understood, and agree to be bound by all of these Terms and our{" "}
                        <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-medium transition-colors">
                            Privacy Policy
                        </Link>
                        . If you do not agree with all of these Terms, you are expressly prohibited from using the Site and must discontinue use immediately.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        You represent that you are at least 18 years of age or the age of legal majority in your jurisdiction, and possess the legal authority to enter into these Terms on your own behalf or on behalf of the company or organization you represent.
                    </p>
                </>
            ),
        },
        {
            id: "scope-of-services",
            number: "02",
            title: "Scope of Services & Client Engagements",
            icon: Cpu,
            summary: "Website browsing is distinct from formal professional services. Bespoke engineering, physical AI, and strategy are governed by dedicated contracts.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Westside Union provides multidisciplinary technology solutions, concept-to-product execution, software architecture, physical AI integration, design for manufacturing (DFM), and commercial product strategy.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The public-facing materials on the Site provide general descriptions of our expertise and capabilities. When you engage Westside Union for consulting, engineering, physical prototyping, or custom software development, our relationship will be governed by a separate, negotiated written agreement—typically a <strong className="text-white font-semibold">Master Services Agreement (MSA)</strong> and one or more <strong className="text-white font-semibold">Statements of Work (SOW)</strong> or Project Charters.
                    </p>
                    <div className="bg-white/[0.04] border border-white/10 rounded-xl p-4 text-sm text-gray-300 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span>
                            In the event of any direct conflict between these general Terms and an executed MSA or SOW, the provisions of the executed agreement will supersede and control with respect to that commercial engagement.
                        </span>
                    </div>
                </>
            ),
        },
        {
            id: "intellectual-property",
            number: "03",
            title: "Intellectual Property & Deliverable Ownership",
            icon: FileText,
            summary: "We protect both our proprietary platform assets and our clients' bespoke deliverables with strict IP clarity.",
            content: (
                <>
                    <h4 className="text-white font-semibold text-base mb-2">A. Westside Union Intellectual Property</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Unless otherwise indicated, the Site, its source code, databases, design assets, audio/video productions, research publications, text, graphics, trademarks, and service marks (&ldquo;Westside Union Materials&rdquo;) are owned or licensed by Westside Union Inc. and are protected by copyright, trademark, and other intellectual property laws in Canada, the United States, and internationally.
                    </p>

                    <h4 className="text-white font-semibold text-base mb-2">B. Client Deliverables</h4>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        For bespoke services provided under an active SOW, ownership of custom software code, CAD models, hardware schematics, and design deliverables transfers to the client in accordance with the specific terms of that contract, generally upon receipt of full payment for the applicable milestones.
                    </p>

                    <h4 className="text-white font-semibold text-base mb-2">C. Background Technology & Tooling</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Westside Union retains all right, title, and interest in its pre-existing tools, algorithms, reusable design systems, boilerplate architectures, and foundational frameworks (&ldquo;Background IP&rdquo;). Where Background IP is embedded in client deliverables, Westside Union grants the client a perpetual, non-exclusive, worldwide license to utilize such Background IP in conjunction with the deliverable.
                    </p>
                </>
            ),
        },
        {
            id: "open-source-software",
            number: "04",
            title: "Open Source Software & Research",
            icon: Sparkles,
            summary: "Our open-source projects and research publications are governed by open software licenses and public scholarship principles.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Westside Union maintains open-source repositories and contributes to developer communities (accessible via our{" "}
                        <Link href="/open-source" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                            Open Source
                        </Link>{" "}
                        hub). Software libraries, components, or tools published with an open-source license (such as MIT, Apache 2.0, or BSD) are governed strictly by the respective license attached to that repository.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Nothing in these Terms restricts or diminishes your rights under any open-source software license. Whitepapers and thought leadership published in our{" "}
                        <Link href="/research" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
                            Research
                        </Link>{" "}
                        section may be cited and shared for educational or analytical purposes, provided appropriate attribution is given to Westside Union.
                    </p>
                </>
            ),
        },
        {
            id: "acceptable-use",
            number: "05",
            title: "Acceptable Use & User Conduct",
            icon: Lock,
            summary: "You agree to use our digital assets lawfully, ethically, and without interfering with security, infrastructure, or intellectual assets.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        You agree to access and use the Site only for lawful, legitimate purposes. When interacting with the Site, you expressly agree not to:
                    </p>
                    <ul className="space-y-2 text-gray-300 mb-4 list-disc pl-5">
                        <li>Systematically extract, harvest, or scrape data, code, or content from the Site without our express prior written permission.</li>
                        <li>Circumvent, disable, or tamper with security-related features, rate limiters, or authentication mechanisms.</li>
                        <li>Transmit viruses, malware, trojan horses, or flood our infrastructure with denial-of-service attempts.</li>
                        <li>Decompile, disassemble, or reverse engineer any part of the Site or underlying software frameworks, except as permitted by applicable law.</li>
                        <li>Impersonate Westside Union personnel, client partners, or misrepresent an affiliation or sponsorship with our brand.</li>
                        <li>Use the Site in any manner that violates applicable local, state, provincial, national, or international regulations.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to investigate and cooperate with law enforcement authorities regarding any activity that breaches these restrictions.
                    </p>
                </>
            ),
        },
        {
            id: "confidentiality",
            number: "06",
            title: "Confidentiality & Non-Disclosure",
            icon: Lock,
            summary: "Confidential discovery discussions, technical schematics, and business concepts are handled with enterprise-grade discretion.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        During initial exploratory consultations, discovery calls, or project scoping, either party may share sensitive business, technical, or financial information (&ldquo;Confidential Information&rdquo;). Both parties agree to protect such information with the same degree of care they exercise with their own confidential materials (and never less than reasonable care).
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We frequently execute formal bilateral Non-Disclosure Agreements (NDAs) prior to in-depth technical reviews. If an NDA is executed between you and Westside Union, its confidentiality commitments supersede these general terms regarding the exchanged proprietary data.
                    </p>
                </>
            ),
        },
        {
            id: "third-party-links",
            number: "07",
            title: "Third-Party Services & External Platforms",
            icon: ExternalLink,
            summary: "We link to external platforms like podcast networks, GitHub, and social media. Their respective terms and privacy policies apply.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        The Site contains links to third-party services and content channels, including but not limited to Spotify, Apple Podcasts, LinkedIn, Instagram, Crunchbase, and GitHub.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        These links are provided solely for your convenience. Westside Union does not monitor, control, or endorse the content, policies, or practices of third-party platforms. We assume no responsibility or liability for your interactions with third-party sites or providers. We encourage you to review their terms of use and privacy policies before engaging.
                    </p>
                </>
            ),
        },
        {
            id: "disclaimers",
            number: "08",
            title: "Warranties & Disclaimers (&ldquo;As-Is&rdquo;)",
            icon: AlertCircle,
            summary: "The site and its contents are provided on an 'as-is' and 'as-available' basis without warranties of any kind.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        THE SITE, ITS CONTENTS, AND ANY INFORMATIONAL MATERIALS ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WESTSIDE UNION INC. EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        While we strive for technical precision, we do not warrant that the Site will be uninterrupted, error-free, free of harmful components, or that any content is exhaustive, current, or applicable to your specific operational constraints. Formal performance warranties for custom commercial engineering are governed exclusively by executed Statements of Work.
                    </p>
                </>
            ),
        },
        {
            id: "limitation-of-liability",
            number: "09",
            title: "Limitation of Liability",
            icon: Scale,
            summary: "Our aggregate liability for site use is limited to the fullest extent permissible under relevant laws.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        IN NO EVENT SHALL WESTSIDE UNION INC., ITS DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES—INCLUDING LOST PROFITS, LOST REVENUE, LOSS OF DATA, OR SYSTEM DOWNTIME—ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        TO THE EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIMS ARISING FROM SITE ACCESS OR THESE GENERAL TERMS SHALL NOT EXCEED ONE HUNDRED CANADIAN DOLLARS ($100 CAD) OR THE AMOUNT YOU PAID US DIRECTLY FOR ACCESSING THE SITE (IF ANY) OVER THE PRECEDING TWELVE MONTHS.
                    </p>
                </>
            ),
        },
        {
            id: "indemnification",
            number: "10",
            title: "Indemnification",
            icon: ShieldCheck,
            summary: "You agree to hold Westside Union harmless against liabilities resulting from improper use or breach of these terms.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed">
                        You agree to defend, indemnify, and hold harmless Westside Union Inc., its affiliates, subsidiaries, directors, officers, agents, and employees from and against any losses, damages, liabilities, claims, demands, or expenses (including reasonable attorneys&rsquo; fees) arising out of or related to: (a) your use or misuse of the Site; (b) your breach of these Terms; or (c) your violation of any third-party rights, including intellectual property or privacy rights.
                    </p>
                </>
            ),
        },
        {
            id: "governing-law",
            number: "11",
            title: "Governing Law & Dispute Resolution",
            icon: Scale,
            summary: "Terms are governed by Ontario, Canada laws, reflective of our primary corporate seat, with mutual good-faith dispute escalation.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        These Terms and your use of the Site are governed by and construed in accordance with the laws of the <strong className="text-white font-semibold">Province of Ontario</strong> and the federal laws of Canada applicable therein, without giving effect to any principles of conflicts of law.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        For disputes arising between parties operating primarily within the United States, commercial contracts may optionally specify the laws of the <strong className="text-white font-semibold">State of California</strong> as mutually stipulated in executed Statements of Work.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Before commencing formal legal proceedings, the parties agree to seek resolution through amicable, good-faith negotiations between designated senior executives for a minimum period of thirty (30) days from written notice of dispute.
                    </p>
                </>
            ),
        },
        {
            id: "modifications",
            number: "12",
            title: "Modifications to Terms & Site",
            icon: Sparkles,
            summary: "We may update these terms periodically to reflect operational, technological, or regulatory developments.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        We reserve the right, in our sole discretion, to modify, update, or replace these Terms at any time. When changes occur, we will update the &ldquo;Last Updated&rdquo; and &ldquo;Effective Date&rdquo; timestamps at the top of this page.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Your continued use of the Site after the posting of revised Terms constitutes your acceptance of and agreement to the modifications. We encourage you to review this page periodically to remain informed of our operational terms.
                    </p>
                </>
            ),
        },
        {
            id: "contact-information",
            number: "13",
            title: "Contact & Legal Inquiries",
            icon: Mail,
            summary: "Questions regarding legal terms, custom enterprise MSAs, or compliance may be directed to our operations team.",
            content: (
                <>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        If you have questions, notices, or require clarification regarding these Terms of Service or our commercial agreements, please contact us at:
                    </p>
                    <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6 space-y-4">
                        <div>
                            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Entity</div>
                            <div className="text-white font-medium">{siteContent.brand.name} Inc.</div>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Email Inquiries</div>
                            <a
                                href={`mailto:${siteContent.brand.contactEmail}`}
                                className="text-blue-400 hover:text-blue-300 font-mono text-sm inline-flex items-center gap-1.5 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                {siteContent.brand.contactEmail}
                            </a>
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Operational Hubs</div>
                            <div className="text-gray-300 text-sm">
                                {siteContent.brand.locations.join(" &bull; ")}
                            </div>
                        </div>
                        <div className="pt-2 border-t border-white/10 flex flex-wrap gap-4 text-xs text-gray-400">
                            <span>Founding Year: 2009</span>
                            <span>&bull;</span>
                            <span>Business Solutions &amp; Engineering</span>
                        </div>
                    </div>
                </>
            ),
        },
    ]

    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white selection:bg-blue-500/30 selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Ambient Canvas */}
            <div className="fixed inset-0 w-full h-full pointer-events-none opacity-60">
                <Aurora colorStops={["#334155", "#475569", "#1e293b"]} amplitude={0.6} blend={0.6} speed={0.25} />
            </div>

            {/* Navigation Bar */}
            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Breadcrumbs & Navigation */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                        <Link
                            href="/privacy"
                            className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                        >
                            Privacy Policy
                            <ArrowUpRight className="w-3 h-3" />
                        </Link>
                        <span>&bull;</span>
                        <Link
                            href="/contact"
                            className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                        >
                            Contact Us
                            <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Hero Header */}
                <header className="mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Legal Agreement &bull; Version 2.1</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Terms of{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                            Service
                        </span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-400 border-b border-white/10 pb-6 mb-6">
                        <div>
                            <span className="text-gray-500">Effective Date:</span>{" "}
                            <span className="text-gray-300 font-medium">February 1, 2026</span>
                        </div>
                        <span className="hidden sm:inline text-gray-600">&bull;</span>
                        <div>
                            <span className="text-gray-500">Last Revised:</span>{" "}
                            <span className="text-gray-300 font-medium">February 1, 2026</span>
                        </div>
                        <span className="hidden sm:inline text-gray-600">&bull;</span>
                        <div>
                            <span className="text-gray-500">Applicable Entity:</span>{" "}
                            <span className="text-gray-300 font-medium">{siteContent.brand.name} Inc.</span>
                        </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                        Welcome to {siteContent.brand.name}. These Terms of Service outline the conditions governing your use of our digital platforms, research publications, and services. Please read them carefully before utilizing our website or engaging our team.
                    </p>
                </header>

                {/* Terms At A Glance */}
                <section className="mb-14" aria-labelledby="highlights-heading">
                    <div className="flex items-center gap-2 mb-5">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <h2 id="highlights-heading" className="text-xs uppercase font-mono tracking-widest text-blue-400">
                            Terms at a Glance
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {quickHighlights.map((item, idx) => {
                            const IconComponent = item.icon
                            return (
                                <div
                                    key={idx}
                                    className="bg-zinc-950/60 border border-white/10 hover:border-white/20 rounded-2xl p-5 backdrop-blur-md transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                                            <IconComponent className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                                            <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Quick Jump Table of Contents */}
                <nav
                    className="mb-14 bg-zinc-950/70 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
                    aria-label="Table of Contents"
                >
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-blue-400" />
                            <h2 className="text-sm font-semibold text-white tracking-wide">
                                Table of Contents
                            </h2>
                        </div>
                        <span className="text-xs font-mono text-gray-400">13 Sections</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                        {sections.map((sec) => (
                            <a
                                key={sec.id}
                                href={`#${sec.id}`}
                                className="group flex items-center gap-2.5 p-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/[0.04] transition-all"
                            >
                                <span className="font-mono text-blue-400 text-[11px] group-hover:underline">
                                    {sec.number}
                                </span>
                                <span className="truncate">{sec.title}</span>
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Detailed Sections List */}
                <div className="space-y-10">
                    {sections.map((section) => {
                        const Icon = section.icon
                        return (
                            <article
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-32 bg-zinc-950/50 border border-white/10 hover:border-white/20 rounded-3xl p-6 md:p-10 backdrop-blur-xl transition-all shadow-xl"
                            >
                                <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono text-blue-400 tracking-wider">
                                                SECTION {section.number}
                                            </div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <a
                                        href={`#${section.id}`}
                                        className="text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors self-center"
                                        aria-label={`Link to Section ${section.number}`}
                                    >
                                        #{section.id}
                                    </a>
                                </div>

                                {/* Plain English Key Takeaway Callout */}
                                <div className="mb-6 rounded-2xl bg-blue-950/20 border border-blue-500/20 p-4 sm:p-5 flex items-start gap-3.5">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                                            In Brief
                                        </div>
                                        <div className="text-sm text-gray-300 leading-relaxed">
                                            {section.summary}
                                        </div>
                                    </div>
                                </div>

                                {/* Full Legal Text */}
                                <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white max-w-none text-sm sm:text-base">
                                    {section.content}
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom Callout & Legal Support */}
                <aside className="mt-16 bg-gradient-to-br from-zinc-900/90 via-zinc-950/90 to-blue-950/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl text-center md:text-left relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
                                <Sparkles className="w-3.5 h-3.5" />
                                Commercial Inquiries &amp; Enterprise Contracts
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Looking for custom enterprise terms or an MSA?
                            </h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                For enterprise procurement, custom software development contracts, physical AI hardware prototyping, or bespoke consulting Statements of Work (SOW), our legal and executive team is available to assist.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors shadow-lg"
                            >
                                Contact Our Team
                            </Link>
                            <a
                                href={`mailto:${siteContent.brand.contactEmail}?subject=Legal%20and%20Terms%20Inquiry`}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-sm transition-colors"
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Email Legal
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Bottom Navigation Anchors */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <span>&bull;</span>
                        <Link href="/services" className="hover:text-white transition-colors">
                            Services Overview
                        </Link>
                        <span>&bull;</span>
                        <Link href="/contact" className="hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    <a
                        href="#"
                        className="inline-flex items-center hover:text-white transition-colors group"
                    >
                        Back to top
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}
