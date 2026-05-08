import { Divider } from "./Ornaments";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-20 md:pt-48 md:pb-28">
      <div className="container-luxe relative z-10 text-center">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display mt-8 text-5xl md:text-7xl lg:text-8xl text-cocoa leading-[0.95]">
          {title}
        </h1>
        <Divider className="my-10" />
        <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
