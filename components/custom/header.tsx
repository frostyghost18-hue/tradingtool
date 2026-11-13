'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { FocusScope } from '@radix-ui/react-focus-scope';
import { LogOut, Menu, Settings2, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Localize } from '@deriv-com/translations';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { formatBalance } from '@/lib/locale-format';
import { useAppTranslations } from '@/components/custom/i18n-provider';
import { LanguageSwitcher } from '@/components/custom/language-switcher';
import type { AuthState, DerivAccount } from '@deriv/core';

interface HeaderProps {
  authState: AuthState;
  accounts: DerivAccount[];
  activeAccount: DerivAccount | null;
  onLogin: () => Promise<void>;
  onLogout: () => void;
  onSwitchAccount: (accountId: string) => Promise<void>;
  /** When provided, a Sign up button is rendered to the right of the Log in button. */
  onSignUp?: () => Promise<void>;
  /** Logo source URL or data URL. When omitted, a placeholder badge is shown until
   *  the user provides a logo via the app builder (passed as a data URL via PREVIEW_BRANDING). */
  logoSrc?: string;
  /** App name used for the header text and the fallback logo letter when no logoSrc
   *  is provided. Prefers the live preview / Customise name, then
   *  NEXT_PUBLIC_DERIV_APP_NAME, then 'Pulse Factor'. */
  appName?: string;
}

function AccountLabel({ type }: { type: 'demo' | 'real' }) {
  return (
    <span
      className={cn(
        'text-sm font-medium whitespace-nowrap truncate',
        type === 'demo' ? 'text-orange-500' : 'text-emerald-600'
      )}
    >
      {type === 'demo' ? (
        <Localize i18n_default_text="Demo account" />
      ) : (
        <Localize i18n_default_text="Real account" />
      )}
    </span>
  );
}

function resolveHeaderAppName(appName?: string): string {
  const fromEnv = process.env.NEXT_PUBLIC_DERIV_APP_NAME?.trim();
  return appName?.trim() || fromEnv || 'Pulse Factor';
}

function AuthButtons({
  isAuthenticated,
  isAuthenticating,
  onLogin,
  onLogout,
  onSignUp,
}: {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  onLogin: () => Promise<void>;
  onLogout: () => void;
  onSignUp?: () => Promise<void>;
}) {
  if (isAuthenticated) {
    return (
      <Button variant="outline" size="sm" className="shrink-0" onClick={onLogout}>
        <Localize i18n_default_text="Log out" />
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="sm" onClick={onLogin} disabled={isAuthenticating}>
        {isAuthenticating ? (
          <Localize i18n_default_text="Logging in..." />
        ) : (
          <Localize i18n_default_text="Log in" />
        )}
      </Button>
      {onSignUp && (
        <Button size="sm" onClick={onSignUp} disabled={isAuthenticating}>
          <Localize i18n_default_text="Sign up" />
        </Button>
      )}
    </div>
  );
}

function preventDismissFromPopoverOrHeader(event: {
  preventDefault: () => void;
  target: EventTarget | null;
  detail?: { originalEvent?: Event };
}) {
  const node = event.detail?.originalEvent?.target ?? event.target;
  if (
    node instanceof Element &&
    node.closest('[data-radix-popper-content-wrapper], [data-radix-popover-content], header')
  ) {
    event.preventDefault();
  }
}

const APPEARANCE_OPTIONS = [
  { value: 'quantum-neon', label: 'Quantum Neon', swatch: 'linear-gradient(135deg, #080516, #cb47ff)' },
  { value: 'royal-gold', label: 'Royal Gold', swatch: 'linear-gradient(135deg, #0f0b07, #f5be42)' },
  { value: 'midnight-eclipse', label: 'Midnight Eclipse', swatch: 'linear-gradient(135deg, #050c19, #70baff)' },
  { value: 'crimson-storm', label: 'Crimson Storm', swatch: 'linear-gradient(135deg, #140509, #ff374a)' },
  { value: 'aurora-dream', label: 'Aurora Dream', swatch: 'linear-gradient(135deg, #07111f, #48dccd)' },
  { value: 'neon-samurai', label: 'Neon Samurai', swatch: 'linear-gradient(135deg, #100608, #ff3354)' },
  { value: 'ice-phantom', label: 'Ice Phantom', swatch: 'linear-gradient(135deg, #050f1b, #64cbff)' },
  { value: 'royal-galaxy', label: 'Royal Galaxy', swatch: 'linear-gradient(135deg, #0d071c, #b66eff)' },
  { value: 'cyber-matrix', label: 'Cyber Matrix', swatch: 'linear-gradient(135deg, #04120b, #33e87e)' },
] as const;

type AppearanceTheme = (typeof APPEARANCE_OPTIONS)[number]['value'];

function AppearanceLabel({ value }: { value: AppearanceTheme }) {
  const option = APPEARANCE_OPTIONS.find((item) => item.value === value) ?? APPEARANCE_OPTIONS[4];
  return <Localize i18n_default_text={option.label} />;
}

function AppearancePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const selected = APPEARANCE_OPTIONS.some((option) => option.value === theme)
    ? theme as AppearanceTheme
    : 'aurora-dream';

  const handleSelect = (value: AppearanceTheme) => {
    setTheme(value);
    setOpen(false);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">
        <Localize i18n_default_text="Appearance" />
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="relative w-full h-11 font-semibold justify-start text-left gap-1.5 px-3"
          >
            <span className="text-xs font-semibold tracking-wide">
              <AppearanceLabel value={selected} />
            </span>
            <svg
              className={cn(
                'h-3.5 w-3.5 text-muted-foreground transition-transform absolute right-3',
                open && 'rotate-180'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </PopoverTrigger>
        {/* Above edit-mode FixedZones (z-[60]); shared PopoverContent is z-50. */}
        <PopoverContent
          align="end"
          className="z-[100] w-[var(--radix-popover-trigger-width)] min-w-0 p-1"
        >
          <ul className="space-y-0.5">
            {APPEARANCE_OPTIONS.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  aria-pressed={option.value === selected}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors',
                    option.value === selected ? 'bg-muted font-medium' : 'hover:bg-muted/50'
                  )}
                >
                  <span
                    className="h-4 w-4 shrink-0 rounded-full border border-foreground/20"
                    style={{ background: option.swatch }}
                    aria-hidden="true"
                  />
                  <AppearanceLabel value={option.value} />
                </button>
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function MobileAuthButtons({
  isAuthenticated,
  isAuthenticating,
  onLogin,
  onLogout,
  onSignUp,
}: {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  onLogin: () => Promise<void>;
  onLogout: () => void;
  onSignUp?: () => Promise<void>;
}) {
  const className = 'w-full h-11 font-semibold';

  if (isAuthenticated) {
    return (
      <Button variant="outline" className={className} onClick={onLogout}>
        <LogOut className="h-4 w-4 mr-2" />
        <Localize i18n_default_text="Log out" />
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="outline"
        className={cn(className, 'bg-transparent hover:bg-transparent')}
        onClick={onLogin}
        disabled={isAuthenticating}
      >
        {isAuthenticating ? (
          <Localize i18n_default_text="Logging in..." />
        ) : (
          <Localize i18n_default_text="Log in" />
        )}
      </Button>
      {onSignUp && (
        <Button className={className} onClick={onSignUp} disabled={isAuthenticating}>
          <Localize i18n_default_text="Sign up" />
        </Button>
      )}
    </>
  );
}

export function Header({
  authState,
  accounts,
  activeAccount,
  onLogin,
  onLogout,
  onSwitchAccount,
  onSignUp,
  logoSrc,
  appName,
}: HeaderProps) {
  const { localize, locale } = useAppTranslations();
  const [logoError, setLogoError] = useState(false);
  const resolvedName = resolveHeaderAppName(appName);
  const logoLetter = resolvedName.charAt(0).toUpperCase() || 'D';
  const [accountSwitcherOpen, setAccountSwitcherOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [menuTop, setMenuTop] = useState(0);
  const isAuthenticated = authState === 'authenticated';
  const isAuthenticating = authState === 'authenticating';

  useLayoutEffect(() => {
    if (!mobileMenuOpen) return;
    const el = headerRef.current;
    const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 1024px)') : null;
    const sync = () => {
      setMenuTop(mq?.matches ? 0 : (el?.getBoundingClientRect().bottom ?? 0));
    };
    sync();
    window.addEventListener('resize', sync);
    mq?.addEventListener('change', sync);
    return () => {
      window.removeEventListener('resize', sync);
      mq?.removeEventListener('change', sync);
    };
  }, [mobileMenuOpen]);

  const headerBar = (
      <header ref={headerRef} className="sticky top-0 z-50 flex items-center justify-between border-b border-primary/30 bg-background/90 px-4 py-2.5 shadow-[0_1px_0_rgb(242_161_55/0.08)] backdrop-blur-sm sm:px-6">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <div className="brand-logo-mark flex shrink-0 items-center justify-center">
          {!logoSrc || logoError ? (
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary">
              {logoLetter}
            </span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- next/image is avoided here intentionally: it errors in the optimizer when /logo.png is absent locally; a plain img with onError gives the same silent fallback behaviour
            <img
              src={logoSrc}
              alt={localize('App Logo')}
              className="h-9 w-auto max-w-[96px] object-contain sm:h-12 sm:max-w-[140px]"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
        <h1 className="brand-name block min-w-0 max-w-[104px] truncate text-sm font-bold tracking-wide sm:max-w-none sm:text-lg">
          {resolvedName}
        </h1>
      </div>
      <div className="flex min-w-0 items-center gap-3">
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <DialogPrimitive.Trigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings2 className="h-4 w-4" />
              <Localize i18n_default_text="Settings" />
            </Button>
          </DialogPrimitive.Trigger>
        </div>
        {isAuthenticated && activeAccount && (
          <Popover open={accountSwitcherOpen} onOpenChange={setAccountSwitcherOpen}>
            <PopoverTrigger asChild>
              <button className="flex min-w-0 items-center gap-2 rounded-lg border border-border px-3 hover:bg-muted/50 transition-colors">
                <div className="min-w-0 text-left">
                  <AccountLabel type={activeAccount.account_type} />
                  <p className="text-base font-bold text-foreground whitespace-nowrap truncate">
                    {formatBalance(activeAccount.balance, locale)} {activeAccount.currency}
                  </p>
                </div>
                <svg
                  className={cn(
                    'w-4 h-4 text-muted-foreground transition-transform',
                    accountSwitcherOpen && 'rotate-180'
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="z-[100] w-64 p-2">
              <div className="space-y-1">
                {accounts.map((account) => (
                  <button
                    key={account.account_id}
                    onClick={() => {
                      onSwitchAccount(account.account_id);
                      setAccountSwitcherOpen(false);
                    }}
                    className={cn(
                      'w-full text-left rounded-lg px-3 py-2.5 transition-colors',
                      account.account_id === activeAccount.account_id
                        ? 'bg-muted'
                        : 'hover:bg-muted/50'
                    )}
                  >
                    <AccountLabel type={account.account_type} />
                    <p className="text-base font-bold text-foreground">
                      {formatBalance(account.balance, locale)} {account.currency}
                    </p>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <AuthButtons
            isAuthenticated={isAuthenticated}
            isAuthenticating={isAuthenticating}
            onLogin={onLogin}
            onLogout={onLogout}
            onSignUp={onSignUp}
          />
        </div>
        <DialogPrimitive.Trigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0"
            aria-label={localize('Your preferences')}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </DialogPrimitive.Trigger>
      </div>
      </header>
  );

  return (
    <DialogPrimitive.Root modal={false} open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      {/* modal=false keeps the header X and portaled popovers interactive */}
      {headerBar}
      {/* Portal to body: Content is position:fixed z-[100], but a class z-index is
          trapped in the edit-mode `sticky z-50` wrapper, so chart FixedZones at
          z-[60] still steal Appearance/Language clicks ("Gráfico · no editable"). */}
      <DialogPrimitive.Portal>
      <FocusScope loop trapped={mobileMenuOpen}>
      <DialogPrimitive.Content
        aria-modal="true"
        className="fixed inset-x-0 bottom-0 z-[100] flex flex-col bg-background outline-none lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[420px] lg:max-w-[100vw] lg:border-l lg:border-border lg:shadow-2xl"
        style={{ top: menuTop }}
        onPointerDownOutside={preventDismissFromPopoverOrHeader}
        onInteractOutside={preventDismissFromPopoverOrHeader}
        onFocusOutside={preventDismissFromPopoverOrHeader}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-6">
          <div className="flex items-start justify-between gap-4 text-left">
            <div className="space-y-2">
              <DialogPrimitive.Title className="text-lg font-semibold leading-none tracking-tight">
                <span className="lg:hidden">
                  <Localize i18n_default_text="Your preferences" />
                </span>
                <span className="hidden lg:inline">
                  <Localize i18n_default_text="Settings" />
                </span>
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-sm text-muted-foreground">
                <span className="lg:hidden">
                  <Localize i18n_default_text="A space that feels like you." />
                </span>
                <span className="hidden lg:inline">
                  <Localize i18n_default_text="Manage your appearance and language preferences." />
                </span>
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close asChild>
              <Button variant="ghost" size="icon" className="hidden shrink-0 lg:inline-flex" aria-label={localize('Close settings')}>
                <X className="h-4 w-4" />
              </Button>
            </DialogPrimitive.Close>
          </div>
          <AppearancePicker />
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">
              <Localize i18n_default_text="Language" />
            </p>
            <LanguageSwitcher className="w-full h-11 font-semibold" />
          </div>
          {isAuthenticated && (
            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">
                <Localize i18n_default_text="Trading" />
              </p>
              <Button asChild variant="outline" className="w-full justify-start">
                <Link href="/reports" onClick={() => setMobileMenuOpen(false)}>
                  <Localize i18n_default_text="View your positions →" />
                </Link>
              </Button>
            </div>
          )}
        </div>
        <div className="mt-auto px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-border">
          <MobileAuthButtons
            isAuthenticated={isAuthenticated}
            isAuthenticating={isAuthenticating}
            onLogin={onLogin}
            onLogout={() => {
              setMobileMenuOpen(false);
              onLogout();
            }}
            onSignUp={onSignUp}
          />
        </div>
      </DialogPrimitive.Content>
      </FocusScope>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
