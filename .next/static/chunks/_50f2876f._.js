(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
            voiceInstruction: 'Please enter your phone number.',
            invalidPhone: "Invalid Phone Number",
            invalidPhoneDesc: "Please enter a valid 10-digit number.",
            otpSent: "OTP Sent",
            otpSentDesc: "An OTP has been sent to {phone}.",
            consentRequired: "Consent Required",
            consentRequiredDesc: "Please agree to the terms to continue.",
            invalidOtp: "Invalid OTP",
            invalidOtpDesc: "Please enter the 4-digit OTP.",
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
            voiceInstruction: 'ദയവായി നിങ്ങളുടെ ഫോൺ നമ്പർ നൽകുക.',
            invalidPhone: "തെറ്റായ ഫോൺ നമ്പർ",
            invalidPhoneDesc: "ദയവായി 10 അക്ക നമ്പർ നൽകുക.",
            otpSent: "OTP അയച്ചു",
            otpSentDesc: "{phone} എന്ന നമ്പറിലേക്ക് ഒരു OTP അയച്ചിട്ടുണ്ട്.",
            consentRequired: "സമ്മതം ആവശ്യമാണ്",
            consentRequiredDesc: "തുടരാൻ ദയവായി നിബന്ധനകൾ അംഗീകരിക്കുക.",
            invalidOtp: "തെറ്റായ ഒ.ടി.പി",
            invalidOtpDesc: "ദയവായി 4 അക്ക OTP നൽകുക.",
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
            leaderboardRank: "Leaderboard",
            topPercent: "Top {percent}% in your district",
            activeChallenge: "Active Challenge",
            tasksTitle: "Farm Tasks",
            crop: "Crop",
            selectCrop: "Select a crop",
            noTasks: "No pending tasks for this crop.",
            pendingTasks: "Pending",
            completedTasks: "Completed",
            noCompletedTasks: "You haven't completed any tasks for this crop yet.",
            rewardsProgress: "Rewards Progress",
            viewRewards: "View All Rewards",
            nextReward: "Next Reward",
            redeemNow: "Redeem Now",
            myRewards: "My Rewards",
            yourRank: "Your Rank"
        },
        ml: {
            totalPoints: "ആകെ പോയിന്റുകൾ",
            thisMonth: "+{points} ഈ മാസം",
            badgesEarned: "നേടിയ ബാഡ്ജുകൾ",
            more: "+{count} കൂടുതൽ",
            leaderboardRank: "ലീഡർബോർഡ്",
            topPercent: "നിങ്ങളുടെ ജില്ലയിൽ മികച്ച {percent}%",
            activeChallenge: "സജീവമായ ചലഞ്ച്",
            tasksTitle: "കാർഷിക ജോലികൾ",
            crop: "വിള",
            selectCrop: "ഒരു വിള തിരഞ്ഞെടുക്കുക",
            noTasks: "ഈ വിളയ്ക്ക് ഇന്ന് ടാസ്‌ക്കുകളൊന്നുമില്ല.",
            pendingTasks: "ചെയ്യാനുള്ളവ",
            completedTasks: "പൂർത്തിയായവ",
            noCompletedTasks: "ഈ വിളയുമായി ബന്ധപ്പെട്ട ടാസ്ക്കുകൾ നിങ്ങൾ ഇതുവരെ പൂർത്തിയാക്കിയിട്ടില്ല.",
            rewardsProgress: "റിവാർഡ് പുരോഗതി",
            viewRewards: "എല്ലാ റിവാർഡുകളും കാണുക",
            nextReward: "അടുത്ത റിവാർഡ്",
            redeemNow: "ഇപ്പോൾ നേടുക",
            myRewards: "എന്റെ റിവാർഡുകൾ",
            yourRank: "നിങ്ങളുടെ റാങ്ക്"
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
            'Use neem oil as a natural insecticide for cotton.': 'Use neem oil as a natural insecticide for cotton.',
            'Soil Health': 'Soil Health',
            'Fertilization': 'Fertilization',
            'Pest Control': 'Pest Control',
            'Water Management': 'Water Management',
            'Plant Health': 'Plant Health',
            'Preparation': 'Preparation',
            'Points': 'Points',
            'Upload Proof': 'Upload Proof',
            'Speak task': 'Speak task',
            'Upload Proof for': 'Upload Proof for: {taskTitle}',
            'Upload a photo from your field as proof of task completion. You can use your camera or upload a file.': 'Upload a photo from your field as proof of task completion. You can use your camera or upload a file.',
            'Picture': 'Picture',
            'Verify with AI': 'Verify with AI',
            'No file selected': 'No file selected',
            'Task Verified & Completed!': 'Task Verified & Completed!',
            'Verification Failed': 'Verification Failed',
            'Verification error': 'Verification error',
            'Something went wrong.': 'Something went wrong.'
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
            'Use neem oil as a natural insecticide for cotton.': 'പരുത്തിക്ക് സ്വാഭാവിക കീടനാശിനിയായി വേപ്പെണ്ണ ഉപയോഗിക്കുക.',
            'Soil Health': 'മണ്ണിന്റെ ആരോഗ്യം',
            'Fertilization': 'വളപ്രയോഗം',
            'Pest Control': 'കീടനിയന്ത്രണം',
            'Water Management': 'ജലപരിപാലനം',
            'Plant Health': 'സസ്യാരോഗ്യം',
            'Preparation': 'ഒരുക്കം',
            'Points': 'പോയിന്റുകൾ',
            'Upload Proof': 'തെളിവ് അപ്‌ലോഡ് ചെയ്യുക',
            'Speak task': 'ടാസ്ക് പറയുക',
            'Upload Proof for': '{taskTitle} എന്നതിനുള്ള തെളിവ് അപ്‌ലോഡ് ചെയ്യുക',
            'Upload a photo from your field as proof of task completion. You can use your camera or upload a file.': 'ടാസ്ക് പൂർത്തിയാക്കിയതിന്റെ തെളിവായി നിങ്ങളുടെ ഫീൽഡിൽ നിന്ന് ഒരു ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. നിങ്ങൾക്ക് ക്യാമറ ഉപയോഗിക്കാം അല്ലെങ്കിൽ ഒരു ഫയൽ അപ്‌ലോഡ് ചെയ്യാം.',
            'Picture': 'ചിത്രം',
            'Verify with AI': 'AI ഉപയോഗിച്ച് പരിശോധിക്കുക',
            'No file selected': 'ഫയൽ തിരഞ്ഞെടുത്തിട്ടില്ല',
            'Task Verified & Completed!': 'ടാസ്ക് പരിശോധിച്ച് പൂർത്തിയാക്കി!',
            'Verification Failed': 'പരിശോധന പരാജയപ്പെട്ടു',
            'Verification error': 'പരിശോധനയിൽ പിശക്',
            'Something went wrong.': 'എന്തോ കുഴപ്പം സംഭവിച്ചു.'
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
            navRewards: 'Rewards Store',
            headerProfile: 'Profile',
            headerSettings: 'Settings',
            headerLogout: 'Logout',
            sidebarTipTitle: 'Sustainable Tip',
            sidebarLearnMore: 'Learn More',
            sidebarTipError: 'Could not load a tip right now. Please try again later.',
            stopReading: 'Stop speaking'
        },
        ml: {
            navDashboard: 'ഡാഷ്ബോർഡ്',
            navDocVerification: 'രേഖ പരിശോധന',
            navCommunity: 'ചർച്ചാവേദി',
            navBlog: 'ബ്ലോഗ്',
            navAbout: 'ഞങ്ങളെക്കുറിച്ച്',
            navContact: 'ബന്ധപ്പെടുക',
            navSettings: 'ക്രമീകരണങ്ങൾ',
            navRewards: 'റിവാർഡ് സ്റ്റോർ',
            headerProfile: 'പ്രൊഫൈൽ',
            headerSettings: 'ക്രമീകരണങ്ങൾ',
            headerLogout: 'ലോഗ്ഔട്ട്',
            sidebarTipTitle: 'സുസ്ഥിരമായ സൂചന',
            sidebarLearnMore: 'കൂടുതലറിയുക',
            sidebarTipError: 'ഇപ്പോൾ ഒരു സൂചന ലോഡ് ചെയ്യാൻ കഴിഞ്ഞില്ല. ദയവായി പിന്നീട് ശ്രമിക്കുക.',
            stopReading: 'സംസാരം നിർത്തുക'
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
            'Soil Saver': 'Soil Saver',
            'Completed 10 soil health tasks': 'Completed 10 soil health tasks',
            'Water Warrior': 'Water Warrior',
            'Completed 5 water management tasks': 'Completed 5 water management tasks',
            'Organic Champion': 'Organic Champion',
            'Completed 5 organic farming tasks': 'Completed 5 organic farming tasks'
        },
        ml: {
            'Soil Saver': 'മണ്ണ് സംരക്ഷകൻ',
            'Completed 10 soil health tasks': '10 മണ്ണ് ആരോഗ്യ ടാസ്ക്കുകൾ പൂർത്തിയാക്കി',
            'Water Warrior': 'ജല യോദ്ധാവ്',
            'Completed 5 water management tasks': '5 ജലപരിപാലന ടാസ്ക്കുകൾ പൂർത്തിയാക്കി',
            'Organic Champion': 'ജൈവ ചാമ്പ്യൻ',
            'Completed 5 organic farming tasks': '5 ജൈവകൃഷി ടാസ്ക്കുകൾ പൂർത്തിയാക്കി'
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
    },
    rewards: {
        en: {
            rewardsStoreTitle: "Rewards Store",
            rewardsStoreDesc: "Redeem your points for exciting rewards!",
            points: "Points",
            redeem: "Redeem",
            notEnoughPointsTitle: "Not enough points",
            notEnoughPointsDesc: "You do not have enough points to redeem this reward.",
            confirmRedemptionTitle: "Confirm Redemption",
            confirmRedemptionDesc: "Are you sure you want to redeem '{reward_name}' for {points} points?",
            qrCodeDesc: "Show this QR code at a partner store to claim your reward.",
            cancel: "Cancel",
            confirm: "Confirm",
            rewardRedeemedTitle: "Reward Redeemed!",
            rewardRedeemedDesc: "You have successfully redeemed:",
            Discounts: "Discounts",
            Services: "Services",
            Products: "Products",
            Subsidies: "Subsidies",
            Vouchers: "Vouchers",
            worth: "Worth",
            progress: "progress"
        },
        ml: {
            rewardsStoreTitle: "റിവാർഡ് സ്റ്റോർ",
            rewardsStoreDesc: "നിങ്ങളുടെ പോയിന്റുകൾ ഉപയോഗിച്ച് മികച്ച റിവാർഡുകൾ നേടൂ!",
            points: "പോയിന്റുകൾ",
            redeem: "നേടുക",
            notEnoughPointsTitle: "മതിയായ പോയിന്റുകളില്ല",
            notEnoughPointsDesc: "ഈ റിവാർഡ് നേടാൻ ആവശ്യമായ പോയിന്റുകൾ നിങ്ങൾക്കില്ല.",
            confirmRedemptionTitle: "നേട്ടം സ്ഥിരീകരിക്കുക",
            confirmRedemptionDesc: "{points} പോയിന്റുകൾക്ക് '{reward_name}' നേടാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുവെന്ന് ഉറപ്പാണോ?",
            qrCodeDesc: "നിങ്ങളുടെ റിവാർഡ് ക്ലെയിം ചെയ്യുന്നതിന് പങ്കാളി സ്റ്റോറിൽ ഈ QR കോഡ് കാണിക്കുക.",
            cancel: "റദ്ദാക്കുക",
            confirm: "സ്ഥിരീകരിക്കുക",
            rewardRedeemedTitle: "റിവാർഡ് നേടി!",
            rewardRedeemedDesc: "നിങ്ങൾ വിജയകരമായി ഇത് നേടിയിരിക്കുന്നു:",
            Discounts: "ഡിസ്കൗണ്ടുകൾ",
            Services: "സേവനങ്ങൾ",
            Products: "ഉൽപ്പന്നങ്ങൾ",
            Subsidies: "സബ്സിഡികൾ",
            Vouchers: "വൗച്ചറുകൾ",
            worth: "മൂല്യം",
            progress: "പുരോഗതി"
        }
    },
    rewards_list: {
        en: {
            fertilizer_discount: '50% Fertilizer/Seed Discount',
            soil_checkup: 'Free Soil Checkup',
            machinery_rental: '20% Off Machinery Rental',
            gift_hamper: 'Organic Gift Hamper',
            solar_subsidy: 'Subsidy on Solar Irrigation Pump',
            gift_card: '₹200 Farming Shop Gift Card'
        },
        ml: {
            fertilizer_discount: 'വളം/വിത്ത് എന്നിവയ്ക്ക് 50% കിഴിവ്',
            soil_checkup: 'സൗജന്യ മണ്ണ് പരിശോധന',
            machinery_rental: 'യന്ത്രങ്ങൾ വാടകയ്ക്ക് 20% കിഴിവ്',
            gift_hamper: 'ഓർഗാനിക് ഗിഫ്റ്റ് ഹാംപർ',
            solar_subsidy: 'സോളാർ ഇറിഗേഷൻ പമ്പിന് സബ്സിഡി',
            gift_card: '₹200 കാർഷിക ഷോപ്പ് ഗിഫ്റ്റ് കാർഡ്'
        }
    },
    about: {
        en: {
            title: "About Mannova",
            readContent: "Read page content",
            p1: "Mannova is a revolutionary platform dedicated to empowering farmers through technology, sustainable practices, and community. Our mission is to make farming more profitable, environmentally friendly, and resilient for future generations.",
            visionTitle: "Our Vision",
            visionText: "We envision a world where every farmer has access to the tools and knowledge needed to thrive. By integrating advanced AI, gamification, and a supportive network, we aim to transform the agricultural landscape one farm at a time.",
            whatWeDoTitle: "What We Do",
            li1: "Provide gamified tasks to encourage sustainable farming methods.",
            li2: "Use AI to verify documents and provide smart farming recommendations.",
            li3: "Foster a vibrant community for farmers to share knowledge and support each other.",
            li4: "Offer educational resources through our blog and integrated tips."
        },
        ml: {
            title: "മന്നോവയെക്കുറിച്ച്",
            readContent: "പേജിലെ ഉള്ളടക്കം വായിക്കുക",
            p1: "സാങ്കേതികവിദ്യ, സുസ്ഥിരമായ രീതികൾ, കമ്മ്യൂണിറ്റി എന്നിവയിലൂടെ കർഷകരെ ശാക്തീകരിക്കുന്ന ഒരു വിപ്ലവകരമായ പ്ലാറ്റ്‌ഫോമാണ് മന്നോവ. കൃഷി കൂടുതൽ ലാഭകരവും പരിസ്ഥിതി സൗഹൃദപരവും ഭാവി തലമുറകൾക്ക് പ്രതിരോധശേഷിയുള്ളതുമാക്കുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം.",
            visionTitle: "ഞങ്ങളുടെ കാഴ്ചപ്പാട്",
            visionText: "ഓരോ കർഷകനും തഴച്ചുവളരാൻ ആവശ്യമായ ഉപകരണങ്ങളും അറിവും ലഭ്യമാകുന്ന ഒരു ലോകമാണ് ഞങ്ങൾ വിഭാവനം ചെയ്യുന്നത്. നൂതന AI, ഗെയിമിഫിക്കേഷൻ, ഒരു പിന്തുണ നൽകുന്ന നെറ്റ്‌വർക്ക് എന്നിവ സംയോജിപ്പിക്കുന്നതിലൂടെ, കാർഷിക ഭൂപ്രകൃതിയെ ഒരു സമയം ഒരു ഫാം എന്ന നിലയിൽ മാറ്റിമറിക്കാൻ ഞങ്ങൾ ലക്ഷ്യമിടുന്നു.",
            whatWeDoTitle: "ഞങ്ങൾ എന്തു ചെയ്യുന്നു",
            li1: "സുസ്ഥിര കൃഷിരീതികളെ പ്രോത്സാഹിപ്പിക്കുന്നതിന് ഗാമിഫൈഡ് ടാസ്ക്കുകൾ നൽകുക.",
            li2: "രേഖകൾ പരിശോധിക്കുന്നതിനും മികച്ച കാർഷിക ശുപാർശകൾ നൽകുന്നതിനും AI ഉപയോഗിക്കുക.",
            li3: "കർഷകർക്ക് അറിവ് പങ്കുവെക്കുന്നതിനും പരസ്പരം പിന്തുണയ്ക്കുന്നതിനും ഒരു ഊർജ്ജസ്വലമായ സമൂഹം വളർത്തുക.",
            li4: "ഞങ്ങളുടെ ബ്ലോഗിലൂടെയും സംയോജിത നുറുങ്ങുകളിലൂടെയും വിദ്യാഭ്യാസ വിഭവങ്ങൾ വാഗ്ദാനം ചെയ്യുക."
        }
    },
    blog: {
        en: {
            mainTitle: "🌱 Mannova Blog",
            subtitle: "Sustainable Farming for a Better Tomorrow",
            whatIsTitle: "What is Sustainable Farming?",
            readSection: "Read section",
            whatIsText: "In simple terms, sustainable farming is a way of growing food that is kind to our planet. It means we protect the environment, save water, keep our soil healthy, and ensure that future generations can also farm on this land. It’s about working with nature, not against it.",
            methodsTitle: "🌿 Methods of Sustainable Farming",
            readMethod: "Read method",
            whyMattersTitle: "🌎 Why Sustainable Farming Matters",
            benefit1: "Healthier Food:",
            benefit1Text: "Crops grown without harmful chemicals are better for our health.",
            benefit2: "Better Income for Farmers:",
            benefit2Text: "It reduces the cost of expensive chemicals and improves soil health, leading to better long-term yields.",
            benefit3: "Improves Soil Fertility:",
            benefit3Text: "Natural methods make the soil richer and more productive for years to come.",
            benefit4: "Protects Nature:",
            benefit4Text: "It helps conserve water, reduce pollution, and supports biodiversity.",
            footer: "© 2025 Mannova | Empowering Farmers Sustainably",
            methodTitle1: "Organic Fertilizers and Composting",
            methodDesc1: "Instead of chemical fertilizers, we use natural materials like cow dung, crop waste, and leaves. This enriches the soil, making it healthier and more fertile for a long time.",
            methodTitle2: "Crop Rotation",
            methodDesc2: "We avoid planting the same crop in the same place every year. Rotating different crops helps return nutrients to the soil and reduces pests and diseases naturally.",
            methodTitle3: "Rainwater Harvesting & Drip Irrigation",
            methodDesc3: "Every drop of water is precious. We save rainwater in ponds or tanks and use methods like drip irrigation to give water directly to the plant roots, avoiding wastage.",
            methodTitle4: "Integrated Pest Management (IPM)",
            methodDesc4: "Instead of spraying harmful pesticides, we use natural methods to control pests. This includes using friendly insects, traps, and natural sprays that don't harm the crop or the environment.",
            methodTitle5: "Mulching and Soil Conservation",
            methodDesc5: "We cover the soil with a layer of straw or dried leaves (mulch). This protects the soil from heat and wind, keeps it moist, and prevents soil erosion.",
            methodTitle6: "Cover Cropping",
            methodDesc6: "We plant specific crops like legumes or grasses during the off-season. These 'cover crops' protect the soil from erosion, suppress weeds, and add organic matter back into the soil when they are tilled in."
        },
        ml: {
            mainTitle: "🌱 മന്നോവ ബ്ലോഗ്",
            subtitle: "മെച്ചപ്പെട്ട നാളേക്കായി സുസ്ഥിര കൃഷി",
            whatIsTitle: "എന്താണ് സുസ്ഥിര കൃഷി?",
            readSection: "വിഭാഗം വായിക്കുക",
            whatIsText: "ലളിതമായി പറഞ്ഞാൽ, നമ്മുടെ ഭൂമിക്ക് ദയയുള്ള ഭക്ഷണം വളർത്തുന്ന ഒരു രീതിയാണ് സുസ്ഥിര കൃഷി. പരിസ്ഥിതിയെ സംരക്ഷിക്കുക, വെള്ളം ലാഭിക്കുക, നമ്മുടെ മണ്ണ് ആരോഗ്യകരമായി നിലനിർത്തുക, ഭാവി തലമുറകൾക്കും ഈ ഭൂമിയിൽ കൃഷി ചെയ്യാൻ കഴിയുമെന്ന് ഉറപ്പാക്കുക എന്നിവ ഇതിനർത്ഥം. ഇത് പ്രകൃതിയോടൊപ്പം പ്രവർത്തിക്കുന്നതിനെക്കുറിച്ചാണ്, അതിനെതിരെയല്ല.",
            methodsTitle: "🌿 സുസ്ഥിര കൃഷിയുടെ രീതികൾ",
            readMethod: "രീതി വായിക്കുക",
            whyMattersTitle: "🌎 എന്തുകൊണ്ട് സുസ്ഥിര കൃഷി പ്രധാനമാണ്",
            benefit1: "ആരോഗ്യകരമായ ഭക്ഷണം:",
            benefit1Text: "ദോഷകരമായ രാസവസ്തുക്കളില്ലാതെ വളർത്തുന്ന വിളകൾ നമ്മുടെ ആരോഗ്യത്തിന് നല്ലതാണ്.",
            benefit2: "കർഷകർക്ക് മികച്ച വരുമാനം:",
            benefit2Text: "ഇത് വിലകൂടിയ രാസവസ്തുക്കളുടെ വില കുറയ്ക്കുകയും മണ്ണിന്റെ ആരോഗ്യം മെച്ചപ്പെടുത്തുകയും ചെയ്യുന്നു, ഇത് ദീർഘകാലാടിസ്ഥാനത്തിൽ മികച്ച വിളവ് നൽകുന്നു.",
            benefit3: "മണ്ണിന്റെ ഫലഭൂയിഷ്ഠത മെച്ചപ്പെടുത്തുന്നു:",
            benefit3Text: "സ്വാഭാവിക രീതികൾ മണ്ണിനെ വർഷങ്ങളോളം സമ്പന്നവും ഉൽപ്പാദനക്ഷമവുമാക്കുന്നു.",
            benefit4: "പ്രകൃതിയെ സംരക്ഷിക്കുന്നു:",
            benefit4Text: "ഇത് ജലം സംരക്ഷിക്കാനും മലിനീകരണം കുറയ്ക്കാനും ജൈവവൈവിധ്യത്തെ പിന്തുണയ്ക്കാനും സഹായിക്കുന്നു.",
            footer: "© 2025 മന്നോവ | കർഷകരെ സുസ്ഥിരമായി ശാക്തീകരിക്കുന്നു",
            methodTitle1: "ജൈവ വളങ്ങളും കമ്പോസ്റ്റിംഗും",
            methodDesc1: "രാസവളങ്ങൾക്ക് പകരം, ചാണകം, വിളകളുടെ അവശിഷ്ടങ്ങൾ, ഇലകൾ തുടങ്ങിയ പ്രകൃതിദത്ത വസ്തുക്കൾ ഞങ്ങൾ ഉപയോഗിക്കുന്നു. ഇത് മണ്ണിനെ സമ്പുഷ്ടമാക്കുകയും ദീർഘകാലത്തേക്ക് ആരോഗ്യകരവും ഫലഭൂയിഷ്ഠവുമാക്കുകയും ചെയ്യുന്നു.",
            methodTitle2: "വിള പരിക്രമണം",
            methodDesc2: "എല്ലാ വർഷവും ഒരേ സ്ഥലത്ത് ഒരേ വിള നടുന്നത് ഞങ്ങൾ ഒഴിവാക്കുന്നു. വ്യത്യസ്ത വിളകൾ ഭ്രമണം ചെയ്യുന്നത് മണ്ണിലേക്ക് പോഷകങ്ങൾ തിരികെ നൽകാനും കീടങ്ങളെയും രോഗങ്ങളെയും സ്വാഭാവികമായി കുറയ്ക്കാനും സഹായിക്കുന്നു.",
            methodTitle3: "മഴവെള്ള സംഭരണവും തുള്ളിനനയും",
            methodDesc3: "ഓരോ തുള്ളി വെള്ളവും അമൂല്യമാണ്. ഞങ്ങൾ മഴവെള്ളം കുളങ്ങളിലോ ടാങ്കുകളിലോ സംഭരിക്കുകയും തുള്ളിനന പോലുള്ള രീതികൾ ഉപയോഗിച്ച് ചെടികളുടെ വേരുകൾക്ക് നേരിട്ട് വെള്ളം നൽകുകയും പാഴാക്കുന്നത് ഒഴിവാക്കുകയും ചെയ്യുന്നു.",
            methodTitle4: "സംയോജിത കീടനിയന്ത്രണം (IPM)",
            methodDesc4: "ദോഷകരമായ കീടനാശിനികൾ തളിക്കുന്നതിനുപകരം, കീടങ്ങളെ നിയന്ത്രിക്കാൻ ഞങ്ങൾ സ്വാഭാവിക രീതികൾ ഉപയോഗിക്കുന്നു. വിളയെയോ പരിസ്ഥിതിയെയോ ദോഷകരമായി ബാധിക്കാത്ത സൗഹൃദ പ്രാണികൾ, കെണികൾ, പ്രകൃതിദത്ത സ്പ്രേകൾ എന്നിവ ഇതിൽ ഉൾപ്പെടുന്നു.",
            methodTitle5: "പുതയിടലും മണ്ണ് സംരക്ഷണവും",
            methodDesc5: "ഞങ്ങൾ വൈക്കോലിന്റെയോ ഉണങ്ങിയ ഇലകളുടെയോ (പുത) ഒരു പാളി ഉപയോഗിച്ച് മണ്ണ് മൂടുന്നു. ഇത് മണ്ണിനെ ചൂടിൽ നിന്നും കാറ്റിൽ നിന്നും സംരക്ഷിക്കുകയും ഈർപ്പമുള്ളതാക്കുകയും മണ്ണൊലിപ്പ് തടയുകയും ചെയ്യുന്നു.",
            methodTitle6: "ആവരണ വിളകൾ",
            methodDesc6: "ഓഫ്-സീസണിൽ ഞങ്ങൾ പയർവർഗ്ഗങ്ങളോ പുല്ലുകളോ പോലുള്ള പ്രത്യേക വിളകൾ നടുന്നു. ഈ 'ആവരണ വിളകൾ' മണ്ണിനെ മണ്ണൊലിപ്പിൽ നിന്ന് സംരക്ഷിക്കുകയും കളകളെ അടിച്ചമർത്തുകയും ഉഴുതുമറിക്കുമ്പോൾ ജൈവവസ്തുക്കൾ മണ്ണിലേക്ക് തിരികെ ചേർക്കുകയും ചെയ്യുന്നു."
        }
    },
    community: {
        en: {
            title: "Community Forum",
            description: "Share tips, ask questions, and connect with fellow farmers.",
            placeholder: "What's on your mind, farmer?",
            post: "Post",
            readPost: "Read post",
            likes: "Likes",
            comments: "Comments",
            share: "Share"
        },
        ml: {
            title: "ചർച്ചാവേദി",
            description: "നുറുങ്ങുകൾ പങ്കിടുക, ചോദ്യങ്ങൾ ചോദിക്കുക, സഹ കർഷകരുമായി ബന്ധപ്പെടുക.",
            placeholder: "കർഷകാ, നിങ്ങളുടെ മനസ്സിൽ എന്താണ്?",
            post: "പോസ്റ്റ് ചെയ്യുക",
            readPost: "പോസ്റ്റ് വായിക്കുക",
            likes: "ലൈക്കുകൾ",
            comments: "അഭിപ്രായങ്ങൾ",
            share: "പങ്കിടുക"
        }
    },
    contacts: {
        en: {
            title: "Get in Touch",
            description: "We'd love to hear from you. Please fill out the form or use our contact details.",
            readContent: "Read page content",
            nameLabel: "Name",
            namePlaceholder: "Your Name",
            emailLabel: "Email",
            emailPlaceholder: "your.email@example.com",
            messageLabel: "Message",
            messagePlaceholder: "Your message...",
            sendMessage: "Send Message",
            contactInfoTitle: "Contact Information",
            email: "contact@mannova.com",
            phone: "+91 123 456 7890",
            address: "123 AgriTech Park, Bengaluru, India",
            mapPlaceholder: "Map Placeholder"
        },
        ml: {
            title: "ബന്ധപ്പെടുക",
            description: "നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു. ദയവായി ഫോം പൂരിപ്പിക്കുക അല്ലെങ്കിൽ ഞങ്ങളുടെ കോൺടാക്റ്റ് വിശദാംശങ്ങൾ ഉപയോഗിക്കുക.",
            readContent: "പേജിലെ ഉള്ളടക്കം വായിക്കുക",
            nameLabel: "പേര്",
            namePlaceholder: "നിങ്ങളുടെ പേര്",
            emailLabel: "ഇമെയിൽ",
            emailPlaceholder: "your.email@example.com",
            messageLabel: "സന്ദേശം",
            messagePlaceholder: "നിങ്ങളുടെ സന്ദേശം...",
            sendMessage: "സന്ദേശം അയയ്‌ക്കുക",
            contactInfoTitle: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
            email: "contact@mannova.com",
            phone: "+91 123 456 7890",
            address: "123 അഗ്രിടെക് പാർക്ക്, ബെംഗളൂരു, ഇന്ത്യ",
            mapPlaceholder: "മാപ്പ് പ്ലേസ്ഹോൾഡർ"
        }
    },
    settings: {
        en: {
            title: "Settings",
            description: "Manage your account and app preferences.",
            readContent: "Read page content",
            languageTitle: "Language Settings",
            languageDesc: "Choose your preferred language for the app.",
            langEn: "English",
            langMl: "മലയാളം",
            notificationsTitle: "Notification Preferences",
            notificationsDesc: "Control what notifications you receive.",
            notif1: "Receive task reminders",
            notif2: "Receive community updates",
            notif3: "Receive promotional offers",
            accountTitle: "Account Settings",
            accountDesc: "Manage your account details.",
            editProfile: "Edit Profile",
            changePhone: "Change Phone Number",
            logout: "Logout",
            themeTitle: "Theme Settings",
            themeDesc: "Choose your preferred app theme.",
            theme: "Theme",
            themeLight: "Light",
            themeDark: "Dark",
            themeSystem: "System"
        },
        ml: {
            title: "ക്രമീകരണങ്ങൾ",
            description: "നിങ്ങളുടെ അക്കൗണ്ടും അപ്ലിക്കേഷൻ മുൻഗണനകളും നിയന്ത്രിക്കുക.",
            readContent: "പേജിലെ ഉള്ളടക്കം വായിക്കുക",
            languageTitle: "ഭാഷാ ക്രമീകരണങ്ങൾ",
            languageDesc: "അപ്ലിക്കേഷനായി നിങ്ങൾക്കിഷ്ടമുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക.",
            langEn: "English",
            langMl: "മലയാളം",
            notificationsTitle: "അറിയിപ്പ് മുൻഗണനകൾ",
            notificationsDesc: "നിങ്ങൾക്ക് ലഭിക്കുന്ന അറിയിപ്പുകൾ നിയന്ത്രിക്കുക.",
            notif1: "ടാസ്‌ക് ഓർമ്മപ്പെടുത്തലുകൾ സ്വീകരിക്കുക",
            notif2: "കമ്മ്യൂണിറ്റി അപ്‌ഡേറ്റുകൾ സ്വീകരിക്കുക",
            notif3: "പ്രൊമോഷണൽ ഓഫറുകൾ സ്വീകരിക്കുക",
            accountTitle: "അക്കൗണ്ട് ക്രമീകരണങ്ങൾ",
            accountDesc: "നിങ്ങളുടെ അക്കൗണ്ട് വിശദാംശങ്ങൾ നിയന്ത്രിക്കുക.",
            editProfile: "പ്രൊഫൈൽ എഡിറ്റുചെയ്യുക",
            changePhone: "ഫോൺ നമ്പർ മാറ്റുക",
            logout: "ലോഗൗട്ട്",
            themeTitle: "തീം ക്രമീകരണങ്ങൾ",
            themeDesc: "നിങ്ങൾക്കിഷ്ടമുള്ള അപ്ലിക്കേഷൻ തീം തിരഞ്ഞെടുക്കുക.",
            theme: "തീം",
            themeLight: "ലൈറ്റ്",
            themeDark: "ഡാർക്ക്",
            themeSystem: "സിസ്റ്റം"
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
        lineNumber: 707,
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=_50f2876f._.js.map