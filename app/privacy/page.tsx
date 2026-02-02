import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { siteContent } from "@/lib/site-content"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden relative text-white">
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={0.5} blend={0.6} speed={0.2} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-gray-400 text-sm mb-12">Last Updated: February 1, 2026</p>

                    <p>
                        At {siteContent.brand.name}, we value your privacy and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us, such as your name, email address, company name,
                        and any other information you choose to provide when you contact us or request a consultation.
                    </p>
                    <p>
                        We also automatically collect certain information when you visit our site, including your IP address, browser type,
                        device information, and usage data through cookies and similar technologies.
                    </p>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use the collected information for the following purposes:</p>
                    <ul>
                        <li>To provide, maintain, and improve our services.</li>
                        <li>To communicate with you regarding your inquiries or projects.</li>
                        <li>To analyze website usage and improve user experience.</li>
                        <li>To comply with legal obligations and enforce our terms.</li>
                    </ul>

                    <h3>3. Data Sharing and Disclosure</h3>
                    <p>
                        We do not sell your personal information. We may share your data with trusted third-party service providers
                        who assist us in operating our website, conducting our business, or serving our users, so long as those parties
                        agree to keep this information confidential.
                    </p>

                    <h3>4. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet
                        is 100% secure.
                    </p>

                    <h3>5. Your Rights</h3>
                    <p>
                        Depending on your location, you may have rights regarding your personal data, including the right to access,
                        correct, or delete your information. Please contact us if you wish to exercise these rights.
                    </p>

                    <h3>6. Updates to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                        Privacy Policy on this page and updating the "Last Updated" date.
                    </p>

                    <h3>7. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <br />
                        <a href={`mailto:${siteContent.brand.contactEmail}`} className="text-blue-400 hover:text-blue-300">
                            {siteContent.brand.contactEmail}
                        </a>
                    </p>
                </article>
            </main>

            <Footer />
        </div>
    )
}
