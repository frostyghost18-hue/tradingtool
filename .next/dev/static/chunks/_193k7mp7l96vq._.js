(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$live$2d$digits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/live-digits.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/app-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function DigitsPage() {
    _s();
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitsPage.useEffect": ()=>{
            let cancelled = false;
            const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BASE_PATH ?? '';
            fetch(`${base}/app-config.json`).then({
                "DigitsPage.useEffect": (response)=>response.ok ? response.json() : null
            }["DigitsPage.useEffect"]).then({
                "DigitsPage.useEffect": (data)=>{
                    if (!cancelled) setConfig(data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeAppConfig"])(data) : null);
                }
            }["DigitsPage.useEffect"]).catch({
                "DigitsPage.useEffect": ()=>{
                    if (!cancelled) setConfig(null);
                }
            }["DigitsPage.useEffect"]);
            return ({
                "DigitsPage.useEffect": ()=>{
                    cancelled = true;
                }
            })["DigitsPage.useEffect"];
        }
    }["DigitsPage.useEffect"], []);
    if (config === undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-dvh bg-background"
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 32,
        columnNumber: 36
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$live$2d$digits$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveDigits"], {
        appConfig: config ?? undefined
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_s(DigitsPage, "0CZYlEQiEontFHQCAsAQurOdlIs=");
_c = DigitsPage;
var _c;
__turbopack_context__.k.register(_c, "DigitsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/configurable-digits-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfigurableBuyButton",
    ()=>ConfigurableBuyButton,
    "ConfigurableDigitsControls",
    ()=>ConfigurableDigitsControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Config-driven Digits trade controls.
 *
 * Renders the SAME functional controls as the standard Digits app, but every
 * block (trade type, symbol picker, current tick, digit stats, contract mode,
 * stake, duration, prediction and buy) has 3 style variants, and the blocks
 * render in a configurable order. Fully functional (uses the real trading
 * handlers). Theme colour comes from the app's --primary (existing branding
 * pipeline), so `bg-primary` / `text-primary` pick it up automatically.
 *
 * HARD CONSTRAINT: every variant is composed ONLY from components the digits
 * template already uses — <Select>, <Input>, <Button>, <Label>, <ToggleGroup>,
 * <Skeleton>, the shared <TradeTypeChips> / <SymbolSelector>, and the template's
 * own <CurrentTickDisplay> / <DigitStatsBar>. No invented widgets.
 *
 * Used by the editor (/edit), preview (/preview) and the deployed app when a
 * DigitsAppConfig is present. The original DigitsView layout is untouched.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$line$2d$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/line-chart.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$rearrange$2d$drag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-rearrange-drag.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/trade-type-chips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/symbol-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scroll$2d$within$2d$frame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/scroll-within-frame.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/current-tick-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/digit-stats-bar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** Human labels shown on each draggable block in rearrange mode. */ function getBlockLabels(localize) {
    return {
        tradeType: localize('Trade type'),
        symbol: localize('Symbol picker'),
        tick: localize('Current tick'),
        digitStats: localize('Digit stats'),
        contractMode: localize('Contract mode'),
        stake: localize('Stake'),
        duration: localize('Duration'),
        prediction: localize('Prediction'),
        buy: localize('Buy button')
    };
}
function getDigitTradeTypeOptions(localize) {
    return [
        {
            value: 'matches-differs',
            label: localize('Differs')
        },
        {
            value: 'over-under',
            label: localize('Over/Under')
        },
        {
            value: 'even-odd',
            label: localize('Even/Odd')
        }
    ];
}
function getContractModeOptions(localize) {
    return {
        'matches-differs': [
            {
                value: 'DIGITDIFF',
                label: localize('Differs')
            }
        ],
        'over-under': [
            {
                value: 'DIGITOVER',
                label: localize('Over 1')
            },
            {
                value: 'DIGITUNDER',
                label: localize('Under 8')
            }
        ],
        'even-odd': [
            {
                value: 'DIGITEVEN',
                label: localize('Even')
            },
            {
                value: 'DIGITODD',
                label: localize('Odd')
            }
        ]
    };
}
function getPredictionText(contractMode, localize) {
    switch(contractMode){
        case 'DIGITMATCH':
            return localize('match');
        case 'DIGITDIFF':
            return localize('differ from');
        case 'DIGITOVER':
            return localize('be over');
        case 'DIGITUNDER':
            return localize('be under');
        case 'DIGITEVEN':
            return localize('be even');
        case 'DIGITODD':
            return localize('be odd');
    }
}
function showDigitInPrediction(contractMode) {
    return contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD';
}
function ConfigurableBuyButton({ variant, isConnected, onBuy, isBuying, autoTradingStatus = 'idle' }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const isAutoTrading = autoTradingStatus !== 'idle';
    const disabled = isAutoTrading ? autoTradingStatus === 'stopping' : !isConnected || isBuying;
    const label = autoTradingStatus === 'stopping' ? localize('Stopping...') : autoTradingStatus === 'scanning' ? localize('Stop scanning') : autoTradingStatus === 'running' ? localize('Stop auto-trading') : isBuying ? localize('Purchasing...') : localize('Scan & trade');
    const variants = {
        // a — pill (current)
        a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-12 w-full rounded-lg bg-[rgb(var(--buy-background))] px-6 font-bold text-[rgb(var(--buy-foreground))] shadow-[0_0_22px_rgb(0_195_144/0.18)] hover:brightness-110",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
        // Block — squared, bold.
        b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-14 w-full rounded-md bg-primary text-base font-bold text-primary-foreground hover:bg-primary/90",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
        // Gradient background.
        c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "h-14 w-full rounded-xl bg-gradient-to-r from-primary to-primary/70 font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90",
                disabled: disabled,
                onClick: onBuy,
                children: label
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
    };
    return (variants[variant] ?? variants.a)();
}
_s(ConfigurableBuyButton, "GKlYp1n2D1rKJ1qyS3m4eCzxgIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = ConfigurableBuyButton;
function ConfigurableDigitsControls(props) {
    _s1();
    const { config, compactMarketLayout = false, symbols, activeSymbol, selectSymbol, currentTick, lastDigit, digitStats, pipSize, tradeType, onTradeTypeChange, contractMode, onContractModeChange, selectedDigit, stake, onStakeChange, duration, onDurationChange, durationLimits, proposal, isProposalLoading, onBuy, isBuying, autoTradingStatus = 'idle', isConnected, editMode, onSelect, selectedKey, rearrangeMode, onReorder, pinBuy, keys } = props;
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const isAutoTrading = autoTradingStatus !== 'idle';
    const [durationDraft, setDurationDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(duration));
    const blockLabels = getBlockLabels(localize);
    const digitTradeTypeOptions = getDigitTradeTypeOptions(localize);
    const contractModeOptions = getContractModeOptions(localize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigurableDigitsControls.useEffect": ()=>{
            setDurationDraft(String(duration));
        }
    }["ConfigurableDigitsControls.useEffect"], [
        duration
    ]);
    const rearrange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$rearrange$2d$drag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRearrangeDrag"])(config.order, {
        "ConfigurableDigitsControls.useRearrangeDrag[rearrange]": (next)=>onReorder?.(next)
    }["ConfigurableDigitsControls.useRearrangeDrag[rearrange]"]);
    // Flash the draggable blocks once — the first time the layout is unlocked in
    // this session — so the user notices the components can be dragged.
    const [hasFlashed, setHasFlashed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigurableDigitsControls.useEffect": ()=>{
            if (!rearrangeMode || hasFlashed) return;
            const timer = window.setTimeout({
                "ConfigurableDigitsControls.useEffect.timer": ()=>setHasFlashed(true)
            }["ConfigurableDigitsControls.useEffect.timer"], 2000);
            return ({
                "ConfigurableDigitsControls.useEffect": ()=>window.clearTimeout(timer)
            })["ConfigurableDigitsControls.useEffect"];
        }
    }["ConfigurableDigitsControls.useEffect"], [
        rearrangeMode,
        hasFlashed
    ]);
    // Scroll the selected control into view within the editor's own scroll container in edit mode.
    const rowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfigurableDigitsControls.useEffect": ()=>{
            if (!editMode || !selectedKey) return;
            const el = rowRefs.current[selectedKey];
            if (el) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$scroll$2d$within$2d$frame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["centerInScrollContainer"])(el);
        }
    }["ConfigurableDigitsControls.useEffect"], [
        editMode,
        selectedKey
    ]);
    // ── Trade type (3 styles) ───────────────────────────────────────────────
    // Real control = TradeTypeChips. Each variant calls onTradeTypeChange (which
    // keeps the setTradeType behaviour — it resets contract mode upstream).
    const renderTradeType = ()=>{
        const variants = {
            // a — pill chips (current)
            a: ()=>// Rendered inside the controls card, so the edge fade is drawn in the
                // card colour rather than the page background.
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                    backdrop: "card",
                    value: tradeType,
                    options: digitTradeTypeOptions,
                    onValueChange: onTradeTypeChange,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this),
            // Segmented — <ToggleGroup> styled like a segmented control.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                    type: "single",
                    value: tradeType,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        const opt = digitTradeTypeOptions.find((option)=>option.value === value);
                        if (opt) onTradeTypeChange(opt.value);
                    },
                    className: "w-full gap-0 rounded-md bg-muted p-1",
                    children: digitTradeTypeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                            value: opt.value,
                            className: "flex-1 rounded text-xs font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-primary data-[state=on]:font-semibold data-[state=on]:shadow-sm hover:text-foreground",
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this),
            // Dropdown — <Select>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: tradeType,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        const opt = digitTradeTypeOptions.find((option)=>option.value === value);
                        if (opt) onTradeTypeChange(opt.value);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 365,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: digitTradeTypeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: opt.value,
                                    children: opt.label
                                }, opt.value, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 356,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.tradeType] ?? variants.a)();
    };
    // ── Symbol picker (3 styles) ────────────────────────────────────────────
    // Real control = SymbolSelector. Every variant still switches symbols.
    const renderSymbol = ()=>{
        const variants = {
            // a — full dropdown (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                    symbols: symbols,
                    activeSymbol: activeSymbol,
                    onSymbolChange: selectSymbol,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 386,
                    columnNumber: 9
                }, this),
            // Compact pill — a narrow <Select> trigger rounded into a pill.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: activeSymbol?.underlying_symbol ?? '',
                    onValueChange: selectSymbol,
                    disabled: isAutoTrading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "h-8 w-fit gap-1 rounded-full px-3 text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                placeholder: localize('Symbol')
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: renderSymbolGroups(symbols)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
            // Dropdown with a leading market (chart) icon.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: activeSymbol?.underlying_symbol ?? '',
                    onValueChange: selectSymbol,
                    disabled: isAutoTrading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                            className: "h-11 w-full gap-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$line$2d$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"], {
                                        className: "h-4 w-4 shrink-0 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                            placeholder: localize('Select a symbol')
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 420,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                            children: renderSymbolGroups(symbols)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.symbol] ?? variants.a)();
    };
    // ── Current tick (3 styles) ─────────────────────────────────────────────
    // Real control = CurrentTickDisplay. Same live tick data in every variant.
    const renderTick = ()=>{
        const priceStr = currentTick && activeSymbol ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTickPrice"])(currentTick.quote, pipSize, locale) : null;
        const priceWithoutLast = priceStr ? priceStr.slice(0, -1) : null;
        const lastDigitStr = priceStr ? priceStr.slice(-1) : null;
        const variants = {
            // a — large number (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                        tick: currentTick,
                        lastDigit: lastDigit,
                        activeSymbol: activeSymbol,
                        pipSize: pipSize,
                        compact: compactMarketLayout
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 444,
                    columnNumber: 9
                }, this),
            // Compact inline — price + last-digit badge on one line.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 py-2",
                    children: priceStr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-lg font-semibold text-foreground",
                                children: priceWithoutLast
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded bg-primary/15 px-1.5 py-0.5 font-mono text-base font-bold text-primary",
                                children: lastDigitStr
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 458,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-lg text-muted-foreground",
                        children: "---"
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 465,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
            // Last-digit badge emphasis.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-1 py-2",
                    children: priceStr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground",
                                children: lastDigit
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 474,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-xs text-muted-foreground",
                                children: priceStr
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 477,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 473,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-lg text-muted-foreground",
                        children: "---"
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 480,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-primary/25 bg-gradient-to-br from-background via-background to-accent/30 p-3 shadow-inner sm:p-4",
            children: compactMarketLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                tick: currentTick,
                lastDigit: lastDigit,
                activeSymbol: activeSymbol,
                pipSize: pipSize,
                compact: true
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 488,
                columnNumber: 11
            }, this) : (variants[config.styles.tick] ?? variants.a)()
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 486,
            columnNumber: 7
        }, this);
    };
    // ── Digit stats (3 styles) ──────────────────────────────────────────────
    // The selected barrier comes from the scanner; the displayed digits are not selectable.
    const renderDigitStats = (showInlineTick = false)=>{
        if (tradeType === 'even-odd') return null;
        const ranks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDigitPercentageRanks"])(digitStats.percentages);
        const inlineTick = showInlineTick ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
            tick: currentTick,
            lastDigit: lastDigit,
            activeSymbol: activeSymbol,
            pipSize: pipSize,
            inline: true
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 508,
            columnNumber: 7
        }, this) : null;
        const variants = {
            // a — bars (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                    digitStats: digitStats,
                    selectedDigit: selectedDigit,
                    lastDigit: lastDigit,
                    headerRight: inlineTick,
                    disabled: isAutoTrading
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 520,
                    columnNumber: 9
                }, this),
            // Compact grid of 0–9 digits, each with its percentage.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Last digit prediction"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 532,
                                    columnNumber: 13
                                }, this),
                                inlineTick
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-1.5",
                            children: digitStats.percentages.map((pct, digit)=>{
                                const isSelected = digit === selectedDigit;
                                const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
                                const isLiveDigit = digit === lastDigit;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pt-1.5 sm:pt-2",
                                    children: [
                                        isLiveDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-label": `Latest tick digit ${digit}`,
                                            className: "live-digit-pointer absolute left-1/2 top-[-0.45rem] z-10 -translate-x-1/2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▼"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 549,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 545,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: isSelected ? 'default' : 'outline',
                                            disabled: true,
                                            "data-digit": digit,
                                            "data-selected": isSelected,
                                            "data-rank": rank ?? 'none',
                                            "data-live-digit": isLiveDigit,
                                            className: "digit-tile flex h-12 w-full flex-col items-center justify-center gap-0 rounded-lg p-0 text-base font-bold shadow-sm disabled:opacity-100 sm:h-[4.5rem] sm:rounded-xl sm:text-xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-semibold leading-none",
                                                    children: digit
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-0.5 font-mono text-[10px] leading-none",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(pct, 1, locale)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 552,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, digit, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 543,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 537,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this),
            // Compact list — one row per digit with its percentage.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center justify-between gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Last digit prediction"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 577,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                inlineTick
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: digitStats.percentages.map((pct, digit)=>{
                                const isSelected = digit === selectedDigit;
                                const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
                                const isLiveDigit = digit === lastDigit;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: isSelected ? 'default' : 'outline',
                                    disabled: true,
                                    "data-digit": digit,
                                    "data-selected": isSelected,
                                    "data-rank": rank ?? 'none',
                                    "data-live-digit": isLiveDigit,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('digit-tile flex h-8 w-full items-center justify-between px-3 text-sm font-medium disabled:opacity-100', !isSelected && 'bg-muted/50 border-muted-foreground/20'),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                isLiveDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "live-digit-pointer",
                                                    "aria-hidden": "true",
                                                    children: "▼"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 37
                                                }, this),
                                                digit
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 600,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('font-mono text-xs', rank === 'highest' && 'font-bold text-emerald-300', rank === 'second-highest' && 'font-semibold text-blue-300', rank === 'lowest' && 'font-bold text-red-400', rank === 'second-lowest' && 'font-semibold text-amber-300'),
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(pct, 1, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 604,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, digit, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.digitStats] ?? variants.a)();
    };
    // ── Contract mode (3 styles) ────────────────────────────────────────────
    // Real control = ToggleGroup. Every variant keeps onContractModeChange.
    const renderContractMode = ()=>{
        const modeOptions = contractModeOptions[tradeType];
        const variants = {
            // a — segmented pill (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                    type: "single",
                    value: contractMode,
                    disabled: isAutoTrading,
                    onValueChange: (value)=>{
                        if (value) onContractModeChange(value);
                    },
                    className: "w-full gap-0 rounded-full bg-muted p-1",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                            value: opt.value,
                            className: "flex-1 rounded-full text-sm font-medium text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-primary data-[state=on]:font-bold data-[state=on]:shadow-sm hover:text-foreground",
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 633,
                    columnNumber: 9
                }, this),
            // Two solid <Button>s.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: contractMode === opt.value ? 'default' : 'secondary',
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-lg font-semibold', contractMode === opt.value && 'bg-primary text-primary-foreground'),
                            disabled: isAutoTrading,
                            onClick: ()=>onContractModeChange(opt.value),
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 657,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 655,
                    columnNumber: 9
                }, this),
            // Outline chips.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: modeOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: contractMode === opt.value ? 'default' : 'outline',
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 rounded-full', contractMode === opt.value && 'bg-primary text-primary-foreground'),
                            disabled: isAutoTrading,
                            onClick: ()=>onContractModeChange(opt.value),
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 676,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 674,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.contractMode] ?? variants.a)();
    };
    // ── Stake (3 styles) ────────────────────────────────────────────────────
    // Real control = USD <Input>.
    const renderStake = ()=>{
        const current = parseFloat(stake) || 0;
        const setStakeNum = (amount)=>onStakeChange(String(Math.max(0, amount)));
        const stakeInput = (extraClass)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: "stake",
                type: "number",
                value: stake,
                onChange: (event)=>onStakeChange(event.target.value),
                onKeyDown: (event)=>{
                    if ([
                        'e',
                        'E',
                        '+',
                        '-'
                    ].includes(event.key)) event.preventDefault();
                },
                min: 0,
                step: "0.01",
                labelRight: "USD",
                className: extraClass,
                disabled: isAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 701,
                columnNumber: 7
            }, this);
        const variants = {
            // a — plain <Input> (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 722,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, this),
                        stakeInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, this),
            // <Input> flanked by −/+ <Button> steppers.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 730,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setStakeNum(current - 1),
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 734,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: stakeInput('text-center')
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 735,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setStakeNum(current + 1),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 733,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 729,
                    columnNumber: 9
                }, this),
            // Preset chip <Button>s + <Input>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "stake",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Stake"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 744,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 743,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                '5',
                                '10',
                                '25',
                                '50'
                            ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: stake === preset ? 'default' : 'outline',
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1', stake === preset && 'bg-primary text-primary-foreground'),
                                    disabled: isAutoTrading,
                                    onClick: ()=>onStakeChange(preset),
                                    children: preset
                                }, preset, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 748,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 746,
                            columnNumber: 11
                        }, this),
                        stakeInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 742,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.stake] ?? variants.a)();
    };
    // ── Duration (3 styles) ─────────────────────────────────────────────────
    // Real control = ticks <Input>.
    const renderDuration = ()=>{
        const clamp = (amount)=>Math.min(durationLimits.max, Math.max(durationLimits.min, amount));
        const setDurationNum = (amount)=>onDurationChange(clamp(amount));
        const updateDurationDraft = (value)=>{
            setDurationDraft(value);
            const parsed = Number(value);
            if (value !== '' && Number.isInteger(parsed) && parsed >= durationLimits.min && parsed <= durationLimits.max) {
                onDurationChange(parsed);
            }
        };
        const commitDurationDraft = ()=>{
            const parsed = Number(durationDraft);
            const value = durationDraft.trim() !== '' && Number.isInteger(parsed) ? clamp(parsed) : duration;
            setDurationDraft(String(value));
            onDurationChange(value);
        };
        const durationInput = (extraClass)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: "duration",
                type: "number",
                value: durationDraft,
                onChange: (event)=>updateDurationDraft(event.target.value),
                onBlur: commitDurationDraft,
                onKeyDown: (event)=>{
                    if ([
                        'e',
                        'E',
                        '+',
                        '-'
                    ].includes(event.key)) event.preventDefault();
                },
                min: durationLimits.min,
                max: durationLimits.max,
                step: 1,
                labelRight: localize('Ticks'),
                className: extraClass,
                disabled: isAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 789,
                columnNumber: 7
            }, this);
        const variants = {
            // a — plain <Input> (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 811,
                            columnNumber: 11
                        }, this),
                        durationInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 810,
                    columnNumber: 9
                }, this),
            // <Input> flanked by −/+ <Button> steppers.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 821,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 820,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(duration - 1),
                                    children: "−"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: durationInput('text-center')
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 825,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    size: "icon",
                                    className: "shrink-0",
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(duration + 1),
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 826,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 819,
                    columnNumber: 9
                }, this),
            // Preset chip <Button>s (1/5/10) + <Input>.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "duration",
                            className: "text-xs text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 834,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 833,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                1,
                                5,
                                10
                            ].map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: duration === preset ? 'default' : 'outline',
                                    size: "sm",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1', duration === preset && 'bg-primary text-primary-foreground'),
                                    disabled: isAutoTrading,
                                    onClick: ()=>setDurationNum(preset),
                                    children: preset
                                }, preset, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 838,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 836,
                            columnNumber: 11
                        }, this),
                        durationInput()
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 832,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.duration] ?? variants.a)();
    };
    // ── Prediction + payout (3 styles) ──────────────────────────────────────
    // Real control = the bordered prediction box. Same data in every variant.
    const renderPrediction = ()=>{
        const predictionText = getPredictionText(contractMode, localize);
        const predictionBarrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
        const showDigit = showDigitInPrediction(contractMode) && predictionBarrier !== undefined;
        const awaitingDiffersScan = contractMode === 'DIGITDIFF' && predictionBarrier === undefined;
        const payoutEl = proposal || isProposalLoading ? isProposalLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
            className: "h-4 w-24"
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 867,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-bold text-foreground",
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(proposal.payout, locale),
                " USD"
            ]
        }, void 0, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 869,
            columnNumber: 11
        }, this) : null;
        const variants = {
            // a — bordered box (current)
            a: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-1.5 rounded-lg border border-border bg-muted/20 p-2 sm:space-y-2 sm:p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-0 text-[11px] text-muted-foreground sm:mb-1 sm:text-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Prediction"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 877,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-medium sm:text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Last digit of the price will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 882,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 884,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 895,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 894,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this),
                        (proposal || isProposalLoading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-t border-border pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Payout"
                                    }, void 0, false, {
                                        fileName: "[project]/components/configurable-digits-controls.tsx",
                                        lineNumber: 903,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 902,
                                    columnNumber: 15
                                }, this),
                                payoutEl
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 901,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 876,
                    columnNumber: 9
                }, this),
            // Inline one-line — prediction on the left, payout on the right.
            b: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 text-xs sm:text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Last digit will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 914,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 915,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 928,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 927,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 913,
                            columnNumber: 11
                        }, this),
                        payoutEl
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 912,
                    columnNumber: 9
                }, this),
            // Minimal — a full-width compact bar: prediction (digit) left, payout right.
            c: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full items-center justify-between gap-2 rounded-md bg-muted/40 px-3 py-2 text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Will"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 940,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary font-bold",
                                    children: predictionText
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 941,
                                    columnNumber: 13
                                }, this),
                                showDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground",
                                            children: predictionBarrier
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 945,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this),
                                awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Awaiting scan"
                                            }, void 0, false, {
                                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                                lineNumber: 954,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/configurable-digits-controls.tsx",
                                            lineNumber: 953,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 951,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 939,
                            columnNumber: 11
                        }, this),
                        payoutEl ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-muted-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Payout"
                            }, void 0, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 961,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 960,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 938,
                    columnNumber: 9
                }, this)
        };
        return (variants[config.styles.prediction] ?? variants.a)();
    };
    // ── Buy (3 styles, themed) ──────────────────────────────────────────────
    // Real control = the <Button>. Returns null when the Buy button is pinned:
    // the view renders it in the bottom bar, and every block loop below skips a
    // renderer that returns null.
    const renderBuy = ()=>pinBuy ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfigurableBuyButton, {
            variant: config.styles.buy,
            isConnected: isConnected,
            onBuy: onBuy,
            isBuying: isBuying,
            autoTradingStatus: props.autoTradingStatus
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 976,
            columnNumber: 7
        }, this);
    const renderers = {
        tradeType: renderTradeType,
        symbol: renderSymbol,
        tick: renderTick,
        digitStats: renderDigitStats,
        contractMode: renderContractMode,
        stake: renderStake,
        duration: renderDuration,
        prediction: renderPrediction,
        buy: renderBuy
    };
    // Filtering config.order (not iterating `keys`) keeps the configured
    // relative order authoritative inside a filtered column.
    const orderedKeys = keys ? config.order.filter((key)=>keys.includes(key)) : config.order;
    const marketSelectionKeys = orderedKeys.filter((key)=>key === 'tradeType' || key === 'contractMode');
    const renderMarketSelectionControls = ()=>marketSelectionKeys.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: renderers[key]()
            }, key, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1004,
                columnNumber: 38
            }, this));
    if (compactMarketLayout && !editMode && keys) {
        if (tradeType === 'even-odd') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full space-y-3",
                children: [
                    renderMarketSelectionControls(),
                    orderedKeys.filter((key)=>key === 'symbol').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: renderers[key]()
                        }, key, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1014,
                            columnNumber: 15
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-[240px]",
                        children: orderedKeys.filter((key)=>key === 'tick').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: renderers[key]()
                            }, key, false, {
                                fileName: "[project]/components/configurable-digits-controls.tsx",
                                lineNumber: 1020,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1016,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1009,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-3",
            children: [
                renderMarketSelectionControls(),
                orderedKeys.filter((key)=>key === 'symbol').map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: renderers[key]()
                    }, key, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1033,
                        columnNumber: 13
                    }, this)),
                orderedKeys.includes('digitStats') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: renderDigitStats(orderedKeys.includes('tick'))
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1036,
                    columnNumber: 11
                }, this),
                !orderedKeys.includes('digitStats') && orderedKeys.includes('tick') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: renderTick()
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1041,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1028,
            columnNumber: 7
        }, this);
    }
    if (editMode && rearrangeMode) {
        // Rearrange mode: every block is draggable. Inner content is inert so
        // dragging never triggers a control.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-2",
            children: orderedKeys.map((key)=>{
                const content = renderers[key]();
                if (content === null) return null;
                const dragging = rearrange.draggingKey === key;
                const over = rearrange.overKey === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ...rearrange.getItemProps(key),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group relative cursor-grab rounded-xl border-2 border-dashed bg-card/40 transition-all active:cursor-grabbing', !hasFlashed && 'nocode-drag-hint', 'border-border', !rearrange.isDragging && 'hover:border-primary/60 hover:bg-primary/5 hover:shadow-sm', over && 'border-primary bg-primary/10 ring-2 ring-primary/40', dragging && 'opacity-40'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute left-2 top-2 z-[70] flex items-center gap-1 rounded-md bg-background/90 px-1.5 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border transition-colors', !rearrange.isDragging && 'group-hover:text-primary group-hover:ring-primary/40', over && 'text-primary ring-primary/40'),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/configurable-digits-controls.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 17
                                }, this),
                                blockLabels[key]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1070,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-[60]"
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1080,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            inert: editMode || undefined,
                            className: "pointer-events-none select-none px-2 pb-2 pt-9",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1081,
                            columnNumber: 15
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1058,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1051,
            columnNumber: 7
        }, this);
    }
    if (editMode) {
        // Each block is selectable: clicking opens its accordion in the dashboard.
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full space-y-3",
            children: orderedKeys.map((key)=>{
                const content = renderers[key]();
                if (content === null) return null;
                const selected = selectedKey === key;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    ref: (el)=>{
                        rowRefs.current[key] = el;
                    },
                    onClick: ()=>onSelect?.(key),
                    className: [
                        'group relative block w-full rounded-xl border-2 bg-background p-3 text-left shadow-sm transition-colors',
                        selected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/60'
                    ].join(' '),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: [
                                'pointer-events-none absolute inset-0 z-10 rounded-xl bg-primary/10 transition-opacity',
                                selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            ].join(' ')
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            inert: editMode || undefined,
                            className: "pointer-events-none",
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/components/configurable-digits-controls.tsx",
                            lineNumber: 1128,
                            columnNumber: 15
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1103,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1097,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-3 lg:space-y-4",
        children: orderedKeys.map((key)=>{
            const content = renderers[key]();
            if (content === null) return null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: content
            }, key, false, {
                fileName: "[project]/components/configurable-digits-controls.tsx",
                lineNumber: 1143,
                columnNumber: 16
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/configurable-digits-controls.tsx",
        lineNumber: 1139,
        columnNumber: 5
    }, this);
}
_s1(ConfigurableDigitsControls, "Qk7rMS69kL9X6bNGJN7/Ddl91ZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$rearrange$2d$drag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRearrangeDrag"]
    ];
});
_c1 = ConfigurableDigitsControls;
/** Shared submarket-grouped <SelectItem>s for the symbol-picker variants. */ function renderSymbolGroups(symbols) {
    const groups = new Map();
    for (const symbol of symbols){
        const key = symbol.submarket;
        const existing = groups.get(key);
        if (existing) {
            existing.symbols.push(symbol);
        } else {
            groups.set(key, {
                displayName: symbol.submarket_display_name ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubmarketDisplayName"])(symbol.submarket),
                symbols: [
                    symbol
                ]
            });
        }
    }
    return Array.from(groups.entries()).map(([submarket, { displayName, symbols: group }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroup"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectLabel"], {
                    children: displayName
                }, void 0, false, {
                    fileName: "[project]/components/configurable-digits-controls.tsx",
                    lineNumber: 1166,
                    columnNumber: 7
                }, this),
                group.map((symbol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: symbol.underlying_symbol,
                        children: symbol.underlying_symbol_name
                    }, symbol.underlying_symbol, false, {
                        fileName: "[project]/components/configurable-digits-controls.tsx",
                        lineNumber: 1168,
                        columnNumber: 9
                    }, this))
            ]
        }, submarket, true, {
            fileName: "[project]/components/configurable-digits-controls.tsx",
            lineNumber: 1165,
            columnNumber: 5
        }, this));
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ConfigurableBuyButton");
__turbopack_context__.k.register(_c1, "ConfigurableDigitsControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/current-tick-display.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrentTickDisplay",
    ()=>CurrentTickDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CurrentTickDisplay({ tick, lastDigit, activeSymbol, pipSize, compact = false, inline = false }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    if (!tick || !activeSymbol) {
        if (inline) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] font-semibold uppercase tracking-wide text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Live price"
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[11px] font-bold tabular-nums text-muted-foreground sm:text-xs",
                        children: "---"
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/current-tick-display.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `text-center ${compact ? 'py-2' : 'py-3 sm:py-6'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl sm:text-2xl font-mono text-muted-foreground",
                children: "---"
            }, void 0, false, {
                fileName: "[project]/components/current-tick-display.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/current-tick-display.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this);
    }
    const priceStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTickPrice"])(tick.quote, pipSize, locale);
    const priceWithoutLast = priceStr.slice(0, -1);
    const lastDigitStr = priceStr.slice(-1);
    if (inline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-right",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[8px] font-semibold uppercase tracking-wide text-muted-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                        i18n_default_text: "Live price"
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/current-tick-display.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono text-[11px] font-bold tabular-nums text-foreground sm:text-xs",
                    children: [
                        priceWithoutLast,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-px text-[28px] font-bold leading-none text-primary sm:text-[32px]",
                            children: lastDigitStr
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/current-tick-display.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/current-tick-display.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-16 w-full items-center justify-between gap-3 rounded-lg border border-border/80 bg-background/70 p-3 text-left sm:min-h-40 sm:flex-col sm:justify-center sm:gap-0 sm:p-3 sm:text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Live price"
                            }, void 0, false, {
                                fileName: "[project]/components/current-tick-display.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1 break-all font-mono text-sm font-bold tabular-nums text-foreground sm:mt-2 sm:text-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: priceWithoutLast
                                }, void 0, false, {
                                    fileName: "[project]/components/current-tick-display.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-px text-4xl font-bold leading-none text-primary sm:text-5xl",
                                    children: lastDigitStr
                                }, void 0, false, {
                                    fileName: "[project]/components/current-tick-display.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/current-tick-display.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex shrink-0 items-center gap-1.5 text-[10px] text-muted-foreground sm:mt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Last digit"
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-5 min-w-5 items-center justify-center rounded bg-primary px-1 font-bold text-primary-foreground",
                            children: lastDigit
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/current-tick-display.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/current-tick-display.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center py-2 sm:py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground",
                        children: priceWithoutLast
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-primary text-3xl sm:text-5xl lg:text-6xl",
                        children: lastDigitStr
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/current-tick-display.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 sm:mt-2 inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Last Digit:"
                        }, void 0, false, {
                            fileName: "[project]/components/current-tick-display.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold",
                        children: lastDigit
                    }, void 0, false, {
                        fileName: "[project]/components/current-tick-display.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/current-tick-display.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/current-tick-display.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(CurrentTickDisplay, "B/WxtxKOkCKuDYNu250svy3IR0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = CurrentTickDisplay;
var _c;
__turbopack_context__.k.register(_c, "CurrentTickDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer,
    "FooterBar",
    ()=>FooterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
'use client';
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "w-full py-1 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs tracking-wide text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Powered by"
                }, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                        i18n_default_text: "dbotpulse.site"
                    }, void 0, false, {
                        fileName: "[project]/components/custom/footer.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
function FooterBar({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shrink-0 border-t border-border bg-background",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                    fileName: "[project]/components/custom/footer.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/footer.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = FooterBar;
var _c, _c1;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "FooterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/language-switcher.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function AccountLabel({ type }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-sm font-medium whitespace-nowrap truncate', type === 'demo' ? 'text-orange-500' : 'text-emerald-600'),
        children: type === 'demo' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
            i18n_default_text: "Demo account"
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
            i18n_default_text: "Real account"
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = AccountLabel;
function resolveHeaderAppName(appName) {
    const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DERIV_APP_NAME?.trim();
    return appName?.trim() || fromEnv || 'Pulse Factor';
}
function AuthButtons({ isAuthenticated, isAuthenticating, onLogin, onLogout, onSignUp }) {
    if (isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "shrink-0",
            onClick: onLogout,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                i18n_default_text: "Log out"
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                size: "sm",
                onClick: onLogin,
                disabled: isAuthenticating,
                children: isAuthenticating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Logging in..."
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            onSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                onClick: onSignUp,
                disabled: isAuthenticating,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Sign up"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_c1 = AuthButtons;
function preventDismissFromPopoverOrHeader(event) {
    const node = event.detail?.originalEvent?.target ?? event.target;
    if (node instanceof Element && node.closest('[data-radix-popper-content-wrapper], [data-radix-popover-content], header')) {
        event.preventDefault();
    }
}
const APPEARANCE_OPTIONS = [
    {
        value: 'quantum-neon',
        label: 'Quantum Neon',
        swatch: 'linear-gradient(135deg, #080516, #cb47ff)'
    },
    {
        value: 'royal-gold',
        label: 'Royal Gold',
        swatch: 'linear-gradient(135deg, #0f0b07, #f5be42)'
    },
    {
        value: 'midnight-eclipse',
        label: 'Midnight Eclipse',
        swatch: 'linear-gradient(135deg, #050c19, #70baff)'
    },
    {
        value: 'crimson-storm',
        label: 'Crimson Storm',
        swatch: 'linear-gradient(135deg, #140509, #ff374a)'
    },
    {
        value: 'aurora-dream',
        label: 'Aurora Dream',
        swatch: 'linear-gradient(135deg, #07111f, #48dccd)'
    },
    {
        value: 'neon-samurai',
        label: 'Neon Samurai',
        swatch: 'linear-gradient(135deg, #100608, #ff3354)'
    },
    {
        value: 'ice-phantom',
        label: 'Ice Phantom',
        swatch: 'linear-gradient(135deg, #050f1b, #64cbff)'
    },
    {
        value: 'royal-galaxy',
        label: 'Royal Galaxy',
        swatch: 'linear-gradient(135deg, #0d071c, #b66eff)'
    },
    {
        value: 'cyber-matrix',
        label: 'Cyber Matrix',
        swatch: 'linear-gradient(135deg, #04120b, #33e87e)'
    }
];
function AppearanceLabel({ value }) {
    const option = APPEARANCE_OPTIONS.find((item)=>item.value === value) ?? APPEARANCE_OPTIONS[4];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
        i18n_default_text: option.label
    }, void 0, false, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 127,
        columnNumber: 10
    }, this);
}
_c2 = AppearanceLabel;
function AppearancePicker() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const selected = APPEARANCE_OPTIONS.some((option)=>option.value === theme) ? theme : 'aurora-dream';
    const handleSelect = (value)=>{
        setTheme(value);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Appearance"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                open: open,
                onOpenChange: setOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "relative w-full h-11 font-semibold justify-start text-left gap-1.5 px-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold tracking-wide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearanceLabel, {
                                        value: selected
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-3.5 w-3.5 text-muted-foreground transition-transform absolute right-3', open && 'rotate-180'),
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: 2,
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19 9l-7 7-7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                        align: "end",
                        className: "z-[100] w-[var(--radix-popover-trigger-width)] min-w-0 p-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-0.5",
                            children: APPEARANCE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": option.value === selected,
                                        onClick: ()=>handleSelect(option.value),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors', option.value === selected ? 'bg-muted font-medium' : 'hover:bg-muted/50'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-4 w-4 shrink-0 rounded-full border border-foreground/20",
                                                style: {
                                                    background: option.swatch
                                                },
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearanceLabel, {
                                                value: option.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                }, option.value, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(AppearancePicker, "NSkGxIqsSjVLN/G+HkyyETkOHAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = AppearancePicker;
function MobileAuthButtons({ isAuthenticated, isAuthenticating, onLogin, onLogout, onSignUp }) {
    const className = 'w-full h-11 font-semibold';
    if (isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            className: className,
            onClick: onLogout,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                    className: "h-4 w-4 mr-2"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log out"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/header.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className, 'bg-transparent hover:bg-transparent'),
                onClick: onLogin,
                disabled: isAuthenticating,
                children: isAuthenticating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Logging in..."
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 238,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 240,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            onSignUp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: className,
                onClick: onSignUp,
                disabled: isAuthenticating,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Sign up"
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c4 = MobileAuthButtons;
function Header({ authState, accounts, activeAccount, onLogin, onLogout, onSwitchAccount, onSignUp, logoSrc, appName }) {
    _s1();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [logoError, setLogoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolvedName = resolveHeaderAppName(appName);
    const logoLetter = resolvedName.charAt(0).toUpperCase() || 'D';
    const [accountSwitcherOpen, setAccountSwitcherOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menuTop, setMenuTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isAuthenticated = authState === 'authenticated';
    const isAuthenticating = authState === 'authenticating';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Header.useLayoutEffect": ()=>{
            if (!mobileMenuOpen) return;
            const el = headerRef.current;
            const mq = typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 1024px)') : null;
            const sync = {
                "Header.useLayoutEffect.sync": ()=>{
                    setMenuTop(mq?.matches ? 0 : el?.getBoundingClientRect().bottom ?? 0);
                }
            }["Header.useLayoutEffect.sync"];
            sync();
            window.addEventListener('resize', sync);
            mq?.addEventListener('change', sync);
            return ({
                "Header.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', sync);
                    mq?.removeEventListener('change', sync);
                }
            })["Header.useLayoutEffect"];
        }
    }["Header.useLayoutEffect"], [
        mobileMenuOpen
    ]);
    const headerBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: headerRef,
        className: "sticky top-0 z-50 flex items-center justify-between border-b border-primary/30 bg-background/90 px-4 py-2.5 shadow-[0_1px_0_rgb(242_161_55/0.08)] backdrop-blur-sm sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-2 sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand-logo-mark flex shrink-0 items-center justify-center",
                        children: !logoSrc || logoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-sm font-bold text-primary",
                            children: logoLetter
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this) : // eslint-disable-next-line @next/next/no-img-element -- next/image is avoided here intentionally: it errors in the optimizer when /logo.png is absent locally; a plain img with onError gives the same silent fallback behaviour
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: logoSrc,
                            alt: localize('App Logo'),
                            className: "h-9 w-auto max-w-[96px] object-contain sm:h-12 sm:max-w-[140px]",
                            onError: ()=>setLogoError(true)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "brand-name block min-w-0 max-w-[104px] truncate text-sm font-bold tracking-wide sm:max-w-none sm:text-lg",
                        children: resolvedName
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    isAuthenticated && activeAccount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        open: accountSwitcherOpen,
                        onOpenChange: setAccountSwitcherOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex min-w-0 items-center gap-2 rounded-lg border border-border px-3 hover:bg-muted/50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountLabel, {
                                                    type: activeAccount.account_type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-bold text-foreground whitespace-nowrap truncate",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBalance"])(activeAccount.balance, locale),
                                                        " ",
                                                        activeAccount.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-4 h-4 text-muted-foreground transition-transform', accountSwitcherOpen && 'rotate-180'),
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M19 9l-7 7-7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                                align: "end",
                                className: "z-[100] w-64 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                onSwitchAccount(account.account_id);
                                                setAccountSwitcherOpen(false);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full text-left rounded-lg px-3 py-2.5 transition-colors', account.account_id === activeAccount.account_id ? 'bg-muted' : 'hover:bg-muted/50'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccountLabel, {
                                                    type: account.account_type
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 361,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-bold text-foreground",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBalance"])(account.balance, locale),
                                                        " ",
                                                        account.currency
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, account.account_id, true, {
                                            fileName: "[project]/components/custom/header.tsx",
                                            lineNumber: 348,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-3 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthButtons, {
                            isAuthenticated: isAuthenticated,
                            isAuthenticating: isAuthenticating,
                            onLogin: onLogin,
                            onLogout: onLogout,
                            onSignUp: onSignUp
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "lg:hidden shrink-0",
                            "aria-label": localize('Your preferences'),
                            children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 387,
                                columnNumber: 31
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 387,
                                columnNumber: 59
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/header.tsx",
                            lineNumber: 381,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 291,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        modal: false,
        open: mobileMenuOpen,
        onOpenChange: setMobileMenuOpen,
        children: [
            headerBar,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
                    loop: true,
                    trapped: mobileMenuOpen,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        "aria-modal": "true",
                        className: "fixed inset-x-0 bottom-0 z-[100] flex flex-col bg-background outline-none lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[420px] lg:max-w-[100vw] lg:border-l lg:border-border lg:shadow-2xl",
                        style: {
                            top: menuTop
                        },
                        onPointerDownOutside: preventDismissFromPopoverOrHeader,
                        onInteractOutside: preventDismissFromPopoverOrHeader,
                        onFocusOutside: preventDismissFromPopoverOrHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto px-6 pt-4 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4 text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                                        className: "text-lg font-semibold leading-none tracking-tight",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "lg:hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                    i18n_default_text: "Your preferences"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/custom/header.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/custom/header.tsx",
                                                                lineNumber: 415,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden lg:inline",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                    i18n_default_text: "Settings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/custom/header.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/custom/header.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "lg:hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                    i18n_default_text: "A space that feels like you."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/custom/header.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/custom/header.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden lg:inline",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                    i18n_default_text: "Manage your appearance and language preferences."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/custom/header.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 19
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/custom/header.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 413,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "hidden shrink-0 lg:inline-flex",
                                                    "aria-label": localize('Close settings'),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 431,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 412,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppearancePicker, {}, void 0, false, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 437,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Language"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 440,
                                                    columnNumber: 15
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 439,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {
                                                className: "w-full h-11 font-semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 442,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 438,
                                        columnNumber: 11
                                    }, this),
                                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Trading"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 446,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                asChild: true,
                                                variant: "outline",
                                                className: "w-full justify-start",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/reports",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "View your positions →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/header.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/header.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/header.tsx",
                                                lineNumber: 449,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/header.tsx",
                                        lineNumber: 445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 411,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileAuthButtons, {
                                    isAuthenticated: isAuthenticated,
                                    isAuthenticating: isAuthenticating,
                                    onLogin: onLogin,
                                    onLogout: ()=>{
                                        setMobileMenuOpen(false);
                                        onLogout();
                                    },
                                    onSignUp: onSignUp
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/header.tsx",
                                    lineNumber: 458,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/header.tsx",
                                lineNumber: 457,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/header.tsx",
                        lineNumber: 403,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/custom/header.tsx",
                    lineNumber: 402,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/header.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/header.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s1(Header, "qMqGGTK5I7Tc1eMeQarWIyDVYuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c5 = Header;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "AccountLabel");
__turbopack_context__.k.register(_c1, "AuthButtons");
__turbopack_context__.k.register(_c2, "AppearanceLabel");
__turbopack_context__.k.register(_c3, "AppearancePicker");
__turbopack_context__.k.register(_c4, "MobileAuthButtons");
__turbopack_context__.k.register(_c5, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/popover.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function LanguageSwitcher({ className }) {
    _s();
    const { currentLang, switchLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFullWidth = /\bw-full\b/.test(className ?? '') && /\bh-11\b/.test(className ?? '');
    const handleSelect = (lang)=>{
        switchLanguage(lang);
        setOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    size: "sm",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isFullWidth ? 'relative justify-start text-left gap-1.5 px-3' : 'min-w-[4.5rem] justify-between gap-1.5 px-2.5', className),
                    "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][currentLang],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold tracking-wide",
                            children: currentLang
                        }, void 0, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-3.5 w-3.5 text-muted-foreground transition-transform', isFullWidth && 'absolute right-3', open && 'rotate-180'),
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: 2,
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M19 9l-7 7-7-7"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/language-switcher.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/language-switcher.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/language-switcher.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$popover$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                align: "end",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('z-[100] p-1', isFullWidth ? 'w-[var(--radix-popover-trigger-width)] min-w-0' : 'w-44'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-0.5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGUAGES"].map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelect(lang),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors', lang === currentLang ? 'bg-muted font-medium' : 'hover:bg-muted/50'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_LABELS"][lang]
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/language-switcher.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted-foreground",
                                        children: lang
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/language-switcher.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/language-switcher.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        }, lang, false, {
                            fileName: "[project]/components/custom/language-switcher.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/custom/language-switcher.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/language-switcher.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/language-switcher.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "E51Wx9mr7X7Q3OaWcYUXqEoXXSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/login-prompt-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPromptDialog",
    ()=>LoginPromptDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-is-mobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/drawer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function LoginPromptActions({ onClose, onLogin, onSignUp }) {
    _s();
    // One handoff per mount: Radix/vaul keep the closing CTAs clickable through
    // animate-out, and a second activation would rebuild the PKCE verifier/state
    // the first OAuth URL was minted with. The ref resets when the prompt
    // reopens (the content unmounts on close), so a failed handoff is retryable
    // by reopening — no module state, no listeners.
    const startedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const start = (action)=>{
        onClose();
        if (startedRef.current) return;
        startedRef.current = true;
        action();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "w-full",
                onClick: ()=>start(onSignUp),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Create free account"
                }, void 0, false, {
                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "outline",
                className: "w-full",
                onClick: ()=>start(onLogin),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Log in"
                }, void 0, false, {
                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/login-prompt-dialog.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(LoginPromptActions, "X4MTW+Z6iaac/kSdMnumEXKXhqI=");
_c = LoginPromptActions;
function LoginPromptDialog({ open, onOpenChange, onLogin, onSignUp }) {
    _s1();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const close = ()=>onOpenChange(false);
    // Resolve affiliate attribution while the user reads the prompt: the Scaleo
    // lookup is what made login()/signUp() await a network round-trip inside
    // the CTA click, and prefetching it here restores Trader's synchronous
    // click-path shape (its getAuthConfig has no network step at all).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPromptDialog.useEffect": ()=>{
            if (open) (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefetchAuthReferral"])();
        }
    }["LoginPromptDialog.useEffect"], [
        open
    ]);
    if (isMobile) {
        return(// No background scaling: the sheet overlays a live chart canvas, which
        // should not shrink behind the overlay.
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"], {
            open: open,
            onOpenChange: onOpenChange,
            shouldScaleBackground: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerHeader"], {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerTitle"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Start trading with us"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerDescription"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Log in or create a free account to place a trade."
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginPromptActions, {
                            onClose: close,
                            onLogin: onLogin,
                            onSignUp: onSignUp
                        }, void 0, false, {
                            fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/custom/login-prompt-dialog.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Start trading with us"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Log in or create a free account to place a trade."
                            }, void 0, false, {
                                fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginPromptActions, {
                        onClose: close,
                        onLogin: onLogin,
                        onSignUp: onSignUp
                    }, void 0, false, {
                        fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/custom/login-prompt-dialog.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/login-prompt-dialog.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/login-prompt-dialog.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s1(LoginPromptDialog, "Cl6y/BbPdUpienV0Kb+jkviE5NE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"]
    ];
});
_c1 = LoginPromptDialog;
var _c, _c1;
__turbopack_context__.k.register(_c, "LoginPromptActions");
__turbopack_context__.k.register(_c1, "LoginPromptDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/market-scanner-notification.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarketScannerNotification",
    ()=>MarketScannerNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radar.js [app-client] (ecmascript) <export default as Radar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MarketScannerNotification({ progress, status, onStop }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    if (!progress) return null;
    const isSelected = progress.phase === 'selected';
    const progressPercent = progress.totalMarkets > 0 ? Math.min(100, progress.scannedMarkets / progress.totalMarkets * 100) : 0;
    const statusText = isSelected ? localize('MARKET SELECTED') : localize('SCANNING LIVE');
    const prediction = progress.prediction;
    const predictionContractLabel = (()=>{
        switch(prediction?.contractMode){
            case 'DIGITDIFF':
                return localize('Differs');
            case 'DIGITOVER':
                return localize('Over 1');
            case 'DIGITUNDER':
                return localize('Under 8');
            case 'DIGITEVEN':
                return localize('Even');
            case 'DIGITODD':
                return localize('Odd');
            default:
                return null;
        }
    })();
    const description = isSelected ? localize('Starting the first trade now.') : progress.countdownSeconds === 0 && progress.scannedMarkets < progress.totalMarkets ? localize('Finishing market checks before selecting.') : progress.countdownSeconds === 0 ? localize('Selecting the highest-qualified market.') : progress.scannedMarkets === progress.totalMarkets ? localize('Markets checked. Waiting for the scan timer.') : localize('Checking recent tick history across open markets.');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-[80] flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            "aria-label": localize('Market scanner progress'),
            className: "market-scanner-card pointer-events-auto max-h-[calc(100dvh-2rem)] w-full max-w-sm overflow-y-auto rounded-2xl border border-primary/45 bg-card/95 p-4 text-foreground shadow-2xl backdrop-blur-xl sm:p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/35 bg-primary/10 text-primary",
                                    children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radar$3e$__["Radar"], {
                                        className: "market-scan-spinner h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-extrabold tracking-wide",
                                            children: localize('Pulse Factor Scanner')
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary",
                                            children: statusText
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 75,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "shrink-0 rounded-full border border-primary/25 bg-primary/10 px-2 py-1 text-[10px] font-bold tabular-nums text-primary",
                            children: localize('Scan {{number}}', {
                                number: progress.scanNumber
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "timer",
                            "aria-label": localize('{{seconds}} seconds remaining', {
                                seconds: progress.countdownSeconds
                            }),
                            className: "flex h-[4.25rem] w-[4.25rem] shrink-0 flex-col items-center justify-center rounded-full border-2 border-primary/45 bg-primary/5 shadow-[0_0_20px_rgb(var(--primary)/0.16)]",
                            children: [
                                isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "h-7 w-7 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-3xl font-black tabular-nums text-primary",
                                    children: String(progress.countdownSeconds).padStart(2, '0')
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-bold uppercase tracking-widest text-muted-foreground",
                                    children: localize('Seconds')
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0 flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 text-xs font-bold text-foreground",
                                    children: [
                                        !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "h-3.5 w-3.5 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 108,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-live": "polite",
                                            "aria-atomic": "true",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] text-muted-foreground",
                                    children: localize('{{scanned}} of {{total}} open markets checked', {
                                        scanned: progress.scannedMarkets,
                                        total: progress.totalMarkets
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                progress.skippedNoReturnMarkets > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] font-medium text-amber-600 dark:text-amber-400",
                                    children: localize('{{count}} no-return setups skipped', {
                                        count: progress.skippedNoReturnMarkets
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                progress.skippedNegativeEvSetups > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11px] font-medium text-amber-600 dark:text-amber-400",
                                    children: localize('{{count}} negative expected-value setups skipped', {
                                        count: progress.skippedNegativeEvSetups
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 h-1.5 overflow-hidden rounded-full bg-muted",
                                    role: "progressbar",
                                    "aria-label": localize('Markets scanned'),
                                    "aria-valuemin": 0,
                                    "aria-valuemax": Math.max(1, progress.totalMarkets),
                                    "aria-valuenow": progress.scannedMarkets,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-full bg-primary transition-[width] duration-300 ease-out",
                                        style: {
                                            width: `${progressPercent}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                prediction ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 space-y-2 rounded-xl border border-primary/25 bg-primary/5 px-3 py-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-bold uppercase tracking-widest text-muted-foreground",
                                            children: localize('Scan {{number}} model forecast', {
                                                number: prediction.scanNumber
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "truncate text-sm font-bold",
                                            title: prediction.market,
                                            children: [
                                                prediction.market,
                                                " · ",
                                                predictionContractLabel,
                                                prediction.barrier !== null ? ` ${prediction.barrier}` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-sm font-bold text-primary",
                                            children: [
                                                (prediction.predictedWinRate * 100).toFixed(1),
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-medium text-muted-foreground",
                                            children: localize('Blended estimate')
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1 border-t border-border/70 pt-2",
                            children: [
                                [
                                    'sequence',
                                    localize('Sequence')
                                ],
                                [
                                    'analogy',
                                    localize('Analogs')
                                ],
                                [
                                    'cluster',
                                    localize('Clusters')
                                ]
                            ].map(([key, label])=>{
                                const signal = prediction.predictionModels[key];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-bold uppercase tracking-wide text-muted-foreground",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-mono text-[11px] font-semibold text-foreground",
                                            children: signal ? `${(signal.winRate * 100).toFixed(1)}%` : '—'
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 182,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8px] text-muted-foreground",
                                            children: signal ? localize('{{count}} matches', {
                                                count: signal.matches
                                            }) : localize('insufficient matches')
                                        }, void 0, false, {
                                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                            lineNumber: 185,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, key, true, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 178,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 text-[9px] text-muted-foreground",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: localize('{{ticks}} recent ticks · conservative {{rate}}%', {
                                        ticks: prediction.sampleCount,
                                        rate: (prediction.estimatedWinRate * 100).toFixed(1)
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: prediction.eligibleForTrading ? 'text-emerald-500' : 'text-amber-500',
                                    children: prediction.eligibleForTrading ? localize('Passes historical screen') : localize('Forecast only')
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 194,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] leading-relaxed text-muted-foreground",
                            children: localize('These experimental estimates use past ticks and do not guarantee future results. Quotes are checked before any trade.')
                        }, void 0, false, {
                            fileName: "[project]/components/custom/market-scanner-notification.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 rounded-xl border border-border bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground",
                    children: localize('No usable tick history yet; a forecast is unavailable for this scan.')
                }, void 0, false, {
                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                    lineNumber: 212,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "button",
                    size: "sm",
                    variant: "outline",
                    className: "mt-3 h-8 w-full border-destructive/40 text-destructive hover:bg-destructive/10",
                    onClick: onStop,
                    disabled: status === 'stopping',
                    children: status === 'stopping' ? localize('Stopping...') : isSelected ? localize('Stop auto-trading') : localize('Stop scan')
                }, void 0, false, {
                    fileName: "[project]/components/custom/market-scanner-notification.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/market-scanner-notification.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/market-scanner-notification.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(MarketScannerNotification, "GKlYp1n2D1rKJ1qyS3m4eCzxgIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = MarketScannerNotification;
var _c;
__turbopack_context__.k.register(_c, "MarketScannerNotification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/pinned-buy-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PinnedBuyBar",
    ()=>PinnedBuyBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function PinnedBuyBar({ children, editMode, rearrangeMode, selected, onSelect, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterBar"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    inert: editMode || undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// Symmetric vertical padding: `pt-2` alone left the selection ring
                    // flush against the button's bottom edge (8px above, 0 below), and
                    // gave the deployed button no breathing room over the footer.
                    'mx-auto w-full max-w-md px-3 py-2', editMode && 'pointer-events-none select-none'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/custom/pinned-buy-bar.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                editMode && !rearrangeMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": label,
                    "aria-pressed": selected,
                    onClick: onSelect,
                    onKeyDown: (event)=>{
                        // A div with role="button" gets none of a real <button>'s keyboard
                        // behaviour for free, and it cannot BE a button — that would nest
                        // one inside the Buy button.
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            onSelect?.();
                        }
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// inset-x-1 against the wrapper's px-3 gives the same 8px gap the
                    // py-2 gives vertically, so the ring sits evenly around the button.
                    'absolute inset-x-1 inset-y-0 z-10 cursor-pointer rounded-xl border-2 transition-colors', // Border is always visible, like the selectable rows inside the
                    // column — on touch there is no hover to reveal an affordance.
                    selected ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/60 hover:bg-primary/5')
                }, void 0, false, {
                    fileName: "[project]/components/custom/pinned-buy-bar.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/custom/pinned-buy-bar.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/pinned-buy-bar.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = PinnedBuyBar;
var _c;
__turbopack_context__.k.register(_c, "PinnedBuyBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/symbol-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SymbolSelector",
    ()=>SymbolSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
/**
 * Tick-to-tick movement of the active symbol, or null if there isn't enough data.
 * `sign` is the one source of direction (text, colour and arrow all derive from
 * it) and comes from the two quotes as printed (`tickDelta`), so the badge
 * agrees with the spot: a move that changes the printed spot carries a sign and
 * an arrow, one that does not reads an unsigned `0.00` with neither. The spot renders
 * with `formatTickPrice`, the same `toFixed`-then-Intl rounding as the Rise/Fall
 * price and the Digits tick, so one quote never shows two last digits on one
 * screen; `delta` is the difference of those printed values, and the percentage
 * is that printed change relative to the raw previous quote.
 */ function computeMovement(prices, decimals) {
    if (!prices || prices.length < 2) return null;
    const spot = prices[prices.length - 1];
    const prev = prices[prices.length - 2];
    if (!Number.isFinite(spot) || !Number.isFinite(prev) || prev === 0) return null;
    const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tickDelta"])(spot, prev, decimals);
    return {
        spot,
        delta,
        changePercent: Math.abs(delta / prev * 100),
        sign: delta > 0 ? '+' : delta < 0 ? '-' : ''
    };
}
function groupBySubmarket(symbols) {
    const groups = new Map();
    for (const symbol of symbols){
        const key = symbol.submarket;
        const existing = groups.get(key);
        if (existing) {
            existing.symbols.push(symbol);
        } else {
            const displayName = symbol.submarket_display_name ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSubmarketDisplayName"])(symbol.submarket);
            groups.set(key, {
                displayName,
                symbols: [
                    symbol
                ]
            });
        }
    }
    return groups;
}
function SymbolSelector({ symbols, activeSymbol, onSymbolChange, prices, pipSize, disabled = false }) {
    _s();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SymbolSelector.useMemo[grouped]": ()=>groupBySubmarket(symbols)
    }["SymbolSelector.useMemo[grouped]"], [
        symbols
    ]);
    const decimals = pipSize ?? 2;
    const movement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SymbolSelector.useMemo[movement]": ()=>computeMovement(prices, decimals)
    }["SymbolSelector.useMemo[movement]"], [
        prices,
        decimals
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        value: activeSymbol?.underlying_symbol ?? '',
        onValueChange: onSymbolChange,
        disabled: disabled,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full', movement ? 'h-auto py-1.5' : undefined),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-w-0 flex-col items-start gap-0.5 text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                            placeholder: localize('Select a symbol')
                        }, void 0, false, {
                            fileName: "[project]/components/custom/symbol-selector.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        movement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-1 text-xs font-medium tabular-nums', movement.sign === '+' && 'text-emerald-600', movement.sign === '-' && 'text-rose-600', movement.sign === '' && 'text-muted-foreground'),
                            children: [
                                `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTickPrice"])(movement.spot, decimals, locale)} ${movement.sign}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(Math.abs(movement.delta), decimals, locale)} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(movement.changePercent, 2, locale)})`,
                                movement.sign !== '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: movement.sign === '+' ? '▲' : '▼'
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/symbol-selector.tsx",
                                    lineNumber: 120,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/custom/symbol-selector.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/custom/symbol-selector.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/symbol-selector.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: Array.from(grouped.entries()).map(([submarket, { displayName, symbols: group }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectLabel"], {
                                children: displayName
                            }, void 0, false, {
                                fileName: "[project]/components/custom/symbol-selector.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            group.map((symbol)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                    value: symbol.underlying_symbol,
                                    children: symbol.underlying_symbol_name
                                }, symbol.underlying_symbol, false, {
                                    fileName: "[project]/components/custom/symbol-selector.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, submarket, true, {
                        fileName: "[project]/components/custom/symbol-selector.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/custom/symbol-selector.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/symbol-selector.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(SymbolSelector, "RDWj/zWUrUm6gdhKAGnScllBUgA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = SymbolSelector;
var _c;
__turbopack_context__.k.register(_c, "SymbolSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/threshold-result-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThresholdResultDialog",
    ()=>ThresholdResultDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as CircleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ThresholdResultDialog({ result, onClose }) {
    _s();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const isTakeProfit = result?.outcome === 'take-profit';
    const OutcomeIcon = isTakeProfit ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleAlert$3e$__["CircleAlert"];
    const ProfitIcon = isTakeProfit ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: result !== null,
        onOpenChange: (open)=>{
            if (!open) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "threshold-result-shell w-[calc(100%-2rem)] max-w-md overflow-visible rounded-2xl border-primary/45 bg-card p-0 text-foreground sm:rounded-2xl",
            children: result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative px-5 pb-5 pt-12 sm:px-7 sm:pb-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-10 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `threshold-result-badge flex h-20 w-20 items-center justify-center rounded-full border-4 bg-card shadow-xl ${isTakeProfit ? 'border-emerald-400/80 text-emerald-400' : 'border-rose-400/80 text-rose-400'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OutcomeIcon, {
                                className: "h-10 w-10",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 45,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                            lineNumber: 38,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        className: "space-y-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-xl font-extrabold tracking-tight sm:text-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: isTakeProfit ? 'text-emerald-400' : 'text-rose-400',
                                        children: isTakeProfit ? localize('Take Profit') : localize('Stop Loss')
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    ' ',
                                    localize('Reached!')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                className: "text-sm leading-relaxed text-muted-foreground",
                                children: isTakeProfit ? localize('Your trading session ended after reaching its profit target.') : localize('Your trading session ended after reaching its loss limit.')
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-5 flex items-center justify-center gap-2 text-xs font-semibold text-primary",
                        children: [
                            isTakeProfit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isTakeProfit ? localize('Well done! Your session is complete.') : localize('Review your risk settings before trading again.')
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-[auto_1px_minmax(0,1fr)_1px_minmax(0,1fr)] items-center gap-2 rounded-xl border p-3 ${isTakeProfit ? 'border-emerald-400/30 bg-emerald-500/5' : 'border-rose-400/30 bg-rose-500/5'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfitIcon, {
                                className: `h-7 w-7 ${isTakeProfit ? 'text-emerald-400' : 'text-rose-400'}`
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-px bg-border"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                        children: localize('Session P/L')
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `truncate text-base font-extrabold tabular-nums sm:text-lg ${isTakeProfit ? 'text-emerald-400' : 'text-rose-400'}`,
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(result.profit, locale),
                                            " USD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-px bg-border"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground",
                                        children: localize('Market')
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-sm font-bold text-foreground",
                                        title: result.market,
                                        children: result.market
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "mt-5 h-11 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:brightness-110",
                        onClick: onClose,
                        children: localize('OK')
                    }, void 0, false, {
                        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/threshold-result-dialog.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/custom/threshold-result-dialog.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/threshold-result-dialog.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ThresholdResultDialog, "/wAEK6Fy8RTJUIH4NAaIFuutRGo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = ThresholdResultDialog;
var _c;
__turbopack_context__.k.register(_c, "ThresholdResultDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/trade-type-chips.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TradeTypeChips",
    ()=>TradeTypeChips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2d$overflow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-scroll-overflow.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/** How far one chevron press moves the row, as a fraction of the visible width. */ const SCROLL_STEP_RATIO = 0.75;
// Written out in full because Tailwind scans source for complete class names.
const FADE = {
    background: {
        left: 'bg-gradient-to-r from-background via-background to-transparent',
        right: 'bg-gradient-to-l from-background via-background to-transparent'
    },
    card: {
        left: 'bg-gradient-to-r from-card via-card to-transparent',
        right: 'bg-gradient-to-l from-card via-card to-transparent'
    }
};
function TradeTypeChips({ value, options, onValueChange, backdrop = 'background', disabled = false, className }) {
    _s();
    const { ref, canScrollLeft, canScrollRight } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2d$overflow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollOverflow"])();
    const scrollBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TradeTypeChips.useCallback[scrollBy]": (direction)=>{
            const el = ref.current;
            if (!el) return;
            el.scrollBy({
                left: direction * el.clientWidth * SCROLL_STEP_RATIO,
                behavior: 'smooth'
            });
        }
    }["TradeTypeChips.useCallback[scrollBy]"], [
        ref
    ]);
    return(// `relative` anchors the chevrons, which overlay the row's edges rather than
    // taking layout width — the row is already tight in the longer locales.
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ref,
                className: "overflow-x-auto pb-0.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
                    type: "single",
                    value: value,
                    disabled: disabled,
                    onValueChange: (v)=>{
                        // Use options lookup so onValueChange receives the correctly-typed T value
                        const opt = options.find((o)=>o.value === v);
                        if (opt) onValueChange(opt.value);
                    },
                    className: "w-max gap-1.5 sm:gap-2",
                    children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                            value: opt.value,
                            className: "h-8 whitespace-nowrap rounded-full border border-input bg-background px-3 text-xs font-medium data-[state=on]:border-foreground data-[state=on]:bg-foreground data-[state=on]:text-background hover:bg-muted sm:h-10 sm:px-4 sm:text-sm",
                            children: opt.label
                        }, opt.value, false, {
                            fileName: "[project]/components/custom/trade-type-chips.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/custom/trade-type-chips.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/trade-type-chips.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollAffordance, {
                side: "left",
                backdrop: backdrop,
                visible: canScrollLeft,
                onScroll: ()=>scrollBy(-1)
            }, void 0, false, {
                fileName: "[project]/components/custom/trade-type-chips.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollAffordance, {
                side: "right",
                backdrop: backdrop,
                visible: canScrollRight,
                onScroll: ()=>scrollBy(1)
            }, void 0, false, {
                fileName: "[project]/components/custom/trade-type-chips.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/trade-type-chips.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this));
}
_s(TradeTypeChips, "dcFR2kIr9jshR95Di5QC7F04eBA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2d$overflow$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollOverflow"]
    ];
});
_c = TradeTypeChips;
function ScrollAffordance({ side, backdrop, visible, onScroll }) {
    const Icon = side === 'left' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "data-testid": `trade-type-scroll-${side}`,
        // The row is already reachable by wheel, touch and arrow keys, so the
        // chevron is a redundant pointer shortcut. Keeping it out of the tab order
        // and hidden from assistive tech avoids announcing a control that does
        // nothing keyboard users cannot already do.
        tabIndex: -1,
        "aria-hidden": true,
        onClick: onScroll,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(// The chevron sits above the chips and fades them out underneath, so the
        // row reads as continuing past the edge rather than ending there.
        'absolute inset-y-0 flex w-8 items-center transition-opacity', side === 'left' ? 'left-0 justify-start' : 'right-0 justify-end', FADE[backdrop][side], // Faded out rather than unmounted so toggling never reflows the row.
        // `hidden` alone would not do it: the `flex` above outranks the user
        // agent's `display:none`, which left the fade painting over the first
        // chip at rest. `invisible` also stops it swallowing clicks.
        visible ? 'opacity-100' : 'pointer-events-none invisible opacity-0'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "h-4 w-4 shrink-0 text-muted-foreground",
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/components/custom/trade-type-chips.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/custom/trade-type-chips.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = ScrollAffordance;
var _c, _c1;
__turbopack_context__.k.register(_c, "TradeTypeChips");
__turbopack_context__.k.register(_c1, "ScrollAffordance");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/custom/transactions-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransactionsPanel",
    ()=>TransactionsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function formatTransactionTime(timestamp, locale) {
    const date = new Date(timestamp * 1000);
    if (!Number.isFinite(date.getTime())) return '—';
    return new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}
function TransactionsPanel({ transactions, onReset, isAuthenticated }) {
    _s();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const visibleTransactions = transactions.filter((transaction)=>filter === 'all' || transaction.status === filter);
    const openCount = transactions.filter((transaction)=>transaction.status === 'open').length;
    const closedCount = transactions.length - openCount;
    const totalProfit = transactions.reduce((total, transaction)=>total + (Number.isFinite(transaction.profit) ? transaction.profit : 0), 0);
    const currency = transactions[0]?.currency ?? '';
    const contractTypeLabels = {
        DIGITMATCH: localize('Digit Match'),
        DIGITDIFF: localize('Digit Differs'),
        DIGITOVER: localize('Digit Over'),
        DIGITUNDER: localize('Digit Under'),
        DIGITEVEN: localize('Digit Even'),
        DIGITODD: localize('Digit Odd')
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "factorpulse-panel flex h-full min-h-[360px] flex-col overflow-hidden rounded-xl border border-primary/35 bg-card/95",
        "data-testid": "transactions-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-border/70 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                className: "h-4 w-4 shrink-0 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "truncate text-sm font-bold uppercase tracking-[0.12em]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Transactions"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/transactions-panel.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/transactions-panel.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-1.5",
                        children: [
                            isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": localize('Reset transactions'),
                                title: localize('Reset transactions'),
                                disabled: transactions.length === 0,
                                onClick: onReset,
                                className: "inline-flex h-8 items-center gap-1 rounded-md border border-border px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: localize('Reset')
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                value: filter,
                                onValueChange: (value)=>setFilter(value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                        "aria-label": localize('Filter transactions'),
                                        className: "h-8 w-[98px] shrink-0 text-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                            fileName: "[project]/components/custom/transactions-panel.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "all",
                                                children: [
                                                    localize('All'),
                                                    " · ",
                                                    transactions.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "open",
                                                children: [
                                                    localize('Open'),
                                                    " · ",
                                                    openCount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                value: "closed",
                                                children: [
                                                    localize('Closed'),
                                                    " · ",
                                                    closedCount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/transactions-panel.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/transactions-panel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-border/60 px-4 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-foreground",
                                        children: openCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 108,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                        i18n_default_text: "Closed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-foreground",
                                        children: closedCount
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/transactions-panel.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] uppercase tracking-wide text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Total P/L"
                                }, void 0, false, {
                                    fileName: "[project]/components/custom/transactions-panel.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-bold tabular-nums ${totalProfit > 0 ? 'text-emerald-500' : totalProfit < 0 ? 'text-destructive' : 'text-foreground'}`,
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(totalProfit, locale),
                                    currency ? ` ${currency}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/custom/transactions-panel.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/custom/transactions-panel.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-40 max-h-[520px] flex-1 space-y-2 overflow-y-auto p-3 xl:max-h-none",
                children: visibleTransactions.length > 0 ? visibleTransactions.map((transaction)=>{
                    const typeLabel = contractTypeLabels[transaction.contractType] ?? transaction.contractType;
                    const profitClass = transaction.profit > 0 ? 'text-emerald-500' : transaction.profit < 0 ? 'text-destructive' : 'text-muted-foreground';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "rounded-lg border border-border/80 bg-background/60 p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "truncate text-xs font-semibold text-foreground",
                                                children: [
                                                    typeLabel,
                                                    " · ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$active$2d$symbols$2d$display$2d$names$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolDisplayName"])(transaction.symbol)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 141,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-0.5 text-[10px] text-muted-foreground",
                                                children: [
                                                    "#",
                                                    transaction.contractId,
                                                    " · ",
                                                    formatTransactionTime(transaction.timestamp, locale)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        className: transaction.status === 'open' ? 'shrink-0 border-blue-500/40 bg-blue-500/10 px-1.5 py-0 text-[10px] text-blue-400' : 'shrink-0 border-border px-1.5 py-0 text-[10px] text-muted-foreground',
                                        children: transaction.status === 'open' ? localize('Open') : localize('Closed')
                                    }, void 0, false, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-[1fr_auto] items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 items-center gap-2 rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                            i18n_default_text: "Last digit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/custom/transactions-panel.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "truncate text-[9px] text-muted-foreground",
                                                        children: transaction.status === 'closed' ? localize('Final contract tick') : localize('Latest contract tick')
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-xl font-black tabular-nums text-primary",
                                                children: transaction.lastDigit ?? '—'
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 160,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] uppercase tracking-wide text-muted-foreground",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "P/L"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/custom/transactions-panel.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm font-bold tabular-nums ${profitClass}`,
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSignedAmount"])(transaction.profit, locale),
                                                    transaction.currency ? ` ${transaction.currency}` : ''
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 159,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid grid-cols-2 gap-x-3 border-t border-border/60 pt-2 text-[10px] text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Stake"
                                            }, void 0, false, {
                                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this),
                                            ": ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(transaction.stake, locale),
                                            " ",
                                            transaction.currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "truncate text-right",
                                        children: [
                                            transaction.status === 'open' ? localize('Current value') : localize('Sell price'),
                                            ": ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(transaction.value, locale),
                                            " ",
                                            transaction.currency
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/custom/transactions-panel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/custom/transactions-panel.tsx",
                                lineNumber: 184,
                                columnNumber: 17
                            }, this)
                        ]
                    }, `${transaction.status}-${transaction.contractId}`, true, {
                        fileName: "[project]/components/custom/transactions-panel.tsx",
                        lineNumber: 135,
                        columnNumber: 15
                    }, this);
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "px-2 py-8 text-center text-xs text-muted-foreground",
                    children: !isAuthenticated ? localize('Log in to see your transactions.') : filter === 'all' ? localize('Your session trades will appear here.') : localize('No {{status}} transactions.', {
                        status: filter
                    })
                }, void 0, false, {
                    fileName: "[project]/components/custom/transactions-panel.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/custom/transactions-panel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/custom/transactions-panel.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(TransactionsPanel, "oElGsO7+gT5Bi09NNnyvD3tvvFo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = TransactionsPanel;
var _c;
__turbopack_context__.k.register(_c, "TransactionsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/digit-stats-bar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitStatsBar",
    ()=>DigitStatsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function DigitStatsBar({ digitStats, selectedDigit, lastDigit = null, headerRight, onDigitSelect, disabled = false }) {
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const ranks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDigitPercentageRanks"])(digitStats.percentages);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col min-h-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex min-w-0 items-center justify-between gap-2 sm:mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Last digit prediction"
                        }, void 0, false, {
                            fileName: "[project]/components/digit-stats-bar.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digit-stats-bar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    headerRight
                ]
            }, void 0, true, {
                fileName: "[project]/components/digit-stats-bar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-5 place-items-center gap-2 sm:gap-3",
                    children: digitStats.percentages.map((pct, digit)=>{
                        const isSelected = digit === selectedDigit;
                        const rank = digitStats.totalTicks > 0 ? ranks[digit] : null;
                        const isLiveDigit = digit === lastDigit;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex w-full flex-col items-center gap-1.5 pt-1.5 sm:gap-2 sm:pt-2",
                            children: [
                                isLiveDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-label": `Latest tick digit ${digit}`,
                                    className: "live-digit-pointer absolute left-1/2 top-[-0.45rem] z-10 -translate-x-1/2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/components/digit-stats-bar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/digit-stats-bar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: isSelected ? 'default' : 'outline',
                                    disabled: disabled || !onDigitSelect,
                                    onClick: ()=>onDigitSelect?.(digit),
                                    "data-digit": digit,
                                    "data-selected": isSelected,
                                    "data-rank": rank ?? 'none',
                                    "data-live-digit": isLiveDigit,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('digit-tile h-12 w-full rounded-lg p-0 text-base font-bold shadow-sm disabled:opacity-100 sm:h-[4.5rem] sm:rounded-xl sm:text-2xl'),
                                    children: digit
                                }, void 0, false, {
                                    fileName: "[project]/components/digit-stats-bar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-xs font-mono', rank === 'highest' && 'font-bold text-emerald-300', rank === 'second-highest' && 'font-semibold text-blue-300', rank === 'lowest' && 'font-bold text-red-400', rank === 'second-lowest' && 'font-semibold text-amber-300', !rank && 'text-muted-foreground'),
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(pct, 1, locale)
                                }, void 0, false, {
                                    fileName: "[project]/components/digit-stats-bar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, digit, true, {
                            fileName: "[project]/components/digit-stats-bar.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/digit-stats-bar.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digit-stats-bar.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/digit-stats-bar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(DigitStatsBar, "B/WxtxKOkCKuDYNu250svy3IR0g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = DigitStatsBar;
var _c;
__turbopack_context__.k.register(_c, "DigitStatsBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/digits-view.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DigitsView",
    ()=>DigitsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bar-chart-3.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ban.js [app-client] (ecmascript) <export default as Ban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$login$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/login-prompt-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$pinned$2d$buy$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/pinned-buy-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$threshold$2d$result$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/threshold-result-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$market$2d$scanner$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/market-scanner-notification.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-is-mobile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/current-tick-display.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/digit-stats-bar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/trade-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/risk-management-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/configurable-digits-controls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/trade-type-chips.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/symbol-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/transactions-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-session-transactions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/app-config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Desktop no-code column split. Digits has no chart, so the market and
 * contract-selection blocks (trade type, contract mode, symbol, tick, digit
 * stats) stand in for it on the left, mirroring the
 * chart-left / controls-right desktop layout of rise-fall and accumulators —
 * and the 3-column desktop the standard Digits layout has always had. The
 * blocks keep their configured relative order inside each column; the
 * drag-to-reorder editor is phone-framed, so the single mobile column stays
 * the source of truth and desktop is a grouped projection of it.
 */ const MARKET_COLUMN_KEYS = [
    'tradeType',
    'contractMode',
    'symbol',
    'tick',
    'digitStats'
];
const CONTROLS_COLUMN_KEYS = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$app$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_CONTROL_KEYS"].filter(_c = (key)=>!MARKET_COLUMN_KEYS.includes(key));
_c1 = CONTROLS_COLUMN_KEYS;
function getDigitTradeTypeOptions(localize) {
    return [
        {
            value: 'matches-differs',
            label: localize('Differs')
        },
        {
            value: 'over-under',
            label: localize('Over/Under')
        },
        {
            value: 'even-odd',
            label: localize('Even/Odd')
        }
    ];
}
// Edit-mode stand-in for the login prompt's auth handlers — same rule as the
// header: no OAuth navigation out of the editor.
const noopAsyncAuth = async ()=>{};
function DigitsView({ authState, accounts, activeAccount, onLogin, onSignUp, onLogout, onSwitchAccount, isConnected, isLoading, error, symbols, activeSymbol, selectSymbol, currentTick, lastDigit, digitStats, pipSize, openPositions, tradeType, setTradeType, contractMode, setContractMode, selectedDigit, stake, setStake, duration, setDuration, durationLimits, proposal, isProposalLoading, buyContract, isBuying, buyResult, buyError, clearBuyResult, takeProfit, setTakeProfit, stopLoss, setStopLoss, martingaleMode, setMartingaleMode, martingaleValues, setMartingaleValue, autoTradingStatus, autoTradingTradeCount, autoTradingProfit, autoTradingMarket, autoTradingEstimatedWinRate, autoTradingScanProgress, thresholdResult, clearThresholdResult, stopAutoTrading, logoSrc, appName, appConfig, editMode, onSelect, selectedKey, rearrangeMode, onReorder }) {
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"])();
    // Pinning is a mobile affordance: on desktop the controls card grows to fit,
    // so the Buy button is never scroll-clipped and a viewport-wide bar under a
    // 400px column would look detached.
    const pinBuy = !!appConfig?.buy?.pinned && isMobile;
    // With Buy unpinned the footer still has to sit at the end of the mobile
    // column — and a `fixed` footer makes that column reserve clearance for it.
    // That reservation was a guess (`pb-28`, 112px) for a footer that measures
    // 40px, leaving 72px of dead space under the Buy button at the bottom of the
    // scroll. Rendering it in flow, exactly as PinnedBuyBar does, ends the column
    // where the footer begins and removes the number to guess.
    //
    // Note what this does NOT depend on: `buy.pinned`. Every no-code mobile
    // render gets the in-flow band, so an existing unpinned project also moves
    // off the translucent `fixed` footer on its next redeploy. That is deliberate
    // — it is the dead-space fix — but it means the backward-compatibility rule
    // covers Buy's PLACEMENT, not the footer treatment: a pre-existing project
    // keeps Buy scrolling in the column, while its footer becomes the opaque
    // bordered band. A footer that moved after a redeploy is expected here, not a
    // regression.
    const inFlowFooter = !!appConfig && isMobile;
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const digitTradeTypeOptions = getDigitTradeTypeOptions(localize);
    const [showLoginPrompt, setShowLoginPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { transactions, resetTransactions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionTransactions"])(openPositions, symbols, activeAccount?.account_id ?? null, pipSize);
    // Logged-out Buy opens the login/sign-up prompt instead of sending a buy that
    // would fail with a "Purchase Failed" toast. One gate covers every Buy
    // surface (standard, configurable, pinned). Edit mode stays inert — the
    // editor owns Buy clicks there, and its auth actions are already no-ops.
    const handleBuy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DigitsView.useCallback[handleBuy]": async ()=>{
            if (editMode) return;
            if (autoTradingStatus !== 'idle') {
                stopAutoTrading();
                return;
            }
            // Mid-OAuth (the ?code= callback) the header already shows a login in
            // progress — don't stack a "please log in" prompt on top of it.
            if (authState === 'authenticating') return;
            if (authState !== 'authenticated') {
                setShowLoginPrompt(true);
                return;
            }
            await buyContract();
        }
    }["DigitsView.useCallback[handleBuy]"], [
        editMode,
        authState,
        autoTradingStatus,
        stopAutoTrading,
        buyContract
    ]);
    const riskManagementProps = {
        takeProfit,
        onTakeProfitChange: setTakeProfit,
        stopLoss,
        onStopLossChange: setStopLoss,
        martingaleMode,
        onMartingaleModeChange: setMartingaleMode,
        martingaleValues,
        onMartingaleValueChange: setMartingaleValue,
        autoTradingStatus,
        autoTradingTradeCount,
        autoTradingProfit,
        autoTradingMarket,
        autoTradingEstimatedWinRate,
        onStopAutoTrading: stopAutoTrading,
        disabled: autoTradingStatus !== 'idle'
    };
    // Purchase feedback for the configurable layouts lives HERE, not in
    // ConfigurableDigitsControls: the desktop no-code layout mounts that
    // component once per column, and a per-instance effect would fire every
    // toast twice. Automatic sessions clear successful results without a toast.
    const hasAppConfig = !!appConfig;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitsView.useEffect": ()=>{
            if (!hasAppConfig || !buyError) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Purchase Failed'), {
                description: buyError
            });
            clearBuyResult();
        }
    }["DigitsView.useEffect"], [
        hasAppConfig,
        buyError,
        clearBuyResult,
        localize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DigitsView.useEffect": ()=>{
            if (!hasAppConfig || !buyResult) return;
            if (autoTradingStatus === 'idle') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(localize('Contract Purchased'), {
                    description: localize('Buy price: {{buyPrice}} USD | Payout: {{payout}} USD | Balance: {{balance}} USD', {
                        buyPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.buyPrice, locale),
                        payout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.payout, locale),
                        balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.balanceAfter, locale)
                    })
                });
            }
            clearBuyResult();
        }
    }["DigitsView.useEffect"], [
        hasAppConfig,
        buyResult,
        autoTradingStatus,
        clearBuyResult,
        localize,
        locale
    ]);
    // In edit mode, login/sign-up/account actions are inert (no OAuth navigation
    // out of the editor) — only the theme toggle stays interactive.
    const headerEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DigitsView.useMemo[headerEl]": ()=>{
            const noop = {
                "DigitsView.useMemo[headerEl].noop": ()=>{}
            }["DigitsView.useMemo[headerEl].noop"];
            const noopAsync = {
                "DigitsView.useMemo[headerEl].noopAsync": async ()=>{}
            }["DigitsView.useMemo[headerEl].noopAsync"];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                authState: authState,
                accounts: accounts,
                activeAccount: activeAccount,
                onLogin: editMode ? noopAsync : onLogin,
                onSignUp: editMode ? noopAsync : onSignUp,
                onLogout: editMode ? noop : onLogout,
                onSwitchAccount: editMode ? noopAsync : onSwitchAccount,
                logoSrc: logoSrc,
                appName: appName
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this);
        }
    }["DigitsView.useMemo[headerEl]"], [
        authState,
        accounts,
        activeAccount,
        editMode,
        onLogin,
        onSignUp,
        onLogout,
        onSwitchAccount,
        logoSrc,
        appName
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex flex-col bg-background items-center justify-center px-4 min-h-dvh",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-destructive",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Connection Error"
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 352,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 350,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 349,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 348,
            columnNumber: 7
        }, this);
    }
    // The configurable controls — a reorderable column. `keys` narrows the
    // instance to one desktop column; omitted, it renders every block.
    const renderConfigurable = (keys, compactMarketLayout)=>appConfig ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurableDigitsControls"], {
            config: appConfig,
            lastDigit: lastDigit,
            compactMarketLayout: compactMarketLayout,
            keys: keys,
            symbols: symbols,
            activeSymbol: activeSymbol,
            selectSymbol: selectSymbol,
            currentTick: currentTick,
            digitStats: digitStats,
            pipSize: pipSize,
            tradeType: tradeType,
            onTradeTypeChange: setTradeType,
            contractMode: contractMode,
            onContractModeChange: setContractMode,
            selectedDigit: selectedDigit,
            stake: stake,
            onStakeChange: setStake,
            duration: duration,
            onDurationChange: setDuration,
            durationLimits: durationLimits,
            proposal: proposal,
            isProposalLoading: isProposalLoading,
            onBuy: handleBuy,
            isBuying: isBuying,
            autoTradingStatus: autoTradingStatus,
            isConnected: isConnected,
            editMode: editMode,
            onSelect: onSelect,
            selectedKey: selectedKey,
            rearrangeMode: rearrangeMode,
            onReorder: onReorder,
            pinBuy: pinBuy
        }, void 0, false, {
            fileName: "[project]/components/digits-view.tsx",
            lineNumber: 370,
            columnNumber: 7
        }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `factorpulse-shell flex flex-col max-lg:h-dvh max-lg:overflow-y-auto lg:overflow-visible ${editMode ? 'bg-muted/50' : ''}`,
        children: [
            editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group/hdr sticky top-0 z-50",
                children: [
                    headerEl,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 z-[60] opacity-0 ring-2 ring-inset ring-muted-foreground/25 transition-opacity group-hover/hdr:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-md bg-background/90 px-2 py-1 text-[11px] font-medium text-muted-foreground shadow-sm ring-1 ring-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ban$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ban$3e$__["Ban"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Not editable"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 415,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 413,
                columnNumber: 9
            }, this) : headerEl,
            appConfig ? isMobile ? /* No-code mobile layout: a single, reorderable column of blocks. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-h-0 overflow-y-auto overscroll-contain",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex w-full max-w-md flex-col gap-3 px-3 py-3 sm:px-4",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-[420px] w-full rounded-xl"
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 432,
                        columnNumber: 17
                    }, this) : editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "factorpulse-panel overflow-hidden border-primary/40 bg-card/90",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-3 sm:p-4",
                            children: renderConfigurable()
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 435,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 434,
                        columnNumber: 17
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "factorpulse-panel overflow-hidden border-primary/45 bg-card/95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "h-4 w-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 441,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Cycle Inspector"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 442,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 440,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4",
                                        children: renderConfigurable(MARKET_COLUMN_KEYS, true)
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 446,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 439,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                transactions: transactions,
                                onReset: resetTransactions,
                                isAuthenticated: authState === 'authenticated'
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 450,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "factorpulse-panel overflow-hidden border-primary/45 bg-card/95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex-row items-center gap-2 border-b border-border/70 px-4 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "h-4 w-4 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 457,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "text-sm font-bold uppercase tracking-[0.12em]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                    i18n_default_text: "Trade Terminal"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 456,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                        className: "p-4",
                                        children: [
                                            renderConfigurable(CONTROLS_COLUMN_KEYS),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                                ...riskManagementProps
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 464,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 462,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 455,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 438,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 430,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 429,
                columnNumber: 11
            }, this) : /* No-code desktop layout: market/contract selection, transactions, and trade
             controls sit in that order at xl. At lg, transactions moves below
             the two-column market/controls layout. See MARKET_COLUMN_KEYS for
             the market-data split.

             The 440px track is guarded behind `lg:` because useIsMobile
             initialises to false — on SSR and the first client render every
             viewport takes this desktop branch, and an unguarded fixed track
             would overflow a phone until hydration flips the flag. The hook's
             (max-width: 1023px) query is the same boundary as `lg`, so the
             CSS and the JS branch agree once hydrated.

             Edit mode shares the two-column version of this layout, so the
             builder's desktop viewport shows the editable controls. Full
             reordering lives in the builder's phone viewport. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] ${!editMode ? 'xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]' : ''} xl:gap-5`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 490,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 491,
                            columnNumber: 17
                        }, this),
                        !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 492,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 489,
                    columnNumber: 15
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] ${!editMode ? 'xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)]' : ''} xl:gap-5`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95",
                                    "data-testid": "market-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Cycle Inspector"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 501,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 499,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Market data"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 498,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4 p-4 sm:p-5",
                                            children: renderConfigurable(MARKET_COLUMN_KEYS, true)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 509,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 497,
                                    columnNumber: 17
                                }, this),
                                !editMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full order-2 lg:order-3 lg:col-span-2 xl:order-2 xl:col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                        transactions: transactions,
                                        onReset: resetTransactions,
                                        isAuthenticated: authState === 'authenticated'
                                    }, void 0, false, {
                                        fileName: "[project]/components/digits-view.tsx",
                                        lineNumber: 515,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 514,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: `factorpulse-panel overflow-hidden border-primary/45 bg-card/95 ${editMode ? 'lg:order-2' : 'order-3 lg:order-2 xl:order-3'}`,
                                    "data-testid": "controls-column",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "h-4 w-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Trade Terminal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 527,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`,
                                                    children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Ready"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Standby"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 523,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-4 sm:p-5",
                                            children: [
                                                renderConfigurable(CONTROLS_COLUMN_KEYS),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                                    ...riskManagementProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 538,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 522,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 496,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 hidden grid-cols-2 gap-3 lg:grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-lg border border-border/80 bg-card/70 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                    className: `h-4 w-4 ${isConnected ? 'text-emerald-400' : 'text-amber-300'}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 547,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Connection status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-xs font-medium",
                                                            children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Live market stream connected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Waiting for live market stream"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 556,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 546,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `h-2 w-2 rounded-full ${isConnected ? 'animate-pulse bg-emerald-400' : 'bg-amber-400'}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 561,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 545,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-lg border border-border/80 bg-card/70 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bar$2d$chart$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 565,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                i18n_default_text: "Digit sample"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/digits-view.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-xs font-medium",
                                                            children: [
                                                                digitStats.totalTicks,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                                    i18n_default_text: "ticks analyzed"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/digits-view.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/digits-view.tsx",
                                                            lineNumber: 570,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 564,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            className: "h-4 w-4 text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 563,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 544,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 495,
                    columnNumber: 15
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 487,
                columnNumber: 11
            }, this) : isMobile ? /* Standard mobile layout (unchanged): trade type chips + main card. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-7xl mx-auto flex-col px-3 py-2 sm:px-4 sm:py-4 gap-2 sm:gap-3 pb-10",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-32 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 589,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-28 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 590,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-8 w-24 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 591,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 588,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "w-full h-[420px] rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 594,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 586,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "shrink-0 border shadow-sm mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "flex flex-col p-3 pt-3 sm:p-6 sm:pt-4 pb-2 sm:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 pb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                                            className: "shrink-0",
                                            value: tradeType,
                                            options: digitTradeTypeOptions,
                                            onValueChange: setTradeType,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 601,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractModeSelector"], {
                                            tradeType: tradeType,
                                            contractMode: contractMode,
                                            onContractModeChange: setContractMode,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 608,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 600,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col pb-4 pt-1 sm:pb-6 sm:pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                                            symbols: symbols,
                                            activeSymbol: activeSymbol,
                                            onSymbolChange: selectSymbol,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 617,
                                            columnNumber: 21
                                        }, this),
                                        tradeType === 'even-odd' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-24 items-center justify-center sm:min-h-32",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                tick: currentTick,
                                                lastDigit: lastDigit,
                                                activeSymbol: activeSymbol,
                                                pipSize: pipSize,
                                                compact: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 625,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 624,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 616,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t divide-y divide-border",
                                    children: [
                                        tradeType !== 'even-odd' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 sm:py-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                                                digitStats: digitStats,
                                                selectedDigit: selectedDigit,
                                                lastDigit: lastDigit,
                                                headerRight: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                    tick: currentTick,
                                                    lastDigit: lastDigit,
                                                    activeSymbol: activeSymbol,
                                                    pipSize: pipSize,
                                                    inline: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 29
                                                }, this),
                                                disabled: autoTradingStatus !== 'idle'
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 640,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 639,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-4 sm:py-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                                transactions: transactions,
                                                onReset: resetTransactions,
                                                isAuthenticated: authState === 'authenticated'
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 659,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 658,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-4 sm:pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeControls"], {
                                                    contractMode: contractMode,
                                                    selectedDigit: selectedDigit,
                                                    isConnected: isConnected,
                                                    stake: stake,
                                                    onStakeChange: setStake,
                                                    duration: duration,
                                                    onDurationChange: setDuration,
                                                    durationLimits: durationLimits,
                                                    proposal: proposal,
                                                    isProposalLoading: isProposalLoading,
                                                    onBuy: handleBuy,
                                                    isBuying: isBuying,
                                                    autoTradingStatus: autoTradingStatus,
                                                    buyResult: buyResult,
                                                    buyError: buyError,
                                                    onClearBuyResult: clearBuyResult,
                                                    isMobile: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                                    ...riskManagementProps
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 667,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 636,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 599,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/digits-view.tsx",
                        lineNumber: 598,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 597,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, this) : /* Standard desktop layout: market data, transactions and trade
           controls sit in that order at xl. At lg, transactions moves below
           the two-column market/controls layout. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-[1600px] flex-col px-3 py-4 pb-24 sm:px-6",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)] xl:gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 702,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 703,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-[420px] w-full rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 704,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 701,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.9fr)] xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.9fr)_minmax(320px,0.9fr)] xl:gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "factorpulse-panel order-1 overflow-hidden border-primary/45 bg-card/95",
                            "data-testid": "market-column",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 711,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Cycle Inspector"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 712,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 710,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-md border border-primary/35 bg-primary/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Market data"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 709,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col gap-4 p-4 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$trade$2d$type$2d$chips$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeTypeChips"], {
                                            backdrop: "card",
                                            value: tradeType,
                                            options: digitTradeTypeOptions,
                                            onValueChange: setTradeType,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 721,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractModeSelector"], {
                                            tradeType: tradeType,
                                            contractMode: contractMode,
                                            onContractModeChange: setContractMode,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 728,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$symbol$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymbolSelector"], {
                                            symbols: symbols,
                                            activeSymbol: activeSymbol,
                                            onSymbolChange: selectSymbol,
                                            disabled: autoTradingStatus !== 'idle'
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 734,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: tradeType === 'even-odd' ? 'mx-auto w-full max-w-[240px]' : 'min-w-0',
                                            children: tradeType !== 'even-odd' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digit$2d$stats$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitStatsBar"], {
                                                digitStats: digitStats,
                                                selectedDigit: selectedDigit,
                                                lastDigit: lastDigit,
                                                headerRight: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                    tick: currentTick,
                                                    lastDigit: lastDigit,
                                                    activeSymbol: activeSymbol,
                                                    pipSize: pipSize,
                                                    inline: true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 27
                                                }, this),
                                                disabled: autoTradingStatus !== 'idle'
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 742,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$current$2d$tick$2d$display$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentTickDisplay"], {
                                                tick: currentTick,
                                                lastDigit: lastDigit,
                                                activeSymbol: activeSymbol,
                                                pipSize: pipSize,
                                                compact: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 758,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 740,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 720,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 708,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full order-2 lg:order-3 lg:col-span-2 xl:order-2 xl:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$transactions$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionsPanel"], {
                                transactions: transactions,
                                onReset: resetTransactions,
                                isAuthenticated: authState === 'authenticated'
                            }, void 0, false, {
                                fileName: "[project]/components/digits-view.tsx",
                                lineNumber: 770,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 769,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "factorpulse-panel order-3 overflow-hidden border-primary/45 bg-card/95 lg:order-2 xl:order-3",
                            "data-testid": "controls-column",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    className: "flex-row items-center justify-between border-b border-border/70 px-4 py-3 sm:px-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-4 w-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "text-sm font-bold uppercase tracking-[0.12em] sm:text-base",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                        i18n_default_text: "Trade Terminal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/digits-view.tsx",
                                                        lineNumber: 781,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/digits-view.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 778,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-widest ${isConnected ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/40 bg-amber-500/10 text-amber-300'}`,
                                            children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Ready"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 786,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                                i18n_default_text: "Standby"
                                            }, void 0, false, {
                                                fileName: "[project]/components/digits-view.tsx",
                                                lineNumber: 788,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 784,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 777,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "flex flex-col gap-4 p-4 sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$trade$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TradeControls"], {
                                            contractMode: contractMode,
                                            selectedDigit: selectedDigit,
                                            isConnected: isConnected,
                                            stake: stake,
                                            onStakeChange: setStake,
                                            duration: duration,
                                            onDurationChange: setDuration,
                                            durationLimits: durationLimits,
                                            proposal: proposal,
                                            isProposalLoading: isProposalLoading,
                                            onBuy: handleBuy,
                                            isBuying: isBuying,
                                            autoTradingStatus: autoTradingStatus,
                                            buyResult: buyResult,
                                            buyError: buyError,
                                            onClearBuyResult: clearBuyResult
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$risk$2d$management$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskManagementControls"], {
                                            ...riskManagementProps
                                        }, void 0, false, {
                                            fileName: "[project]/components/digits-view.tsx",
                                            lineNumber: 811,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/digits-view.tsx",
                                    lineNumber: 792,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/digits-view.tsx",
                            lineNumber: 776,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 707,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 699,
                columnNumber: 9
            }, this),
            pinBuy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$pinned$2d$buy$2d$bar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinnedBuyBar"], {
                editMode: editMode,
                rearrangeMode: rearrangeMode,
                selected: selectedKey === 'buy',
                onSelect: ()=>onSelect?.('buy'),
                label: localize('Buy button'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$configurable$2d$digits$2d$controls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConfigurableBuyButton"], {
                    variant: appConfig.styles.buy,
                    isConnected: isConnected,
                    onBuy: handleBuy,
                    isBuying: isBuying,
                    autoTradingStatus: autoTradingStatus
                }, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 827,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 820,
                columnNumber: 9
            }, this) : inFlowFooter ? /* Unpinned mobile: the same band the pinned bar ends in, minus the Buy
           button — in flow at the end of the h-dvh column, so the scroll area
           ends where it begins and nothing reserves clearance for it. Sharing
           the band is what keeps the footer from moving when the pin toggles. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterBar"], {}, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 840,
                columnNumber: 9
            }, this) : /* Fixed footer — desktop and the standard layout, which scroll the
           document rather than an inner column. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 py-2 text-center bg-background/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/components/digits-view.tsx",
                    lineNumber: 845,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 844,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$login$2d$prompt$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginPromptDialog"], {
                open: showLoginPrompt,
                onOpenChange: setShowLoginPrompt,
                onLogin: editMode ? noopAsyncAuth : onLogin,
                onSignUp: editMode ? noopAsyncAuth : onSignUp
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 849,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$market$2d$scanner$2d$notification$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarketScannerNotification"], {
                progress: autoTradingScanProgress,
                status: autoTradingStatus,
                onStop: stopAutoTrading
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 855,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$threshold$2d$result$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThresholdResultDialog"], {
                result: thresholdResult,
                onClose: clearThresholdResult
            }, void 0, false, {
                fileName: "[project]/components/digits-view.tsx",
                lineNumber: 860,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/digits-view.tsx",
        lineNumber: 407,
        columnNumber: 5
    }, this);
}
_s(DigitsView, "OTuW1BLBMM5B1Rz1TKHT/i1yER0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$is$2d$mobile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsMobile"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$session$2d$transactions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionTransactions"]
    ];
});
_c2 = DigitsView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CONTROLS_COLUMN_KEYS$ALL_CONTROL_KEYS.filter");
__turbopack_context__.k.register(_c1, "CONTROLS_COLUMN_KEYS");
__turbopack_context__.k.register(_c2, "DigitsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/live-digits.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveDigits",
    ()=>LiveDigits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * The real, functional Digits app (live WebSocket, real auth/trading), rendered
 * via DigitsView. Optionally takes a no-code `appConfig` to render the
 * configurable control styles/order. Shared by the deployed page and the editor
 * (/edit) so the editor preview is fully live.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-digits-trading.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/deriv-ws-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/logo-src-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digits$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/digits-view.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LiveDigits({ appConfig, editMode, onSelect, selectedKey, rearrangeMode, onReorder, logoSrc: logoSrcOverride, appName }) {
    _s();
    const providerLogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoSrc"])();
    const logoSrc = logoSrcOverride ?? providerLogo;
    const { ws, isConnected, isExhausted, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDerivWSContext"])();
    const { authState, accounts, activeAccount, login, signUp, logout, switchAccount } = auth;
    const trading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitsTrading"])({
        ws,
        isConnected,
        isExhausted,
        isAuthenticated: !!auth.wsUrl,
        onAuthWSFailed: logout
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$digits$2d$view$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DigitsView"], {
        authState: authState,
        accounts: accounts,
        activeAccount: activeAccount,
        onLogin: login,
        onSignUp: signUp,
        onLogout: logout,
        onSwitchAccount: switchAccount,
        logoSrc: logoSrc,
        appName: appName,
        isConnected: trading.isConnected,
        isLoading: trading.isLoading,
        error: trading.error,
        symbols: trading.symbols,
        activeSymbol: trading.activeSymbol,
        selectSymbol: trading.selectSymbol,
        currentTick: trading.currentTick,
        lastDigit: trading.lastDigit,
        digitStats: trading.digitStats,
        pipSize: trading.pipSize,
        openPositions: trading.openPositions,
        tradeType: trading.tradeType,
        setTradeType: trading.setTradeType,
        contractMode: trading.contractMode,
        setContractMode: trading.setContractMode,
        selectedDigit: trading.selectedDigit,
        stake: trading.stake,
        setStake: trading.setStake,
        duration: trading.duration,
        setDuration: trading.setDuration,
        durationLimits: trading.durationLimits,
        proposal: trading.proposal,
        isProposalLoading: trading.isProposalLoading,
        buyContract: trading.buyContract,
        isBuying: trading.isBuying,
        buyResult: trading.buyResult,
        buyError: trading.buyError,
        clearBuyResult: trading.clearBuyResult,
        takeProfit: trading.takeProfit,
        setTakeProfit: trading.setTakeProfit,
        stopLoss: trading.stopLoss,
        setStopLoss: trading.setStopLoss,
        martingaleMode: trading.martingaleMode,
        setMartingaleMode: trading.setMartingaleMode,
        martingaleValues: trading.martingaleValues,
        setMartingaleValue: trading.setMartingaleValue,
        autoTradingStatus: trading.autoTradingStatus,
        autoTradingTradeCount: trading.autoTradingTradeCount,
        autoTradingProfit: trading.autoTradingProfit,
        autoTradingMarket: trading.autoTradingMarket,
        autoTradingEstimatedWinRate: trading.autoTradingEstimatedWinRate,
        autoTradingScanProgress: trading.autoTradingScanProgress,
        thresholdResult: trading.thresholdResult,
        clearThresholdResult: trading.clearThresholdResult,
        stopAutoTrading: trading.stopAutoTrading,
        appConfig: appConfig,
        editMode: editMode,
        onSelect: onSelect,
        selectedKey: selectedKey,
        rearrangeMode: rearrangeMode,
        onReorder: onReorder
    }, void 0, false, {
        fileName: "[project]/components/live-digits.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(LiveDigits, "Di8b3vxtciPsJYy2YnvAUZLylJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$logo$2d$src$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLogoSrc"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$deriv$2d$ws$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDerivWSContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$digits$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDigitsTrading"]
    ];
});
_c = LiveDigits;
var _c;
__turbopack_context__.k.register(_c, "LiveDigits");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/risk-management-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskManagementControls",
    ()=>RiskManagementControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const MARTINGALE_CHAIN_DESCRIPTION = "After each loss, multiply the previous stake by this mode's multiplier. Continue the chain after consecutive losses; a winning contract resets the stake to the original amount.";
const MARTINGALE_MODES = [
    {
        value: 'classic',
        label: 'Classic',
        valueLabel: 'Classic multiplier',
        description: MARTINGALE_CHAIN_DESCRIPTION
    },
    {
        value: 'dynamic',
        label: 'Dynamic',
        valueLabel: 'Dynamic level',
        description: MARTINGALE_CHAIN_DESCRIPTION
    },
    {
        value: 'super-hybrid',
        label: 'Super hybrid',
        valueLabel: 'Hybrid multiplier',
        description: MARTINGALE_CHAIN_DESCRIPTION
    }
];
function RiskManagementControls({ takeProfit, onTakeProfitChange, stopLoss, onStopLossChange, martingaleMode, onMartingaleModeChange, martingaleValues, onMartingaleValueChange, autoTradingStatus, autoTradingTradeCount, autoTradingProfit, autoTradingMarket, autoTradingEstimatedWinRate, onStopAutoTrading, disabled = false }) {
    const selectedMode = MARTINGALE_MODES.find((mode)=>mode.value === martingaleMode) ?? MARTINGALE_MODES[0];
    const isAutoTrading = autoTradingStatus !== 'idle';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 border-t border-border pt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Risk management"
                }, void 0, false, {
                    fileName: "[project]/components/risk-management-controls.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "take-profit",
                                className: "text-xs text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Take profit"
                                }, void 0, false, {
                                    fileName: "[project]/components/risk-management-controls.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "take-profit",
                                type: "number",
                                min: 0,
                                step: "0.01",
                                value: takeProfit,
                                onChange: (event)=>onTakeProfitChange(event.target.value),
                                labelRight: "USD",
                                disabled: disabled
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "stop-loss",
                                className: "text-xs text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Stop loss"
                                }, void 0, false, {
                                    fileName: "[project]/components/risk-management-controls.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "stop-loss",
                                type: "number",
                                min: 0,
                                step: "0.01",
                                value: stopLoss,
                                onChange: (event)=>onStopLossChange(event.target.value),
                                labelRight: "USD",
                                disabled: disabled
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "martingale-level",
                        className: "text-xs text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Martingale level"
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: martingaleMode,
                        onValueChange: (value)=>{
                            const selectedMode = MARTINGALE_MODES.find((mode)=>mode.value === value);
                            if (selectedMode) onMartingaleModeChange(selectedMode.value);
                        },
                        disabled: disabled,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                id: "martingale-level",
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                                    fileName: "[project]/components/risk-management-controls.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                children: MARTINGALE_MODES.map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                        value: mode.value,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: mode.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/risk-management-controls.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    }, mode.value, false, {
                                        fileName: "[project]/components/risk-management-controls.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/risk-management-controls.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        htmlFor: "martingale-value",
                        className: "text-xs text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: selectedMode.valueLabel
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "martingale-value",
                        type: "number",
                        min: 1,
                        step: "0.1",
                        value: martingaleValues[martingaleMode],
                        onChange: (event)=>{
                            onMartingaleValueChange(martingaleMode, event.target.value);
                        },
                        disabled: disabled
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-relaxed text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: selectedMode.description
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            isAutoTrading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-md border border-primary/30 bg-primary/5 p-2 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold text-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "{{status}} · {{count}} trades · Session P/L: {{profit}} USD",
                            values: {
                                status: autoTradingStatus === 'stopping' ? 'Stopping' : autoTradingStatus === 'scanning' ? 'Scanning markets' : 'Auto-trading',
                                count: autoTradingTradeCount,
                                profit: autoTradingProfit.toFixed(2)
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    autoTradingStatus === 'running' && autoTradingMarket && autoTradingEstimatedWinRate !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[11px] leading-relaxed text-muted-foreground",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "{{market}} · Conservative recent-tick estimate: {{rate}}% (not guaranteed)",
                            values: {
                                market: autoTradingMarket,
                                rate: (autoTradingEstimatedWinRate * 100).toFixed(1)
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 185,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        className: "mt-2 h-8 w-full border-destructive/50 text-destructive hover:bg-destructive/10",
                        onClick: onStopAutoTrading,
                        disabled: autoTradingStatus === 'stopping',
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: autoTradingStatus === 'stopping' ? 'Stopping...' : autoTradingStatus === 'scanning' ? 'Stop scanning' : 'Stop auto-trading after current contract'
                        }, void 0, false, {
                            fileName: "[project]/components/risk-management-controls.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/risk-management-controls.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] leading-relaxed text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                    i18n_default_text: "Set at least one profit or loss target. Scan & trade checks open markets using only the selected contract type, then skips quotes with non-positive estimated value. Short-term tick patterns are noisy and this cannot guarantee profits; martingale can increase losses."
                }, void 0, false, {
                    fileName: "[project]/components/risk-management-controls.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/risk-management-controls.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/risk-management-controls.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c = RiskManagementControls;
var _c;
__turbopack_context__.k.register(_c, "RiskManagementControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/trade-controls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractModeSelector",
    ()=>ContractModeSelector,
    "TradeControls",
    ()=>TradeControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__ = __turbopack_context__.i("[project]/node_modules/@deriv-com/translations/dist/components/localize.js [app-client] (ecmascript) <export default as Localize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/skeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toggle-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function getContractModeOptions(localize) {
    return {
        'matches-differs': [
            {
                value: 'DIGITDIFF',
                label: localize('Differs')
            }
        ],
        'over-under': [
            {
                value: 'DIGITOVER',
                label: localize('Over 1')
            },
            {
                value: 'DIGITUNDER',
                label: localize('Under 8')
            }
        ],
        'even-odd': [
            {
                value: 'DIGITEVEN',
                label: localize('Even')
            },
            {
                value: 'DIGITODD',
                label: localize('Odd')
            }
        ]
    };
}
function getPredictionText(contractMode, localize) {
    switch(contractMode){
        case 'DIGITMATCH':
            return localize('match');
        case 'DIGITDIFF':
            return localize('differ from');
        case 'DIGITOVER':
            return localize('be over');
        case 'DIGITUNDER':
            return localize('be under');
        case 'DIGITEVEN':
            return localize('be even');
        case 'DIGITODD':
            return localize('be odd');
    }
}
function showDigitInPrediction(contractMode) {
    return contractMode !== 'DIGITEVEN' && contractMode !== 'DIGITODD';
}
function ContractModeSelector({ tradeType, contractMode, onContractModeChange, disabled = false }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const modeOptions = getContractModeOptions(localize)[tradeType];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroup"], {
        type: "single",
        value: contractMode,
        disabled: disabled,
        onValueChange: (value)=>{
            if (value) onContractModeChange(value);
        },
        className: "w-full gap-0 rounded-lg border border-border bg-muted/80 p-1",
        children: modeOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleGroupItem"], {
                value: option.value,
                className: "flex-1 rounded-md text-sm font-medium text-muted-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:font-bold data-[state=on]:shadow-sm hover:text-foreground",
                children: option.label
            }, option.value, false, {
                fileName: "[project]/components/trade-controls.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/trade-controls.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(ContractModeSelector, "GKlYp1n2D1rKJ1qyS3m4eCzxgIM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c = ContractModeSelector;
function TradeControls({ contractMode, selectedDigit, isConnected, stake, onStakeChange, duration, onDurationChange, durationLimits, proposal, isProposalLoading, onBuy, isBuying, buyResult, buyError, onClearBuyResult, autoTradingStatus = 'idle', isMobile }) {
    _s1();
    const { localize, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [durationDraft, setDurationDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(duration));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TradeControls.useEffect": ()=>{
            setDurationDraft(String(duration));
        }
    }["TradeControls.useEffect"], [
        duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TradeControls.useEffect": ()=>{
            if (buyError) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Purchase Failed'), {
                    description: buyError
                });
                onClearBuyResult();
            }
        }
    }["TradeControls.useEffect"], [
        buyError,
        onClearBuyResult,
        localize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TradeControls.useEffect": ()=>{
            if (buyResult) {
                if (autoTradingStatus === 'idle') {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(localize('Contract Purchased'), {
                        description: localize('Buy price: {{buyPrice}} USD | Payout: {{payout}} USD | Balance: {{balance}} USD', {
                            buyPrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.buyPrice, locale),
                            payout: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.payout, locale),
                            balance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(buyResult.balanceAfter, locale)
                        })
                    });
                }
                onClearBuyResult();
            }
        }
    }["TradeControls.useEffect"], [
        buyResult,
        autoTradingStatus,
        onClearBuyResult,
        localize,
        locale
    ]);
    const isAutoTrading = autoTradingStatus !== 'idle';
    const predictionBarrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
    const showPredictionDigit = showDigitInPrediction(contractMode) && predictionBarrier !== undefined;
    const awaitingDiffersScan = contractMode === 'DIGITDIFF' && predictionBarrier === undefined;
    const buyButtonLabel = autoTradingStatus === 'stopping' ? localize('Stopping...') : autoTradingStatus === 'scanning' ? localize('Stop scanning') : autoTradingStatus === 'running' ? localize('Stop auto-trading') : isBuying ? localize('Purchasing...') : localize('Scan & trade');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 sm:space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "stake",
                                className: "text-xs text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Stake"
                                }, void 0, false, {
                                    fileName: "[project]/components/trade-controls.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "stake",
                                type: "number",
                                value: stake,
                                onChange: (e)=>onStakeChange(e.target.value),
                                onKeyDown: (e)=>{
                                    if ([
                                        'e',
                                        'E',
                                        '+',
                                        '-'
                                    ].includes(e.key)) e.preventDefault();
                                },
                                min: 0,
                                step: "0.01",
                                labelRight: "USD",
                                disabled: isAutoTrading
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trade-controls.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "duration",
                                className: "text-xs text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Duration"
                                }, void 0, false, {
                                    fileName: "[project]/components/trade-controls.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "duration",
                                type: "number",
                                value: durationDraft,
                                onChange: (e)=>{
                                    const value = e.target.value;
                                    setDurationDraft(value);
                                    const parsed = Number(value);
                                    if (value !== '' && Number.isInteger(parsed) && parsed >= durationLimits.min && parsed <= durationLimits.max) {
                                        onDurationChange(parsed);
                                    }
                                },
                                onBlur: ()=>{
                                    const parsed = Number(durationDraft);
                                    const value = durationDraft.trim() !== '' && Number.isInteger(parsed) ? Math.min(durationLimits.max, Math.max(durationLimits.min, parsed)) : duration;
                                    setDurationDraft(String(value));
                                    onDurationChange(value);
                                },
                                onKeyDown: (e)=>{
                                    if ([
                                        'e',
                                        'E',
                                        '+',
                                        '-'
                                    ].includes(e.key)) e.preventDefault();
                                },
                                min: durationLimits.min,
                                max: durationLimits.max,
                                step: 1,
                                labelRight: localize('Ticks'),
                                disabled: isAutoTrading
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trade-controls.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/trade-controls.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-border p-2 sm:p-3 bg-muted/20 space-y-1.5 sm:space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] sm:text-xs text-muted-foreground mb-0 sm:mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                            i18n_default_text: "Prediction"
                        }, void 0, false, {
                            fileName: "[project]/components/trade-controls.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/trade-controls.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                i18n_default_text: "Last digit of the price will"
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary font-bold",
                                children: getPredictionText(contractMode, localize)
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            showPredictionDigit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex w-5 h-5 rounded-full bg-primary text-primary-foreground items-center justify-center text-xs font-bold",
                                        children: predictionBarrier
                                    }, void 0, false, {
                                        fileName: "[project]/components/trade-controls.tsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            awaitingDiffersScan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                            i18n_default_text: "Awaiting scan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/trade-controls.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/trade-controls.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trade-controls.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    (proposal || isProposalLoading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-1 border-t border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-muted-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$deriv$2d$com$2f$translations$2f$dist$2f$components$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Localize$3e$__["Localize"], {
                                    i18n_default_text: "Payout"
                                }, void 0, false, {
                                    fileName: "[project]/components/trade-controls.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            isProposalLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-4 w-24"
                            }, void 0, false, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-foreground",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAmount"])(proposal.payout, locale),
                                    " USD"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/trade-controls.tsx",
                                lineNumber: 282,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/trade-controls.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/trade-controls.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isMobile ? 'fixed bottom-[calc(env(safe-area-inset-bottom)+2.5rem)] left-3 right-3' : undefined,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "h-11 w-full rounded-lg bg-[rgb(var(--buy-background))] px-6 font-bold text-[rgb(var(--buy-foreground))] shadow-[0_0_22px_rgb(0_195_144/0.18)] hover:brightness-110 sm:h-12 sm:px-8",
                    disabled: isAutoTrading ? autoTradingStatus === 'stopping' : !isConnected || isBuying,
                    onClick: onBuy,
                    children: buyButtonLabel
                }, void 0, false, {
                    fileName: "[project]/components/trade-controls.tsx",
                    lineNumber: 298,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/trade-controls.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/trade-controls.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_s1(TradeControls, "jeZtutVe9NLRUvdmLCxXl6ZsUjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
_c1 = TradeControls;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContractModeSelector");
__turbopack_context__.k.register(_c1, "TradeControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            buy: "bg-buy-background text-buy-foreground hover:bg-buy-background/90",
            sell: "bg-sell-background text-sell-foreground hover:bg-sell-background/90",
            black: "bg-button-blackwhite text-button-blackwhite-foreground hover:bg-button-blackwhite/90"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-full px-3",
            lg: "h-11 rounded-full px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>Drawer,
    "DrawerClose",
    ()=>DrawerClose,
    "DrawerContent",
    ()=>DrawerContent,
    "DrawerDescription",
    ()=>DrawerDescription,
    "DrawerFooter",
    ()=>DrawerFooter,
    "DrawerHeader",
    ()=>DrawerHeader,
    "DrawerOverlay",
    ()=>DrawerOverlay,
    "DrawerPortal",
    ()=>DrawerPortal,
    "DrawerTitle",
    ()=>DrawerTitle,
    "DrawerTrigger",
    ()=>DrawerTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/vaul/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Drawer = ({ shouldScaleBackground = true, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Root, {
        shouldScaleBackground: shouldScaleBackground,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Drawer;
Drawer.displayName = "Drawer";
const DrawerTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Trigger;
const DrawerPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Portal;
const DrawerClose = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Close;
const DrawerOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Overlay, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = DrawerOverlay;
DrawerOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Overlay.displayName;
const DrawerContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/drawer.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Content, {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/drawer.tsx",
                        lineNumber: 49,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/drawer.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = DrawerContent;
DrawerContent.displayName = "DrawerContent";
const DrawerHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-1.5 p-4 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = DrawerHeader;
DrawerHeader.displayName = "DrawerHeader";
const DrawerFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = DrawerFooter;
DrawerFooter.displayName = "DrawerFooter";
const DrawerTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Title, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DrawerTitle;
DrawerTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Title.displayName;
const DrawerDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Description, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/drawer.tsx",
        lineNumber: 97,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = DrawerDescription;
DrawerDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Description.displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Drawer");
__turbopack_context__.k.register(_c1, "DrawerOverlay");
__turbopack_context__.k.register(_c2, "DrawerContent$React.forwardRef");
__turbopack_context__.k.register(_c3, "DrawerContent");
__turbopack_context__.k.register(_c4, "DrawerHeader");
__turbopack_context__.k.register(_c5, "DrawerFooter");
__turbopack_context__.k.register(_c6, "DrawerTitle$React.forwardRef");
__turbopack_context__.k.register(_c7, "DrawerTitle");
__turbopack_context__.k.register(_c8, "DrawerDescription$React.forwardRef");
__turbopack_context__.k.register(_c9, "DrawerDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, labelRight, fullWidth, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])("relative", fullWidth ? "w-full" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input/08 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", labelRight && "pr-12", className),
                ref: ref,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 text-[14px]",
                children: labelRight && labelRight
            }, void 0, false, {
                fileName: "[project]/components/ui/input.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 23,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/popover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Popover",
    ()=>Popover,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverTrigger",
    ()=>PopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Popover = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const PopoverContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, align = "center", sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            align: align,
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-popover-content-transform-origin]", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/popover.tsx",
            lineNumber: 15,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/popover.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = PopoverContent;
PopoverContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PopoverContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "PopoverContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const SelectGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"];
const SelectValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"];
const SelectTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = SelectTrigger;
SelectTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const SelectScrollUpButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 45,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = SelectScrollUpButton;
SelectScrollUpButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"].displayName;
const SelectScrollDownButton = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 62,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 54,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = SelectScrollDownButton;
SelectScrollDownButton.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"].displayName;
const SelectContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 84,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 85,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 94,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 73,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = SelectContent;
SelectContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const SelectLabel = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = SelectLabel;
SelectLabel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"].displayName;
const SelectItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 125,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 130,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 116,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = SelectItem;
SelectItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
const SelectSeparator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 139,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = SelectSeparator;
SelectSeparator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "SelectTrigger$React.forwardRef");
__turbopack_context__.k.register(_c1, "SelectTrigger");
__turbopack_context__.k.register(_c2, "SelectScrollUpButton");
__turbopack_context__.k.register(_c3, "SelectScrollDownButton");
__turbopack_context__.k.register(_c4, "SelectContent$React.forwardRef");
__turbopack_context__.k.register(_c5, "SelectContent");
__turbopack_context__.k.register(_c6, "SelectLabel$React.forwardRef");
__turbopack_context__.k.register(_c7, "SelectLabel");
__turbopack_context__.k.register(_c8, "SelectItem$React.forwardRef");
__turbopack_context__.k.register(_c9, "SelectItem");
__turbopack_context__.k.register(_c10, "SelectSeparator$React.forwardRef");
__turbopack_context__.k.register(_c11, "SelectSeparator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/skeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Skeleton;
;
var _c;
__turbopack_context__.k.register(_c, "Skeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toggle-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleGroup",
    ()=>ToggleGroup,
    "ToggleGroupItem",
    ()=>ToggleGroupItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toggle-group/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/toggle.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ToggleGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({
    size: "default",
    variant: "default"
});
const ToggleGroup = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center gap-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleGroupContext.Provider, {
            value: {
                variant,
                size
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ui/toggle-group.tsx",
            lineNumber: 27,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/toggle-group.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = ToggleGroup;
ToggleGroup.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToggleGroupItem = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = _s(({ className, children, variant, size, ...props }, ref)=>{
    _s();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ToggleGroupContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleVariants"])({
            variant: context.variant || variant,
            size: context.size || size
        }), className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/toggle-group.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=")), "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = ToggleGroupItem;
ToggleGroupItem.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2d$group$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"].displayName;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ToggleGroup$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToggleGroup");
__turbopack_context__.k.register(_c2, "ToggleGroupItem$React.forwardRef");
__turbopack_context__.k.register(_c3, "ToggleGroupItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toggle",
    ()=>Toggle,
    "toggleVariants",
    ()=>toggleVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toggle/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const toggleVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2", {
    variants: {
        variant: {
            default: "bg-transparent",
            outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
        },
        size: {
            default: "h-10 px-3 min-w-10",
            sm: "h-9 px-2.5 min-w-9",
            lg: "h-11 px-5 min-w-11"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Toggle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toggleVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/toggle.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Toggle;
Toggle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toggle$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Toggle$React.forwardRef");
__turbopack_context__.k.register(_c1, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-base-trading.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBaseTrading",
    ()=>useBaseTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useActiveSymbols.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useTicks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-open-positions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-closed-positions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-sell-contract.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function useBaseTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed, contractTypes }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    // When the authenticated WS exhausts all reconnect attempts, fall back to
    // the public WS by triggering logout.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaseTrading.useEffect": ()=>{
            if (isExhausted && ws) {
                onAuthWSFailed?.();
            }
        }
    }["useBaseTrading.useEffect"], [
        isExhausted,
        ws,
        onAuthWSFailed
    ]);
    const { symbols, activeSymbol, selectSymbol, contracts, contractsAvailable, durationLimits, defaultStake, isLoading: symbolsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSymbols"])(ws, isConnected, contractTypes);
    const { currentTick, prices, pipSize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTicks"])(ws, isConnected, activeSymbol);
    // Surface WS-level errors as toasts. Buy and sell errors are handled by
    // their own hooks and are excluded here to avoid double-reporting.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBaseTrading.useEffect": ()=>{
            if (!ws || !isConnected) return;
            return ws.onMessage({
                "useBaseTrading.useEffect": (data)=>{
                    if (!data.error) return;
                    const msgType = data.msg_type;
                    if (msgType === 'buy' || msgType === 'sell') return;
                    const err = data.error;
                    // A duplicate subscription is an internal stream-lifecycle event that the
                    // subscription layer recovers from on its own, so it is a developer
                    // signal rather than an app error. Matched on the code only — the message
                    // is server-localized and interpolates the symbol.
                    if (err.code === 'AlreadySubscribed') {
                        console.warn('[useBaseTrading] duplicate subscription reported by the API', {
                            code: err.code,
                            msgType,
                            message: err.message
                        });
                        return;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Error'), {
                        // API message when present; app-authored fallback otherwise.
                        description: err.message ?? localize('Unexpected error occurred. Please try again.')
                    });
                }
            }["useBaseTrading.useEffect"]);
        }
    }["useBaseTrading.useEffect"], [
        ws,
        isConnected,
        localize
    ]);
    const { positions: openPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPositions"])(ws, isConnected, isAuthenticated);
    const { positions: closedPositions, refresh: refreshClosedPositions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosedPositions"])(ws, isConnected, isAuthenticated);
    const { sellContract: sellContractRaw, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSellContract"])(ws, isConnected);
    // Refresh the closed-positions table after each successful sell.
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useBaseTrading.useCallback[sellContract]": async (contractId, bidPrice)=>{
            await sellContractRaw(contractId, bidPrice);
            await refreshClosedPositions();
        }
    }["useBaseTrading.useCallback[sellContract]"], [
        sellContractRaw,
        refreshClosedPositions
    ]);
    return {
        ws,
        isConnected,
        isLoading: !isConnected || symbolsLoading,
        error: null,
        symbols,
        activeSymbol,
        selectSymbol,
        currentTick,
        prices,
        pipSize,
        contracts,
        contractsAvailable,
        durationLimits,
        defaultStake,
        openPositions,
        closedPositions,
        refreshClosedPositions,
        sellContract,
        sellingId,
        sellError,
        clearSellError
    };
}
_s(useBaseTrading, "85ykjGe8VPQHQ91dR5XTPxUuegw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useActiveSymbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSymbols"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useTicks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTicks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$open$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenPositions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$closed$2d$positions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClosedPositions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$sell$2d$contract$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSellContract"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-closed-positions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClosedPositions",
    ()=>useClosedPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useClosedPositions(ws, isConnected, isAuthenticated) {
    _s();
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClosedPositions.useCallback[fetch]": async ()=>{
            if (!ws || !isConnected || !isAuthenticated) return;
            setIsLoading(true);
            try {
                const response = await ws.send({
                    profit_table: 1,
                    description: 1,
                    sort: 'DESC',
                    limit: 50
                });
                setPositions(response.profit_table?.transactions ?? []);
            } catch  {
            // silent — table simply stays empty on error
            } finally{
                setIsLoading(false);
            }
        }
    }["useClosedPositions.useCallback[fetch]"], [
        ws,
        isConnected,
        isAuthenticated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClosedPositions.useEffect": ()=>{
            fetch();
        }
    }["useClosedPositions.useEffect"], [
        fetch
    ]);
    return {
        positions,
        isLoading,
        refresh: fetch
    };
}
_s(useClosedPositions, "eKk/wjGRoyr1PeFRIQqAay+qTro=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-digits-trading.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDigitsTrading",
    ()=>useDigitsTrading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/ws/deriv-ws.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useProposal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/react/useBuy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-base-trading.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/market-scanner.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/martingale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const CONTRACT_TYPES = [
    'DIGITDIFF',
    'DIGITOVER',
    'DIGITUNDER',
    'DIGITEVEN',
    'DIGITODD'
];
const CONTRACT_SETTLEMENT_TIMEOUT_MS = 15 * 60 * 1000;
const CONNECTION_POLL_INTERVAL_MS = 250;
const MARKET_SCAN_CONCURRENCY = 12;
const CONNECTION_LOST = Symbol('connection-lost');
function getCandidatePrediction(candidate, scanNumber) {
    return {
        scanNumber,
        market: candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol,
        contractMode: candidate.contractMode,
        barrier: candidate.barrier,
        predictedWinRate: candidate.predictedWinRate,
        estimatedWinRate: candidate.estimatedWinRate,
        sampleCount: candidate.sampleCount,
        predictionModels: candidate.predictionModels,
        eligibleForTrading: candidate.eligibleForTrading
    };
}
function getScanCandidateKey(symbol, contractMode) {
    return `${symbol}:${contractMode}`;
}
function hasAvailableScanMode(symbol, contractMode, excludedCandidates) {
    return !excludedCandidates.has(getScanCandidateKey(symbol, contractMode));
}
function isNoReturnContractError(error) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$ws$2f$deriv$2d$ws$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDerivApiError"])(error)) return false;
    const code = error.code.replace(/[^a-z]/gi, '').toLowerCase();
    if (code.includes('noreturn') || code.includes('returnunavailable')) return true;
    return /\bcontract\b.{0,80}\b(?:offers?\s+no\s+returns?|has\s+no\s+returns?|does\s+not\s+offer\s+(?:any\s+)?returns?)\b/i.test(error.message);
}
async function fetchTickHistory(ws, symbol, count, shouldStop) {
    const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;
    while(true){
        const connected = await waitForConnection(ws, deadline, shouldStop);
        if (!connected) return null;
        let connectionDropped = false;
        const removeConnectionListener = ws.onConnectionStateChange((isConnected)=>{
            if (!isConnected) connectionDropped = true;
        });
        try {
            const response = await ws.send({
                ticks_history: symbol,
                end: 'latest',
                count,
                style: 'ticks'
            });
            if (connectionDropped) continue;
            return (response.history?.prices ?? []).map(Number).filter((price)=>Number.isFinite(price));
        } catch (error) {
            if (!connectionDropped && ws.isConnected) throw error;
            if (shouldStop()) return null;
            if (Date.now() >= deadline) {
                throw new Error('Timed out retrieving tick history after the WebSocket connection was interrupted.');
            }
        } finally{
            removeConnectionListener();
        }
    }
}
async function scanMarkets(ws, symbols, contractMode, shouldStop, excludedCandidates, onProgress) {
    const candidates = [];
    const failures = [];
    const eligibleSymbols = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols);
    if (eligibleSymbols.length === 0) {
        throw new Error('No open, unsuspended markets are available to scan.');
    }
    const openSymbols = eligibleSymbols.filter((symbol)=>hasAvailableScanMode(symbol.underlying_symbol, contractMode, excludedCandidates));
    if (openSymbols.length === 0) return [];
    let nextIndex = 0;
    let scannedMarkets = 0;
    onProgress(scannedMarkets, openSymbols.length);
    const scanWorker = async ()=>{
        while(!shouldStop()){
            const index = nextIndex;
            nextIndex += 1;
            const symbol = openSymbols[index];
            if (!symbol) return;
            try {
                const prices = await fetchTickHistory(ws, symbol.underlying_symbol, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"], shouldStop);
                if (prices && !shouldStop()) {
                    if (!excludedCandidates.has(getScanCandidateKey(symbol.underlying_symbol, contractMode))) {
                        const candidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scoreMarket"])(symbol, prices, contractMode);
                        if (candidate) candidates.push(candidate);
                    }
                }
            } catch (error) {
                failures.push(`${symbol.underlying_symbol}: ${error instanceof Error ? error.message : String(error)}`);
            } finally{
                scannedMarkets += 1;
                onProgress(scannedMarkets, openSymbols.length);
            }
        }
    };
    await Promise.all(Array.from({
        length: Math.min(MARKET_SCAN_CONCURRENCY, openSymbols.length)
    }, ()=>scanWorker()));
    if (shouldStop()) return null;
    if (failures.length > 0) {
        console.warn('[market scanner] Some markets could not be evaluated.', failures);
    }
    if (candidates.length === 0 && failures.length === openSymbols.length) {
        throw new Error('The market scanner could not retrieve tick history for any available market.');
    }
    candidates.sort((a, b)=>Number(b.eligibleForTrading) - Number(a.eligibleForTrading) || b.probabilityEdge - a.probabilityEdge || b.estimatedWinRate - a.estimatedWinRate || b.sampleCount - a.sampleCount || a.contractMode.localeCompare(b.contractMode) || a.symbol.underlying_symbol.localeCompare(b.symbol.underlying_symbol));
    return candidates;
}
async function runMarketScanCountdown(onCountdown, shouldStop) {
    const deadline = Date.now() + __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"] * 1000;
    let remaining = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"];
    onCountdown(remaining);
    while(!shouldStop()){
        const nextRemaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        if (nextRemaining !== remaining) {
            remaining = nextRemaining;
            onCountdown(remaining);
        }
        if (remaining === 0) return true;
        await new Promise((resolve)=>setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, Math.max(1, deadline - Date.now()))));
    }
    return false;
}
async function waitForConnection(ws, deadline, shouldStop = ()=>false) {
    while(!ws.isConnected){
        if (shouldStop()) return false;
        const remaining = deadline - Date.now();
        if (remaining <= 0) {
            throw new Error('Timed out waiting for the WebSocket connection to recover.');
        }
        await new Promise((resolve)=>setTimeout(resolve, Math.min(CONNECTION_POLL_INTERVAL_MS, remaining)));
    }
    return true;
}
async function waitForContractSettlement(ws, contractId) {
    const deadline = Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS;
    while(true){
        await waitForConnection(ws, deadline);
        let unsubscribe = async ()=>{};
        let hasSubscription = false;
        let finished = false;
        let connectionDropped = false;
        let removeConnectionListener = ()=>{};
        let timeout = null;
        const settlement = new Promise((resolve, reject)=>{
            void ws.subscribe({
                proposal_open_contract: 1,
                contract_id: contractId
            }, (data)=>{
                const contract = data.proposal_open_contract;
                if (!contract) return;
                const isClosed = contract.is_sold === 1 || contract.is_expired === 1 || typeof contract.status === 'string' && contract.status !== 'open';
                if (!isClosed) return;
                const profit = Number(contract.profit);
                if (!Number.isFinite(profit)) {
                    reject(new Error('The settled contract did not include a valid profit/loss value.'));
                    return;
                }
                resolve(profit);
            }).then((subscription)=>{
                unsubscribe = subscription.unsubscribe;
                hasSubscription = true;
                if (finished) void unsubscribe();
            }).catch(reject);
        });
        const connectionLost = new Promise((resolve)=>{
            removeConnectionListener = ws.onConnectionStateChange((connected)=>{
                if (connected) return;
                connectionDropped = true;
                resolve(CONNECTION_LOST);
            });
        });
        const remaining = deadline - Date.now();
        const timeoutPromise = new Promise((_, reject)=>{
            timeout = setTimeout(()=>reject(new Error('Timed out waiting for the contract to settle. Auto-trading was stopped.')), Math.max(0, remaining));
        });
        try {
            const result = await Promise.race([
                settlement,
                connectionLost,
                timeoutPromise
            ]);
            if (result !== CONNECTION_LOST) return result;
        } catch (error) {
            if (!connectionDropped && ws.isConnected) throw error;
        } finally{
            finished = true;
            removeConnectionListener();
            if (timeout) clearTimeout(timeout);
            if (hasSubscription) await unsubscribe();
        }
    }
}
function useDigitsTrading({ ws, isConnected, isExhausted, isAuthenticated, onAuthWSFailed }) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const { ws: tradingWs, isConnected: tradingIsConnected, isLoading, error, symbols, activeSymbol, selectSymbol, currentTick, prices, pipSize, contractsAvailable, durationLimits, defaultStake, openPositions, closedPositions, sellContract, sellingId, sellError, clearSellError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseTrading"])({
        ws,
        isConnected,
        isExhausted,
        isAuthenticated,
        onAuthWSFailed,
        contractTypes: CONTRACT_TYPES
    });
    // Digits-specific trade state
    const [tradeType, setTradeTypeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('matches-differs');
    const [contractMode, setContractModeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('DIGITDIFF');
    const [selectedDigit, setSelectedDigit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stake, setStake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('2.5');
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [takeProfit, setTakeProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('5');
    const [stopLoss, setStopLoss] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('25');
    const [martingaleMode, setMartingaleMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('classic');
    const [martingaleValues, setMartingaleValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        classic: '1.85',
        dynamic: '1.85',
        'super-hybrid': '1.85'
    });
    const [thresholdResult, setThresholdResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingStatus, setAutoTradingStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [autoTradingTradeCount, setAutoTradingTradeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingProfit, setAutoTradingProfit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoTradingMarket, setAutoTradingMarket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingEstimatedWinRate, setAutoTradingEstimatedWinRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [autoTradingScanProgress, setAutoTradingScanProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scannerPredictionSeed, setScannerPredictionSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const autoSessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectSymbolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectSymbol);
    const setContractMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setContractMode]": (mode)=>{
            setContractModeRaw(mode);
            if (mode === 'DIGITOVER') {
                setSelectedDigit(1);
            } else if (mode === 'DIGITUNDER') {
                setSelectedDigit(8);
            } else {
                setSelectedDigit(null);
            }
        }
    }["useDigitsTrading.useCallback[setContractMode]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDigitsTrading.useEffect": ()=>{
            selectSymbolRef.current = selectSymbol;
        }
    }["useDigitsTrading.useEffect"], [
        selectSymbol
    ]);
    const setMartingaleValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setMartingaleValue]": (mode, value)=>{
            setMartingaleValues({
                "useDigitsTrading.useCallback[setMartingaleValue]": (current)=>({
                        ...current,
                        [mode]: value
                    })
            }["useDigitsTrading.useCallback[setMartingaleValue]"]);
        }
    }["useDigitsTrading.useCallback[setMartingaleValue]"], []);
    const clearThresholdResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[clearThresholdResult]": ()=>{
            setThresholdResult(null);
        }
    }["useDigitsTrading.useCallback[clearThresholdResult]"], []);
    const stopAutoTrading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[stopAutoTrading]": ()=>{
            if (!autoSessionRef.current) return;
            autoSessionRef.current.stopRequested = true;
            setAutoTradingScanProgress(null);
            setAutoTradingStatus('stopping');
        }
    }["useDigitsTrading.useCallback[stopAutoTrading]"], []);
    // Reset contract mode to the first option of the selected trade type
    const setTradeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[setTradeType]": (type)=>{
            setTradeTypeRaw(type);
            switch(type){
                case 'matches-differs':
                    setContractMode('DIGITDIFF');
                    break;
                case 'over-under':
                    setContractMode('DIGITOVER');
                    break;
                case 'even-odd':
                    setContractMode('DIGITEVEN');
                    break;
            }
        }
    }["useDigitsTrading.useCallback[setTradeType]"], [
        setContractMode
    ]);
    const useScannerPredictionSeed = activeSymbol?.underlying_symbol === scannerPredictionSeed?.symbol && prices.length < (scannerPredictionSeed?.prices.length ?? 0);
    const predictionPrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[predictionPrices]": ()=>useScannerPredictionSeed ? [
                ...scannerPredictionSeed?.prices ?? [],
                ...prices
            ].slice(-__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_TICK_COUNT"]) : prices
    }["useDigitsTrading.useMemo[predictionPrices]"], [
        prices,
        scannerPredictionSeed,
        useScannerPredictionSeed
    ]);
    const predictionPipSize = useScannerPredictionSeed && scannerPredictionSeed ? scannerPredictionSeed.pipSize : pipSize;
    const digitStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[digitStats]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeDigitStats"])(predictionPrices, predictionPipSize)
    }["useDigitsTrading.useMemo[digitStats]"], [
        predictionPrices,
        predictionPipSize
    ]);
    const lastDigit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[lastDigit]": ()=>{
            if (currentTick) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(currentTick.quote, pipSize);
            }
            if (predictionPrices.length > 0) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(predictionPrices[predictionPrices.length - 1], predictionPipSize);
            }
            return null;
        }
    }["useDigitsTrading.useMemo[lastDigit]"], [
        currentTick,
        predictionPrices,
        predictionPipSize
    ]);
    const { buyContract: buyWithProposal, isBuying, buyResult, buyError, clearBuyResult } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuy"])(tradingWs, tradingIsConnected);
    // Null out params while a buy is in-flight — forces useProposal to unsubscribe
    // the consumed proposal ID. When isBuying flips back to false, the memo returns
    // real params and useProposal re-subscribes to get a fresh proposal.
    const proposalParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDigitsTrading.useMemo[proposalParams]": ()=>{
            if (isBuying || !activeSymbol) return null;
            if (contractMode === 'DIGITDIFF' && selectedDigit === null) return null;
            const stakeNum = parseFloat(stake);
            if (!stakeNum || stakeNum <= 0) return null;
            const barrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractBarrier"])(contractMode, selectedDigit);
            return {
                contractType: contractMode,
                symbol: activeSymbol.underlying_symbol,
                amount: stakeNum,
                duration,
                durationUnit: 't',
                basis: 'stake',
                currency: 'USD',
                ...barrier !== undefined ? {
                    barrier
                } : {}
            };
        }
    }["useDigitsTrading.useMemo[proposalParams]"], [
        activeSymbol,
        contractMode,
        stake,
        duration,
        selectedDigit,
        isBuying
    ]);
    const { proposal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProposal"])(tradingWs, tradingIsConnected, proposalParams);
    const buyContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDigitsTrading.useCallback[buyContract]": async ()=>{
            var _s = __turbopack_context__.k.signature();
            if (autoSessionRef.current) {
                stopAutoTrading();
                return;
            }
            const selectedContractMode = contractMode;
            if (selectedContractMode === 'DIGITMATCH') {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Unsupported scanner contract'), {
                    description: localize('Select Differs, Over 1, Under 8, Even, or Odd before starting the scanner.')
                });
                return;
            }
            const parseTarget = {
                "useDigitsTrading.useCallback[buyContract].parseTarget": (value, label)=>{
                    if (value.trim() === '') return null;
                    const parsed = Number(value);
                    if (!Number.isFinite(parsed) || parsed <= 0) {
                        throw new Error(localize('{{label}} must be greater than zero.', {
                            label
                        }));
                    }
                    return parsed;
                }
            }["useDigitsTrading.useCallback[buyContract].parseTarget"];
            let takeProfitTarget;
            let stopLossTarget;
            const baseStake = Number(stake);
            const multiplier = Number(martingaleValues[martingaleMode]);
            try {
                takeProfitTarget = parseTarget(takeProfit, localize('Take profit'));
                stopLossTarget = parseTarget(stopLoss, localize('Stop loss'));
                if (takeProfitTarget === null && stopLossTarget === null) {
                    throw new Error(localize('Set a take-profit or stop-loss target before starting the market scanner.'));
                }
                if (!Number.isFinite(baseStake) || baseStake <= 0) {
                    throw new Error(localize('Stake must be greater than zero.'));
                }
                if (!Number.isFinite(multiplier) || multiplier < 1) {
                    throw new Error(localize('Martingale multiplier must be at least 1.'));
                }
                if (!tradingWs?.isConnected || !tradingIsConnected || !isAuthenticated) {
                    throw new Error(localize('Log in and connect before starting an automatic trading session.'));
                }
                if (symbols.length === 0) throw new Error(localize('No markets are available to scan.'));
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Risk settings are invalid'), {
                    description: error instanceof Error ? error.message : localize('Check your risk settings and try again.')
                });
                return;
            }
            const session = {
                stopRequested: false
            };
            autoSessionRef.current = session;
            setThresholdResult(null);
            setAutoTradingStatus('scanning');
            if (selectedContractMode === 'DIGITDIFF') setSelectedDigit(null);
            setAutoTradingTradeCount(0);
            setAutoTradingProfit(0);
            setAutoTradingMarket(null);
            setAutoTradingEstimatedWinRate(null);
            setAutoTradingScanProgress(null);
            let sessionProfit = 0;
            let tradeCount = 0;
            let nextStake = baseStake;
            let martingaleProgress = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialMartingaleProgress"]
            };
            let stopReason = '';
            let reachedThreshold = null;
            const currentMarketRef = {
                current: null
            };
            const currentCandidateRef = {
                current: null
            };
            const rejectedCandidates = new Set();
            const skippedNoReturnCandidates = new Set();
            const skippedNegativeEvCandidates = new Set();
            let currentBarrier = selectedDigit ?? 5;
            let scanNumber = 0;
            let latestPrediction = null;
            let candidatesFromCurrentScan = [];
            let nextCandidateIndex = 0;
            const scanForMarket = {
                "useDigitsTrading.useCallback[buyContract].scanForMarket": async ()=>{
                    setAutoTradingStatus('scanning');
                    setAutoTradingMarket(null);
                    setAutoTradingEstimatedWinRate(null);
                    while(!session.stopRequested){
                        const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[buyContract].scanForMarket": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket"]);
                        if (!connected) return null;
                        scanNumber += 1;
                        const eligibleMarkets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScannableMarkets"])(symbols);
                        if (eligibleMarkets.length === 0) {
                            throw new Error(localize('No open, unsuspended markets are available to scan.'));
                        }
                        if (eligibleMarkets.every({
                            "useDigitsTrading.useCallback[buyContract].scanForMarket": (symbol)=>!hasAvailableScanMode(symbol.underlying_symbol, selectedContractMode, rejectedCandidates)
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket"])) {
                            rejectedCandidates.clear();
                        }
                        const totalMarkets = eligibleMarkets.filter({
                            "useDigitsTrading.useCallback[buyContract].scanForMarket": (symbol)=>hasAvailableScanMode(symbol.underlying_symbol, selectedContractMode, rejectedCandidates)
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket"]).length;
                        setAutoTradingScanProgress({
                            phase: 'scanning',
                            countdownSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SCAN_DURATION_SECONDS"],
                            scannedMarkets: 0,
                            totalMarkets,
                            scanNumber,
                            selectedMarket: null,
                            selectedContractMode: null,
                            estimatedWinRate: null,
                            prediction: latestPrediction,
                            skippedNoReturnMarkets: skippedNoReturnCandidates.size,
                            skippedNegativeEvSetups: skippedNegativeEvCandidates.size
                        });
                        let scanFailed = false;
                        const countdown = runMarketScanCountdown({
                            "useDigitsTrading.useCallback[buyContract].scanForMarket.countdown": (countdownSeconds)=>{
                                setAutoTradingScanProgress({
                                    "useDigitsTrading.useCallback[buyContract].scanForMarket.countdown": (progress)=>progress?.phase === 'scanning' ? {
                                            ...progress,
                                            countdownSeconds
                                        } : progress
                                }["useDigitsTrading.useCallback[buyContract].scanForMarket.countdown"]);
                            }
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket.countdown"], {
                            "useDigitsTrading.useCallback[buyContract].scanForMarket.countdown": ()=>session.stopRequested || scanFailed
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket.countdown"]);
                        let candidates;
                        try {
                            candidates = await scanMarkets(tradingWs, symbols, selectedContractMode, {
                                "useDigitsTrading.useCallback[buyContract].scanForMarket": ()=>session.stopRequested
                            }["useDigitsTrading.useCallback[buyContract].scanForMarket"], rejectedCandidates, {
                                "useDigitsTrading.useCallback[buyContract].scanForMarket": (scannedMarkets, marketCount)=>{
                                    setAutoTradingScanProgress({
                                        "useDigitsTrading.useCallback[buyContract].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                                ...progress,
                                                scannedMarkets,
                                                totalMarkets: marketCount
                                            } : progress
                                    }["useDigitsTrading.useCallback[buyContract].scanForMarket"]);
                                }
                            }["useDigitsTrading.useCallback[buyContract].scanForMarket"]);
                        } catch (error) {
                            scanFailed = true;
                            await countdown;
                            throw error;
                        }
                        const countdownComplete = await countdown;
                        if (!countdownComplete || session.stopRequested) return null;
                        if (candidates?.length) {
                            const leadingCandidate = candidates[0];
                            if (!leadingCandidate) continue;
                            const prediction = getCandidatePrediction(leadingCandidate, scanNumber);
                            latestPrediction = prediction;
                            setAutoTradingScanProgress({
                                "useDigitsTrading.useCallback[buyContract].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                        ...progress,
                                        prediction
                                    } : progress
                            }["useDigitsTrading.useCallback[buyContract].scanForMarket"]);
                            return candidates;
                        }
                        latestPrediction = null;
                        setAutoTradingScanProgress({
                            "useDigitsTrading.useCallback[buyContract].scanForMarket": (progress)=>progress?.phase === 'scanning' ? {
                                    ...progress,
                                    prediction: null
                                } : progress
                        }["useDigitsTrading.useCallback[buyContract].scanForMarket"]);
                        if (rejectedCandidates.size > 0) rejectedCandidates.clear();
                    }
                    return null;
                }
            }["useDigitsTrading.useCallback[buyContract].scanForMarket"];
            const selectNextCandidate = {
                "useDigitsTrading.useCallback[buyContract].selectNextCandidate": async ()=>{
                    while(!session.stopRequested){
                        while(nextCandidateIndex < candidatesFromCurrentScan.length){
                            const candidate = candidatesFromCurrentScan[nextCandidateIndex];
                            nextCandidateIndex += 1;
                            if (!candidate) continue;
                            const candidateKey = getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode);
                            if (!rejectedCandidates.has(candidateKey) && candidate.eligibleForTrading) {
                                return candidate;
                            }
                        }
                        const nextScanCandidates = await scanForMarket();
                        if (!nextScanCandidates) return null;
                        candidatesFromCurrentScan = nextScanCandidates;
                        nextCandidateIndex = 0;
                    }
                    return null;
                }
            }["useDigitsTrading.useCallback[buyContract].selectNextCandidate"];
            const useScannedMarket = {
                "useDigitsTrading.useCallback[buyContract].useScannedMarket": (candidate)=>{
                    const prediction = getCandidatePrediction(candidate, scanNumber);
                    latestPrediction = prediction;
                    currentCandidateRef.current = candidate;
                    currentMarketRef.current = candidate.symbol;
                    setContractMode(candidate.contractMode);
                    setTradeTypeRaw(candidate.contractMode === 'DIGITOVER' || candidate.contractMode === 'DIGITUNDER' ? 'over-under' : candidate.contractMode === 'DIGITEVEN' || candidate.contractMode === 'DIGITODD' ? 'even-odd' : 'matches-differs');
                    const marketName = candidate.symbol.underlying_symbol_name || candidate.symbol.underlying_symbol;
                    if (candidate.barrier !== null) {
                        currentBarrier = candidate.barrier;
                        setSelectedDigit(candidate.barrier);
                    }
                    setScannerPredictionSeed({
                        symbol: candidate.symbol.underlying_symbol,
                        pipSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(candidate.symbol.pip_size),
                        prices: candidate.predictionPrices
                    });
                    selectSymbolRef.current(candidate.symbol.underlying_symbol);
                    setAutoTradingMarket(marketName);
                    setAutoTradingEstimatedWinRate(candidate.estimatedWinRate);
                    setAutoTradingScanProgress({
                        "useDigitsTrading.useCallback[buyContract].useScannedMarket": (progress)=>progress ? {
                                ...progress,
                                phase: 'selected',
                                countdownSeconds: 0,
                                selectedMarket: marketName,
                                selectedContractMode: candidate.contractMode,
                                estimatedWinRate: candidate.estimatedWinRate,
                                prediction
                            } : progress
                    }["useDigitsTrading.useCallback[buyContract].useScannedMarket"]);
                    setAutoTradingStatus('running');
                }
            }["useDigitsTrading.useCallback[buyContract].useScannedMarket"];
            const rejectCandidateAndRescan = {
                "useDigitsTrading.useCallback[buyContract].rejectCandidateAndRescan": async (candidate, reason)=>{
                    _s();
                    const candidateKey = getScanCandidateKey(candidate.symbol.underlying_symbol, candidate.contractMode);
                    rejectedCandidates.add(candidateKey);
                    if (reason === 'no-return') {
                        skippedNoReturnCandidates.add(candidateKey);
                    } else {
                        skippedNegativeEvCandidates.add(candidateKey);
                    }
                    setAutoTradingScanProgress({
                        "useDigitsTrading.useCallback[buyContract].rejectCandidateAndRescan": (progress)=>progress ? {
                                ...progress,
                                skippedNoReturnMarkets: skippedNoReturnCandidates.size,
                                skippedNegativeEvSetups: skippedNegativeEvCandidates.size
                            } : progress
                    }["useDigitsTrading.useCallback[buyContract].rejectCandidateAndRescan"]);
                    const nextCandidate = await selectNextCandidate();
                    if (!nextCandidate) return false;
                    useScannedMarket(nextCandidate);
                    return true;
                }
            }["useDigitsTrading.useCallback[buyContract].rejectCandidateAndRescan"];
            _s(rejectCandidateAndRescan, "ula/pbVF7RVBM86RQltSfZ+ZEAg=", false, {
                "useDigitsTrading.useCallback[buyContract]": function() {
                    return [
                        useScannedMarket
                    ];
                }
            }["useDigitsTrading.useCallback[buyContract]"]);
            try {
                const firstMarket = await selectNextCandidate();
                if (!firstMarket) {
                    stopReason = localize('Market scan stopped before a qualifying market was found.');
                } else {
                    useScannedMarket(firstMarket);
                }
                while(!session.stopRequested){
                    const market = currentMarketRef.current;
                    const candidate = currentCandidateRef.current;
                    if (!market || !candidate) {
                        throw new Error(localize('The market scanner did not select a market.'));
                    }
                    const connected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                        "useDigitsTrading.useCallback[buyContract]": ()=>session.stopRequested
                    }["useDigitsTrading.useCallback[buyContract]"]);
                    if (!connected) break;
                    const barrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractBarrier"])(candidate.contractMode, currentBarrier);
                    const proposalParams = {
                        proposal: 1,
                        amount: nextStake,
                        basis: 'stake',
                        contract_type: candidate.contractMode,
                        currency: 'USD',
                        underlying_symbol: market.underlying_symbol,
                        duration,
                        duration_unit: 't',
                        ...barrier !== undefined ? {
                            barrier
                        } : {}
                    };
                    let proposalResponse;
                    let connectionDropped = false;
                    const removeConnectionListener = tradingWs.onConnectionStateChange({
                        "useDigitsTrading.useCallback[buyContract].removeConnectionListener": (isConnected)=>{
                            if (!isConnected) connectionDropped = true;
                        }
                    }["useDigitsTrading.useCallback[buyContract].removeConnectionListener"]);
                    try {
                        proposalResponse = await tradingWs.send(proposalParams);
                    } catch (error) {
                        if (session.stopRequested) break;
                        if (isNoReturnContractError(error)) {
                            const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                            if (!nextCandidateFound) break;
                            continue;
                        }
                        if (!connectionDropped && tradingWs.isConnected) throw error;
                        const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[buyContract]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[buyContract]"]);
                        if (!reconnected) break;
                        continue;
                    } finally{
                        removeConnectionListener();
                    }
                    if (session.stopRequested) break;
                    const quote = proposalResponse.proposal;
                    if (!quote?.id || !Number.isFinite(quote.ask_price) || quote.ask_price <= 0) {
                        throw new Error(localize('Could not get a valid proposal for the next trade.'));
                    }
                    if (!Number.isFinite(quote.payout)) {
                        throw new Error(localize('The proposal did not include a valid potential payout.'));
                    }
                    if (quote.payout <= quote.ask_price) {
                        const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                        if (!nextCandidateFound) break;
                        continue;
                    }
                    const expectedProfit = candidate.estimatedWinRate * quote.payout - quote.ask_price;
                    if (expectedProfit <= 0) {
                        const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'negative-ev');
                        if (!nextCandidateFound) break;
                        continue;
                    }
                    if (!tradingWs.isConnected) {
                        const reconnected = await waitForConnection(tradingWs, Date.now() + CONTRACT_SETTLEMENT_TIMEOUT_MS, {
                            "useDigitsTrading.useCallback[buyContract]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[buyContract]"]);
                        if (!reconnected) break;
                        continue;
                    }
                    let connectionDroppedDuringPurchase = false;
                    const removePurchaseConnectionListener = tradingWs.onConnectionStateChange({
                        "useDigitsTrading.useCallback[buyContract].removePurchaseConnectionListener": (isConnected)=>{
                            if (!isConnected) connectionDroppedDuringPurchase = true;
                        }
                    }["useDigitsTrading.useCallback[buyContract].removePurchaseConnectionListener"]);
                    let purchase;
                    let purchaseError = null;
                    try {
                        purchase = await buyWithProposal({
                            id: quote.id,
                            askPrice: quote.ask_price,
                            payout: quote.payout,
                            longcode: quote.longcode,
                            minStake: Number(quote.validation_params?.stake?.min ?? 0),
                            maxPayout: Number(quote.validation_params?.payout?.max ?? 0)
                        }, {
                            "useDigitsTrading.useCallback[buyContract]": (error)=>{
                                purchaseError = error;
                                return isNoReturnContractError(error);
                            }
                        }["useDigitsTrading.useCallback[buyContract]"]);
                    } finally{
                        removePurchaseConnectionListener();
                    }
                    if (!purchase) {
                        if (isNoReturnContractError(purchaseError)) {
                            const nextCandidateFound = await rejectCandidateAndRescan(candidate, 'no-return');
                            if (!nextCandidateFound) break;
                            continue;
                        }
                        if (connectionDroppedDuringPurchase || !tradingWs.isConnected) {
                            throw new Error(localize('The connection was interrupted while confirming a purchase. Check your transactions before starting another session.'));
                        }
                        throw new Error(localize('Trade purchase failed. Auto-trading was stopped.'));
                    }
                    clearBuyResult();
                    setAutoTradingScanProgress(null);
                    tradeCount += 1;
                    setAutoTradingTradeCount(tradeCount);
                    const settledProfit = await waitForContractSettlement(tradingWs, purchase.contractId);
                    sessionProfit = Math.round((sessionProfit + settledProfit) * 100) / 100;
                    setAutoTradingProfit(sessionProfit);
                    if (takeProfitTarget !== null && sessionProfit >= takeProfitTarget) {
                        stopReason = localize('Take-profit target reached.');
                        reachedThreshold = {
                            outcome: 'take-profit',
                            profit: sessionProfit,
                            market: market.underlying_symbol_name || market.underlying_symbol
                        };
                        setThresholdResult(reachedThreshold);
                        break;
                    }
                    if (stopLossTarget !== null && sessionProfit <= -stopLossTarget) {
                        stopReason = localize('Stop-loss limit reached.');
                        reachedThreshold = {
                            outcome: 'stop-loss',
                            profit: sessionProfit,
                            market: market.underlying_symbol_name || market.underlying_symbol
                        };
                        setThresholdResult(reachedThreshold);
                        break;
                    }
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$martingale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMartingaleStake"])(baseStake, multiplier, settledProfit, martingaleProgress);
                    nextStake = next.stake;
                    if (!Number.isFinite(nextStake) || nextStake <= 0) {
                        throw new Error(localize('Martingale stake exceeded the supported numeric range. Auto-trading was stopped.'));
                    }
                    martingaleProgress = next.progress;
                    if (!session.stopRequested) {
                        const recentPrices = await fetchTickHistory(tradingWs, market.underlying_symbol, 9, {
                            "useDigitsTrading.useCallback[buyContract]": ()=>session.stopRequested
                        }["useDigitsTrading.useCallback[buyContract]"]);
                        if (session.stopRequested) break;
                        if (recentPrices && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$market$2d$scanner$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPriceReversalRisk"])(recentPrices)) {
                            candidatesFromCurrentScan = [];
                            nextCandidateIndex = 0;
                            const nextMarket = await selectNextCandidate();
                            if (!nextMarket) break;
                            useScannedMarket(nextMarket);
                        }
                    }
                }
                if (session.stopRequested) {
                    stopReason = localize('Auto-trading stopped after the current contract settled.');
                } else if (!stopReason && tradeCount === 0) {
                    stopReason = localize('Auto-trading stopped before the first trade.');
                }
                if (!reachedThreshold) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(localize('Trading session ended'), {
                        description: localize('{{reason}} Final session P/L: {{profit}} USD across {{count}} trades.', {
                            reason: stopReason,
                            profit: sessionProfit.toFixed(2),
                            count: tradeCount
                        })
                    });
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : localize('Auto-trading stopped unexpectedly.');
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(localize('Auto-trading stopped'), {
                    description: message
                });
            } finally{
                autoSessionRef.current = null;
                setAutoTradingScanProgress(null);
                setAutoTradingStatus('idle');
            }
        }
    }["useDigitsTrading.useCallback[buyContract]"], [
        buyWithProposal,
        clearBuyResult,
        duration,
        isAuthenticated,
        localize,
        martingaleMode,
        martingaleValues,
        setContractMode,
        selectedDigit,
        symbols,
        stake,
        stopAutoTrading,
        stopLoss,
        takeProfit,
        tradingIsConnected,
        tradingWs
    ]);
    return {
        isConnected,
        isLoading,
        error,
        symbols,
        activeSymbol,
        selectSymbol,
        currentTick,
        lastDigit,
        digitStats,
        tradeType,
        setTradeType,
        contractMode,
        setContractMode,
        selectedDigit,
        contractsAvailable,
        pipSize,
        stake,
        setStake,
        duration,
        setDuration,
        durationLimits,
        defaultStake,
        proposal,
        isProposalLoading: isConnected && proposalParams !== null && proposal === null,
        buyContract,
        isBuying,
        buyResult,
        buyError,
        clearBuyResult,
        openPositions,
        closedPositions,
        sellContract,
        sellingId,
        sellError,
        clearSellError,
        takeProfit,
        setTakeProfit,
        stopLoss,
        setStopLoss,
        martingaleMode,
        setMartingaleMode,
        martingaleValues,
        setMartingaleValue,
        thresholdResult,
        clearThresholdResult,
        autoTradingStatus,
        autoTradingTradeCount,
        autoTradingProfit,
        autoTradingMarket,
        autoTradingEstimatedWinRate,
        autoTradingScanProgress,
        stopAutoTrading
    };
}
_s(useDigitsTrading, "gard2FrR4GhlscgfC5l4vYqYNZc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$base$2d$trading$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBaseTrading"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useBuy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBuy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$react$2f$useProposal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProposal"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-is-mobile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/** Matches Tailwind `lg` breakpoint — below this is considered mobile layout. */ const MOBILE_MEDIA_QUERY = '(max-width: 1023px)';
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsMobile.useEffect": ()=>{
            const mq = window.matchMedia(MOBILE_MEDIA_QUERY);
            const sync = {
                "useIsMobile.useEffect.sync": ()=>setIsMobile(mq.matches)
            }["useIsMobile.useEffect.sync"];
            sync();
            mq.addEventListener('change', sync);
            return ({
                "useIsMobile.useEffect": ()=>mq.removeEventListener('change', sync)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return isMobile;
}
_s(useIsMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-open-positions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOpenPositions",
    ()=>useOpenPositions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
// How long (ms) to keep a just-closed position in state so SmartCharts can
// render the exit spot and P&L label markers before removing it.
const CLOSED_POSITION_TTL_MS = 1500;
function useOpenPositions(ws, isConnected, isAuthenticated) {
    _s();
    const [positions, setPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Track pending removal timers keyed by contract_id
    const removalTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Track whether we have an active subscription so we can forget_all on cleanup
    const isSubscribedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const scheduleRemoval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenPositions.useCallback[scheduleRemoval]": (contractId)=>{
            // Cancel any existing timer for this contract first
            const existing = removalTimers.current.get(contractId);
            if (existing) clearTimeout(existing);
            const timer = setTimeout({
                "useOpenPositions.useCallback[scheduleRemoval].timer": ()=>{
                    setPositions({
                        "useOpenPositions.useCallback[scheduleRemoval].timer": (prev)=>prev.filter({
                                "useOpenPositions.useCallback[scheduleRemoval].timer": (p)=>p.contract_id !== contractId
                            }["useOpenPositions.useCallback[scheduleRemoval].timer"])
                    }["useOpenPositions.useCallback[scheduleRemoval].timer"]);
                    removalTimers.current.delete(contractId);
                }
            }["useOpenPositions.useCallback[scheduleRemoval].timer"], CLOSED_POSITION_TTL_MS);
            removalTimers.current.set(contractId, timer);
        }
    }["useOpenPositions.useCallback[scheduleRemoval]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpenPositions.useEffect": ()=>{
            if (!ws || !isConnected || !isAuthenticated) {
                return ({
                    "useOpenPositions.useEffect": ()=>{
                        setPositions([]);
                    }
                })["useOpenPositions.useEffect"];
            }
            // Capture ref value at effect time so the cleanup closure has a stable reference
            const timers = removalTimers.current;
            // Use global message listener — each open contract has its own subscription.id
            // so we can't use ws.subscribe() for all of them; onMessage catches everything.
            const unsubscribeListener = ws.onMessage({
                "useOpenPositions.useEffect.unsubscribeListener": (data)=>{
                    if (data.msg_type !== 'proposal_open_contract') return;
                    const contract = data.proposal_open_contract;
                    if (!contract) return;
                    const isClosed = !!contract.is_sold || !!contract.is_expired || contract.status !== 'open';
                    setPositions({
                        "useOpenPositions.useEffect.unsubscribeListener": (prev)=>{
                            const map = new Map(prev.map({
                                "useOpenPositions.useEffect.unsubscribeListener": (p)=>[
                                        p.contract_id,
                                        p
                                    ]
                            }["useOpenPositions.useEffect.unsubscribeListener"]));
                            // Always upsert the latest data (including exit_spot/exit_spot_time on close)
                            map.set(contract.contract_id, contract);
                            return Array.from(map.values());
                        }
                    }["useOpenPositions.useEffect.unsubscribeListener"]);
                    if (isClosed) {
                        // Schedule removal after TTL so exit markers are briefly visible
                        scheduleRemoval(contract.contract_id);
                    }
                }
            }["useOpenPositions.useEffect.unsubscribeListener"]);
            // Kick off subscription — server sends one message per open contract,
            // each with its own subscription.id for live updates.
            ws.send({
                proposal_open_contract: 1,
                subscribe: 1
            }).then({
                "useOpenPositions.useEffect": ()=>{
                    isSubscribedRef.current = true;
                }
            }["useOpenPositions.useEffect"]).catch({
                "useOpenPositions.useEffect": ()=>{}
            }["useOpenPositions.useEffect"]);
            return ({
                "useOpenPositions.useEffect": ()=>{
                    unsubscribeListener();
                    // Clear all pending removal timers on cleanup
                    timers.forEach({
                        "useOpenPositions.useEffect": (t)=>clearTimeout(t)
                    }["useOpenPositions.useEffect"]);
                    timers.clear();
                    setPositions([]);
                    // Cancel all open-contract streams on the server so the next mount
                    // can re-subscribe without hitting AlreadySubscribed.
                    if (isSubscribedRef.current && ws.isConnected) {
                        ws.send({
                            forget_all: 'proposal_open_contract'
                        }).catch({
                            "useOpenPositions.useEffect": ()=>{}
                        }["useOpenPositions.useEffect"]);
                    }
                    isSubscribedRef.current = false;
                }
            })["useOpenPositions.useEffect"];
        }
    }["useOpenPositions.useEffect"], [
        ws,
        isConnected,
        isAuthenticated,
        scheduleRemoval
    ]);
    return {
        positions
    };
}
_s(useOpenPositions, "lZoxW2OQ70zpqPN8pFqoiCnuFC4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-rearrange-drag.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRearrangeDrag",
    ()=>useRearrangeDrag
]);
/**
 * Reusable drag-to-reorder hook for the no-code builders' "rearrange mode".
 *
 * Template-agnostic: it works on any list of string keys (a template's
 * `config.order`). The builder dashboard toggles rearrange mode via a
 * `SET_REARRANGE_MODE` postMessage; while it's on, each layout block becomes
 * draggable and dropping one onto another reorders the list. The new order is
 * reported back through `onReorder` (which the /edit route forwards to the
 * dashboard as a `REORDER` message).
 *
 * Uses native HTML5 drag-and-drop (no library) — spread `getItemProps(key)`
 * onto each draggable block. `draggingKey`/`overKey` drive visual feedback.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useRearrangeDrag(order, onReorder) {
    _s();
    const [draggingKey, setDraggingKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [overKey, setOverKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const move = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRearrangeDrag.useCallback[move]": (from, to)=>{
            if (from === to) return;
            const next = [
                ...order
            ];
            const fromIdx = next.indexOf(from);
            const toIdx = next.indexOf(to);
            if (fromIdx < 0 || toIdx < 0) return;
            next.splice(fromIdx, 1);
            next.splice(toIdx, 0, from);
            onReorder(next);
        }
    }["useRearrangeDrag.useCallback[move]"], [
        order,
        onReorder
    ]);
    const getItemProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRearrangeDrag.useCallback[getItemProps]": (key)=>({
                draggable: true,
                onDragStart: ({
                    "useRearrangeDrag.useCallback[getItemProps]": (event)=>{
                        setDraggingKey(key);
                        event.dataTransfer.effectAllowed = 'move';
                        // setData is required for drag to work in Firefox.
                        try {
                            event.dataTransfer.setData('text/plain', key);
                        } catch  {
                        /* ignore */ }
                    }
                })["useRearrangeDrag.useCallback[getItemProps]"],
                onDragOver: ({
                    "useRearrangeDrag.useCallback[getItemProps]": (event)=>{
                        // A drag that didn't start in this list (e.g. the other column of a
                        // split desktop layout, or content from outside the page) has no valid
                        // drop target here. Leaving dragover uncancelled tells the browser the
                        // drop is not allowed, so the cursor shows the native not-allowed
                        // feedback instead of a "move" affordance that would silently no-op.
                        if (draggingKey === null) {
                            event.dataTransfer.dropEffect = 'none';
                            return;
                        }
                        event.preventDefault();
                        event.dataTransfer.dropEffect = 'move';
                        setOverKey({
                            "useRearrangeDrag.useCallback[getItemProps]": (prev)=>prev === key ? prev : key
                        }["useRearrangeDrag.useCallback[getItemProps]"]);
                    }
                })["useRearrangeDrag.useCallback[getItemProps]"],
                onDragEnter: ({
                    "useRearrangeDrag.useCallback[getItemProps]": (event)=>{
                        if (draggingKey === null) return;
                        event.preventDefault();
                        setOverKey({
                            "useRearrangeDrag.useCallback[getItemProps]": (prev)=>prev === key ? prev : key
                        }["useRearrangeDrag.useCallback[getItemProps]"]);
                    }
                })["useRearrangeDrag.useCallback[getItemProps]"],
                onDrop: ({
                    "useRearrangeDrag.useCallback[getItemProps]": (event)=>{
                        event.preventDefault();
                        setDraggingKey({
                            "useRearrangeDrag.useCallback[getItemProps]": (dragged)=>{
                                if (dragged && dragged !== key) move(dragged, key);
                                return null;
                            }
                        }["useRearrangeDrag.useCallback[getItemProps]"]);
                        setOverKey(null);
                    }
                })["useRearrangeDrag.useCallback[getItemProps]"],
                onDragEnd: ({
                    "useRearrangeDrag.useCallback[getItemProps]": ()=>{
                        setDraggingKey(null);
                        setOverKey(null);
                    }
                })["useRearrangeDrag.useCallback[getItemProps]"]
            })
    }["useRearrangeDrag.useCallback[getItemProps]"], [
        move,
        draggingKey
    ]);
    return {
        draggingKey,
        overKey: draggingKey !== null ? overKey : null,
        isDragging: draggingKey !== null,
        getItemProps
    };
}
_s(useRearrangeDrag, "a2jODC19LsGd6RwCyOkJy3e2A1g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-scroll-overflow.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollOverflow",
    ()=>useScrollOverflow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useScrollOverflow() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [overflow, setOverflow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        canScrollLeft: false,
        canScrollRight: false
    });
    const measure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScrollOverflow.useCallback[measure]": ()=>{
            const el = ref.current;
            if (!el) return;
            const { scrollLeft, scrollWidth, clientWidth } = el;
            // Sub-pixel layout means scrollLeft rarely lands exactly on either bound, so
            // a 1px tolerance keeps the affordance from flickering at rest.
            const maxScroll = scrollWidth - clientWidth;
            setOverflow({
                canScrollLeft: scrollLeft > 1,
                canScrollRight: scrollLeft < maxScroll - 1
            });
        }
    }["useScrollOverflow.useCallback[measure]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollOverflow.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            measure();
            el.addEventListener('scroll', measure, {
                passive: true
            });
            // Re-measure when the box or its contents change size — a language switch
            // swaps the labels without remounting, and the viewport can be resized.
            // ResizeObserver is absent in some test environments, so fall back to the
            // window resize event rather than throwing.
            if (typeof ResizeObserver === 'undefined') {
                window.addEventListener('resize', measure);
                return ({
                    "useScrollOverflow.useEffect": ()=>{
                        el.removeEventListener('scroll', measure);
                        window.removeEventListener('resize', measure);
                    }
                })["useScrollOverflow.useEffect"];
            }
            const ro = new ResizeObserver(measure);
            ro.observe(el);
            // The scrolling box keeps its width while the content inside it grows, so
            // the content has to be observed too.
            if (el.firstElementChild) ro.observe(el.firstElementChild);
            return ({
                "useScrollOverflow.useEffect": ()=>{
                    el.removeEventListener('scroll', measure);
                    ro.disconnect();
                }
            })["useScrollOverflow.useEffect"];
        }
    }["useScrollOverflow.useEffect"], [
        measure
    ]);
    return {
        ref,
        ...overflow,
        measure
    };
}
_s(useScrollOverflow, "2dX5cAl1cLJMYNYtPeV6RAzdWdM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-sell-contract.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSellContract",
    ()=>useSellContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/custom/i18n-provider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useSellContract(ws, isConnected) {
    _s();
    const { localize } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"])();
    const [sellingId, setSellingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sellError, setSellError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearSellError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSellContract.useCallback[clearSellError]": ()=>setSellError(null)
    }["useSellContract.useCallback[clearSellError]"], []);
    const sellContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSellContract.useCallback[sellContract]": async (contractId, bidPrice)=>{
            if (!ws || !isConnected) return;
            setSellingId(contractId);
            setSellError(null);
            try {
                await ws.send({
                    sell: contractId,
                    price: bidPrice
                });
            } catch (err) {
                // Prefer API/Error message; localise only the app-authored fallback.
                setSellError(err instanceof Error ? err.message : localize('Sell failed'));
            } finally{
                setSellingId(null);
            }
        }
    }["useSellContract.useCallback[sellContract]"], [
        ws,
        isConnected,
        localize
    ]);
    return {
        sellContract,
        sellingId,
        sellError,
        clearSellError
    };
}
_s(useSellContract, "aExFBbKZaDB+YgMgvauRQFJg/sg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$custom$2f$i18n$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppTranslations"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-session-transactions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionTransactions",
    ()=>useSessionTransactions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/position-amounts.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function isOpenPosition(position) {
    return !position.is_sold && !position.is_expired && position.status === 'open';
}
function getPositionLastDigit(position, pipSize, isClosed) {
    if (isClosed && typeof position.exit_spot === 'number' && Number.isFinite(position.exit_spot)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(position.exit_spot, pipSize);
    }
    const lastTick = position.tick_stream?.[position.tick_stream.length - 1];
    if (lastTick) {
        const displayedDigit = /(\d)\D*$/.exec(lastTick.tick_display_value)?.[1];
        if (displayedDigit !== undefined) return Number(displayedDigit);
        if (Number.isFinite(lastTick.tick)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(lastTick.tick, pipSize);
    }
    if (typeof position.exit_spot === 'number' && Number.isFinite(position.exit_spot)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(position.exit_spot, pipSize);
    }
    return null;
}
function useSessionTransactions(openPositions, symbols, activeAccountId, currentPipSize) {
    _s();
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const sessionStartedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Math.floor(Date.now() / 1000));
    const ignoredContractIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const previousAccountId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeAccountId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSessionTransactions.useEffect": ()=>{
            if (previousAccountId.current === activeAccountId) return;
            previousAccountId.current = activeAccountId;
            sessionStartedAt.current = Math.floor(Date.now() / 1000);
            ignoredContractIds.current.clear();
            setTransactions([]);
        }
    }["useSessionTransactions.useEffect"], [
        activeAccountId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSessionTransactions.useEffect": ()=>{
            setTransactions({
                "useSessionTransactions.useEffect": (current)=>{
                    const byId = new Map(current.map({
                        "useSessionTransactions.useEffect": (transaction)=>[
                                transaction.contractId,
                                transaction
                            ]
                    }["useSessionTransactions.useEffect"]));
                    for (const position of openPositions){
                        if (position.date_start < sessionStartedAt.current || ignoredContractIds.current.has(position.contract_id)) {
                            continue;
                        }
                        const symbol = symbols.find({
                            "useSessionTransactions.useEffect.symbol": (item)=>item.underlying_symbol === position.underlying_symbol
                        }["useSessionTransactions.useEffect.symbol"]);
                        const positionPipSize = symbol ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(symbol.pip_size) : currentPipSize;
                        const isOpen = isOpenPosition(position);
                        byId.set(position.contract_id, {
                            contractId: position.contract_id,
                            contractType: position.contract_type,
                            symbol: position.underlying_symbol,
                            stake: position.buy_price,
                            value: position.bid_price,
                            profit: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$position$2d$amounts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPositionProfit"])(position),
                            currency: position.currency,
                            timestamp: isOpen ? position.date_start : position.exit_spot_time ?? position.date_expiry ?? position.date_start,
                            status: isOpen ? 'open' : 'closed',
                            lastDigit: getPositionLastDigit(position, positionPipSize, !isOpen)
                        });
                    }
                    return Array.from(byId.values()).sort({
                        "useSessionTransactions.useEffect": (left, right)=>right.timestamp - left.timestamp
                    }["useSessionTransactions.useEffect"]);
                }
            }["useSessionTransactions.useEffect"]);
        }
    }["useSessionTransactions.useEffect"], [
        openPositions,
        symbols,
        currentPipSize
    ]);
    const resetTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSessionTransactions.useCallback[resetTransactions]": ()=>{
            for (const transaction of transactions){
                ignoredContractIds.current.add(transaction.contractId);
            }
            for (const position of openPositions){
                ignoredContractIds.current.add(position.contract_id);
            }
            setTransactions([]);
        }
    }["useSessionTransactions.useCallback[resetTransactions]"], [
        openPositions,
        transactions
    ]);
    return {
        transactions,
        resetTransactions
    };
}
_s(useSessionTransactions, "o2LcQRE1ZJxwjKdvN93fCwCSlBs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/active-symbols-display-names.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Static display name mappings for Deriv active_symbols API keys.
 *
 * market_display_name, submarket_display_name, and subgroup_display_name are
 * optional fields in the active_symbols response and may be absent for some
 * symbols or configurations. These maps provide reliable fallbacks so
 * SmartCharts' market browser and the positions table always show correct
 * labels (e.g. "Gold Basket" instead of "WLDXAU",
 * "Commodities Basket" instead of "commodity_basket").
 *
 * Source: deriv-com/derivatives-charts src/config/displayNames.ts
 */ // ---------------------------------------------------------------------------
// Symbol display names
// Mapping of raw underlying symbol codes → human-readable names.
// Used in the positions table/cards where only the raw symbol code is available.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "MARKET_DISPLAY_NAMES",
    ()=>MARKET_DISPLAY_NAMES,
    "SUBGROUP_DISPLAY_NAMES",
    ()=>SUBGROUP_DISPLAY_NAMES,
    "SUBMARKET_DISPLAY_NAMES",
    ()=>SUBMARKET_DISPLAY_NAMES,
    "SYMBOL_DISPLAY_NAMES",
    ()=>SYMBOL_DISPLAY_NAMES,
    "getMarketDisplayName",
    ()=>getMarketDisplayName,
    "getSubgroupDisplayName",
    ()=>getSubgroupDisplayName,
    "getSubmarketDisplayName",
    ()=>getSubmarketDisplayName,
    "getSymbolDisplayName",
    ()=>getSymbolDisplayName
]);
const SYMBOL_DISPLAY_NAMES = {
    // Major Pairs
    frxAUDJPY: 'AUD/JPY',
    frxAUDUSD: 'AUD/USD',
    frxEURAUD: 'EUR/AUD',
    frxEURCAD: 'EUR/CAD',
    frxEURCHF: 'EUR/CHF',
    frxEURGBP: 'EUR/GBP',
    frxEURJPY: 'EUR/JPY',
    frxEURUSD: 'EUR/USD',
    frxGBPAUD: 'GBP/AUD',
    frxGBPJPY: 'GBP/JPY',
    frxGBPNOK: 'GBP/NOK',
    frxgbpnok: 'GBP/NOK',
    frxGBPUSD: 'GBP/USD',
    frxUSDCAD: 'USD/CAD',
    frxUSDCHF: 'USD/CHF',
    frxUSDJPY: 'USD/JPY',
    frxUSDNOK: 'USD/NOK',
    frxusdnok: 'USD/NOK',
    frxUSDSEK: 'USD/SEK',
    frxusdsek: 'USD/SEK',
    // Minor Pairs
    frxGBPPLN: 'GBP/PLN',
    frxgbppln: 'GBP/PLN',
    frxAUDCAD: 'AUD/CAD',
    frxAUDCHF: 'AUD/CHF',
    frxAUDNZD: 'AUD/NZD',
    frxEURNZD: 'EUR/NZD',
    frxGBPCAD: 'GBP/CAD',
    frxGBPCHF: 'GBP/CHF',
    frxGBPNZD: 'GBP/NZD',
    frxNZDJPY: 'NZD/JPY',
    frxNZDUSD: 'NZD/USD',
    frxUSDMXN: 'USD/MXN',
    frxUSDPLN: 'USD/PLN',
    frxCADJPY: 'CAD/JPY',
    frxCHFJPY: 'CHF/JPY',
    frxCADCHF: 'CAD/CHF',
    frxNZDCAD: 'NZD/CAD',
    frxNZDCHF: 'NZD/CHF',
    // Basket Indices
    WLDXAU: 'Gold Basket',
    WLDAUD: 'AUD Basket',
    WLDEUR: 'EUR Basket',
    WLDGBP: 'GBP Basket',
    WLDUSD: 'USD Basket',
    // Continuous Indices — Volatility
    R_10: 'Volatility 10 Index',
    R_25: 'Volatility 25 Index',
    R_50: 'Volatility 50 Index',
    R_75: 'Volatility 75 Index',
    R_100: 'Volatility 100 Index',
    '1HZ10V': 'Volatility 10 (1s) Index',
    '1HZ25V': 'Volatility 25 (1s) Index',
    '1HZ50V': 'Volatility 50 (1s) Index',
    '1HZ75V': 'Volatility 75 (1s) Index',
    '1HZ100V': 'Volatility 100 (1s) Index',
    '1HZ150V': 'Volatility 150 (1s) Index',
    '1HZ200V': 'Volatility 200 (1s) Index',
    '1HZ250V': 'Volatility 250 (1s) Index',
    '1HZ300V': 'Volatility 300 (1s) Index',
    // Crash/Boom Indices
    BOOM250: 'Boom 250 Index',
    BOOM300N: 'Boom 300 Index',
    BOOM500: 'Boom 500 Index',
    BOOM600: 'Boom 600 Index',
    BOOM900: 'Boom 900 Index',
    BOOM1000: 'Boom 1000 Index',
    CRASH250: 'Crash 250 Index',
    CRASH300N: 'Crash 300 Index',
    CRASH500: 'Crash 500 Index',
    CRASH600: 'Crash 600 Index',
    CRASH900: 'Crash 900 Index',
    CRASH1000: 'Crash 1000 Index',
    // Daily Reset Indices
    RDBEAR: 'Bear Market Index',
    RDBULL: 'Bull Market Index',
    RDBEAR10: 'Bear Market 10 Index',
    RDBULL10: 'Bull Market 10 Index',
    RDBEAR25: 'Bear Market 25 Index',
    RDBULL25: 'Bull Market 25 Index',
    // Jump Indices
    JD10: 'Jump 10 Index',
    JD25: 'Jump 25 Index',
    JD50: 'Jump 50 Index',
    JD75: 'Jump 75 Index',
    JD100: 'Jump 100 Index',
    JD200: 'Jump 200 Index',
    JD300: 'Jump 300 Index',
    // Step Indices
    stpRNG: 'Step Index 100',
    stpRNG2: 'Step Index 200',
    stpRNG3: 'Step Index 300',
    stpRNG4: 'Step Index 400',
    stpRNG5: 'Step Index 500',
    STPIDX100: 'Step Index 100',
    STPIDX200: 'Step Index 200',
    STPIDX300: 'Step Index 300',
    STPIDX400: 'Step Index 400',
    STPIDX500: 'Step Index 500',
    // Stock Indices — Americas
    OTC_SPC: 'US 500',
    OTC_NDX: 'US Tech 100',
    OTC_DJI: 'Wall Street 30',
    // Stock Indices — Asia/Oceania
    OTC_AS51: 'Australia 200',
    OTC_HSI: 'Hong Kong 50',
    OTC_IBEX35: 'Spain 35',
    OTC_N225: 'Japan 225',
    // Stock Indices — Europe
    OTC_SX5E: 'Euro 50',
    OTC_FCHI: 'France 40',
    OTC_GDAXI: 'Germany 40',
    OTC_AEX: 'Netherlands 25',
    OTC_SMI: 'Swiss 20',
    OTC_SSMI: 'Swiss 20',
    otc_ssmi: 'Swiss 20',
    OTC_FTSE: 'UK 100',
    // Cryptocurrencies
    cryBTCUSD: 'BTC/USD',
    cryETHUSD: 'ETH/USD',
    cryLTCUSD: 'LTC/USD',
    cryBCHUSD: 'BCH/USD',
    cryXRPUSD: 'XRP/USD',
    cryADAUSD: 'ADA/USD',
    cryDOTUSD: 'DOT/USD',
    // Metals / Commodities
    frxXAUUSD: 'Gold/USD',
    frxXPDUSD: 'Palladium/USD',
    frxXPTUSD: 'Platinum/USD',
    frxXAGUSD: 'Silver/USD',
    frxBROUSD: 'Brent Oil/USD',
    frxbrousd: 'Brent Oil/USD'
};
function getSymbolDisplayName(symbolCode) {
    return SYMBOL_DISPLAY_NAMES[symbolCode] ?? symbolCode;
}
const MARKET_DISPLAY_NAMES = {
    forex: 'Forex',
    indices: 'Stock Indices',
    stocks: 'Stocks',
    commodities: 'Commodities',
    cryptocurrency: 'Cryptocurrencies',
    synthetic_index: 'Derived',
    basket_index: 'Baskets',
    energy: 'Energy',
    metals: 'Metals',
    agricultural: 'Agricultural'
};
const SUBMARKET_DISPLAY_NAMES = {
    major_pairs: 'Major Pairs',
    minor_pairs: 'Minor Pairs',
    exotic_pairs: 'Exotic Pairs',
    smart_fx: 'Smart FX',
    americas: 'American indices',
    asia_oceania: 'Asian indices',
    europe_africa: 'European indices',
    europe: 'European indices',
    americas_OTC: 'American indices',
    asia_oceania_OTC: 'Asian indices',
    europe_OTC: 'European indices',
    otc_index: 'OTC Indices',
    random_index: 'Continuous Indices',
    random_daily: 'Daily Reset Indices',
    crash_boom: 'Crash/Boom Indices',
    crash_index: 'Crash/Boom Indices',
    jump_index: 'Jump Indices',
    step_index: 'Step Indices',
    volatility_indices: 'Volatility Indices',
    range_break_indices: 'Range Break Indices',
    forex_basket: 'Forex Basket',
    commodity_basket: 'Commodities Basket',
    cryptocurrency_basket: 'Cryptocurrency Basket',
    energy_basket: 'Energy Basket',
    precious_metals: 'Precious Metals',
    base_metals: 'Base Metals',
    grains: 'Grains',
    soft_commodities: 'Soft Commodities',
    livestock: 'Livestock',
    crypto_usd: 'Cryptocurrencies',
    non_stable_coin: 'Cryptocurrencies',
    crypto_non_usd: 'Crypto/Non-USD',
    us_stocks: 'US Stocks',
    european_stocks: 'European Stocks',
    asian_stocks: 'Asian Stocks',
    metals: 'Metals'
};
const SUBGROUP_DISPLAY_NAMES = {
    none: '',
    major: 'Major',
    minor: 'Minor',
    exotic: 'Exotic',
    micro: 'Micro',
    smart: 'Smart',
    baskets: 'Baskets',
    synthetics: 'Synthetics',
    commodities_basket: 'Commodities Basket',
    forex_basket: 'Forex Basket',
    forex: 'Forex',
    indices: 'Indices',
    commodities: 'Commodities',
    energy: 'Energy',
    metals: 'Metals',
    agricultural: 'Agricultural',
    cryptocurrencies: 'Cryptocurrencies',
    stocks: 'Stocks'
};
function getMarketDisplayName(market) {
    return MARKET_DISPLAY_NAMES[market] ?? formatRawKey(market);
}
function getSubmarketDisplayName(submarket) {
    return SUBMARKET_DISPLAY_NAMES[submarket] ?? formatRawKey(submarket);
}
function getSubgroupDisplayName(subgroup) {
    if (subgroup === 'none') return '';
    return SUBGROUP_DISPLAY_NAMES[subgroup] ?? formatRawKey(subgroup);
}
/** Converts a snake_case or kebab-case key to Title Case. */ function formatRawKey(raw) {
    if (!raw) return '';
    return raw.replace(/[_-]/g, ' ').split(' ').map((word)=>word.length ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word).join(' ').trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/app-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_CONTROL_KEYS",
    ()=>ALL_CONTROL_KEYS,
    "DEFAULT_APP_CONFIG",
    ()=>DEFAULT_APP_CONFIG,
    "normalizeAppConfig",
    ()=>normalizeAppConfig
]);
/**
 * No-code Digits (no-chart) app config.
 *
 * Drives the EDITABLE parts of the real Digits app: the style variant of every
 * control (trade type, symbol picker, current tick, digit stats, contract mode,
 * stake, duration, prediction and buy) plus the order of the blocks. Digits has
 * NO chart, so every component is editable — the app header is the only fixed
 * element. The theme colour is handled by the existing branding pipeline
 * (globals.css --primary).
 *
 * When no config is present the app renders exactly as today (default below).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/no-code-config.ts [app-client] (ecmascript)");
;
const ALL_CONTROL_KEYS = [
    'tradeType',
    'symbol',
    'tick',
    'digitStats',
    'contractMode',
    'stake',
    'duration',
    'prediction',
    'buy'
];
const DEFAULT_APP_CONFIG = {
    styles: {
        tradeType: 'a',
        symbol: 'a',
        tick: 'a',
        digitStats: 'a',
        contractMode: 'a',
        stake: 'a',
        duration: 'a',
        prediction: 'a',
        buy: 'a'
    },
    order: [
        ...ALL_CONTROL_KEYS
    ],
    buy: {
        pinned: true
    }
};
function normalizeAppConfig(value) {
    if (!value || typeof value !== 'object') return DEFAULT_APP_CONFIG;
    const raw = value;
    const pickVariant = (key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStyleVariant"])(raw.styles?.[key]) ? raw.styles[key] : 'a';
    const styles = {
        tradeType: pickVariant('tradeType'),
        symbol: pickVariant('symbol'),
        tick: pickVariant('tick'),
        digitStats: pickVariant('digitStats'),
        contractMode: pickVariant('contractMode'),
        stake: pickVariant('stake'),
        duration: pickVariant('duration'),
        prediction: pickVariant('prediction'),
        buy: pickVariant('buy')
    };
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$no$2d$code$2d$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeBlockOrder"])(raw.order, ALL_CONTROL_KEYS);
    // A stored config with no `buy` key predates the pin option: keep that app
    // unpinned rather than adopting the new default on its owner's behalf.
    return {
        styles,
        order,
        buy: {
            pinned: !!raw.buy?.pinned
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/digit-stats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeDigitStats",
    ()=>computeDigitStats,
    "getDigitPercentageRanks",
    ()=>getDigitPercentageRanks,
    "getLastDigit",
    ()=>getLastDigit,
    "pipSizeFromPip",
    ()=>pipSizeFromPip,
    "updateDigitStats",
    ()=>updateDigitStats
]);
function getDigitPercentageRanks(percentages) {
    const levels = [
        ...new Set(percentages)
    ].sort((a, b)=>a - b);
    if (levels.length < 2) return percentages.map(()=>null);
    const highest = levels[levels.length - 1];
    const lowest = levels[0];
    const secondHighest = levels.length >= 3 ? levels[levels.length - 2] : null;
    const secondLowest = levels.length >= 3 ? levels[1] : null;
    return percentages.map((percentage)=>{
        if (percentage === highest) return 'highest';
        if (percentage === lowest) return 'lowest';
        if (percentage === secondHighest) return 'second-highest';
        if (percentage === secondLowest) return 'second-lowest';
        return null;
    });
}
function pipSizeFromPip(pip) {
    if (pip >= 1) return 0;
    const str = pip.toString();
    const dotIndex = str.indexOf('.');
    if (dotIndex === -1) return 0;
    return str.length - dotIndex - 1;
}
function getLastDigit(price, pipSize) {
    const priceStr = price.toFixed(pipSize);
    const lastChar = priceStr[priceStr.length - 1];
    return parseInt(lastChar, 10);
}
function computeDigitStats(prices, pipSize) {
    const counts = new Array(10).fill(0);
    for (const price of prices){
        const digit = getLastDigit(price, pipSize);
        counts[digit]++;
    }
    const totalTicks = prices.length;
    const percentages = counts.map((count)=>totalTicks > 0 ? count / totalTicks * 100 : 0);
    return {
        counts,
        percentages,
        totalTicks
    };
}
function updateDigitStats(prices, newPrice, windowSize) {
    const updated = [
        ...prices,
        newPrice
    ];
    if (updated.length > windowSize) {
        updated.shift();
    }
    return updated;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/locale-format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closedPositionProfitPercent",
    ()=>closedPositionProfitPercent,
    "formatAmount",
    ()=>formatAmount,
    "formatBalance",
    ()=>formatBalance,
    "formatBarrier",
    ()=>formatBarrier,
    "formatBarrierPercent",
    ()=>formatBarrierPercent,
    "formatDate",
    ()=>formatDate,
    "formatGrowthRate",
    ()=>formatGrowthRate,
    "formatInteger",
    ()=>formatInteger,
    "formatPercent",
    ()=>formatPercent,
    "formatPrice",
    ()=>formatPrice,
    "formatSignedAmount",
    ()=>formatSignedAmount,
    "formatSignedPercent",
    ()=>formatSignedPercent,
    "formatTickPrice",
    ()=>formatTickPrice,
    "isGainAmount",
    ()=>isGainAmount,
    "isGainPercent",
    ()=>isGainPercent,
    "isGainPosition",
    ()=>isGainPosition,
    "parseAmount",
    ()=>parseAmount,
    "roundedSign",
    ()=>roundedSign,
    "tickChangeSign",
    ()=>tickChangeSign,
    "tickDelta",
    ()=>tickDelta
]);
/**
 * `Intl` formatter instances keyed by locale and options. Tick displays and
 * digit statistics format on every tick and the end-time picker formats on
 * every render, so each formatter is built once per (locale, digits) rather
 * than on each call.
 *
 * Only ES2015 `Intl` options are used (`style`, fraction digits), so every
 * engine in Next 14's default browserslist (Safari 12+) formats the same way:
 * `signDisplay` (ES2020) and `style: 'unit'` are deliberately avoided, since
 * older engines ignore the first (no `+` on gains, `-0.00` on breakeven) and
 * throw on the second. Signs are added here from the rounded value instead.
 */ const numberFormats = new Map();
const percentSuffixes = new Map();
const dateFormats = new Map();
function numberFormat(locale, digits) {
    const key = `${locale}|${digits}`;
    let format = numberFormats.get(key);
    if (!format) {
        format = new Intl.NumberFormat(locale, {
            style: 'decimal',
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        });
        numberFormats.set(key, format);
    }
    return format;
}
/**
 * What the locale's `style: 'percent'` formatter prints after the number
 * (`%` in en/pt, a no-break space and `%` in es/fr): the text after the last
 * digit of `format(1)` (`'100 %'` → `' %'`), read once per locale. Plain
 * `format` is ES2015; `formatToParts` would be cleaner but only arrived in
 * Safari 13. Appending the suffix to the decimal formatter's output gives the
 * exact percent-style text without dividing by 100 first, whose binary result
 * can round a half-way percentage (`0.15` → `0.2%`) differently from the
 * decimal formatter and the previous `toFixed` output.
 */ function percentSuffix(locale) {
    let suffix = percentSuffixes.get(locale);
    if (suffix === undefined) {
        const sample = new Intl.NumberFormat(locale, {
            style: 'percent'
        }).format(1);
        suffix = /\d([^\d]*)$/.exec(sample)?.[1] ?? '%';
        percentSuffixes.set(locale, suffix);
    }
    return suffix;
}
/** True when the formatted text shows a non-zero digit: a zero has none in any supported language. */ const hasNonZeroDigit = (text)=>/[1-9]/.test(text);
/**
 * `|value|` with exactly `digits` fraction digits and the locale's grouping,
 * plus whether it rounded to zero. Formatting the magnitude keeps the sign
 * decision in one place (`signOf`), independent of any `Intl` sign option.
 */ function magnitude(value, digits, locale) {
    const text = numberFormat(locale, digits).format(Math.abs(value));
    return {
        text,
        isZero: !hasNonZeroDigit(text)
    };
}
/**
 * The one sign rule. `value` at `digits` fraction digits as `{ text, sign }`:
 * `sign` is `'+'`, `'-'`, or `''` when the magnitude rounds to zero there
 * (`-0.004` at 2 digits → `''`, `-0.005` → `'-'`, matching `Intl`'s
 * half-away-from-zero rounding of the text), and `text` is the magnitude with
 * that sign in front, `+` included only when `plus` is set (the P&L form).
 * `NaN` and infinities have no sign and print as `Intl` prints them.
 */ function signedText(value, digits, locale, plus) {
    if (!Number.isFinite(value)) return {
        text: numberFormat(locale, digits).format(value),
        sign: ''
    };
    const { text, isZero } = magnitude(value, digits, locale);
    const sign = isZero ? '' : value < 0 ? '-' : '+';
    const shown = sign === '-' || sign === '+' && plus ? sign : '';
    return {
        text: `${shown}${text}`,
        sign
    };
}
function roundedSign(value, digits) {
    return signedText(value, digits, 'en', false).sign;
}
/** Minus on negatives only; zero (including `-0` and values rounding to zero) unsigned. */ function formatNumber(value, digits, locale) {
    return signedText(value, digits, locale, false).text;
}
/** `+` on gains, `-` on losses, nothing on zero: the P&L form. */ function formatSignedNumber(value, digits, locale) {
    return signedText(value, digits, locale, true).text;
}
function parseAmount(value) {
    return typeof value === 'string' && value.trim() === '' ? NaN : Number(value);
}
/** Rounds a quote to the pip size exactly as the digit logic does (`toFixed`). */ function roundTick(quote, pipSize) {
    return Number(quote.toFixed(pipSize));
}
function formatAmount(value, locale) {
    return formatNumber(parseAmount(value), 2, locale);
}
function formatBalance(balance, locale) {
    if (balance == null) return formatAmount(NaN, locale);
    const value = typeof balance === 'string' && balance.trim() === '' ? 0 : Number(balance);
    return formatAmount(value, locale);
}
function formatSignedAmount(value, locale) {
    return formatSignedNumber(parseAmount(value), 2, locale);
}
function formatPrice(value, pipSize, locale) {
    return formatNumber(value, pipSize, locale);
}
function formatTickPrice(quote, pipSize, locale) {
    return formatPrice(roundTick(quote, pipSize), pipSize, locale);
}
function tickChangeSign(current, previous, pipSize) {
    const delta = tickDelta(current, previous, pipSize);
    return delta > 0 ? '+' : delta < 0 ? '-' : '';
}
function tickDelta(current, previous, pipSize) {
    if (!Number.isFinite(current) || !Number.isFinite(previous)) return NaN;
    return roundTick(current, pipSize) - roundTick(previous, pipSize);
}
function formatInteger(value, locale) {
    return formatNumber(value, 0, locale);
}
function formatPercent(percent, fractionDigits, locale) {
    return `${formatNumber(percent, fractionDigits, locale)}${percentSuffix(locale)}`;
}
function formatSignedPercent(percent, fractionDigits, locale) {
    return `${formatSignedNumber(percent, fractionDigits, locale)}${percentSuffix(locale)}`;
}
function formatGrowthRate(rate, locale) {
    return formatPercent(rate * 100, 0, locale);
}
function isGainAmount(value) {
    const amount = parseAmount(value);
    return Number.isFinite(amount) && roundedSign(amount, 2) !== '-';
}
function isGainPercent(percent, fractionDigits) {
    return Number.isFinite(percent) && roundedSign(percent, fractionDigits) !== '-';
}
function isGainPosition(profit, profitPercent) {
    return isGainAmount(profit) && (!Number.isFinite(profitPercent) || isGainPercent(profitPercent, 1));
}
function closedPositionProfitPercent(buyPrice, sellPrice) {
    return buyPrice > 0 ? (sellPrice - buyPrice) / buyPrice * 100 : NaN;
}
function formatBarrierPercent(apiValue, locale) {
    if (typeof apiValue !== 'string' && typeof apiValue !== 'number') return '';
    const numeric = String(apiValue).replace(/[\s±%]/g, '');
    if (!/^\d*\.?\d+$/.test(numeric)) return '';
    const fractionDigits = Math.min(numeric.split('.')[1]?.length ?? 0, 20);
    return `±${formatPercent(Number(numeric), fractionDigits, locale)}`;
}
function formatBarrier(apiValue, locale) {
    if (typeof apiValue !== 'string') return '';
    const match = /^([+-]?)(\d+(?:\.(\d+))?)$/.exec(apiValue.trim());
    if (!match) return apiValue;
    const [, sign, number, fraction] = match;
    return `${sign}${formatPrice(Number(number), Math.min(fraction?.length ?? 0, 20), locale)}`;
}
function formatDate(date, locale) {
    let format = dateFormats.get(locale);
    if (!format) {
        format = new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
        dateFormats.set(locale, format);
    }
    return format.format(date);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/market-scanner.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MARKET_SCAN_DURATION_SECONDS",
    ()=>MARKET_SCAN_DURATION_SECONDS,
    "MARKET_SCAN_TICK_COUNT",
    ()=>MARKET_SCAN_TICK_COUNT,
    "MINIMUM_MARKET_SCAN_TICKS",
    ()=>MINIMUM_MARKET_SCAN_TICKS,
    "getContractBarrier",
    ()=>getContractBarrier,
    "getScannableMarkets",
    ()=>getScannableMarkets,
    "hasPriceReversalRisk",
    ()=>hasPriceReversalRisk,
    "scoreMarket",
    ()=>scoreMarket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/digit-stats.ts [app-client] (ecmascript)");
;
const MARKET_SCAN_TICK_COUNT = 100;
const MARKET_SCAN_DURATION_SECONDS = 15;
const MINIMUM_MARKET_SCAN_TICKS = 80;
const WILSON_Z_95 = 1.6448536269514722;
const SEQUENCE_LENGTH = 2;
const ANALOG_PATTERN_LENGTH = 5;
const CLUSTER_WINDOW_SIZE = 12;
function getWilsonLowerBound(wins, sampleCount) {
    const observedRate = wins / sampleCount;
    const zSquared = WILSON_Z_95 ** 2;
    const denominator = 1 + zSquared / sampleCount;
    const center = observedRate + zSquared / (2 * sampleCount);
    const margin = WILSON_Z_95 * Math.sqrt((observedRate * (1 - observedRate) + zSquared / (4 * sampleCount)) / sampleCount);
    return (center - margin) / denominator;
}
function isWinningDigit(digit, contractMode, barrier) {
    switch(contractMode){
        case 'DIGITDIFF':
            return digit !== barrier;
        case 'DIGITOVER':
            return digit > 1;
        case 'DIGITUNDER':
            return digit < 8;
        case 'DIGITEVEN':
            return digit % 2 === 0;
        case 'DIGITODD':
            return digit % 2 !== 0;
    }
}
function createSignal(wins, matches, priorRate) {
    if (matches === 0) return null;
    return {
        winRate: (wins + priorRate * 2) / (matches + 2),
        matches
    };
}
function getSequenceSignal(digits, contractMode, barrier, priorRate) {
    if (digits.length <= SEQUENCE_LENGTH) return null;
    const context = digits.slice(-SEQUENCE_LENGTH);
    let wins = 0;
    let matches = 0;
    for(let nextIndex = SEQUENCE_LENGTH; nextIndex < digits.length - SEQUENCE_LENGTH; nextIndex += 1){
        const matchesContext = context.every((digit, offset)=>digits[nextIndex - SEQUENCE_LENGTH + offset] === digit);
        if (!matchesContext) continue;
        matches += 1;
        if (isWinningDigit(digits[nextIndex], contractMode, barrier)) wins += 1;
    }
    return matches >= 3 ? createSignal(wins, matches, priorRate) : null;
}
function getAnalogySignal(digits, contractMode, barrier, priorRate) {
    if (digits.length <= ANALOG_PATTERN_LENGTH * 2) return null;
    const target = digits.slice(-ANALOG_PATTERN_LENGTH);
    const historicalEnd = digits.length - ANALOG_PATTERN_LENGTH;
    const analogs = [];
    for(let start = 0; start + ANALOG_PATTERN_LENGTH < historicalEnd; start += 1){
        let matchingDigits = 0;
        for(let offset = 0; offset < ANALOG_PATTERN_LENGTH; offset += 1){
            if (digits[start + offset] === target[offset]) matchingDigits += 1;
        }
        if (matchingDigits < ANALOG_PATTERN_LENGTH - 2) continue;
        const nextDigit = digits[start + ANALOG_PATTERN_LENGTH];
        analogs.push({
            win: isWinningDigit(nextDigit, contractMode, barrier),
            similarity: matchingDigits / ANALOG_PATTERN_LENGTH
        });
    }
    const nearestAnalogs = analogs.sort((a, b)=>b.similarity - a.similarity).slice(0, 5);
    if (nearestAnalogs.length < 2) return null;
    const totalWeight = nearestAnalogs.reduce((sum, analog)=>sum + analog.similarity, 0);
    const weightedWins = nearestAnalogs.reduce((sum, analog)=>sum + (analog.win ? analog.similarity : 0), 0);
    const rate = (weightedWins + priorRate * 2) / (totalWeight + 2);
    return {
        winRate: rate,
        matches: nearestAnalogs.length
    };
}
function getDigitCluster(digit) {
    return Math.floor(digit / 5) * 2 + digit % 2;
}
function getClusterVector(digits) {
    const clusters = [
        0,
        0,
        0,
        0
    ];
    for (const digit of digits)clusters[getDigitCluster(digit)] += 1;
    return clusters.map((count)=>count / digits.length);
}
function getClusterSignal(digits, contractMode, barrier, priorRate) {
    if (digits.length <= CLUSTER_WINDOW_SIZE * 2) return null;
    const currentWindowStart = digits.length - CLUSTER_WINDOW_SIZE;
    const currentVector = getClusterVector(digits.slice(currentWindowStart));
    const neighbors = [];
    for(let start = 0; start + CLUSTER_WINDOW_SIZE < currentWindowStart; start += 1){
        const historicalVector = getClusterVector(digits.slice(start, start + CLUSTER_WINDOW_SIZE));
        const distance = historicalVector.reduce((sum, value, index)=>sum + Math.abs(value - currentVector[index]), 0) / 2;
        neighbors.push({
            win: isWinningDigit(digits[start + CLUSTER_WINDOW_SIZE], contractMode, barrier),
            distance
        });
    }
    const nearestNeighbors = neighbors.sort((a, b)=>a.distance - b.distance).slice(0, 5);
    if (nearestNeighbors.length < 3) return null;
    const weightedNeighbors = nearestNeighbors.map((neighbor)=>({
            ...neighbor,
            weight: Math.exp(-4 * neighbor.distance)
        }));
    const totalWeight = weightedNeighbors.reduce((sum, neighbor)=>sum + neighbor.weight, 0);
    const weightedWins = weightedNeighbors.reduce((sum, neighbor)=>sum + (neighbor.win ? neighbor.weight : 0), 0);
    return {
        winRate: (weightedWins + priorRate * 2) / (totalWeight + 2),
        matches: nearestNeighbors.length
    };
}
function getScannableMarkets(symbols) {
    return symbols.filter((symbol)=>symbol.exchange_is_open === 1 && symbol.is_trading_suspended === 0);
}
function getContractBarrier(contractMode, differsDigit) {
    switch(contractMode){
        case 'DIGITDIFF':
            return differsDigit ?? undefined;
        case 'DIGITOVER':
            return 1;
        case 'DIGITUNDER':
            return 8;
        default:
            return undefined;
    }
}
function scoreMarket(symbol, prices, contractMode) {
    const predictionPrices = prices.filter((price)=>Number.isFinite(price));
    const pipSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pipSizeFromPip"])(symbol.pip_size);
    const digits = predictionPrices.map((price)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$digit$2d$stats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLastDigit"])(price, pipSize));
    if (digits.length === 0) return null;
    const counts = Array.from({
        length: 10
    }, ()=>0);
    for (const digit of digits)counts[digit] += 1;
    let barrier = null;
    let wins = 0;
    let baselineWinRate = 0.5;
    switch(contractMode){
        case 'DIGITDIFF':
            {
                baselineWinRate = 0.9;
                barrier = 0;
                for(let digit = 1; digit < counts.length; digit += 1){
                    if (counts[digit] < counts[barrier]) barrier = digit;
                }
                wins = digits.length - counts[barrier];
                break;
            }
        case 'DIGITOVER':
            baselineWinRate = 0.8;
            barrier = 1;
            wins = digits.filter((digit)=>digit > 1).length;
            break;
        case 'DIGITUNDER':
            baselineWinRate = 0.8;
            barrier = 8;
            wins = digits.filter((digit)=>digit < 8).length;
            break;
        case 'DIGITEVEN':
            wins = digits.filter((digit)=>digit % 2 === 0).length;
            break;
        case 'DIGITODD':
            wins = digits.filter((digit)=>digit % 2 !== 0).length;
            break;
    }
    const observedWinRate = (wins + baselineWinRate * 2) / (digits.length + 2);
    const estimatedWinRate = getWilsonLowerBound(wins, digits.length);
    const predictionModels = {
        sequence: getSequenceSignal(digits, contractMode, barrier, baselineWinRate),
        analogy: getAnalogySignal(digits, contractMode, barrier, baselineWinRate),
        cluster: getClusterSignal(digits, contractMode, barrier, baselineWinRate)
    };
    const weightedModels = [
        {
            rate: observedWinRate,
            weight: 0.5
        },
        ...predictionModels.sequence ? [
            {
                rate: predictionModels.sequence.winRate,
                weight: 0.2
            }
        ] : [],
        ...predictionModels.analogy ? [
            {
                rate: predictionModels.analogy.winRate,
                weight: 0.15
            }
        ] : [],
        ...predictionModels.cluster ? [
            {
                rate: predictionModels.cluster.winRate,
                weight: 0.15
            }
        ] : []
    ];
    const totalWeight = weightedModels.reduce((sum, model)=>sum + model.weight, 0);
    const predictedWinRate = weightedModels.reduce((sum, model)=>sum + model.rate * model.weight, 0) / totalWeight;
    const eligibleForTrading = digits.length >= MINIMUM_MARKET_SCAN_TICKS && estimatedWinRate > baselineWinRate;
    return {
        symbol,
        contractMode,
        barrier,
        predictionPrices: predictionPrices.slice(-MARKET_SCAN_TICK_COUNT),
        estimatedWinRate,
        predictedWinRate,
        predictionModels,
        eligibleForTrading,
        probabilityEdge: predictedWinRate - baselineWinRate,
        sampleCount: digits.length
    };
}
function hasPriceReversalRisk(prices) {
    const recent = prices.filter((price)=>Number.isFinite(price)).slice(-9);
    if (recent.length < 9) return false;
    const midpoint = 4;
    const previousMove = recent[midpoint] - recent[0];
    const latestMove = recent[recent.length - 1] - recent[midpoint];
    if (previousMove === 0 || latestMove === 0 || previousMove * latestMove >= 0) return false;
    const averageTickMove = recent.slice(1).reduce((total, price, index)=>total + Math.abs(price - recent[index]), 0) / (recent.length - 1);
    const minimumMove = averageTickMove * 1.5;
    return Math.abs(previousMove) >= minimumMove && Math.abs(latestMove) >= minimumMove;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/martingale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextMartingaleStake",
    ()=>getNextMartingaleStake,
    "initialMartingaleProgress",
    ()=>initialMartingaleProgress
]);
const initialMartingaleProgress = {
    nextStake: null
};
function getNextMartingaleStake(baseStake, multiplier, settledProfit, progress) {
    if (settledProfit > 0) {
        return {
            stake: baseStake,
            progress: {
                ...initialMartingaleProgress
            }
        };
    }
    const stakeToMultiply = progress.nextStake ?? baseStake;
    const nextStake = settledProfit < 0 ? Math.round(stakeToMultiply * multiplier * 100) / 100 : stakeToMultiply;
    return {
        stake: nextStake,
        progress: {
            nextStake
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/no-code-config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Shared no-code config helpers.
 *
 * Every no-code template (rise-fall, accumulators, digits) validates an
 * arbitrary stored value into a safe app config the same way: coerce each style
 * to a known variant and rebuild the block order (known-only, de-duped, missing
 * keys appended). Those two pieces are identical across templates, so they live
 * here and are called from each template's `normalizeAppConfig`.
 *
 * Pure TypeScript, no template-specific knowledge — the caller passes its own
 * set of block keys. Imported via `@/lib/no-code-config`, so the BFF copies it
 * into standalone deploys alongside the other shared `@/lib/*` modules.
 */ /** Style variant of a control row. Every control has exactly three. */ __turbopack_context__.s([
    "isStyleVariant",
    ()=>isStyleVariant,
    "normalizeBlockOrder",
    ()=>normalizeBlockOrder
]);
function isStyleVariant(value) {
    return value === "a" || value === "b" || value === "c";
}
function normalizeBlockOrder(rawOrder, allKeys) {
    const known = new Set(allKeys);
    const seen = new Set();
    const order = [];
    if (Array.isArray(rawOrder)) {
        for (const candidate of rawOrder){
            if (typeof candidate === "string" && known.has(candidate) && !seen.has(candidate)) {
                seen.add(candidate);
                const match = allKeys.find((key)=>key === candidate);
                if (match !== undefined) order.push(match);
            }
        }
    }
    for (const key of allKeys)if (!seen.has(key)) order.push(key);
    return order;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/position-amounts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openPositionProfit",
    ()=>openPositionProfit,
    "openPositionTotal",
    ()=>openPositionTotal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/locale-format.ts [app-client] (ecmascript)");
;
function openPositionProfit(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmount"])(position.profit);
}
function openPositionTotal(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$locale$2d$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAmount"])(position.buy_price) + openPositionProfit(position);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/scroll-within-frame.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "centerInScrollContainer",
    ()=>centerInScrollContainer
]);
/**
 * Reveals a block the partner selected in the no-code editor without moving
 * the page that embeds the editor. `Element.scrollIntoView` scrolls every
 * scrollable ancestor, including ones in ancestor browsing contexts, so in the
 * App Builder wizard it scrolled the cross-origin parent page as well
 * (deriv-api-templates#241, deriv-blox#831). `scrollTo` on an in-frame scroller
 * only ever scrolls that scroller.
 *
 * Shared across all no-code templates via `@/lib/scroll-within-frame`.
 *
 * Kept import-free on purpose. The App Builder BFF copies this file into every
 * assembled partner app, and copies shared files only as `<name>.ts`/`.tsx`:
 * a non-TS dependency such as a `.mjs` file is followed by the detector, dropped
 * by the copier, and then breaks the partner's `next build`. Other `.ts` shared
 * files and packages like `@deriv/core` would work, but this helper needs
 * neither. `__tests__/scroll-within-frame.test.ts` fails if an import appears.
 */ function isScrollable(el, view) {
    const { overflowY } = view.getComputedStyle(el);
    return (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;
}
function nearestScroller(el) {
    const doc = el.ownerDocument;
    const view = doc.defaultView;
    if (view) {
        // <body>'s overflow propagates to the viewport, so scrolling it moves nothing; use scrollingElement.
        for(let node = el.parentElement; node && node !== doc.body && node !== doc.documentElement; node = node.parentElement){
            if (isScrollable(node, view)) return node;
        }
    }
    return null;
}
function centerInScrollContainer(el) {
    const doc = el.ownerDocument;
    const elRect = el.getBoundingClientRect();
    const scroller = nearestScroller(el);
    if (scroller) {
        const viewTop = scroller.getBoundingClientRect().top + scroller.clientTop;
        const top = scroller.scrollTop + (elRect.top - viewTop) - (scroller.clientHeight - elRect.height) / 2;
        scroller.scrollTo({
            top,
            behavior: 'smooth'
        });
        return;
    }
    const root = doc.scrollingElement;
    if (!root) return;
    const top = root.scrollTop + elRect.top - (doc.documentElement.clientHeight - elRect.height) / 2;
    root.scrollTo({
        top,
        behavior: 'smooth'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_193k7mp7l96vq._.js.map