export default function Typography({
  children,
  variant,
  className,
}: {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}) {
  const variantClasses: Record<string, string> = {
    h1: "text-[58px] font-bold leading-[61.6px]",
    h2: "text-4xl font-bold leading-[52.8px]",
    h3: "text-2xl font-bold leading-[44px]",
    h4: "text-xl font-bold leading-[35.2px]",
    h5: "text-lg font-bold leading-[26.4px]",
    h6: "text-base font-semibold leading-[22px]",
  };

  switch (variant) {
    case "h1":
      return (
        <h1 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`${variantClasses[variant]} ${className}`}>
          {children}
        </h6>
      );
  }
}
