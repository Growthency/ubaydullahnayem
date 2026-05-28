import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/shared/SocialIcons";
import { site } from "@/lib/site";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="relative mt-20 bg-midnight text-paper/85 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(231, 199, 126, 0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(26, 124, 80, 0.4), transparent 40%)",
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />

      <div className="relative container-page py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-5">
            <Logo className="text-paper [&>span>span:first-child]:text-paper [&>span>span:last-child]:text-paper/60" />
            <p className="text-paper/70 leading-relaxed max-w-md">
              Classical Quranic sciences. Modern pedagogy. A generation rooted
              in deen and ready for the world it will lead.
            </p>
            <p className="font-bn text-paper/55 leading-relaxed max-w-md">
              শাস্ত্রীয় কুরআনিক শিক্ষা ও আধুনিক পদ্ধতির সমন্বয়ে দ্বীনে গভীর ও
              সমকালীন দায়িত্বে প্রস্তুত প্রজন্ম গড়ে তোলা।
            </p>
            <div className="flex items-center gap-3 mt-4">
              <SocialIcon href={site.socials.facebook} label="Facebook">
                <FacebookIcon size={16} />
              </SocialIcon>
              <SocialIcon href={site.socials.youtube} label="YouTube">
                <YoutubeIcon size={16} />
              </SocialIcon>
              <SocialIcon href={site.socials.instagram} label="Instagram">
                <InstagramIcon size={16} />
              </SocialIcon>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-display text-lg tracking-tight">Explore</h4>
            <ul className="flex flex-col gap-2 text-sm text-paper/70">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-gold-bright transition-colors link-sweep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-display text-lg tracking-tight">Visit</h4>
            <ul className="flex flex-col gap-3 text-sm text-paper/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`tel:${site.phone}`} className="hover:text-gold-bright">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-bright">
                  {site.email}
                </a>
              </li>
            </ul>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm text-gold-bright link-sweep self-start"
            >
              Connect on WhatsApp →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-paper/45">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Built with care from Jatrabari.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid place-items-center w-9 h-9 rounded-full border border-paper/20 hover:border-gold hover:text-gold-bright transition-colors"
    >
      {children}
    </a>
  );
}
