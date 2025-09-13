(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/use-toast.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "reducer": (()=>reducer),
    "toast": (()=>toast),
    "useToast": (()=>useToast)
});
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(memoryState);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toast.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toast": (()=>Toast),
    "ToastAction": (()=>ToastAction),
    "ToastClose": (()=>ToastClose),
    "ToastDescription": (()=>ToastDescription),
    "ToastProvider": (()=>ToastProvider),
    "ToastTitle": (()=>ToastTitle),
    "ToastViewport": (()=>ToastViewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, this));
_c1 = ToastViewport;
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
});
_c3 = Toast;
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, this));
_c5 = ToastAction;
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, this));
_c7 = ToastClose;
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, this));
_c9 = ToastTitle;
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm opacity-90", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, this));
_c11 = ToastDescription;
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "ToastViewport$React.forwardRef");
__turbopack_context__.k.register(_c1, "ToastViewport");
__turbopack_context__.k.register(_c2, "Toast$React.forwardRef");
__turbopack_context__.k.register(_c3, "Toast");
__turbopack_context__.k.register(_c4, "ToastAction$React.forwardRef");
__turbopack_context__.k.register(_c5, "ToastAction");
__turbopack_context__.k.register(_c6, "ToastClose$React.forwardRef");
__turbopack_context__.k.register(_c7, "ToastClose");
__turbopack_context__.k.register(_c8, "ToastTitle$React.forwardRef");
__turbopack_context__.k.register(_c9, "ToastTitle");
__turbopack_context__.k.register(_c10, "ToastDescription$React.forwardRef");
__turbopack_context__.k.register(_c11, "ToastDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/toaster.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/toast.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Toaster() {
    _s();
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/src/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/src/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/language-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    login: {
        en: {
            title: 'Mannova – Growing Together Sustainably',
            description: 'Login using your phone number and OTP.',
            phoneLabel: 'Phone Number',
            phonePlaceholder: 'Enter your 10-digit phone number',
            sendOtp: 'Send OTP',
            otpLabel: 'Enter OTP',
            otpPlaceholder: 'Enter 4-digit OTP',
            aadhaarLabel: 'Aadhaar / Kisan ID (Optional)',
            aadhaarPlaceholder: 'Enter your ID number',
            consentLabel: 'I agree that Mannova will use my data only for farming benefits and government schemes.',
            login: 'Login',
            biometric: 'Login with Fingerprint',
            voiceInstruction: 'Please enter your phone number.',
            invalidPhone: "Invalid Phone Number",
            invalidPhoneDesc: "Please enter a valid 10-digit number.",
            otpSent: "OTP Sent",
            otpSentDesc: "An OTP has been sent to {phone}.",
            consentRequired: "Consent Required",
            consentRequiredDesc: "Please agree to the terms to continue.",
            invalidOtp: "Invalid OTP",
            invalidOtpDesc: "Please enter the 4-digit OTP.",
            consentBiometric: "Please agree to the terms to use biometric login.",
            biometricLogin: "Biometric Login",
            biometricLoginDesc: "Please use your fingerprint or face to log in.",
            loginSuccess: "Login Successful",
            noAccount: "Don't have an account?",
            registerNow: "Register Now"
        },
        ml: {
            title: 'മന്നോവ – ഒരുമിച്ച് സുസ്ഥിരമായി വളരാം',
            description: 'നിങ്ങളുടെ ഫോൺ നമ്പറും OTP-യും ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക.',
            phoneLabel: 'ഫോൺ നമ്പർ',
            phonePlaceholder: 'നിങ്ങളുടെ 10 അക്ക ഫോൺ നമ്പർ നൽകുക',
            sendOtp: 'OTP അയയ്‌ക്കുക',
            otpLabel: 'OTP നൽകുക',
            otpPlaceholder: '4 അക്ക OTP നൽകുക',
            aadhaarLabel: 'ആധാർ / കിസാൻ ഐഡി (ഓപ്ഷണൽ)',
            aadhaarPlaceholder: 'നിങ്ങളുടെ ഐഡി നമ്പർ നൽകുക',
            consentLabel: 'കർഷകർക്കുള്ള ആനുകൂല്യങ്ങൾക്കും സർക്കാർ പദ്ധതികൾക്കും വേണ്ടി മാത്രം മന്നോവ എന്റെ ഡാറ്റ ഉപയോഗിക്കുമെന്ന് ഞാൻ സമ്മതിക്കുന്നു.',
            login: 'ലോഗിൻ ചെയ്യുക',
            biometric: 'വിരലടയാളം ഉപയോഗിച്ച് ലോഗിൻ ചെയ്യുക',
            voiceInstruction: 'ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക.',
            invalidPhone: "തെറ്റായ ഫോൺ നമ്പർ",
            invalidPhoneDesc: "ദയവായി 10 അക്ക നമ്പർ നൽകുക.",
            otpSent: "OTP അയച്ചു",
            otpSentDesc: "{phone} എന്ന നമ്പറിലേക്ക് ഒരു OTP അയച്ചിട്ടുണ്ട്.",
            consentRequired: "സമ്മതം ആവശ്യമാണ്",
            consentRequiredDesc: "തുടരാൻ ദയവായി നിബന്ധനകൾ അംഗീകരിക്കുക.",
            invalidOtp: "തെറ്റായ ഒ.ടി.പി",
            invalidOtpDesc: "ദയവായി 4 അക്ക OTP നൽകുക.",
            consentBiometric: "ബയോമെട്രിക് ലോഗിൻ ഉപയോഗിക്കുന്നതിന് ദയവായി നിബന്ധനകൾ അംഗീകരിക്കുക.",
            biometricLogin: "ബയോമെട്രിക് ലോഗിൻ",
            biometricLoginDesc: "ലോഗിൻ ചെയ്യാൻ നിങ്ങളുടെ വിരലടയാളം അല്ലെങ്കിൽ മുഖം ഉപയോഗിക്കുക.",
            loginSuccess: "ലോഗിൻ വിജയിച്ചു",
            noAccount: "അക്കൗണ്ട് ഇല്ലേ?",
            registerNow: "ഇപ്പോൾ രജിസ്റ്റർ ചെയ്യുക"
        }
    },
    register: {
        en: {
            createAccount: "Create a Mannova Account",
            step: "Step",
            step1Title: "Personal Details",
            step2Title: "Farm Details",
            step3Title: "Document Upload",
            fullName: "Full Name",
            fullNamePlaceholder: "Enter your full name",
            email: "Email (Optional)",
            emailPlaceholder: "Enter your email",
            aadhaarNumber: "Aadhaar Number (Optional)",
            aadhaarPlaceholder: "Enter 12-digit Aadhaar",
            next: "Next",
            back: "Back",
            state: "State",
            selectState: "Select State",
            district: "District",
            selectDistrict: "Select District",
            village: "Village / Panchayat",
            villagePlaceholder: "Enter your village or panchayat",
            landType: "Land Type",
            selectLandType: "Select Land Type",
            landTypeIrrigated: "Irrigated",
            landTypeRainfed: "Rainfed",
            landSize: "Land Size (in acres)",
            landSizePlaceholder: "e.g., 2.5",
            crops: "Main Crop(s) Grown",
            selectCrops: "Select one or more crops",
            cropPaddy: "Paddy",
            cropWheat: "Wheat",
            cropCoconut: "Coconut",
            cropVegetables: "Vegetables",
            cropRubber: "Rubber",
            cropSugarcane: "Sugarcane",
            cropCotton: "Cotton",
            uploadAadhaar: "Upload Aadhaar Proof (PDF/Image)",
            uploadLandDoc: "Upload Land Ownership Proof (PDF/Image)",
            livePhoto: "Live Photo of Your Farm/Crop",
            capturePhoto: "Capture Photo",
            retakePhoto: "Retake Photo",
            submit: "Submit Registration",
            cameraError: "Camera Access Denied",
            cameraErrorDesc: "Please enable camera permissions in your browser settings.",
            cameraAccessRequired: "Camera Access Required",
            cameraAccessRequiredDesc: "Please allow camera access to use this feature.",
            registrationSuccess: "Registration successful! Redirecting to login..."
        },
        ml: {
            createAccount: "മന്നോവ അക്കൗണ്ട് ഉണ്ടാക്കുക",
            step: "ഘട്ടം",
            step1Title: "വ്യക്തിഗത വിവരങ്ങൾ",
            step2Title: "കൃഷിസ്ഥലത്തിന്റെ വിശദാംശങ്ങൾ",
            step3Title: "രേഖകൾ അപ്‌ലോഡ് ചെയ്യുക",
            fullName: "മുഴുവൻ പേര്",
            fullNamePlaceholder: "നിങ്ങളുടെ മുഴുവൻ പേര് നൽകുക",
            email: "ഇമെയിൽ (ഓപ്ഷണൽ)",
            emailPlaceholder: "നിങ്ങളുടെ ഇമെയിൽ നൽകുക",
            aadhaarNumber: "ആധാർ നമ്പർ (ഓപ്ഷണൽ)",
            aadhaarPlaceholder: "12 അക്ക ആധാർ നൽകുക",
            next: "അടുത്തത്",
            back: "പുറകോട്ട്",
            state: "സംസ്ഥാനം",
            selectState: "സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
            district: "ജില്ല",
            selectDistrict: "ജില്ല തിരഞ്ഞെടുക്കുക",
            village: "ഗ്രാമം / പഞ്ചായത്ത്",
            villagePlaceholder: "നിങ്ങളുടെ ഗ്രാമം അല്ലെങ്കിൽ പഞ്ചായത്ത് നൽകുക",
            landType: "ഭൂമിയുടെ തരം",
            selectLandType: "ഭൂമിയുടെ തരം തിരഞ്ഞെടുക്കുക",
            landTypeIrrigated: "ജലസേചനമുള്ളത്",
            landTypeRainfed: "മഴയെ ആശ്രയിച്ചത്",
            landSize: "സ്ഥലത്തിന്റെ അളവ് (ഏക്കറിൽ)",
            landSizePlaceholder: "ഉദാഹരണത്തിന്, 2.5",
            crops: "പ്രധാന വിളകൾ",
            selectCrops: "ഒന്നോ അതിലധികമോ വിളകൾ തിരഞ്ഞെടുക്കുക",
            cropPaddy: "നെല്ല്",
            cropWheat: "ഗോതമ്പ്",
            cropCoconut: "ತೆങ്ങ്",
            cropVegetables: "പച്ചക്കറികൾ",
            cropRubber: "റബ്ബർ",
            cropSugarcane: "കരിമ്പ്",
            cropCotton: "പരുത്തി",
            uploadAadhaar: "ആധാർ രേഖ അപ്‌ലോഡ് ചെയ്യുക (PDF/ചിത്രം)",
            uploadLandDoc: "ഭൂവുടമസ്ഥാവകാശ രേഖ അപ്‌ലോഡ് ചെയ്യുക (PDF/ചിത്രം)",
            livePhoto: "നിങ്ങളുടെ കൃഷിസ്ഥലത്തിന്റെ/വിളയുടെ ലൈവ് ഫോട്ടോ",
            capturePhoto: "ഫോട്ടോ എടുക്കുക",
            retakePhoto: "വീണ്ടും ഫോട്ടോ എടുക്കുക",
            submit: "രജിസ്ട്രേഷൻ സമർപ്പിക്കുക",
            cameraError: "ക്യാമറ അനുമതി നിഷേധിച്ചു",
            cameraErrorDesc: "നിങ്ങളുടെ ബ്രൗസർ ക്രമീകരണങ്ങളിൽ ക്യാമറ അനുമതികൾ പ്രവർത്തനക്ഷമമാക്കുക.",
            cameraAccessRequired: "ക്യാമറ അനുമതി ആവശ്യമാണ്",
            cameraAccessRequiredDesc: "ഈ ഫീച്ചർ ഉപയോഗിക്കാൻ ക്യാമറ ആക്‌സസ് അനുവദിക്കുക.",
            registrationSuccess: "രജിസ്ട്രേഷൻ വിജയിച്ചു! ലോഗിൻ പേജിലേക്ക് പോകുന്നു..."
        }
    },
    dashboard: {
        en: {
            totalPoints: "Total Points",
            thisMonth: "+{points} this month",
            badgesEarned: "Badges Earned",
            more: "+{count} more",
            leaderboardRank: "Leaderboard Rank",
            topPercent: "Top {percent}% in your district",
            activeChallenge: "Active Challenge",
            tasksTitle: "Tasks",
            crop: "Crop",
            selectCrop: "Select a crop",
            noTasks: "No tasks for the selected crop today.",
            pendingTasks: "Today's Tasks",
            completedTasks: "Completed",
            noCompletedTasks: "You haven't completed any tasks for this crop yet."
        },
        ml: {
            totalPoints: "ആകെ പോയിന്റുകൾ",
            thisMonth: "+{points} ഈ മാസം",
            badgesEarned: "നേടിയ ബാഡ്ജുകൾ",
            more: "+{count} കൂടുതൽ",
            leaderboardRank: "ലീഡർബോർഡ് റാങ്ക്",
            topPercent: "നിങ്ങളുടെ ജില്ലയിൽ മികച്ച {percent}%",
            activeChallenge: "സജീവമായ ചലഞ്ച്",
            tasksTitle: "ടാസ്ക്കുകൾ",
            crop: "വിള",
            selectCrop: "ഒരു വിള തിരഞ്ഞെടുക്കുക",
            noTasks: "തിരഞ്ഞെടുത്ത വിളയ്ക്ക് ഇന്ന് ടാസ്‌ക്കുകളൊന്നുമില്ല.",
            pendingTasks: "ഇന്നത്തെ ടാസ്ക്കുകൾ",
            completedTasks: "പൂർത്തിയായവ",
            noCompletedTasks: "ഈ വിളയുമായി ബന്ധപ്പെട്ട ടാസ്ക്കുകൾ നിങ്ങൾ ഇതുവരെ പൂർത്തിയാക്കിയിട്ടില്ല."
        }
    },
    tasks: {
        en: {
            'Check Soil Moisture': 'Check Soil Moisture',
            'Ensure soil is moist but not waterlogged.': 'Ensure soil is moist but not waterlogged.',
            'Apply Organic Fertilizer': 'Apply Organic Fertilizer',
            'Use compost or manure to enrich the soil.': 'Use compost or manure to enrich the soil.',
            'Scout for Pests': 'Scout for Pests',
            'Look for common pests like stem borers.': 'Look for common pests like stem borers.',
            'Repair Irrigation Drip Lines': 'Repair Irrigation Drip Lines',
            'Check for leaks and clogs to conserve water.': 'Check for leaks and clogs to conserve water.',
            'Add Mulch Layer': 'Add Mulch Layer',
            'Apply a layer of straw or leaves to retain moisture.': 'Apply a layer of straw or leaves to retain moisture.',
            'Prune Lower Leaves': 'Prune Lower Leaves',
            'Improve air circulation to prevent fungal diseases.': 'Improve air circulation to prevent fungal diseases.',
            'Prepare Land for Planting': 'Prepare Land for Planting',
            'Plow and level the field for the upcoming season.': 'Plow and level the field for the upcoming season.',
            'Test Soil pH': 'Test Soil pH',
            'Check if the soil pH is optimal for wheat growth (6.0-7.0).': 'Check if the soil pH is optimal for wheat growth (6.0-7.0).',
            'Check for Sugarcane Borers': 'Check for Sugarcane Borers',
            'Inspect stalks for signs of borer infestation.': 'Inspect stalks for signs of borer infestation.',
            'Detrashing Sugarcane': 'Detrashing Sugarcane',
            'Remove dry leaves to improve air circulation.': 'Remove dry leaves to improve air circulation.',
            'Monitor for Bollworms': 'Monitor for Bollworms',
            'Check cotton plants for bollworm eggs and larvae.': 'Check cotton plants for bollworm eggs and larvae.',
            'Apply Neem Oil Spray': 'Apply Neem Oil Spray',
            'Use neem oil as a natural insecticide for cotton.': 'Use neem oil as a natural insecticide for cotton.'
        },
        ml: {
            'Check Soil Moisture': 'മണ്ണിലെ ഈർപ്പം പരിശോധിക്കുക',
            'Ensure soil is moist but not waterlogged.': 'മണ്ണ് ഈർപ്പമുള്ളതാണെന്നും എന്നാൽ വെള്ളം കെട്ടിനിൽക്കുന്നില്ലെന്നും ഉറപ്പാക്കുക.',
            'Apply Organic Fertilizer': 'ജൈവവളം പ്രയോഗിക്കുക',
            'Use compost or manure to enrich the soil.': ' മണ്ണിനെ സമ്പുഷ്ടമാക്കാൻ കമ്പോസ്റ്റോ ചാണകമോ ഉപയോഗിക്കുക.',
            'Scout for Pests': 'കീടങ്ങളെ കണ്ടെത്തുക',
            'Look for common pests like stem borers.': 'തണ്ടുതുരപ്പൻ പോലുള്ള സാധാരണ കീടങ്ങളെ കണ്ടെത്തുക.',
            'Repair Irrigation Drip Lines': 'ഡ്രിപ്പ് ലൈനുകൾ നന്നാക്കുക',
            'Check for leaks and clogs to conserve water.': 'വെള്ളം സംരക്ഷിക്കാൻ ചോർച്ചകളും തടസ്സങ്ങളും പരിശോധിക്കുക.',
            'Add Mulch Layer': 'പുതയിടുക',
            'Apply a layer of straw or leaves to retain moisture.': 'ഈർപ്പം നിലനിർത്താൻ വൈക്കോലിന്റെയോ ഇലകളുടെയോ ഒരു പാളി പ്രയോഗിക്കുക.',
            'Prune Lower Leaves': 'താഴത്തെ ഇലകൾ മുറിക്കുക',
            'Improve air circulation to prevent fungal diseases.': 'ഫംഗസ് രോഗങ്ങൾ തടയാൻ വായുസഞ്ചാരം മെച്ചപ്പെടുത്തുക.',
            'Prepare Land for Planting': 'നടീലിനായി നിലമൊരുക്കുക',
            'Plow and level the field for the upcoming season.': 'വരുന്ന സീസണിനായി വയൽ ഉഴുതു നിരപ്പാക്കുക.',
            'Test Soil pH': 'മണ്ണിന്റെ പി.എച്ച് പരിശോധിക്കുക',
            'Check if the soil pH is optimal for wheat growth (6.0-7.0).': 'ഗോതമ്പ് വളർച്ചയ്ക്ക് മണ്ണിന്റെ പിഎച്ച് അനുയോജ്യമാണോയെന്ന് പരിശോധിക്കുക (6.0-7.0).',
            'Check for Sugarcane Borers': 'കരിമ്പിലെ തണ്ടുതുരപ്പനെ പരിശോധിക്കുക',
            'Inspect stalks for signs of borer infestation.': 'തണ്ടുകളിൽ തുരപ്പന്റെ ലക്ഷണങ്ങളുണ്ടോ എന്ന് പരിശോധിക്കുക.',
            'Detrashing Sugarcane': 'കരിമ്പിലെ ഉണങ്ങിയ ഇലകൾ നീക്കം ചെയ്യുക',
            'Remove dry leaves to improve air circulation.': 'വായുസഞ്ചാരം മെച്ചപ്പെടുത്താൻ ഉണങ്ങിയ ഇലകൾ നീക്കം ചെയ്യുക.',
            'Monitor for Bollworms': 'കായ്തുരപ്പനെ നിരീക്ഷിക്കുക',
            'Check cotton plants for bollworm eggs and larvae.': 'പരുത്തിച്ചെടികളിൽ കായ്തുരപ്പന്റെ മുട്ടകളും ലാർവകളും ഉണ്ടോയെന്ന് പരിശോധിക്കുക.',
            'Apply Neem Oil Spray': 'വേപ്പെണ്ണ തളിക്കുക',
            'Use neem oil as a natural insecticide for cotton.': 'പരുത്തിക്ക് സ്വാഭാവിക കീടനാശിനിയായി വേപ്പെണ്ണ ഉപയോഗിക്കുക.'
        }
    },
    common: {
        en: {
            navDashboard: 'Dashboard',
            navDocVerification: 'Doc Verification',
            navCommunity: 'Community',
            navBlog: 'Blog',
            navAbout: 'About Us',
            navContact: 'Contact',
            navSettings: 'Settings',
            headerProfile: 'Profile',
            headerSettings: 'Settings',
            headerLogout: 'Logout',
            sidebarTipTitle: 'Sustainable Tip',
            sidebarLearnMore: 'Learn More',
            sidebarTipError: 'Could not load a tip right now. Please try again later.'
        },
        ml: {
            navDashboard: 'ഡാഷ്ബോർഡ്',
            navDocVerification: 'രേഖ പരിശോധന',
            navCommunity: 'ചർച്ചാവേദി',
            navBlog: 'ബ്ലോഗ്',
            navAbout: 'ഞങ്ങളെക്കുറിച്ച്',
            navContact: 'ബന്ധപ്പെടുക',
            navSettings: 'ക്രമീകരണങ്ങൾ',
            headerProfile: 'പ്രൊഫൈൽ',
            headerSettings: 'ക്രമീകരണങ്ങൾ',
            headerLogout: 'ലോഗ്ഔട്ട്',
            sidebarTipTitle: 'സുസ്ഥിരമായ സൂചന',
            sidebarLearnMore: 'കൂടുതലറിയുക',
            sidebarTipError: 'ഇപ്പോൾ ഒരു സൂചന ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല. ദയവായി പിന്നീട് ശ്രമിക്കുക.'
        }
    },
    profile: {
        en: {
            profileFarmerId: "Farmer ID",
            profileJoined: "Joined on",
            profileGamificationStats: "Gamification Stats",
            profileLevel: "Level",
            profilePointsToNextLevel: "points to next level"
        },
        ml: {
            profileFarmerId: "കർഷക ഐഡി",
            profileJoined: "ചേർന്ന തീയതി",
            profileGamificationStats: "ഗെയിമിഫിക്കേഷൻ സ്ഥിതിവിവരക്കണക്കുകൾ",
            profileLevel: "ലെവൽ",
            profilePointsToNextLevel: "അടുത്ത ലെവലിലേക്ക് പോയിന്റുകൾ"
        }
    },
    badges: {
        en: {
            'Eco-Warrior': 'Eco-Warrior',
            'Completed 10 soil health tasks': 'Completed 10 soil health tasks',
            'Water-Saver': 'Water-Saver',
            'Completed 5 water management tasks': 'Completed 5 water management tasks'
        },
        ml: {
            'Eco-Warrior': 'പരിസ്ഥിതി യോദ്ധാവ്',
            'Completed 10 soil health tasks': '10 മണ്ണ് ആരോഗ്യ ടാസ്ക്കുകൾ പൂർത്തിയാക്കി',
            'Water-Saver': 'ജലസംരക്ഷകൻ',
            'Completed 5 water management tasks': '5 ജലപരിപാലന ടാസ്ക്കുകൾ പൂർത്തിയാക്കി'
        }
    },
    docVerification: {
        en: {
            landDocument: "Land Document",
            aadhaarCard: "Aadhaar Card",
            landDocVerificationTitle: "Land Document Verification",
            landDocVerificationDesc: "Upload a photo of your land ownership document. Our AI will analyze it for authenticity.",
            readPageContent: "Read page content",
            landDocPhoto: "Document Photo",
            landDocPreviewAlt: "Document preview",
            verifyDocument: "Verify Document",
            aiAnalyzing: "AI is analyzing your document, please wait...",
            verificationResult: "Verification Result",
            authentic: "Authentic",
            notAuthentic: "Not Authentic",
            confidenceScore: "Confidence Score",
            aiReasoning: "AI's Reasoning",
            noFileSelectedTitle: "No file selected",
            noLandDocFileSelectedDesc: "Please select a document image to verify.",
            verificationFailedTitle: "Verification Failed",
            verificationFailedDesc: "An error occurred during document verification.",
            aadhaarVerificationTitle: "Aadhaar Card Verification",
            aadhaarVerificationDesc: "Upload a photo of your Aadhaar card. Our AI will analyze it for authenticity and extract key information.",
            aadhaarPhoto: "Aadhaar Photo",
            aadhaarPreviewAlt: "Aadhaar preview",
            noAadhaarFileSelectedDesc: "Please select an Aadhaar image to verify.",
            extractedInfo: "Extracted Information",
            name: "Name",
            aadhaarNumber: "Aadhaar Number",
            dob: "Date of Birth",
            gender: "Gender"
        },
        ml: {
            landDocument: "ഭൂരേഖ",
            aadhaarCard: "ആധാർ കാർഡ്",
            landDocVerificationTitle: "ഭൂരേഖ പരിശോധന",
            landDocVerificationDesc: "നിങ്ങളുടെ ഭൂരേഖയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. ഞങ്ങളുടെ AI അതിന്റെ ആധികാരികത വിശകലനം ചെയ്യും.",
            readPageContent: "പേജിലെ ഉള്ളടക്കം വായിക്കുക",
            landDocPhoto: "രേഖയുടെ ഫോട്ടോ",
            landDocPreviewAlt: "രേഖയുടെ പ്രിവ്യൂ",
            verifyDocument: "രേഖ പരിശോധിക്കുക",
            aiAnalyzing: "AI നിങ്ങളുടെ പ്രമാണം വിശകലനം ചെയ്യുന്നു, ദയവായി കാത്തിരിക്കുക...",
            verificationResult: "പരിശോധനാ ഫലം",
            authentic: "ആധികാരികമാണ്",
            notAuthentic: "ആധികാരികമല്ല",
            confidenceScore: "ആത്മവിശ്വാസ സ്കോർ",
            aiReasoning: "AI-യുടെ കാരണം",
            noFileSelectedTitle: "ഫയൽ തിരഞ്ഞെടുത്തിട്ടില്ല",
            noLandDocFileSelectedDesc: "പരിശോധിക്കാൻ ഒരു ഭൂരേഖയുടെ ചിത്രം തിരഞ്ഞെടുക്കുക.",
            verificationFailedTitle: "പരിശോധന പരാജയപ്പെട്ടു",
            verificationFailedDesc: "രേഖ പരിശോധിക്കുന്നതിൽ ഒരു പിശക് സംഭവിച്ചു.",
            aadhaarVerificationTitle: "ആധാർ കാർഡ് പരിശോധന",
            aadhaarVerificationDesc: "നിങ്ങളുടെ ആധാർ കാർഡിന്റെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. ഞങ്ങളുടെ AI അതിന്റെ ആധികാരികത വിശകലനം ചെയ്യുകയും പ്രധാന വിവരങ്ങൾ എടുക്കുകയും ചെയ്യും.",
            aadhaarPhoto: "ആധാർ ഫോട്ടോ",
            aadhaarPreviewAlt: "ആധാർ പ്രിവ്യൂ",
            noAadhaarFileSelectedDesc: "പരിശോധിക്കാൻ ഒരു ആധാർ ചിത്രം തിരഞ്ഞെടുക്കുക.",
            extractedInfo: "എടുത്ത വിവരങ്ങൾ",
            name: "പേര്",
            aadhaarNumber: "ആധാർ നമ്പർ",
            dob: "ജനന തീയതി",
            gender: "ലിംഗം"
        }
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const t = (key, section = 'login')=>{
        return translations[section]?.[language]?.[key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/language-context.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "fVUtOCD1O58HgvMjnE8lxRQa0QA=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_674e7342._.js.map