import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/isabellazramos", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/isabella-ramos", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:isabellamenezesramos@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-bold tracking-tight">
            <span className="text-primary">&lt;</span>
            Isabella Ramos
            <span className="text-primary">/&gt;</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
